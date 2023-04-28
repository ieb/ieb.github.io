
class EmbeddingsUtils {

  /**
   * Utility to measure elapsed time 
   * @param m is the message
   * @param f is the async function to wrap
   * @return the result of the async function.
   */

  static async measureTimeAsync(m,f) {
    console.log("Start ",m);
    const start = new Date();
    const ret = await f();
    const end = new Date();
    console.log("End ",m, end.getTime() - start.getTime(), "ms");
    return ret;
  }
}

/**
 * A class to generate the embedings data for a set of pages.
 * Only needed when generating, not needed for query.
 */
class GenerateEmbeddings {

  /**
   * Options.
   *    batchSize - how many documents to process in a single batch operation. Smaller batches use less GPU RAM. Using too much 
   *                     CPU ram will crash many OS's, how likely that is depends on the GPU RAM.
   * engianness - true or undefined LE, false  BE
   * resultsDiv - progress and results div.
   * pages - the pages to search. Should be an array with elements of the form
   *      { 
    *       content: contains the content to be searched.
    *       path: the path to the page.
    * 
   *      }
   */
  constructor(options) {
    this.model = undefined;
    this.batchSize = options.batchSize || 1;
    if (options.endianness === undefined ) {
      // use the endiness of the cpu
    } else {
      this.endianness = options.endianness;  
    }
    this.resultDiv = options.resultDiv;
    this.pages = options.pages;
  }   

  /*
   * get embeddings, creating the tensorflow Universal Sentence Encoder model if required 
   * @param list_sentences - a list of sentences to get the embedding tensors for
   * @return the embedding tensors for the sensors. With the Universal Sentence encoder
   *         these are 512 float32s per sentence.  
   */
  async get_embeddings(list_sentences) {
    if ( this.model === undefined ) {
        this.model = await EmbeddingsUtils.measureTimeAsync("Loading Model", async () => { return await use.load(); });
    }
    const embeddings = await EmbeddingsUtils.measureTimeAsync("Get embeddings", async () => {
        return await this.model.embed(list_sentences);
    });
    return embeddings;
  }
  /*
   * Load the sentences and return a tensor of the embeddings.
   * @param pages - an array of documents where the content property contains the content to be processed into a tensor.
   * @param resultsDiv - a div to report progress to, optional.
   * @return arrays of embeddings per page, one array of 512 float32s per page.
   */
  async loadSentences() {
    const start = new Date();
    console.log("Start Create Index");
    let modelData = [];
    if ( dataset === undefined ) {
      console.log(this.pages);
      let l = [];
      for (let i = 0; i < this.pages.length; i++ ) {
        l.push(this.pages[i].content);
        if ( l.length >= this.batchSize)  {
          const embeddings = await this.get_embeddings(l);
          embeddings.arraySync().forEach((e) => {
              modelData.push(e);
          }); 
          console.log("dataset ",modelData);
          const msg = `Processed ${modelData.length} of ${this.pages.length} in ${new Date().getTime() - start.getTime()} ms`;
          if ( this.resultDiv ) {
            this.resultDiv.innerHTML = msg;
          }
          console.log(msg);
          l = [];
        }
      }
      if ( l.length > 0) {
        const embeddings = await this.get_embeddings(l);
        embeddings.arraySync().forEach((e) => {
            modelData.push(e);
        }); 
        l = [];
      }      
    } else {
      modelData = dataset;
    }
    console.log("Dataset Now", modelData);
    const msg = `Processed ${modelData.length} of ${this.pages.length} in ${new Date().getTime() - start.getTime()} ms`;
    if ( this.resultDiv ) {
      this.resultDiv.innerHTML = msg;
    }
    console.log(msg);
    return modelData;
  }
  /**
   * Get the embeddings data as a 1D TypedArray of floats, 512 floats per page.
   * Floats are encoded as per the endienness and progress is reported in the 
   */
  async getData() {
    const pageTensors = await this.loadSentences(this.pages);
    let k = 0, n = 0;
    const data = new ArrayBuffer(pageTensors.length*pageTensors[0].length*4);
    const dataView = new DataView(data); // we need this to ensure that the endianess can be controlled.
    for (var i = 0; i < pageTensors.length; i++) {
      const t = pageTensors[i];
      for (var j = 0; j < pageTensors[0].length; j++, k++) {
        dataView.setFloat32(4*k,t[j],this.endianness);
      }
    }

    for (var i = 0; i < pageTensors.length; i++) {
      const t = pageTensors[i];
      for (var j = 0; j < pageTensors[0].length; j++, n++) {
        const value = dataView.getFloat32(4*(i*pageTensors[0].length+j), this.endianness);
        if ( value !== t[j]) {
          console.log("Error ",i,j, value, t[j]);
        }
      }
    }
    return data;    
  }
  async getDataUrl() {
    const data = await this.getData();
    // the page tensors are in data, which now needs to be converted into blob url.
    const url = await URL.createObjectURL(new Blob([data], { mimeType: "application/embedding-tensors"}));
    if ( this.resultDiv ) {
      const a = document.createElement('a');
      a.href = url;
      a.setAttribute("download",`embeddings_${this.endianness?'LE':'BE'}.emb`);
      a.innerHTML = "Download";

      this.resultDiv.append(a);      
    }
    return url;
  }
}

/**
 * A class to perform sentence simularity search.
 * Needs the server to have tensors for each page pre-calclated and stored
 * as a binary file containing Float32s encoded with the same byte order as the platform where
 * this code is running. The class will determining what the byte order is.
 * The file defaults to embeddings_LE.emb for LE encoding and embeddings_BE.emb for BE encoding.
 * extension is always emb, but embeddings_ may be changed. 
 * 
 */

class SentenceSimularitySearch {

  constructor(options) {
    this.model = undefined;
    this.resultDiv = options.resultDiv;
    this.pageIndex = options.pages;
    this.npages = this.pageIndex.data.length;
    this.pageTensors = undefined;
    this.indexFileName = options.indexFileName || "embeddings_";
  }   

  dotp(x, y) {
    function dotp_sum(a, b) {
      return a + b;
    }
    function dotp_times(a, i) {
      return x[i] * y[i];
    }
    return x.map(dotp_times).reduce(dotp_sum, 0);
  }

  cosineSimilarity(A,B){
    var similarity = this.dotp(A, B); // not reqiured A and B are normalised./ (Math.sqrt(this.dotp(A,A)) * Math.sqrt(this.dotp(B,B)));
    return similarity;
  }


  getByteOrder() {
    const buffer = new ArrayBuffer(4);
    new DataView(buffer).setFloat32(0, 2.0, true);
    if ( new Float32Array(buffer)[0] === 2.0 ) {
      return "LE";
    } else {
      return "BE";
    } 
  }


  /**
   * Return a Float32Array containing the tensor for page n.
   * Implementation may lazy load the data if required, but for the moment
   * one large file is loaded.
   * 
   */
  async getPageTensor(n) {
    if ( this.pageTensors == undefined ) {
      // load data with the same byte order as the platform where the code is running.
      let dataUrl = this.indexFileName+this.getByteOrder()+'.emb';
      const response = await fetch(dataUrl);
      if ( response.ok ) {
        this.pageTensors = await response.arrayBuffer();
      }
    }
    return new Float32Array(this.pageTensors, n*512, 512);
  }
  /*
   * get embeddings, creating the tensorflow Universal Sentence Encoder model if required 
   * @param list_sentences - a list of sentences to get the embedding tensors for
   * @return the embedding tensors for the sensors. With the Universal Sentence encoder
   *         these are 512 float32s per sentence.  
   */
  async get_embeddings(list_sentences) {
    if ( this.model === undefined ) {
        this.model = await EmbeddingsUtils.measureTimeAsync("Loading Model", async () => { return await use.load(); });
    }
    const embeddings = await EmbeddingsUtils.measureTimeAsync("Get embeddings", async () => {
        return await this.model.embed(list_sentences);
    });
    return embeddings;
  }

  /**
   * Perform a simulariry search on retuning pages with a consie distance of > distance, (default 0.2)
   */
  async search(query, simularity) {
    simularity = simularity || 0.2;
    console.log("Start Query");
    const start = new Date();
    const searchEmbedding = await this.get_embeddings([query]);
    const searchTensor = searchEmbedding.arraySync()[0];
    //console.log(searchTensor, this.dotp(searchTensor,searchTensor));
    let nmatches = 0;
    const result = [];
    await EmbeddingsUtils.measureTimeAsync("cosine ", async () => {
      for (var i = 0; i < this.npages; i++) {
        const pageTensor = await this.getPageTensor(i);
      //console.log(pageTensor, this.dotp(searchTensor,searchTensor));

        const score = this.cosineSimilarity(searchTensor, pageTensor);
        if (  score > 0.1) {
            nmatches++;
            result.push({ score, pageId: i, page: this.pageIndex.data[i].path })
            console.log("Matches", this.pageIndex.data[i]);
        }
      }
      result.sort((a,b) => {
        return b.score - a.score;
      });
    });
    console.log("Matches", nmatches);
    const end = new Date();
    console.log("Took ",end.getTime()-start.getTime(),"ms");
    document.querySelector('[name="result"]').value = JSON.stringify(result,null,2);
  }

}




