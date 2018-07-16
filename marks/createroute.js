/*jshint node:true */
"use strict";

// reprocesses the output of candump2analyser so that the lines are timestamped to give the output a rate.
// node reprocess.js <rate>   eg candump2analyzer candump-2018-05-07-15-39.log | node reprocess.js 80


const fs = require('fs');

// args, marks.cvs, route

var marks = fs.readFileSync(process.argv[2], { encoding: "utf-8"}).split("\n");

function loadWp(csv) {
  var idx = {};
  var cols = marks[0].trim().split(",");
  for (var i = 0; i < cols.length; i++) {
    idx[cols[i]] = i;
  };
  console.log(idx);
  var wp = {};
  for (var i = 1; i < marks.length; i++) {
    var cols = marks[i].trim().split(",");
    wp[cols[idx.name]] = {
      name: cols[idx.name],
      desc: cols[idx.desc],
      sym: cols[idx.sym],
      lat: cols[idx.lat],
      lon: cols[idx.lon]
    }
  };
  return wp;  
}

function genPrefix(name) {
  return '<?xml version="1.0" encoding="UTF-8" ?>\n' +
  '<kml xmlns:sg="http://www.sailgrib.com" xmlns="http://www.opengis.net/kml/2.2">\n' +
  '  <Document>\n' +
  '  <name>toneuport.kml</name>\n' +
  '  <description>Powered by SailGrib (http://www.sailgrib.com)</description>\n' +
  '  <ExtendedData xmlns:prefix="sg">\n' +
  '    <sg:version>1.0</sg:version>\n' +
  '  </ExtendedData>\n' +
  '  <Folder>\n' +
  '    <name>'+name+'</name>\n' +
  '    <description></description>\n' +
  '    <ExtendedData xmlns:prefix="sg">\n' +
  '    <sg:type>route</sg:type>\n' +
  '    </ExtendedData>\n';
}
function genPlacemark(wp) {
  return '     <Placemark>\n' +
  '      <name>'+wp.name+'</name>\n' +
  '      <Point>\n' +
  '        <coordinates>'+wp.lat+','+wp.lon+',0.0</coordinates>\n' +
  '      </Point>\n' +
  '    </Placemark>\n';
}
function routePrefix() {
  return '    <Placemark>\n' +
  '      <name>Route</name>\n' +
  '      <Description>SailGribRoute</Description>\n' +
  '      <LineString>\n' +
  '        <tessellate>1</tessellate>\n' +
  '        <coordinates>\n';
}
function genCoord(wp) {
  return "           "+wp.lat+","+wp.lon+",0.0\n";
}

function routeSuffix() {
  return '        </coordinates>\n' +
  '      </LineString>\n' +
  '    </Placemark>\n';
}
function genSuffix() {
  return '   </Folder>\n' +
  '  </Document>\n' +
  '</kml>';
}

function toKml(marks, course) {
  var wp = loadWp(marks);
  var ids = course.trim().replace("\n",",").split(",");
  var route = [];
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i].toUpperCase();
    if ( id == 'END' || id == '') {
      continue;
    }
    var re = { 
      id: id.substring(0,2)
    };
    if ( id.length > 2) {
      re.pass = id.substring(3,3);
    }
    if ( wp[re.id] == undefined) {
      return "Abort: Unable to find waypoint for id "+id;
    } else {
      re.wp = wp[re.id];
    }
    route.push(re);
  };
  console.log(route);
  var kml = genPrefix(process.argv[3],"Route");
  for (var i = 0; i < route.length; i++) {
    kml = kml + genPlacemark(route[i].wp);
  };
  kml = kml + routePrefix();
  for (var i = 0; i < route.length; i++) {
    kml = kml + genCoord(route[i].wp);
  };
  kml = kml + routeSuffix();
  kml = kml + genSuffix();
  console.log(kml);
  return kml;
}

var buffer = "";
process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if ( chunk !== null) {
      buffer = buffer + chunk;
      if (buffer.endsWith("END\n")) {
        console.log(toKml(marks, buffer));
      }
  }
});