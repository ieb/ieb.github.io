webpackJsonp([1],{

/***/ "GcMe":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("y4E4");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("MTIv")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "Ki9h":
/***/ (function(module, exports) {

module.exports = [["name","desc","sym","lat","lon"],["1A","Peveril Ledge","R","50.60683333","-1.935"],["1B","Poole Bar No 1","G","50.65483333","-1.919"],["1C","MS Amlin","Y","50.67183333","-1.900333333"],["1E","Christchurch Ledge Buoy","Y","50.69166667","-1.693333333"],["1F","Needles Fairway","RW","50.63733333","-1.649666667"],["1G","South West Shingles","R","50.65483333","-1.625333333"],["1H","Bridge","YBY","50.6605","-1.614666667"],["1J","Shingles Elbow","R","50.67283333","-1.600833333"],["1K","North Head","G","50.7115","-1.592"],["1L","Needles Lighthouse","RW","50.66216667","-1.591666667"],["1M","Warden","G","50.69133333","-1.559166667"],["1N","North East Shingles","BYB","50.69933333","-1.556833333"],["2A","Hurst","Y","50.71316667","-1.542166667"],["2B","Dunford","Y","50.723","-1.525666667"],["2C","Colten","Y","50.7305","-1.514333333"],["2F","Berthon","Y","50.73666667","-1.487"],["2H","“H”","Y","50.73833333","-1.469333333"],["2J","Zwerver","Y","50.75183333","-1.455666667"],["2K","1851 Trust","Y","50.74716667","-1.434833333"],["2R","Powder Byrne","Y","50.75716667","-1.4315"],["2T","Lymington Bank","R","50.71833333","-1.514166667"],["2X","Solent Bank","R","50.73716667","-1.456166667"],["20","Sconce","BY","50.70883333","-1.523833333"],["21","Black Rock","G","50.7095","-1.509833333"],["22","Charles Stanley Wealth Managers","Y","50.71433333","-1.49"],["24","The English Summer Berry Co","Y","50.71433333","-1.473666667"],["25","Caldwells Estate Agents","Y","50.71916667","-1.458166667"],["26","Hamstead Ledge","G","50.73116667","-1.436333333"],["27","Alitex","Y","50.71616667","-1.469333333"],["3A","West Lepe","R","50.754","-1.4015"],["3B","Newtown East","Y","50.73633333","-1.3965"],["3C","craftinsure.com","Y","50.76066667","-1.385333333"],["3D","Salt Mead","G","50.74183333","-1.384"],["3E","Dick Johnson","Y","50.76883333","-1.369833333"],["3F","elephantboatyard.co.uk","Y","50.74383333","-1.364666667"],["3G","Sevenstar Yacht Transport","Y","50.77633333","-1.357666667"],["3H","East Lepe","R","50.7655","-1.351166667"],["3K","Lepe Spit","YB","50.77966667","-1.344"],["3L","Gurnard Ledge","G","50.7585","-1.343166667"],["3N","Quinnell","Y","50.7845","-1.331333333"],["3P","Cowes Yacht Haven","Y","50.76133333","-1.333"],["3Q","East Bay","Y","50.76616667","-1.324166667"],["3R","North East Gurnard","R","50.78433333","-1.323666667"],["3S","Royal Thames","Y","50.79683333","-1.320833333"],["3T","KMS","Y","50.76833333","-1.3145"],["3U","Gurnard","BY","50.77033333","-1.314"],["3V","West Bramble","YBY","50.78666667","-1.310833333"],["3W","Williams Shipping","Y","50.78666667","-1.309166667"],["3X","Party","Y","50.76833333","-1.307166667"],["3Y","West Knoll","Y","50.7905","-1.297333333"],["3Z","Trinity House Buoy","Y","50.77183333","-1.295833333"],["30","RORC","Y","50.78533333","-1.295333333"],["31","South Bramble","G","50.783","-1.295333333"],["33","Prince Consort","BY","50.7735","-1.292666667"],["39","Snowden","Y","50.77","-1.295833333"],["4B","Coronation","Y","50.82583333","-1.293666667"],["4C","Rigit UK Rigging","Y","50.82016667","-1.291"],["4E","Mike Till","Y","50.7945","-1.283333333"],["4F","Deloitte Sailing Club","Y","50.78666667","-1.283333333"],["4G","Cutter","Y","50.82416667","-1.281833333"],["4H","East Knoll","G","50.79933333","-1.2805"],["4J","hamblewinterseries.com","Y","50.8105","-1.2775"],["4K","Royal London YC","Y","50.76916667","-1.2775"],["4L","William","Y","50.81716667","-1.274833333"],["4M","Hill Head","R","50.80116667","-1.266666667"],["4N","QXI International","Y","50.78783333","-1.265"],["4P","West Ryde Middle","YBY","50.77466667","-1.263166667"],["4Q","Robin Culpan","Y","50.80766667","-1.262"],["4R","Darling Buoy","Y","50.81966667","-1.261833333"],["4S","Royal Southern","Y","50.81466667","-1.2595"],["4T","Norris","R","50.76616667","-1.2585"],["4U","Fever Tree","Y","50.77383333","-1.2515"],["4V","Hamble Yacht Services","Y","50.80216667","-1.244"],["4W","Goodall Roofing","Y","50.78883333","-1.243166667"],["4X","Colette","Y","50.75883333","-1.239833333"],["4Y","North Ryde Middle","R","50.77683333","-1.2385"],["4Z","South Ryde Middle","G","50.76883333","-1.236"],["40","Fastnet Insurance","Y","50.79433333","-1.2275"],["41","East Bramble","BYB","50.78716667","-1.227333333"],["42","Peel Bank","R","50.75816667","-1.2225"],["43","Wightlink","Y","50.76933333","-1.218166667"],["44","Royal Yacht Squadron","Y","50.7885","-1.201666667"],["45","South East Ryde Middle","YB","50.7655","-1.201666667"],["46","North East Ryde Middle","R","50.77016667","-1.198"],["47","Maraval","Y","50.795","-1.254166667"],["5A","Quarr","Y","50.7505","-1.198166667"],["5B","Motherbank","R","50.75816667","-1.186833333"],["5C","Browndown","G","50.77616667","-1.1825"],["5D","Kemps Quay","Y","50.753","-1.160833333"],["5E","Darling Associates Architects","Y","50.771","-1.146"],["5F","North Sturbridge","BY","50.7555","-1.137166667"],["5G","RNC & RAYC","Y","50.77366667","-1.131666667"],["5J","KB Dry Stack","Y","50.77683333","-1.1215"],["5M","Gleeds","Y","50.7685","-1.108666667"],["5Q","Outer Spit","YB","50.75733333","-1.091"],["5R","Horse Sand Buoy","G","50.75883333","-1.087833333"],["5S","Saddle Buoy","G","50.75166667","-1.0825"],["50","Stokes Bay SC West","Y","50.78016667","-1.173333333"],["51","Stokes Bay SC Central","Y","50.77666667","-1.164166667"],["6A","No Man’s Land Fort","B","50.74","-1.095"],["6B","Horse Sand Fort","B","50.75016667","-1.072333333"],["6C","Warner","R","50.73116667","-1.0665"],["6D","Horse Elbow","G","50.73766667","-1.064666667"],["6E","West Princessa","YBY","50.66933333","-1.060833333"],["6F","Bembridge Ledge Buoy","BYB","50.68583333","-1.046833333"],["6G","St Helens Buoy","R","50.72266667","-1.040166667"],["6H","Dean Elbow","G","50.72816667","-1.031333333"],["6J","Nab East","R","50.71433333","-1.013333333"],["6K","Horse Tail","G","50.7205","-1.003833333"],["6L","Winner","YB","50.75166667","-1.001666667"],["6M","Nab End","R","50.7105","-0.9915"],["6N","Dean Tail","G","50.7165","-0.9861666667"],["6P","New Grounds","BYB","50.69733333","-0.9748333333"],["6R","Nab Tower","B","50.668","-0.9525"],["6S","Outer Nab No 2","BYB","50.6405","-0.9616666667"],["8S","Laid mark 8S","B","50.762","-1.249166667"],["8X","Laid mark 8X","B","50.79116667","-1.215"],["8Y","Laid mark 8Y","B","50.78333333","-1.188333333"],["8H","Laid mark 8H","B","50.73","-1.487"],["8J","Laid mark 8J","B","50.75333333","-1.416666667"],["8K","Laid mark 8K","B","50.74833333","-1.361666667"],["8A","Lendy Alpha","Y","50.7715","-1.302166667"],["8B","Lendy Beta","O","50.77","-1.302166667"],["8G","Lendy Gamma","Y","50.77083333","-1.293666667"],["8D","Lendy Delta","Y","50.77183333","-1.281666667"],["80","RYS Flagstaff","Y","50.76673333","-1.300916667"],["84","Breakwater Committee Boat","n/a","50.76983333","-1.294333333"]]

/***/ }),

/***/ "QyWg":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("RUCK");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("MTIv")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./course.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./course.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "RUCK":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".course tr:nth-child(even) {background: #CCC}\n.course tr:nth-child(odd) {background: #FFF}\n.course table {\n    margin-bottom: 10px;\n    border-spacing: 0px;\n}\n.course table.marks tr:nth-child(odd) {\n    background: #faedd9\n}\n.course table.route tr:nth-child(odd) {\n    background: #dbf4db\n}\n.course tr {\n    padding:  0 0px;\n}\n.course td {\n    margin: 1px;\n}\n.course .headding {\n    font-size: 1.5em;\n}\n", ""]);

// exports


/***/ }),

/***/ "SSVj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _geodesy = __webpack_require__("45oD");

var _SolentMarksCowesWeek = __webpack_require__("Ki9h");

var _SolentMarksCowesWeek2 = _interopRequireDefault(_SolentMarksCowesWeek);

var _jsQuantities = __webpack_require__("u2fu");

var _jsQuantities2 = _interopRequireDefault(_jsQuantities);

__webpack_require__("QyWg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var radToDeg = _jsQuantities2.default.swiftConverter('rad', 'deg');
var mToNm = _jsQuantities2.default.swiftConverter('m', 'nmi');
var mToKn = _jsQuantities2.default.swiftConverter('m/s', 'kn');

var Course = function (_React$Component) {
    _inherits(Course, _React$Component);

    function Course(props) {
        _classCallCheck(this, Course);

        var _this = _possibleConstructorReturn(this, (Course.__proto__ || Object.getPrototypeOf(Course)).call(this, props));

        _this.props = props;
        _this.state = {
            course: props.course || "",
            gwd: 0,
            lat: "",
            lon: "",
            geostate: "init",
            position: {
                accuracy: 0,
                altitude: null,
                altitudeAccuracy: -1,
                heading: null,
                speed: null,
                timestamp: 0,
                latlon: new _geodesy.LatLonSpherical(-1, 50)
            },
            nextmark: {
                id: -1,
                xte: null,
                dtw: null,
                btw: null,
                wcv: null,
                ttg: null,
                laylinebearing: null,
                laylinedistance: null,
                laylinettg: null
            }
        };
        _this.roundings = {
            "P": "port",
            "S": "starboard",
            "PP": "pass port",
            "PS": "pass starboard",
            "T": "pass through"
        };
        _this.bouys = {
            "BY": "N BY",
            "BYB": "E BYB",
            "YB": "S YB",
            "YBY": "W YBY"
        };
        _this.loadMarks();
        _this.buildRoute(_this.state, props.course || "");
        _this.state.marksDb = _this.marksDb;
        _this.changeGwd = _this.changeGwd.bind(_this);
        _this.changeCourse = _this.changeCourse.bind(_this);
        _this.changeLat = _this.changeLat.bind(_this);
        _this.changeLon = _this.changeLon.bind(_this);
        _this.getLocation = _this.getLocation.bind(_this);
        _this.positionError = _this.positionError.bind(_this);
        _this.changeGeostate = _this.changeGeostate.bind(_this);
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(_this.getLocation, _this.positionError, {
                enableHighAccuracy: true,
                maximumAge: 30000,
                timeout: 27000
            });
        }
        return _this;
    }

    _createClass(Course, [{
        key: 'positionError',
        value: function positionError(error) {
            this.setState({
                geostate: "no fix" + error.message
            });
            console.log("Position Fix" + error);
        }
    }, {
        key: 'getLocation',
        value: function getLocation(position) {
            if (!this.state.geostate !== "user") {
                var position = {
                    accuracy: position.coords.accuracy,
                    altitude: position.coords.altitude,
                    altitudeAccuracy: position.coords.altitudeAccuracy,
                    heading: position.coords.heading,
                    speed: position.coords.speed,
                    timestamp: position.timestamp,
                    latlon: new _geodesy.LatLonSpherical(position.coords.latitude, position.coords.longitude)
                };
                var newState = {
                    lat: _geodesy.Dms.toLat(position.latlon.lat, "dm", 3),
                    lon: _geodesy.Dms.toLon(position.latlon.lon, "dm", 3),
                    position: position,
                    geostate: "fix"
                };
                this.updateNextmark(newState, position, this.state.nextmark.id);
                this.setState(newState);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}

        // load marks from a cut and paste in the settings, or use a default

    }, {
        key: 'loadMarks',
        value: function loadMarks() {
            this.marksDb = {};
            var markList, toCols;
            if (this.props.marks === undefined || this.props.marks.trim() === "") {
                markList = _SolentMarksCowesWeek2.default;
                toCols = function toCols(x) {
                    return x;
                };
            } else {
                markList = this.props.marks.trim().split("\n");
                toCols = function toCols(x) {
                    return x.trim().split(",");
                };
            }
            var idx = {};
            var cols = toCols(markList[0]);
            for (var i = 0; i < cols.length; i++) {
                idx[cols[i]] = i;
            };
            for (var i = 1; i < markList.length; i++) {
                var cols = toCols(markList[i]);
                this.marksDb[cols[idx.name]] = {
                    name: cols[idx.name],
                    desc: cols[idx.desc],
                    sym: cols[idx.sym],
                    latlon: new _geodesy.LatLonSpherical(cols[idx.lat], cols[idx.lon])
                };
            };
        }
    }, {
        key: 'buildRoute',
        value: function buildRoute(newState, course) {
            var route = [];
            var ids = course.trim().replace("\n", ",").split(",");
            for (var i = 0; i < ids.length; i++) {
                var id = ids[i].toUpperCase();
                if (id == '') {
                    continue;
                }
                var re = {
                    id: id.substring(0, 2)
                };
                if (id.length > 2) {
                    re.rounding = this.roundings[id.substring(2)];
                }
                // may be undefined, indicating the mark could not be found.
                re.wp = this.marksDb[re.id];
                route.push(re);
            };
            // calc distances and bearings.
            var total = 0;
            for (var i = 0; i < route.length; i++) {
                route[i].dist = total;
                if (i < route.length - 1 && route[i].wp !== undefined && route[i + 1].wp !== undefined) {
                    var d = route[i].wp.latlon.rhumbDistanceTo(route[i + 1].wp.latlon);
                    route[i].dtw = d;
                    total = total + d;
                    route[i].btw = route[i].wp.latlon.rhumbBearingTo(route[i + 1].wp.latlon) * Math.PI / 180.0; // in degrees                
                }
            }

            this.updateDynamic(route);
            newState.route = route;
        }

        // update all the data that is calculated from current observations.

    }, {
        key: 'updateDynamic',
        value: function updateDynamic(route) {
            if (route.length > 0) {
                if (this.gwd !== undefined) {
                    for (var i = 0; i < route.length; i++) {
                        if (route[i].btw !== undefined) {
                            route[i].twa = this.toRelativeAngle(this.gwd - route[i].btw);
                        }
                    }
                }
            }
        }
    }, {
        key: 'updateNextmark',
        value: function updateNextmark(newState, position, nextmarkno) {
            var route = newState.route || this.state.route;
            if (route.length === 0) {
                return;
            }
            if (nextmarkno === undefined || nextmarkno < 0) {
                nextmarkno = 0;
            }
            if (this.state.nextmark.advancewp) {
                nextmarkno++;
            }
            if (nextmarkno >= route.length) {
                nextmarkno = route.length - 1;
            }
            console.log(nextmarkno);
            var nextwp = route[nextmarkno].wp;
            var nextmark = {
                id: nextmarkno,
                name: nextwp.name,
                xte: null,
                dtw: null,
                btw: null,
                ttg: null,
                wcv: null,
                laylinebearing: null,
                laylinedistance: null,
                laylinettg: null
            };
            if (position !== undefined) {
                nextmark.dtw = position.latlon.rhumbDistanceTo(nextwp.latlon);
                nextmark.btw = position.latlon.rhumbBearingTo(nextwp.latlon) * Math.PI / 180;
                var ch = undefined;
                if (position.speed != undefined && position.heading !== undefined) {
                    // calculate the wcv
                    ch = Math.cos((nextmark.btw - position.heading) * Math.PI / 180);
                    nextmark.wcv = position.speed * ch;
                    nextmark.ttg = nextmark.dtw / nextmark.wcv;
                }
                // if the dtw is < 50m and the btw, then the waypoint has probably been reached.
                if (ch !== undefined && ch < 0 && nextmark.dtw < 50) {
                    nextmark.advancewp = true;
                }
                var angle, ll;
                if (Math.abs(nextwp.twa) < this.state.tackvmgangle) {
                    // tacking required, laylines needed, there are 2 laylines,
                    angle = this.state.tackvmgangle;
                    nextmark.tackll = ll = {
                        port: {
                            btw: (this.gwd + angle + 2 * Math.PI) % (2 * Math.PI)
                        },
                        stbd: {
                            btw: (this.gwd - angle + 2 * Math.PI) % (2 * Math.PI)
                        }
                        // angle between the btw and the layline indicates which sector.
                    };var porttobtw = (2 * Math.PI + tackll.port.btw - nextwp.btw) % 2 * Math.PI;
                    if (porttobtw < 2 * angle) {
                        // inbetween the laylines
                        ll.between = true;
                    } else if (porttobtw < Math.PI - angle) {
                        // overstood starboard
                        ll.stdbover = true;
                    } else {
                        // overstood port.
                        ll.portover = true;
                    }
                    calcIntesects(ll, position, nextwp);
                } else if (Math.abs(nextwp.twa) > this.state.gybevmgangle) {
                    angle = this.state.tackvmgangle;
                    nextmark.gybell = ll = {
                        port: {
                            btw: (this.gwd + angle + 2 * Math.PI) % (2 * Math.PI)
                        },
                        stbd: {
                            btw: (this.gwd - angle + 2 * Math.PI) % (2 * Math.PI)
                        }
                    };
                    var porttobtw = (2 * Math.PI + tackll.port.btw - nextwp.btw) % 2 * Math.PI;
                    if (porttobtw < this.state.gybevmgangle) {
                        // over port layline
                        ll.portover = true;
                    } else if (portbtw < 2 * Math.PI - 2 * (Math.PI - this.state.gybevmgangle)) {
                        // over starboard layline
                        ll.stdbover = true;
                    } else {
                        // between laylines
                        ll.between = true;
                    }
                    calcIntesects(ll, position, nextwp);
                }
            }
            console.log("Next mark", nextmark);
            newState.nextmark = nextmark;
        }
    }, {
        key: 'calcIntesects',
        value: function calcIntesects(ll, position, nextwp) {
            // calculate the distance to both laylines using the target twa, which is parallel to the layline
            var pintersect = ll.port.intersect = {
                latlon: _geodesy.LatLonSpherical.intersection(position.latlon, ll.stbd.btw, nextwp.latlon, (ll.port.btw - Math.PI) % (2 * Math.PI))
            };
            var sintersect = ll.stbd.intersect = {
                latlon: _geodesy.LatLonSpherical.intersection(position.latlon, ll.port.btw, nextwp.latlon, (ll.stbd.btw - Math.PI) % (2 * Math.PI))
            };
            pintersect.dti = position.latlon.rhumbDistanceTo(pintersect.latlon);
            sintersect.dti = position.latlon.rhumbDistanceTo(sintersect.latlon);
            pintersect.itw = sintersect.latlon.rhumbDistanceTo(nextwp.latlon);
            sintersect.itw = pintersect.latlon.rhumbDistanceTo(bextwp.latlon);

            // calculate the distance to both laylines using the current heading
            var phead = ll.port.heading = {
                latlon: _geodesy.LatLonSpherical.intersection(position.latlon, position.heading, nextwp.latlon, (ll.port.btw - Math.PI) % (2 * Math.PI))
            };
            var shead = ll.stbd.heading = {
                latlon: _geodesy.LatLonSpherical.intersection(position.latlon, position.heading, nextwp.latlon, (ll.stbd.btw - Math.PI) % (2 * Math.PI))
            };
            phead.dti = position.latlon.rhumbDistanceTo(phead.latlon);
            shead.dti = position.latlon.rhumbDistanceTo(shead.latlon);
            phead.itw = shead.latlon.rhumbDistanceTo(nextwp.latlon);
            shead.itw = phead.latlon.rhumbDistanceTo(bextwp.latlon);

            // calculate the ttg to the layline
            shead.tti = phead.dti / position.speed;
            phead.tti = shead.dti / position.speed;
            shead.ttw = (phead.dti + phead.itw) / position.speed;
            phead.ttw = (shead.dti + sheah.itw) / position.speed;
        }
    }, {
        key: 'toRelativeAngle',
        value: function toRelativeAngle(r) {
            if (r > Math.PI) {
                return r - 2 * Math.PI;
            } else if (r < -Math.PI) {
                return r + 2 * Math.PI;
            }
            return r;
        }
    }, {
        key: 'mToDisplay',
        value: function mToDisplay(d) {
            if (d === undefined || d === null) {
                return "";
            }
            if (d < 100) {
                return d.toFixed(0) + " m";
            }
            return mToNm(d).toFixed(1) + " nm";
        }
    }, {
        key: 'radToDisplay',
        value: function radToDisplay(r) {
            if (r === undefined || r === null) {
                return "";
            }
            return radToDeg(r).toFixed(0) + "°";
        }
    }, {
        key: 'symToDisplay',
        value: function symToDisplay(b) {
            if (this.bouys[b] !== undefined) {
                return this.bouys[b];
            }
            return b;
        }
    }, {
        key: 'msToDisplay',
        value: function msToDisplay(b) {
            if (b === undefined || b === null) {
                return "0.0";
            }
            return mToKn(b).toFixed(1) + " kn";
        }
    }, {
        key: 'durationToDisplay',
        value: function durationToDisplay(d) {
            if (d === undefined || d === null) {
                return "-";
            }
            var h = ("0000" + Math.floor(d / 3600)).substr(-3);
            var m = ("0000" + Math.floor(d % 3600 / 60)).substr(-2);
            var s = ("0000" + Math.floor(d % 60)).substr(-2);
            return h + ":" + m + ":" + s;
        }
    }, {
        key: 'renderRouteTable',
        value: function renderRouteTable() {
            var rows = [];
            for (var i = 0; i < this.state.route.length; i++) {
                var r = this.state.route[i];
                if (r.wp === undefined) {
                    rows.push(_react2.default.createElement(
                        'tr',
                        { key: i },
                        _react2.default.createElement(
                            'td',
                            null,
                            r.id
                        ),
                        _react2.default.createElement('td', null),
                        _react2.default.createElement(
                            'td',
                            null,
                            '???'
                        ),
                        _react2.default.createElement('td', null),
                        _react2.default.createElement('td', null),
                        _react2.default.createElement('td', null),
                        _react2.default.createElement('td', null),
                        _react2.default.createElement('td', null),
                        _react2.default.createElement('td', null)
                    ));
                } else {
                    rows.push(_react2.default.createElement(
                        'tr',
                        { key: i },
                        _react2.default.createElement('td', null),
                        _react2.default.createElement(
                            'td',
                            null,
                            r.wp.name
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            r.rounding
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            r.wp.desc
                        ),
                        _react2.default.createElement(
                            'td',
                            { className: "bouy" + r.wp.sym },
                            this.symToDisplay(r.wp.sym)
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            r.wp.latlon.toString("dm", 3)
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            this.radToDisplay(r.btw)
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            this.mToDisplay(r.dtw)
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            this.mToDisplay(r.dist)
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            this.radToDisplay(r.twa)
                        )
                    ));
                }
            };
            return _react2.default.createElement(
                'table',
                { className: 'route' },
                _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        { key: 'header' },
                        _react2.default.createElement(
                            'th',
                            null,
                            'Next'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'ID'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Rounding'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Name'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Bouy'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'latlon'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'BTW(M)'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'DTW'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Total'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'TWA'
                        )
                    ),
                    rows
                )
            );
        }
    }, {
        key: 'renderMarksTable',
        value: function renderMarksTable() {
            var rows = [];
            for (var id in this.state.marksDb) {
                var m = this.state.marksDb[id];
                rows.push(_react2.default.createElement(
                    'tr',
                    { key: m.name },
                    _react2.default.createElement(
                        'td',
                        null,
                        m.name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.desc
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: "bouy" + m.sym },
                        this.symToDisplay(m.sym)
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.latlon.toString("dm", 3)
                    )
                ));
            };
            return _react2.default.createElement(
                'table',
                { className: 'marks' },
                _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        { key: 'header' },
                        _react2.default.createElement(
                            'th',
                            null,
                            'Name'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Desc'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Type'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Position'
                        )
                    ),
                    rows
                )
            );
        }
    }, {
        key: 'renderCurrent',
        value: function renderCurrent() {
            if (this.state.route.length === 0 || this.state.nextmark.id == undefined || this.state.route[this.state.nextmark.id] == undefined) {
                return _react2.default.createElement(
                    'div',
                    null,
                    'No route defined'
                );
            } else {
                return _react2.default.createElement(
                    'table',
                    { className: 'current' },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'Next Mark'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'XTE'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'DTW'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'BTW'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'WCV'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'TTG'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Layline Bearing'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Layline Distance'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Layline Time'
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                this.state.nextmark.id
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                this.mToDisplay(this.state.nextmark.xte)
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                this.mToDisplay(this.state.nextmark.dtw)
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                this.radToDisplay(this.state.nextmark.btw)
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                this.msToDisplay(this.state.nextmark.wcv)
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                this.durationToDisplay(this.state.nextmark.ttg)
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                this.radToDisplay(this.state.nextmark.laylinebearing)
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                this.mToDisplay(this.state.nextmark.laylinedistance)
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                this.durationToDisplay(this.state.nextmark.laylinettg)
                            )
                        )
                    )
                );
            }
        }
    }, {
        key: 'changeGwd',
        value: function changeGwd(e) {
            var gwd = e.target.value;
            this.gwd = +gwd * Math.PI / 180;
            var newState = {
                gwd: gwd
            };
            this.buildRoute(newState, this.state.course);
            this.setState(newState);
        }
    }, {
        key: 'changeCourse',
        value: function changeCourse(e) {
            var course = e.target.value;
            var newState = {
                course: course
            };
            this.buildRoute(newState, course);
            this.setState(newState);
        }
    }, {
        key: 'changeLat',
        value: function changeLat(e) {
            var latTxt = e.target.value;
            var lat = _geodesy.Dms.parseDMS(latTxt);
            var position = {
                accuracy: -999,
                altitude: null,
                altitudeAccuracy: -1,
                heading: null,
                speed: null,
                timestamp: Date.now(),
                latlon: new _geodesy.LatLonSpherical(lat, this.state.position.latlon.lon)
            };
            var newState = {
                geostate: "user",
                lat: latTxt,
                position: position
            };
            this.buildRoute(newState, this.state.course);
            this.updateNextmark(newState, position, this.state.nextmark.id);
            this.setState(newState);
        }
    }, {
        key: 'changeLon',
        value: function changeLon(e) {
            var lonTxt = e.target.value;
            var lon = _geodesy.Dms.parseDMS(lonTxt);
            var position = {
                accuracy: -1,
                altitude: null,
                altitudeAccuracy: -1,
                heading: null,
                speed: null,
                timestamp: Date.now(),
                latlon: new _geodesy.LatLonSpherical(this.state.position.latlon.lat, lon)
            };
            var newState = {
                geostate: "user",
                lon: lonTxt,
                position: position
            };
            this.buildRoute(newState, this.state.course);
            this.updateNextmark(newState, position, this.state.nextmark.id);
            this.setState(newState);
        }
    }, {
        key: 'changeGeostate',
        value: function changeGeostate(e) {
            this.setState({
                geostate: e.target.value
            });
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.getLocation, this.positionError, {
                    enableHighAccuracy: true,
                    maximumAge: 30000,
                    timeout: 27000
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'course' },
                _react2.default.createElement(
                    'div',
                    { className: 'headding' },
                    'Inputs'
                ),
                'Course ',
                _react2.default.createElement('input', { name: 'course', type: 'text', value: this.state.course, onChange: this.changeCourse }),
                'GWD    ',
                _react2.default.createElement('input', { name: 'gwd', type: 'number', value: this.state.gwd, step: '1', min: '0', max: '359', onChange: this.changeGwd }),
                _react2.default.createElement(
                    'div',
                    null,
                    'LatLon   ',
                    _react2.default.createElement('input', { name: 'lat', type: 'text', value: this.state.lat, onChange: this.changeLat }),
                    _react2.default.createElement('input', { name: 'lon', type: 'text', value: this.state.lon, onChange: this.changeLon }),
                    _react2.default.createElement('input', { name: 'geostate', type: 'text', value: this.state.geostate, onChange: this.changeGeostate }),
                    this.state.position.latlon.toString("dm", 3)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'headding' },
                    'Weather'
                ),
                _react2.default.createElement(
                    'a',
                    { href: 'https://weatherfile.com/GBR000014&wt=KTS' },
                    'Lymington Starting Platform'
                ),
                _react2.default.createElement(
                    'a',
                    { href: 'https://weatherfile.com/RPR000154&wt=KTS' },
                    'Ryde Pier'
                ),
                _react2.default.createElement(
                    'a',
                    { href: 'https://weatherfile.com/GBR00002&wt=KTS' },
                    'Hurst Castle'
                ),
                _react2.default.createElement(
                    'a',
                    { href: 'https://weatherfile.com/GBR00004&wt=KTS' },
                    'Pool'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'headding' },
                    'To next mark'
                ),
                this.renderCurrent(),
                _react2.default.createElement(
                    'div',
                    { className: 'headding' },
                    'Race Plan'
                ),
                this.renderRouteTable(),
                _react2.default.createElement(
                    'div',
                    { className: 'headding' },
                    'Available Marks'
                ),
                this.renderMarksTable()
            );
        }
    }]);

    return Course;
}(_react2.default.Component);

exports.default = Course;

/***/ }),

/***/ "qYAe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _Course = __webpack_require__("SSVj");

var _Course2 = _interopRequireDefault(_Course);

__webpack_require__("GcMe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.props = props;
    _this.sourcePriority = props.sourcePriority;
    var self = _this;
    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      console.log("Starting to render");
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Course2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

//  <Calculations  databus={this.databus} sourceId="nmeaFromFile.II" />

var element = _react2.default.createElement(App, { sourcePriority: '' });

console.log("Now Running");
(0, _reactDom.render)(element, document.getElementById("react"));

/***/ }),

/***/ "y4E4":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n\n/*@font-face {\n   font-family: 'MyFont';\n   src:  url('./fontawesome-webfont.woff2') format('woff2'),\n         url('./fontawesome-webfont.woff') format('woff');\n   font-weight: 600;\n   font-style: normal;\n}*/\n\n/*\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n*/\n\n/*.checkcssworking {\n  color: red;\n  background: url('./icon.png');\n  font-family: 'MyFont';\n}*/\n\n/* SVG UI Day and cs_night */\n\n\n\n\n.cs_normal {\n    stroke: black;\n    fill: black;\n    background-color: white;\n    color: black;\n}\n\n.cs_invert {\n    stroke: white;\n    fill: white;\n    background-color: black;\n    color: white;\n}\n\n.cs_night {\n    stroke: red;\n    fill: red;\n    background-color: black;\n    color: red;\n}\n\n\n\n\n\n\n\n.react-grid-layout {\n  position: relative;\n  transition: height 200ms ease;\n}\n.react-grid-item {\n  transition: all 200ms ease;\n  transition-property: left, top;\n}\n.react-grid-item.cssTransforms {\n  transition-property: transform;\n}\n.react-grid-item.resizing {\n  z-index: 1;\n  will-change: width, height;\n}\n\n.react-grid-item.react-draggable-dragging {\n  transition: none;\n  z-index: 3;\n  will-change: transform;\n}\n\n.react-grid-item.react-grid-placeholder {\n  background: red;\n  opacity: 0.2;\n  transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.react-grid-item > .react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: -6px;\n  right: -6px;\n  cursor: se-resize;\n}\n\n.cs_normal .react-grid-item > .react-resizable-handle::after {\n  content: \"\";\n  position: absolute;\n  right: 3px;\n  bottom: 3px;\n  width: 5px;\n  height: 5px;\n  border-right: 2px solid rgba(0, 0, 0, 0.4);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.4);\n}\n\n.cs_invert .react-grid-item > .react-resizable-handle::after, .cs_night .react-grid-item > .react-resizable-handle::after {\n  content: \"\";\n  position: absolute;\n  right: 3px;\n  bottom: 3px;\n  width: 5px;\n  height: 5px;\n  border-right: 2px solid rgba(255, 0, 0, 0.4);\n  border-bottom: 2px solid rgba(255, 0, 0, 0.4);\n}\n\n\n.react-resizable {\n  position: relative;\n}\n.react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  cursor: se-resize;\n}\n\n\n.settings {\n    position: absolute;\n    top: 40px;\n    left: 40px;\n    right: 40px;\n    bottom: 40px;\n    border: 1px solid rgb(204, 204, 204);\n    background: rgb(255, 255, 255);\n    overflow: auto;\n    border-radius: 10px;\n}\n.cs_invert .settings {\n    border: 1px solid rgb(204, 204, 204);\n    background: rgb(0, 0, 0);\n}\n\n.cs_night .settings {\n    border: 1px solid #c00;\n    background: rgb(0, 0, 0);\n}\n\n.settings_after-open {\n}\n.settings_before-close {\n}\n.settings_before-close {\n\n}\n.settingsOverlay {\n    position: fixed; \n    top: 0px; \n    left: 0px; \n    right: 0px; \n    bottom: 0px; \n}\n.cs_normal .settingsOverlay, .cs_night .settingsOverlay {\n    background-color: rgba(150, 150, 150, 0.75);\n}\n\n.cs_invert .settingsOverlay, .cs_night .settingsOverlay {\n    background-color: rgba(50, 50, 50, 0.75);\n}\n.settingsOverlay_after-open {\n\n}\n.settingsOverlay_before-close {\n}\n\n.globalSettingsButton {\n    position: absolute;\n    right: 10px;\n    top: 10px;        \n}\n\n.globalSettingsButton > button {\n    border: none;\n    background-color: inherit;\n    color: inherit;\n    font-size: 16px;\n    outline: none;\n}\n\n\n\n.settingsClose {\n    position: absolute;\n    right: 5px;\n    top: 5px;    \n    background-color: transparent;\n    color: inherit;\n}\n\n.settingsClose > button {\n    border: none;\n    outline: none;\n    background-color: transparent;\n    color: inherit;\n}\n\n.settingsApply {\n    position: absolute;\n    right: 136px;\n    bottom: 17px;\n}\n\n.settingsApply > input {\n    border: solid;\n    font-size: 16px;\n    background-color: #92b3e6;\n    border-color: #a0b2c1;\n    border-width: 1px;\n    border-radius: 5px;\n    padding-top: 8px;\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-bottom: 8px;\n}\n\n.cs_invert .settingsApply > input {\n    background-color: #92b3e67a;\n    border-color: #a0b2c187;\n    color: inherit;\n}\n\n.cs_night .settingsApply > input {\n    background-color: #ff0000d4;\n    border-color: #f00;\n    color: #222;\n}\n\n\n.settingsCancel {\n    position: absolute;\n    right: 17px;\n    bottom: 17px;\n}\n\n.settingsCancel > button {\n    background-color: transparent;\n    color: inherit;\n    border: solid #797676;\n    font-size: 16px;\n    border-width: 1px;\n    border-radius: 5px;\n    padding-top: 8px;\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-bottom: 8px;\n    outline: none;\n}\n\n.cs_invert .settingsCancel > button {\n    border-color: solid #aaa;\n}\n\n.cs_night .settingsCancel > button {\n    border-color: solid #a00;\n}\n\n.tabControls {\n    position: absolute;\n    font-size: 16px;\n    top: 5px;\n    right: 1px;\n}\n\n\n.tabControls > button {\n    border: none;\n    padding-left: 1px;\n    padding-right: 1px;\n    outline: none;\n    background-color: inherit;\n    color: inherit;\n}\n\n\n.dropDown {\n    position: absolute;\n    left: -1px;\n    top: 29px;\n    padding: 16px;\n    border-top: none;\n    border-left: solid 1px;\n    border-radius: 3px;\n    z-index: 3;\n    border-bottom: solid 1px;\n    border-right: solid 1px;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 8px;\n    border-bottom-left-radius: 8px;\n    width: 129px;\n    padding: 2px;\n}\n\n.cs_normal .dropDown {\n    background-color: #ccccccf7;  \n}\n\n.cs_invert .dropDown {\n    background-color: #ccccccf7;  \n}\n.cs_night .dropDown {\n    background-color: #ccccccf7;  \n}\n\n.dropDown > button {\n    border: none;\n    background-color: inherit;\n    color: inherit;\n    outline: none;\n}\n\n\n.cellControls {\n    position: absolute;\n    font-size: 10px;\n    right: -8px;\n    top: -2px;\n    z-index: 1;\n}\n\n.cellControls > button {\n    border: none;  \n    background-color: transparent;\n    color: inherit;\n    outline: none;\n}\n\n.settingsForm {\n    border: 1px solid;\n    position: fixed;\n    left: 90px;\n    right: 25%;\n    top: 90px;\n    padding: 10px;\n    overflow: auto;\n    display: grid;\n    grid-gap: 11px;\n}\n\n.settingsForm label {\n    grid-column: 1 / 2;\n}\n\n.settingsForm input  {\n    grid-column: 2 / 2;\n    background-color: inherit;\n    color: inherit;\n}\n\n.cs_night .settingsForm input  {\n  border-color: #c00;\n}\n\n\n.settingsForm select {\n    grid-column: 2 / 2;\n    background-color: inherit;\n    color: inherit;\n}\n\n.cs_night .settingsForm select  {\n  border-color: #c00;\n}\n\n\n.settingsForm .help {\n    grid-column: 2 / 2;\n   font-size: 10px;\n}\n\n.settingsForm .settingsGroup {\n    display: grid;\n    grid-gap: 11px;\n    grid-column: 2 / 2;\n}\n\n.settingsForm .settingsGroup > div {\n    grid-column: 2 / 2;\n}\n\n\n/* Canvas based instruments */\n\n.cellContainer {\n  position: absolute;\n  top: 0px;\n  left: 0px; \n  right: 0px;  \n}\n\n.instrumentContainer {\n  font-family: sans-serif;\n  position: absolute;\n  top: 0px;\n  left: 0px; \n}\n.canvasHolder {\n  position: absolute;\n  top: 0px;\n  left: 0px; \n}\n.instrumentContainer canvas { \n  border: 1px solid black;\n  position: absolute;\n  top: 0px;\n  left: 0px; \n}\n.cs_invert .instrumentContainer canvas { \n  border: 1px solid #aaa;\n}\n.cs_night .instrumentContainer canvas { \n  border: 1px solid red;\n}\n.cs_normal .dataBoxFill {\n  background: rgba(215,215,215,0.7);      \n}\n\n.cs_invert .dataBoxFill, .cs_night .dataBoxFill  {\n  background: rgba(40,40,40,0.3);      \n}\n\n.dataBox {\n  position: absolute;\n  width: 100px;\n  height: 50px;\n  border-radius: 5px;   \n  border: 1px solid black;\n  font-size: 30px;\n  font-family: sans-serif;\n}\n\n.cs_invert .dataBox {\n  border: 1px solid white;\n}\n.cs_night .dataBox {\n  border: 1px solid red;\n}\n\n.dataBoxFull {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;   \n  border: 1px solid black;\n  font-size: 93px;\n  font-family: sans-serif;\n}\n\n.cs_invert .dataBoxFull {\n  border: 1px solid #aaa;\n}\n\n.cs_night .dataBoxFull {\n  border: 1px solid red;\n}\n\n.dataBoxValue {\n  background-color: inherit;\n  color: inherit;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  overflow: hidden;\n  text-align: center;\n}\n\n\n.dataBoxUnits {\n  background-color: inherit;\n  color: inherit;\n  position: absolute;\n  bottom:  2px;\n  right:  2px; \n  font-size: 14px;\n}\n.dataBoxTitle {\n  background-color: inherit;\n  color: inherit;\n  position: absolute;\n  bottom:  2px;\n  left:  2px; \n  font-size: 14px;\n}\n.inputForm {\n  position: absolute;\n  right: 0px;\n}\n.inputForm > label {\n  display: block;\n}\n\n\n\n\n.stripChart .axis {\n    stroke-width: 1;\n}\n\n.cs_normal .stripChart .axis .tick line {\n    stroke: black;\n}\n.cs_invert .stripChart .axis .tick line {\n    stroke: white;\n}\n.cs_night .stripChart .axis .tick line {\n    stroke: red;\n}\n\n.cs_normal .stripChart .axis .tick text {\n    fill: black;\n    font-size: 0.7em;\n}\n.cs_invert .stripChart .axis .tick text {\n    fill: white;\n    font-size: 0.7em;\n}\n.cs_night .stripChart .axis .tick text {\n    fill: red;\n    font-size: 0.7em;\n}\n\n.cs_normal .stripChart .axis .domain {\n    fill: none;\n    stroke: black;\n}\n.cs_invert .stripChart .axis .domain {\n    fill: none;\n    stroke: white;\n}\n.cs_night .stripChart .axis .domain {\n    fill: none;\n    stroke: red;\n}\n\n.cs_normal .stripChart .group {\n    fill: none;\n    stroke: black;\n    stroke-width: 1.5;\n}\n.cs_invert .stripChart .group {\n    fill: none;\n    stroke: white;\n    stroke-width: 1.5;\n}\n.cs_night .stripChart .group {\n    fill: none;\n    stroke: red;\n    stroke-width: 1.5;\n}\n\n\n\n", ""]);

// exports


/***/ })

},["qYAe"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzP2JkODQiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NvbGVudE1hcmtzQ293ZXNXZWVrMjAxOC5jc3YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvdXJzZS5jc3M/ODhhOSIsIndlYnBhY2s6Ly8vLi9zcmMvY291cnNlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ291cnNlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiXSwibmFtZXMiOlsicmFkVG9EZWciLCJRdHkiLCJzd2lmdENvbnZlcnRlciIsIm1Ub05tIiwibVRvS24iLCJDb3Vyc2UiLCJwcm9wcyIsInN0YXRlIiwiY291cnNlIiwiZ3dkIiwibGF0IiwibG9uIiwiZ2Vvc3RhdGUiLCJwb3NpdGlvbiIsImFjY3VyYWN5IiwiYWx0aXR1ZGUiLCJhbHRpdHVkZUFjY3VyYWN5IiwiaGVhZGluZyIsInNwZWVkIiwidGltZXN0YW1wIiwibGF0bG9uIiwiTGF0TG9uIiwibmV4dG1hcmsiLCJpZCIsInh0ZSIsImR0dyIsImJ0dyIsIndjdiIsInR0ZyIsImxheWxpbmViZWFyaW5nIiwibGF5bGluZWRpc3RhbmNlIiwibGF5bGluZXR0ZyIsInJvdW5kaW5ncyIsImJvdXlzIiwibG9hZE1hcmtzIiwiYnVpbGRSb3V0ZSIsIm1hcmtzRGIiLCJjaGFuZ2VHd2QiLCJiaW5kIiwiY2hhbmdlQ291cnNlIiwiY2hhbmdlTGF0IiwiY2hhbmdlTG9uIiwiZ2V0TG9jYXRpb24iLCJwb3NpdGlvbkVycm9yIiwiY2hhbmdlR2Vvc3RhdGUiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsIndhdGNoUG9zaXRpb24iLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJtYXhpbXVtQWdlIiwidGltZW91dCIsImVycm9yIiwic2V0U3RhdGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibmV3U3RhdGUiLCJEbXMiLCJ0b0xhdCIsInRvTG9uIiwidXBkYXRlTmV4dG1hcmsiLCJuZXh0UHJvcHMiLCJzZWxmIiwibWFya0xpc3QiLCJ0b0NvbHMiLCJtYXJrcyIsInVuZGVmaW5lZCIsInRyaW0iLCJzb2xlbnRNYXJrcyIsIngiLCJzcGxpdCIsImlkeCIsImNvbHMiLCJpIiwibGVuZ3RoIiwibmFtZSIsImRlc2MiLCJzeW0iLCJyb3V0ZSIsImlkcyIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsInJlIiwic3Vic3RyaW5nIiwicm91bmRpbmciLCJ3cCIsInB1c2giLCJ0b3RhbCIsImRpc3QiLCJkIiwicmh1bWJEaXN0YW5jZVRvIiwicmh1bWJCZWFyaW5nVG8iLCJNYXRoIiwiUEkiLCJ1cGRhdGVEeW5hbWljIiwidHdhIiwidG9SZWxhdGl2ZUFuZ2xlIiwibmV4dG1hcmtubyIsImFkdmFuY2V3cCIsIm5leHR3cCIsImNoIiwiY29zIiwiYW5nbGUiLCJsbCIsImFicyIsInRhY2t2bWdhbmdsZSIsInRhY2tsbCIsInBvcnQiLCJzdGJkIiwicG9ydHRvYnR3IiwiYmV0d2VlbiIsInN0ZGJvdmVyIiwicG9ydG92ZXIiLCJjYWxjSW50ZXNlY3RzIiwiZ3liZXZtZ2FuZ2xlIiwiZ3liZWxsIiwicG9ydGJ0dyIsInBpbnRlcnNlY3QiLCJpbnRlcnNlY3QiLCJpbnRlcnNlY3Rpb24iLCJzaW50ZXJzZWN0IiwiZHRpIiwiaXR3IiwiYmV4dHdwIiwicGhlYWQiLCJzaGVhZCIsInR0aSIsInR0dyIsInNoZWFoIiwiciIsInRvRml4ZWQiLCJiIiwiaCIsImZsb29yIiwic3Vic3RyIiwibSIsInMiLCJyb3dzIiwic3ltVG9EaXNwbGF5IiwidG9TdHJpbmciLCJyYWRUb0Rpc3BsYXkiLCJtVG9EaXNwbGF5IiwibXNUb0Rpc3BsYXkiLCJkdXJhdGlvblRvRGlzcGxheSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxhdFR4dCIsInBhcnNlRE1TIiwiRGF0ZSIsIm5vdyIsImxvblR4dCIsImdldEN1cnJlbnRQb3NpdGlvbiIsInJlbmRlckN1cnJlbnQiLCJyZW5kZXJSb3V0ZVRhYmxlIiwicmVuZGVyTWFya3NUYWJsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQXBwIiwic291cmNlUHJpb3JpdHkiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3pCQSwwbk47Ozs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3pCQTtBQUNBOzs7QUFHQTtBQUNBLHFEQUFzRCxpQkFBaUIsNkJBQTZCLGlCQUFpQixpQkFBaUIsMEJBQTBCLDBCQUEwQixHQUFHLHlDQUF5Qyw0QkFBNEIseUNBQXlDLDRCQUE0QixjQUFjLHNCQUFzQixHQUFHLGNBQWMsa0JBQWtCLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHOztBQUVoYzs7Ozs7Ozs7O0FDUEE7QUFDQTs7Ozs7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUdBLElBQU1BLFdBQVdDLHVCQUFJQyxjQUFKLENBQW1CLEtBQW5CLEVBQTBCLEtBQTFCLENBQWpCO0FBQ0EsSUFBTUMsUUFBUUYsdUJBQUlDLGNBQUosQ0FBbUIsR0FBbkIsRUFBd0IsS0FBeEIsQ0FBZDtBQUNBLElBQU1FLFFBQVFILHVCQUFJQyxjQUFKLENBQW1CLEtBQW5CLEVBQTBCLElBQTFCLENBQWQ7O0lB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cUIsR0FBRyxjQUFjLHVCQUF1QixlQUFlLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLDZCQUE2QixzQkFBc0IsR0FBRyw2Q0FBNkMsb0JBQW9CLEdBQUcsMkNBQTJDLG9CQUFvQixHQUFHLDBDQUEwQyxrQkFBa0IsR0FBRyw2Q0FBNkMsa0JBQWtCLHVCQUF1QixHQUFHLDJDQUEyQyxrQkFBa0IsdUJBQXVCLEdBQUcsMENBQTBDLGdCQUFnQix1QkFBdUIsR0FBRywwQ0FBMEMsaUJBQWlCLG9CQUFvQixHQUFHLHdDQUF3QyxpQkFBaUIsb0JBQW9CLEdBQUcsdUNBQXVDLGlCQUFpQixrQkFBa0IsR0FBRyxtQ0FBbUMsaUJBQWlCLG9CQUFvQix3QkFBd0IsR0FBRyxpQ0FBaUMsaUJBQWlCLG9CQUFvQix3QkFBd0IsR0FBRyxnQ0FBZ0MsaUJBQWlCLGtCQUFrQix3QkFBd0IsR0FBRzs7QUFFbDZVIiwiZmlsZSI6ImFwcC43Y2I4NjgxNDk2ODU2Y2RiOTUyMS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSBHY01lXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gW1tcIm5hbWVcIixcImRlc2NcIixcInN5bVwiLFwibGF0XCIsXCJsb25cIl0sW1wiMUFcIixcIlBldmVyaWwgTGVkZ2VcIixcIlJcIixcIjUwLjYwNjgzMzMzXCIsXCItMS45MzVcIl0sW1wiMUJcIixcIlBvb2xlIEJhciBObyAxXCIsXCJHXCIsXCI1MC42NTQ4MzMzM1wiLFwiLTEuOTE5XCJdLFtcIjFDXCIsXCJNUyBBbWxpblwiLFwiWVwiLFwiNTAuNjcxODMzMzNcIixcIi0xLjkwMDMzMzMzM1wiXSxbXCIxRVwiLFwiQ2hyaXN0Y2h1cmNoIExlZGdlIEJ1b3lcIixcIllcIixcIjUwLjY5MTY2NjY3XCIsXCItMS42OTMzMzMzMzNcIl0sW1wiMUZcIixcIk5lZWRsZXMgRmFpcndheVwiLFwiUldcIixcIjUwLjYzNzMzMzMzXCIsXCItMS42NDk2NjY2NjdcIl0sW1wiMUdcIixcIlNvdXRoIFdlc3QgU2hpbmdsZXNcIixcIlJcIixcIjUwLjY1NDgzMzMzXCIsXCItMS42MjUzMzMzMzNcIl0sW1wiMUhcIixcIkJyaWRnZVwiLFwiWUJZXCIsXCI1MC42NjA1XCIsXCItMS42MTQ2NjY2NjdcIl0sW1wiMUpcIixcIlNoaW5nbGVzIEVsYm93XCIsXCJSXCIsXCI1MC42NzI4MzMzM1wiLFwiLTEuNjAwODMzMzMzXCJdLFtcIjFLXCIsXCJOb3J0aCBIZWFkXCIsXCJHXCIsXCI1MC43MTE1XCIsXCItMS41OTJcIl0sW1wiMUxcIixcIk5lZWRsZXMgTGlnaHRob3VzZVwiLFwiUldcIixcIjUwLjY2MjE2NjY3XCIsXCItMS41OTE2NjY2NjdcIl0sW1wiMU1cIixcIldhcmRlblwiLFwiR1wiLFwiNTAuNjkxMzMzMzNcIixcIi0xLjU1OTE2NjY2N1wiXSxbXCIxTlwiLFwiTm9ydGggRWFzdCBTaGluZ2xlc1wiLFwiQllCXCIsXCI1MC42OTkzMzMzM1wiLFwiLTEuNTU2ODMzMzMzXCJdLFtcIjJBXCIsXCJIdXJzdFwiLFwiWVwiLFwiNTAuNzEzMTY2NjdcIixcIi0xLjU0MjE2NjY2N1wiXSxbXCIyQlwiLFwiRHVuZm9yZFwiLFwiWVwiLFwiNTAuNzIzXCIsXCItMS41MjU2NjY2NjdcIl0sW1wiMkNcIixcIkNvbHRlblwiLFwiWVwiLFwiNTAuNzMwNVwiLFwiLTEuNTE0MzMzMzMzXCJdLFtcIjJGXCIsXCJCZXJ0aG9uXCIsXCJZXCIsXCI1MC43MzY2NjY2N1wiLFwiLTEuNDg3XCJdLFtcIjJIXCIsXCLigJxI4oCdXCIsXCJZXCIsXCI1MC43MzgzMzMzM1wiLFwiLTEuNDY5MzMzMzMzXCJdLFtcIjJKXCIsXCJad2VydmVyXCIsXCJZXCIsXCI1MC43NTE4MzMzM1wiLFwiLTEuNDU1NjY2NjY3XCJdLFtcIjJLXCIsXCIxODUxIFRydXN0XCIsXCJZXCIsXCI1MC43NDcxNjY2N1wiLFwiLTEuNDM0ODMzMzMzXCJdLFtcIjJSXCIsXCJQb3dkZXIgQnlybmVcIixcIllcIixcIjUwLjc1NzE2NjY3XCIsXCItMS40MzE1XCJdLFtcIjJUXCIsXCJMeW1pbmd0b24gQmFua1wiLFwiUlwiLFwiNTAuNzE4MzMzMzNcIixcIi0xLjUxNDE2NjY2N1wiXSxbXCIyWFwiLFwiU29sZW50IEJhbmtcIixcIlJcIixcIjUwLjczNzE2NjY3XCIsXCItMS40NTYxNjY2NjdcIl0sW1wiMjBcIixcIlNjb25jZVwiLFwiQllcIixcIjUwLjcwODgzMzMzXCIsXCItMS41MjM4MzMzMzNcIl0sW1wiMjFcIixcIkJsYWNrIFJvY2tcIixcIkdcIixcIjUwLjcwOTVcIixcIi0xLjUwOTgzMzMzM1wiXSxbXCIyMlwiLFwiQ2hhcmxlcyBTdGFubGV5IFdlYWx0aCBNYW5hZ2Vyc1wiLFwiWVwiLFwiNTAuNzE0MzMzMzNcIixcIi0xLjQ5XCJdLFtcIjI0XCIsXCJUaGUgRW5nbGlzaCBTdW1tZXIgQmVycnkgQ29cIixcIllcIixcIjUwLjcxNDMzMzMzXCIsXCItMS40NzM2NjY2NjdcIl0sW1wiMjVcIixcIkNhbGR3ZWxscyBFc3RhdGUgQWdlbnRzXCIsXCJZXCIsXCI1MC43MTkxNjY2N1wiLFwiLTEuNDU4MTY2NjY3XCJdLFtcIjI2XCIsXCJIYW1zdGVhZCBMZWRnZVwiLFwiR1wiLFwiNTAuNzMxMTY2NjdcIixcIi0xLjQzNjMzMzMzM1wiXSxbXCIyN1wiLFwiQWxpdGV4XCIsXCJZXCIsXCI1MC43MTYxNjY2N1wiLFwiLTEuNDY5MzMzMzMzXCJdLFtcIjNBXCIsXCJXZXN0IExlcGVcIixcIlJcIixcIjUwLjc1NFwiLFwiLTEuNDAxNVwiXSxbXCIzQlwiLFwiTmV3dG93biBFYXN0XCIsXCJZXCIsXCI1MC43MzYzMzMzM1wiLFwiLTEuMzk2NVwiXSxbXCIzQ1wiLFwiY3JhZnRpbnN1cmUuY29tXCIsXCJZXCIsXCI1MC43NjA2NjY2N1wiLFwiLTEuMzg1MzMzMzMzXCJdLFtcIjNEXCIsXCJTYWx0IE1lYWRcIixcIkdcIixcIjUwLjc0MTgzMzMzXCIsXCItMS4zODRcIl0sW1wiM0VcIixcIkRpY2sgSm9obnNvblwiLFwiWVwiLFwiNTAuNzY4ODMzMzNcIixcIi0xLjM2OTgzMzMzM1wiXSxbXCIzRlwiLFwiZWxlcGhhbnRib2F0eWFyZC5jby51a1wiLFwiWVwiLFwiNTAuNzQzODMzMzNcIixcIi0xLjM2NDY2NjY2N1wiXSxbXCIzR1wiLFwiU2V2ZW5zdGFyIFlhY2h0IFRyYW5zcG9ydFwiLFwiWVwiLFwiNTAuNzc2MzMzMzNcIixcIi0xLjM1NzY2NjY2N1wiXSxbXCIzSFwiLFwiRWFzdCBMZXBlXCIsXCJSXCIsXCI1MC43NjU1XCIsXCItMS4zNTExNjY2NjdcIl0sW1wiM0tcIixcIkxlcGUgU3BpdFwiLFwiWUJcIixcIjUwLjc3OTY2NjY3XCIsXCItMS4zNDRcIl0sW1wiM0xcIixcIkd1cm5hcmQgTGVkZ2VcIixcIkdcIixcIjUwLjc1ODVcIixcIi0xLjM0MzE2NjY2N1wiXSxbXCIzTlwiLFwiUXVpbm5lbGxcIixcIllcIixcIjUwLjc4NDVcIixcIi0xLjMzMTMzMzMzM1wiXSxbXCIzUFwiLFwiQ293ZXMgWWFjaHQgSGF2ZW5cIixcIllcIixcIjUwLjc2MTMzMzMzXCIsXCItMS4zMzNcIl0sW1wiM1FcIixcIkVhc3QgQmF5XCIsXCJZXCIsXCI1MC43NjYxNjY2N1wiLFwiLTEuMzI0MTY2NjY3XCJdLFtcIjNSXCIsXCJOb3J0aCBFYXN0IEd1cm5hcmRcIixcIlJcIixcIjUwLjc4NDMzMzMzXCIsXCItMS4zMjM2NjY2NjdcIl0sW1wiM1NcIixcIlJveWFsIFRoYW1lc1wiLFwiWVwiLFwiNTAuNzk2ODMzMzNcIixcIi0xLjMyMDgzMzMzM1wiXSxbXCIzVFwiLFwiS01TXCIsXCJZXCIsXCI1MC43NjgzMzMzM1wiLFwiLTEuMzE0NVwiXSxbXCIzVVwiLFwiR3VybmFyZFwiLFwiQllcIixcIjUwLjc3MDMzMzMzXCIsXCItMS4zMTRcIl0sW1wiM1ZcIixcIldlc3QgQnJhbWJsZVwiLFwiWUJZXCIsXCI1MC43ODY2NjY2N1wiLFwiLTEuMzEwODMzMzMzXCJdLFtcIjNXXCIsXCJXaWxsaWFtcyBTaGlwcGluZ1wiLFwiWVwiLFwiNTAuNzg2NjY2NjdcIixcIi0xLjMwOTE2NjY2N1wiXSxbXCIzWFwiLFwiUGFydHlcIixcIllcIixcIjUwLjc2ODMzMzMzXCIsXCItMS4zMDcxNjY2NjdcIl0sW1wiM1lcIixcIldlc3QgS25vbGxcIixcIllcIixcIjUwLjc5MDVcIixcIi0xLjI5NzMzMzMzM1wiXSxbXCIzWlwiLFwiVHJpbml0eSBIb3VzZSBCdW95XCIsXCJZXCIsXCI1MC43NzE4MzMzM1wiLFwiLTEuMjk1ODMzMzMzXCJdLFtcIjMwXCIsXCJST1JDXCIsXCJZXCIsXCI1MC43ODUzMzMzM1wiLFwiLTEuMjk1MzMzMzMzXCJdLFtcIjMxXCIsXCJTb3V0aCBCcmFtYmxlXCIsXCJHXCIsXCI1MC43ODNcIixcIi0xLjI5NTMzMzMzM1wiXSxbXCIzM1wiLFwiUHJpbmNlIENvbnNvcnRcIixcIkJZXCIsXCI1MC43NzM1XCIsXCItMS4yOTI2NjY2NjdcIl0sW1wiMzlcIixcIlNub3dkZW5cIixcIllcIixcIjUwLjc3XCIsXCItMS4yOTU4MzMzMzNcIl0sW1wiNEJcIixcIkNvcm9uYXRpb25cIixcIllcIixcIjUwLjgyNTgzMzMzXCIsXCItMS4yOTM2NjY2NjdcIl0sW1wiNENcIixcIlJpZ2l0IFVLIFJpZ2dpbmdcIixcIllcIixcIjUwLjgyMDE2NjY3XCIsXCItMS4yOTFcIl0sW1wiNEVcIixcIk1pa2UgVGlsbFwiLFwiWVwiLFwiNTAuNzk0NVwiLFwiLTEuMjgzMzMzMzMzXCJdLFtcIjRGXCIsXCJEZWxvaXR0ZSBTYWlsaW5nIENsdWJcIixcIllcIixcIjUwLjc4NjY2NjY3XCIsXCItMS4yODMzMzMzMzNcIl0sW1wiNEdcIixcIkN1dHRlclwiLFwiWVwiLFwiNTAuODI0MTY2NjdcIixcIi0xLjI4MTgzMzMzM1wiXSxbXCI0SFwiLFwiRWFzdCBLbm9sbFwiLFwiR1wiLFwiNTAuNzk5MzMzMzNcIixcIi0xLjI4MDVcIl0sW1wiNEpcIixcImhhbWJsZXdpbnRlcnNlcmllcy5jb21cIixcIllcIixcIjUwLjgxMDVcIixcIi0xLjI3NzVcIl0sW1wiNEtcIixcIlJveWFsIExvbmRvbiBZQ1wiLFwiWVwiLFwiNTAuNzY5MTY2NjdcIixcIi0xLjI3NzVcIl0sW1wiNExcIixcIldpbGxpYW1cIixcIllcIixcIjUwLjgxNzE2NjY3XCIsXCItMS4yNzQ4MzMzMzNcIl0sW1wiNE1cIixcIkhpbGwgSGVhZFwiLFwiUlwiLFwiNTAuODAxMTY2NjdcIixcIi0xLjI2NjY2NjY2N1wiXSxbXCI0TlwiLFwiUVhJIEludGVybmF0aW9uYWxcIixcIllcIixcIjUwLjc4NzgzMzMzXCIsXCItMS4yNjVcIl0sW1wiNFBcIixcIldlc3QgUnlkZSBNaWRkbGVcIixcIllCWVwiLFwiNTAuNzc0NjY2NjdcIixcIi0xLjI2MzE2NjY2N1wiXSxbXCI0UVwiLFwiUm9iaW4gQ3VscGFuXCIsXCJZXCIsXCI1MC44MDc2NjY2N1wiLFwiLTEuMjYyXCJdLFtcIjRSXCIsXCJEYXJsaW5nIEJ1b3lcIixcIllcIixcIjUwLjgxOTY2NjY3XCIsXCItMS4yNjE4MzMzMzNcIl0sW1wiNFNcIixcIlJveWFsIFNvdXRoZXJuXCIsXCJZXCIsXCI1MC44MTQ2NjY2N1wiLFwiLTEuMjU5NVwiXSxbXCI0VFwiLFwiTm9ycmlzXCIsXCJSXCIsXCI1MC43NjYxNjY2N1wiLFwiLTEuMjU4NVwiXSxbXCI0VVwiLFwiRmV2ZXIgVHJlZVwiLFwiWVwiLFwiNTAuNzczODMzMzNcIixcIi0xLjI1MTVcIl0sW1wiNFZcIixcIkhhbWJsZSBZYWNodCBTZXJ2aWNlc1wiLFwiWVwiLFwiNTAuODAyMTY2NjdcIixcIi0xLjI0NFwiXSxbXCI0V1wiLFwiR29vZGFsbCBSb29maW5nXCIsXCJZXCIsXCI1MC43ODg4MzMzM1wiLFwiLTEuMjQzMTY2NjY3XCJdLFtcIjRYXCIsXCJDb2xldHRlXCIsXCJZXCIsXCI1MC43NTg4MzMzM1wiLFwiLTEuMjM5ODMzMzMzXCJdLFtcIjRZXCIsXCJOb3J0aCBSeWRlIE1pZGRsZVwiLFwiUlwiLFwiNTAuNzc2ODMzMzNcIixcIi0xLjIzODVcIl0sW1wiNFpcIixcIlNvdXRoIFJ5ZGUgTWlkZGxlXCIsXCJHXCIsXCI1MC43Njg4MzMzM1wiLFwiLTEuMjM2XCJdLFtcIjQwXCIsXCJGYXN0bmV0IEluc3VyYW5jZVwiLFwiWVwiLFwiNTAuNzk0MzMzMzNcIixcIi0xLjIyNzVcIl0sW1wiNDFcIixcIkVhc3QgQnJhbWJsZVwiLFwiQllCXCIsXCI1MC43ODcxNjY2N1wiLFwiLTEuMjI3MzMzMzMzXCJdLFtcIjQyXCIsXCJQZWVsIEJhbmtcIixcIlJcIixcIjUwLjc1ODE2NjY3XCIsXCItMS4yMjI1XCJdLFtcIjQzXCIsXCJXaWdodGxpbmtcIixcIllcIixcIjUwLjc2OTMzMzMzXCIsXCItMS4yMTgxNjY2NjdcIl0sW1wiNDRcIixcIlJveWFsIFlhY2h0IFNxdWFkcm9uXCIsXCJZXCIsXCI1MC43ODg1XCIsXCItMS4yMDE2NjY2NjdcIl0sW1wiNDVcIixcIlNvdXRoIEVhc3QgUnlkZSBNaWRkbGVcIixcIllCXCIsXCI1MC43NjU1XCIsXCItMS4yMDE2NjY2NjdcIl0sW1wiNDZcIixcIk5vcnRoIEVhc3QgUnlkZSBNaWRkbGVcIixcIlJcIixcIjUwLjc3MDE2NjY3XCIsXCItMS4xOThcIl0sW1wiNDdcIixcIk1hcmF2YWxcIixcIllcIixcIjUwLjc5NVwiLFwiLTEuMjU0MTY2NjY3XCJdLFtcIjVBXCIsXCJRdWFyclwiLFwiWVwiLFwiNTAuNzUwNVwiLFwiLTEuMTk4MTY2NjY3XCJdLFtcIjVCXCIsXCJNb3RoZXJiYW5rXCIsXCJSXCIsXCI1MC43NTgxNjY2N1wiLFwiLTEuMTg2ODMzMzMzXCJdLFtcIjVDXCIsXCJCcm93bmRvd25cIixcIkdcIixcIjUwLjc3NjE2NjY3XCIsXCItMS4xODI1XCJdLFtcIjVEXCIsXCJLZW1wcyBRdWF5XCIsXCJZXCIsXCI1MC43NTNcIixcIi0xLjE2MDgzMzMzM1wiXSxbXCI1RVwiLFwiRGFybGluZyBBc3NvY2lhdGVzIEFyY2hpdGVjdHNcIixcIllcIixcIjUwLjc3MVwiLFwiLTEuMTQ2XCJdLFtcIjVGXCIsXCJOb3J0aCBTdHVyYnJpZGdlXCIsXCJCWVwiLFwiNTAuNzU1NVwiLFwiLTEuMTM3MTY2NjY3XCJdLFtcIjVHXCIsXCJSTkMgJiBSQVlDXCIsXCJZXCIsXCI1MC43NzM2NjY2N1wiLFwiLTEuMTMxNjY2NjY3XCJdLFtcIjVKXCIsXCJLQiBEcnkgU3RhY2tcIixcIllcIixcIjUwLjc3NjgzMzMzXCIsXCItMS4xMjE1XCJdLFtcIjVNXCIsXCJHbGVlZHNcIixcIllcIixcIjUwLjc2ODVcIixcIi0xLjEwODY2NjY2N1wiXSxbXCI1UVwiLFwiT3V0ZXIgU3BpdFwiLFwiWUJcIixcIjUwLjc1NzMzMzMzXCIsXCItMS4wOTFcIl0sW1wiNVJcIixcIkhvcnNlIFNhbmQgQnVveVwiLFwiR1wiLFwiNTAuNzU4ODMzMzNcIixcIi0xLjA4NzgzMzMzM1wiXSxbXCI1U1wiLFwiU2FkZGxlIEJ1b3lcIixcIkdcIixcIjUwLjc1MTY2NjY3XCIsXCItMS4wODI1XCJdLFtcIjUwXCIsXCJTdG9rZXMgQmF5IFNDIFdlc3RcIixcIllcIixcIjUwLjc4MDE2NjY3XCIsXCItMS4xNzMzMzMzMzNcIl0sW1wiNTFcIixcIlN0b2tlcyBCYXkgU0MgQ2VudHJhbFwiLFwiWVwiLFwiNTAuNzc2NjY2NjdcIixcIi0xLjE2NDE2NjY2N1wiXSxbXCI2QVwiLFwiTm8gTWFu4oCZcyBMYW5kIEZvcnRcIixcIkJcIixcIjUwLjc0XCIsXCItMS4wOTVcIl0sW1wiNkJcIixcIkhvcnNlIFNhbmQgRm9ydFwiLFwiQlwiLFwiNTAuNzUwMTY2NjdcIixcIi0xLjA3MjMzMzMzM1wiXSxbXCI2Q1wiLFwiV2FybmVyXCIsXCJSXCIsXCI1MC43MzExNjY2N1wiLFwiLTEuMDY2NVwiXSxbXCI2RFwiLFwiSG9yc2UgRWxib3dcIixcIkdcIixcIjUwLjczNzY2NjY3XCIsXCItMS4wNjQ2NjY2NjdcIl0sW1wiNkVcIixcIldlc3QgUHJpbmNlc3NhXCIsXCJZQllcIixcIjUwLjY2OTMzMzMzXCIsXCItMS4wNjA4MzMzMzNcIl0sW1wiNkZcIixcIkJlbWJyaWRnZSBMZWRnZSBCdW95XCIsXCJCWUJcIixcIjUwLjY4NTgzMzMzXCIsXCItMS4wNDY4MzMzMzNcIl0sW1wiNkdcIixcIlN0IEhlbGVucyBCdW95XCIsXCJSXCIsXCI1MC43MjI2NjY2N1wiLFwiLTEuMDQwMTY2NjY3XCJdLFtcIjZIXCIsXCJEZWFuIEVsYm93XCIsXCJHXCIsXCI1MC43MjgxNjY2N1wiLFwiLTEuMDMxMzMzMzMzXCJdLFtcIjZKXCIsXCJOYWIgRWFzdFwiLFwiUlwiLFwiNTAuNzE0MzMzMzNcIixcIi0xLjAxMzMzMzMzM1wiXSxbXCI2S1wiLFwiSG9yc2UgVGFpbFwiLFwiR1wiLFwiNTAuNzIwNVwiLFwiLTEuMDAzODMzMzMzXCJdLFtcIjZMXCIsXCJXaW5uZXJcIixcIllCXCIsXCI1MC43NTE2NjY2N1wiLFwiLTEuMDAxNjY2NjY3XCJdLFtcIjZNXCIsXCJOYWIgRW5kXCIsXCJSXCIsXCI1MC43MTA1XCIsXCItMC45OTE1XCJdLFtcIjZOXCIsXCJEZWFuIFRhaWxcIixcIkdcIixcIjUwLjcxNjVcIixcIi0wLjk4NjE2NjY2NjdcIl0sW1wiNlBcIixcIk5ldyBHcm91bmRzXCIsXCJCWUJcIixcIjUwLjY5NzMzMzMzXCIsXCItMC45NzQ4MzMzMzMzXCJdLFtcIjZSXCIsXCJOYWIgVG93ZXJcIixcIkJcIixcIjUwLjY2OFwiLFwiLTAuOTUyNVwiXSxbXCI2U1wiLFwiT3V0ZXIgTmFiIE5vIDJcIixcIkJZQlwiLFwiNTAuNjQwNVwiLFwiLTAuOTYxNjY2NjY2N1wiXSxbXCI4U1wiLFwiTGFpZCBtYXJrIDhTXCIsXCJCXCIsXCI1MC43NjJcIixcIi0xLjI0OTE2NjY2N1wiXSxbXCI4WFwiLFwiTGFpZCBtYXJrIDhYXCIsXCJCXCIsXCI1MC43OTExNjY2N1wiLFwiLTEuMjE1XCJdLFtcIjhZXCIsXCJMYWlkIG1hcmsgOFlcIixcIkJcIixcIjUwLjc4MzMzMzMzXCIsXCItMS4xODgzMzMzMzNcIl0sW1wiOEhcIixcIkxhaWQgbWFyayA4SFwiLFwiQlwiLFwiNTAuNzNcIixcIi0xLjQ4N1wiXSxbXCI4SlwiLFwiTGFpZCBtYXJrIDhKXCIsXCJCXCIsXCI1MC43NTMzMzMzM1wiLFwiLTEuNDE2NjY2NjY3XCJdLFtcIjhLXCIsXCJMYWlkIG1hcmsgOEtcIixcIkJcIixcIjUwLjc0ODMzMzMzXCIsXCItMS4zNjE2NjY2NjdcIl0sW1wiOEFcIixcIkxlbmR5IEFscGhhXCIsXCJZXCIsXCI1MC43NzE1XCIsXCItMS4zMDIxNjY2NjdcIl0sW1wiOEJcIixcIkxlbmR5IEJldGFcIixcIk9cIixcIjUwLjc3XCIsXCItMS4zMDIxNjY2NjdcIl0sW1wiOEdcIixcIkxlbmR5IEdhbW1hXCIsXCJZXCIsXCI1MC43NzA4MzMzM1wiLFwiLTEuMjkzNjY2NjY3XCJdLFtcIjhEXCIsXCJMZW5keSBEZWx0YVwiLFwiWVwiLFwiNTAuNzcxODMzMzNcIixcIi0xLjI4MTY2NjY2N1wiXSxbXCI4MFwiLFwiUllTIEZsYWdzdGFmZlwiLFwiWVwiLFwiNTAuNzY2NzMzMzNcIixcIi0xLjMwMDkxNjY2N1wiXSxbXCI4NFwiLFwiQnJlYWt3YXRlciBDb21taXR0ZWUgQm9hdFwiLFwibi9hXCIsXCI1MC43Njk4MzMzM1wiLFwiLTEuMjk0MzMzMzMzXCJdXVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NvbGVudE1hcmtzQ293ZXNXZWVrMjAxOC5jc3Zcbi8vIG1vZHVsZSBpZCA9IEtpOWhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY291cnNlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jb3Vyc2UuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NvdXJzZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvdXJzZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IFF5V2dcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY291cnNlIHRyOm50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZDogI0NDQ31cXG4uY291cnNlIHRyOm50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kOiAjRkZGfVxcbi5jb3Vyc2UgdGFibGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItc3BhY2luZzogMHB4O1xcbn1cXG4uY291cnNlIHRhYmxlLm1hcmtzIHRyOm50aC1jaGlsZChvZGQpIHtcXG4gICAgYmFja2dyb3VuZDogI2ZhZWRkOVxcbn1cXG4uY291cnNlIHRhYmxlLnJvdXRlIHRyOm50aC1jaGlsZChvZGQpIHtcXG4gICAgYmFja2dyb3VuZDogI2RiZjRkYlxcbn1cXG4uY291cnNlIHRyIHtcXG4gICAgcGFkZGluZzogIDAgMHB4O1xcbn1cXG4uY291cnNlIHRkIHtcXG4gICAgbWFyZ2luOiAxcHg7XFxufVxcbi5jb3Vyc2UgLmhlYWRkaW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9jb3Vyc2UuY3NzXG4vLyBtb2R1bGUgaWQgPSBSVUNLXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYXRMb25TcGhlcmljYWwgYXMgTGF0TG9uLCBEbXMgfSBmcm9tICdnZW9kZXN5JztcbmltcG9ydCBzb2xlbnRNYXJrcyBmcm9tICcuL1NvbGVudE1hcmtzQ293ZXNXZWVrMjAxOC5jc3YnO1xuaW1wb3J0IFF0eSBmcm9tICdqcy1xdWFudGl0aWVzJztcbmltcG9ydCAnLi9jb3Vyc2UuY3NzJztcblxuXG5jb25zdCByYWRUb0RlZyA9IFF0eS5zd2lmdENvbnZlcnRlcigncmFkJywgJ2RlZycpO1xuY29uc3QgbVRvTm0gPSBRdHkuc3dpZnRDb252ZXJ0ZXIoJ20nLCAnbm1pJyk7XG5jb25zdCBtVG9LbiA9IFF0eS5zd2lmdENvbnZlcnRlcignbS9zJywgJ2tuJyk7XG5cblxuY2xhc3MgQ291cnNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgY291cnNlOiBwcm9wcy5jb3Vyc2UgfHwgXCJcIixcbiAgICAgICAgZ3dkOiAwLFxuICAgICAgICBsYXQ6IFwiXCIsXG4gICAgICAgIGxvbjogXCJcIixcbiAgICAgICAgZ2Vvc3RhdGU6IFwiaW5pdFwiLFxuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICBhY2N1cmFjeTogMCxcbiAgICAgICAgICAgYWx0aXR1ZGU6IG51bGwsXG4gICAgICAgICAgIGFsdGl0dWRlQWNjdXJhY3k6IC0xLFxuICAgICAgICAgICBoZWFkaW5nOiBudWxsLFxuICAgICAgICAgICBzcGVlZDogbnVsbCxcbiAgICAgICAgICAgdGltZXN0YW1wOiAwLFxuICAgICAgICAgICBsYXRsb246IG5ldyBMYXRMb24oLTEsNTApXG4gICAgICAgfSxcbiAgICAgICBuZXh0bWFyazoge1xuICAgICAgICAgICAgaWQ6IC0xLFxuICAgICAgICAgICAgeHRlOiBudWxsLFxuICAgICAgICAgICAgZHR3OiBudWxsLFxuICAgICAgICAgICAgYnR3OiBudWxsLFxuICAgICAgICAgICAgd2N2OiBudWxsLFxuICAgICAgICAgICAgdHRnOiBudWxsLFxuICAgICAgICAgICAgbGF5bGluZWJlYXJpbmc6IG51bGwsXG4gICAgICAgICAgICBsYXlsaW5lZGlzdGFuY2U6IG51bGwsXG4gICAgICAgICAgICBsYXlsaW5ldHRnOiBudWxsXG4gICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJvdW5kaW5ncyA9IHtcbiAgICAgICAgXCJQXCI6IFwicG9ydFwiLFxuICAgICAgICBcIlNcIjogXCJzdGFyYm9hcmRcIixcbiAgICAgICAgXCJQUFwiOiBcInBhc3MgcG9ydFwiLFxuICAgICAgICBcIlBTXCI6IFwicGFzcyBzdGFyYm9hcmRcIixcbiAgICAgICAgXCJUXCI6IFwicGFzcyB0aHJvdWdoXCJcbiAgICB9XG4gICAgdGhpcy5ib3V5cyA9IHtcbiAgICAgICAgXCJCWVwiOiBcIk4gQllcIixcbiAgICAgICAgXCJCWUJcIjogXCJFIEJZQlwiLFxuICAgICAgICBcIllCXCI6IFwiUyBZQlwiLFxuICAgICAgICBcIllCWVwiOiBcIlcgWUJZXCJcbiAgICB9XG4gICAgdGhpcy5sb2FkTWFya3MoKTtcbiAgICB0aGlzLmJ1aWxkUm91dGUodGhpcy5zdGF0ZSwgcHJvcHMuY291cnNlIHx8IFwiXCIpO1xuICAgIHRoaXMuc3RhdGUubWFya3NEYiA9IHRoaXMubWFya3NEYjsgXG4gICAgdGhpcy5jaGFuZ2VHd2QgPSB0aGlzLmNoYW5nZUd3ZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlQ291cnNlID0gdGhpcy5jaGFuZ2VDb3Vyc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUxhdCA9IHRoaXMuY2hhbmdlTGF0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VMb24gPSB0aGlzLmNoYW5nZUxvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0TG9jYXRpb24gPSB0aGlzLmdldExvY2F0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wb3NpdGlvbkVycm9yID0gdGhpcy5wb3NpdGlvbkVycm9yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VHZW9zdGF0ZSA9IHRoaXMuY2hhbmdlR2Vvc3RhdGUuYmluZCh0aGlzKTtcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKHRoaXMuZ2V0TG9jYXRpb24sIHRoaXMucG9zaXRpb25FcnJvciwge1xuICAgICAgICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlLCBcbiAgICAgICAgICAgIG1heGltdW1BZ2UgICAgICAgIDogMzAwMDAsIFxuICAgICAgICAgICAgdGltZW91dCAgICAgICAgICAgOiAyNzAwMFxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwb3NpdGlvbkVycm9yKGVycm9yKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGdlb3N0YXRlOiBcIm5vIGZpeFwiK2Vycm9yLm1lc3NhZ2VcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIlBvc2l0aW9uIEZpeFwiK2Vycm9yKTtcbiAgfVxuXG4gIGdldExvY2F0aW9uKHBvc2l0aW9uKSB7XG4gICAgaWYgKCAhdGhpcy5zdGF0ZS5nZW9zdGF0ZSAhPT0gXCJ1c2VyXCIgKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIGFjY3VyYWN5OiBwb3NpdGlvbi5jb29yZHMuYWNjdXJhY3ksXG4gICAgICAgICAgICBhbHRpdHVkZTogcG9zaXRpb24uY29vcmRzLmFsdGl0dWRlLFxuICAgICAgICAgICAgYWx0aXR1ZGVBY2N1cmFjeTogcG9zaXRpb24uY29vcmRzLmFsdGl0dWRlQWNjdXJhY3ksXG4gICAgICAgICAgICBoZWFkaW5nOiBwb3NpdGlvbi5jb29yZHMuaGVhZGluZyxcbiAgICAgICAgICAgIHNwZWVkOiBwb3NpdGlvbi5jb29yZHMuc3BlZWQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHBvc2l0aW9uLnRpbWVzdGFtcCxcbiAgICAgICAgICAgIGxhdGxvbjogbmV3IExhdExvbihwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUpXG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgbGF0OiBEbXMudG9MYXQocG9zaXRpb24ubGF0bG9uLmxhdCwgXCJkbVwiLCAzKSxcbiAgICAgICAgICAgIGxvbjogRG1zLnRvTG9uKHBvc2l0aW9uLmxhdGxvbi5sb24sIFwiZG1cIiwgMyksXG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgICAgICBnZW9zdGF0ZTogXCJmaXhcIlxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTmV4dG1hcmsobmV3U3RhdGUsIHBvc2l0aW9uLCB0aGlzLnN0YXRlLm5leHRtYXJrLmlkKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG5cbiAgICB9XG4gIH1cblxuXG5cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICB9XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgfVxuXG5cblxuICAvLyBsb2FkIG1hcmtzIGZyb20gYSBjdXQgYW5kIHBhc3RlIGluIHRoZSBzZXR0aW5ncywgb3IgdXNlIGEgZGVmYXVsdFxuICAgIGxvYWRNYXJrcygpIHtcbiAgICAgICAgdGhpcy5tYXJrc0RiID0ge307XG4gICAgICAgIHZhciBtYXJrTGlzdCwgdG9Db2xzO1xuICAgICAgICBpZiAoIHRoaXMucHJvcHMubWFya3MgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnByb3BzLm1hcmtzLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgbWFya0xpc3QgPSBzb2xlbnRNYXJrcztcbiAgICAgICAgICAgIHRvQ29scz0gKHgpID0+IHsgcmV0dXJuIHh9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFya0xpc3QgPSB0aGlzLnByb3BzLm1hcmtzLnRyaW0oKS5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgICAgIHRvQ29scz0gKHgpID0+IHsgcmV0dXJuIHgudHJpbSgpLnNwbGl0KFwiLFwiKTt9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBpZHggPSB7fTtcbiAgICAgICAgdmFyIGNvbHMgPSB0b0NvbHMobWFya0xpc3RbMF0pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgaWR4W2NvbHNbaV1dID0gaTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtYXJrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbHMgPSB0b0NvbHMobWFya0xpc3RbaV0pXG4gICAgICAgICAgICB0aGlzLm1hcmtzRGJbY29sc1tpZHgubmFtZV1dID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGNvbHNbaWR4Lm5hbWVdLFxuICAgICAgICAgICAgICAgIGRlc2M6IGNvbHNbaWR4LmRlc2NdLFxuICAgICAgICAgICAgICAgIHN5bTogY29sc1tpZHguc3ltXSxcbiAgICAgICAgICAgICAgICBsYXRsb246IG5ldyBMYXRMb24oY29sc1tpZHgubGF0XSwgY29sc1tpZHgubG9uXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBidWlsZFJvdXRlKG5ld1N0YXRlLCBjb3Vyc2UpIHtcbiAgICAgICAgdmFyIHJvdXRlID0gW107XG4gICAgICAgIHZhciBpZHMgPSBjb3Vyc2UudHJpbSgpLnJlcGxhY2UoXCJcXG5cIixcIixcIikuc3BsaXQoXCIsXCIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpZCA9IGlkc1tpXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIGlmICggaWQgPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcmUgPSB7IFxuICAgICAgICAgICAgaWQ6IGlkLnN1YnN0cmluZygwLDIpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoIGlkLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHJlLnJvdW5kaW5nID0gdGhpcy5yb3VuZGluZ3NbaWQuc3Vic3RyaW5nKDIpXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gbWF5IGJlIHVuZGVmaW5lZCwgaW5kaWNhdGluZyB0aGUgbWFyayBjb3VsZCBub3QgYmUgZm91bmQuXG4gICAgICAgICAgcmUud3AgPSB0aGlzLm1hcmtzRGJbcmUuaWRdO1xuICAgICAgICAgIHJvdXRlLnB1c2gocmUpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBjYWxjIGRpc3RhbmNlcyBhbmQgYmVhcmluZ3MuXG4gICAgICAgIHZhciB0b3RhbCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm91dGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJvdXRlW2ldLmRpc3QgPSB0b3RhbDtcbiAgICAgICAgICAgIGlmICggaSA8IHJvdXRlLmxlbmd0aC0xICYmIHJvdXRlW2ldLndwICE9PSB1bmRlZmluZWQgJiYgcm91dGVbaSsxXS53cCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gcm91dGVbaV0ud3AubGF0bG9uLnJodW1iRGlzdGFuY2VUbyhyb3V0ZVtpKzFdLndwLmxhdGxvbik7XG4gICAgICAgICAgICAgICAgcm91dGVbaV0uZHR3ID0gZDtcbiAgICAgICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgZDtcbiAgICAgICAgICAgICAgICByb3V0ZVtpXS5idHcgPSByb3V0ZVtpXS53cC5sYXRsb24ucmh1bWJCZWFyaW5nVG8ocm91dGVbaSsxXS53cC5sYXRsb24pKk1hdGguUEkvMTgwLjA7IC8vIGluIGRlZ3JlZXMgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUR5bmFtaWMocm91dGUpO1xuICAgICAgICBuZXdTdGF0ZS5yb3V0ZSA9IHJvdXRlO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBhbGwgdGhlIGRhdGEgdGhhdCBpcyBjYWxjdWxhdGVkIGZyb20gY3VycmVudCBvYnNlcnZhdGlvbnMuXG4gICAgdXBkYXRlRHluYW1pYyhyb3V0ZSkge1xuICAgICAgICBpZiAoIHJvdXRlLmxlbmd0aCAgPiAwKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuZ3dkICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3V0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHJvdXRlW2ldLmJ0dyAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlW2ldLnR3YSA9IHRoaXMudG9SZWxhdGl2ZUFuZ2xlKHRoaXMuZ3dkIC0gcm91dGVbaV0uYnR3KTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVOZXh0bWFyayhuZXdTdGF0ZSwgcG9zaXRpb24sIG5leHRtYXJrbm8pIHtcbiAgICAgICAgdmFyIHJvdXRlID0gbmV3U3RhdGUucm91dGUgfHwgdGhpcy5zdGF0ZS5yb3V0ZTtcbiAgICAgICAgaWYgKCByb3V0ZS5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBuZXh0bWFya25vID09PSB1bmRlZmluZWQgfHwgbmV4dG1hcmtubyA8IDAgKSB7XG4gICAgICAgICAgICBuZXh0bWFya25vID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMuc3RhdGUubmV4dG1hcmsuYWR2YW5jZXdwICkge1xuICAgICAgICAgICAgbmV4dG1hcmtubysrO1xuICAgICAgICB9XG4gICAgICAgIGlmICggbmV4dG1hcmtubyA+PSByb3V0ZS5sZW5ndGggKSB7XG4gICAgICAgICAgICBuZXh0bWFya25vID0gcm91dGUubGVuZ3RoLTE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobmV4dG1hcmtubyk7XG4gICAgICAgIHZhciBuZXh0d3AgPSByb3V0ZVtuZXh0bWFya25vXS53cDtcbiAgICAgICAgdmFyIG5leHRtYXJrID0ge1xuICAgICAgICAgICAgaWQ6IG5leHRtYXJrbm8sXG4gICAgICAgICAgICBuYW1lOiBuZXh0d3AubmFtZSxcbiAgICAgICAgICAgIHh0ZTogbnVsbCxcbiAgICAgICAgICAgIGR0dzogbnVsbCxcbiAgICAgICAgICAgIGJ0dzogbnVsbCxcbiAgICAgICAgICAgIHR0ZzogbnVsbCxcbiAgICAgICAgICAgIHdjdjogbnVsbCxcbiAgICAgICAgICAgIGxheWxpbmViZWFyaW5nOiBudWxsLFxuICAgICAgICAgICAgbGF5bGluZWRpc3RhbmNlOiBudWxsLFxuICAgICAgICAgICAgbGF5bGluZXR0ZzogbnVsbFxuICAgICAgICB9XG4gICAgICAgIGlmICggcG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV4dG1hcmsuZHR3ID0gcG9zaXRpb24ubGF0bG9uLnJodW1iRGlzdGFuY2VUbyhuZXh0d3AubGF0bG9uKTtcbiAgICAgICAgICAgIG5leHRtYXJrLmJ0dyA9IHBvc2l0aW9uLmxhdGxvbi5yaHVtYkJlYXJpbmdUbyhuZXh0d3AubGF0bG9uKSpNYXRoLlBJLzE4MDtcbiAgICAgICAgICAgIHZhciBjaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICggcG9zaXRpb24uc3BlZWQgIT0gdW5kZWZpbmVkICYmIHBvc2l0aW9uLmhlYWRpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgd2N2XG4gICAgICAgICAgICAgICAgY2ggPSBNYXRoLmNvcygobmV4dG1hcmsuYnR3LXBvc2l0aW9uLmhlYWRpbmcpKk1hdGguUEkvMTgwKVxuICAgICAgICAgICAgICAgIG5leHRtYXJrLndjdiA9IHBvc2l0aW9uLnNwZWVkKmNoO1xuICAgICAgICAgICAgICAgIG5leHRtYXJrLnR0ZyA9IG5leHRtYXJrLmR0dy9uZXh0bWFyay53Y3Y7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgLy8gaWYgdGhlIGR0dyBpcyA8IDUwbSBhbmQgdGhlIGJ0dywgdGhlbiB0aGUgd2F5cG9pbnQgaGFzIHByb2JhYmx5IGJlZW4gcmVhY2hlZC5cbiAgICAgICAgICAgIGlmICggY2ggIT09IHVuZGVmaW5lZCAmJiBjaCA8IDAgJiYgbmV4dG1hcmsuZHR3IDwgNTApIHtcbiAgICAgICAgICAgICAgICBuZXh0bWFyay5hZHZhbmNld3AgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFuZ2xlLCBsbDtcbiAgICAgICAgICAgIGlmICggTWF0aC5hYnMobmV4dHdwLnR3YSkgPCB0aGlzLnN0YXRlLnRhY2t2bWdhbmdsZSApIHtcbiAgICAgICAgICAgICAgICAvLyB0YWNraW5nIHJlcXVpcmVkLCBsYXlsaW5lcyBuZWVkZWQsIHRoZXJlIGFyZSAyIGxheWxpbmVzLFxuICAgICAgICAgICAgICAgIGFuZ2xlID0gdGhpcy5zdGF0ZS50YWNrdm1nYW5nbGU7XG4gICAgICAgICAgICAgICAgbmV4dG1hcmsudGFja2xsID0gbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcnQgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidHc6ICgodGhpcy5nd2QrYW5nbGUpKzIqTWF0aC5QSSklKDIqTWF0aC5QSSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RiZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnR3OiAoKHRoaXMuZ3dkLWFuZ2xlKSsyKk1hdGguUEkpJSgyKk1hdGguUEkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYW5nbGUgYmV0d2VlbiB0aGUgYnR3IGFuZCB0aGUgbGF5bGluZSBpbmRpY2F0ZXMgd2hpY2ggc2VjdG9yLlxuICAgICAgICAgICAgICAgIHZhciBwb3J0dG9idHcgPSAgKDIqTWF0aC5QSSt0YWNrbGwucG9ydC5idHctbmV4dHdwLmJ0dyklMipNYXRoLlBJO1xuICAgICAgICAgICAgICAgIGlmICggcG9ydHRvYnR3IDwgMiphbmdsZSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5iZXR3ZWVuIHRoZSBsYXlsaW5lc1xuICAgICAgICAgICAgICAgICAgICBsbC5iZXR3ZWVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBwb3J0dG9idHcgPCBNYXRoLlBJLWFuZ2xlICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvdmVyc3Rvb2Qgc3RhcmJvYXJkXG4gICAgICAgICAgICAgICAgICAgIGxsLnN0ZGJvdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBvdmVyc3Rvb2QgcG9ydC5cbiAgICAgICAgICAgICAgICAgICAgbGwucG9ydG92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxjSW50ZXNlY3RzKGxsLCBwb3NpdGlvbiwgbmV4dHdwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIE1hdGguYWJzKG5leHR3cC50d2EpID4gdGhpcy5zdGF0ZS5neWJldm1nYW5nbGUpIHtcbiAgICAgICAgICAgICAgICBhbmdsZSA9IHRoaXMuc3RhdGUudGFja3ZtZ2FuZ2xlO1xuICAgICAgICAgICAgICAgIG5leHRtYXJrLmd5YmVsbCA9IGxsID0ge1xuICAgICAgICAgICAgICAgICAgICBwb3J0IDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnR3OiAoKHRoaXMuZ3dkK2FuZ2xlKSsyKk1hdGguUEkpJSgyKk1hdGguUEkpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0YmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0dzogKCh0aGlzLmd3ZC1hbmdsZSkrMipNYXRoLlBJKSUoMipNYXRoLlBJKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwb3J0dG9idHcgPSAgKDIqTWF0aC5QSSt0YWNrbGwucG9ydC5idHctbmV4dHdwLmJ0dyklMipNYXRoLlBJO1xuICAgICAgICAgICAgICAgIGlmICggcG9ydHRvYnR3IDwgdGhpcy5zdGF0ZS5neWJldm1nYW5nbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3ZlciBwb3J0IGxheWxpbmVcbiAgICAgICAgICAgICAgICAgICAgbGwucG9ydG92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocG9ydGJ0dyA8IDIqTWF0aC5QSS0yKihNYXRoLlBJLXRoaXMuc3RhdGUuZ3liZXZtZ2FuZ2xlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvdmVyIHN0YXJib2FyZCBsYXlsaW5lXG4gICAgICAgICAgICAgICAgICAgIGxsLnN0ZGJvdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBiZXR3ZWVuIGxheWxpbmVzXG4gICAgICAgICAgICAgICAgICAgIGxsLmJldHdlZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxjSW50ZXNlY3RzKGxsLCBwb3NpdGlvbiwgbmV4dHdwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIk5leHQgbWFya1wiLCBuZXh0bWFyayk7XG4gICAgICAgIG5ld1N0YXRlLm5leHRtYXJrID0gbmV4dG1hcms7XG4gICAgfVxuICAgIGNhbGNJbnRlc2VjdHMobGwsIHBvc2l0aW9uLCBuZXh0d3ApIHtcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIGRpc3RhbmNlIHRvIGJvdGggbGF5bGluZXMgdXNpbmcgdGhlIHRhcmdldCB0d2EsIHdoaWNoIGlzIHBhcmFsbGVsIHRvIHRoZSBsYXlsaW5lXG4gICAgICAgIHZhciBwaW50ZXJzZWN0ID0gbGwucG9ydC5pbnRlcnNlY3QgPSB7XG4gICAgICAgICAgICBsYXRsb246IExhdExvbi5pbnRlcnNlY3Rpb24ocG9zaXRpb24ubGF0bG9uLCBsbC5zdGJkLmJ0dywgbmV4dHdwLmxhdGxvbiwgKGxsLnBvcnQuYnR3LU1hdGguUEkpJSgyKk1hdGguUEkpKVxuICAgICAgICB9O1xuICAgICAgICB2YXIgc2ludGVyc2VjdCA9IGxsLnN0YmQuaW50ZXJzZWN0ID0ge1xuICAgICAgICAgICAgbGF0bG9uOiBMYXRMb24uaW50ZXJzZWN0aW9uKHBvc2l0aW9uLmxhdGxvbiwgbGwucG9ydC5idHcsIG5leHR3cC5sYXRsb24sIChsbC5zdGJkLmJ0dy1NYXRoLlBJKSUoMipNYXRoLlBJKSlcbiAgICAgICAgfTtcbiAgICAgICAgcGludGVyc2VjdC5kdGkgPSBwb3NpdGlvbi5sYXRsb24ucmh1bWJEaXN0YW5jZVRvKHBpbnRlcnNlY3QubGF0bG9uKTtcbiAgICAgICAgc2ludGVyc2VjdC5kdGkgPSBwb3NpdGlvbi5sYXRsb24ucmh1bWJEaXN0YW5jZVRvKHNpbnRlcnNlY3QubGF0bG9uKTtcbiAgICAgICAgcGludGVyc2VjdC5pdHcgPSBzaW50ZXJzZWN0LmxhdGxvbi5yaHVtYkRpc3RhbmNlVG8obmV4dHdwLmxhdGxvbik7XG4gICAgICAgIHNpbnRlcnNlY3QuaXR3ID0gcGludGVyc2VjdC5sYXRsb24ucmh1bWJEaXN0YW5jZVRvKGJleHR3cC5sYXRsb24pO1xuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgdG8gYm90aCBsYXlsaW5lcyB1c2luZyB0aGUgY3VycmVudCBoZWFkaW5nXG4gICAgICAgIHZhciBwaGVhZCA9IGxsLnBvcnQuaGVhZGluZyA9IHtcbiAgICAgICAgICAgIGxhdGxvbjogTGF0TG9uLmludGVyc2VjdGlvbihwb3NpdGlvbi5sYXRsb24sIHBvc2l0aW9uLmhlYWRpbmcsIG5leHR3cC5sYXRsb24sIChsbC5wb3J0LmJ0dy1NYXRoLlBJKSUoMipNYXRoLlBJKSlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNoZWFkID0gbGwuc3RiZC5oZWFkaW5nID0ge1xuICAgICAgICAgICAgbGF0bG9uOiBMYXRMb24uaW50ZXJzZWN0aW9uKHBvc2l0aW9uLmxhdGxvbiwgcG9zaXRpb24uaGVhZGluZywgbmV4dHdwLmxhdGxvbiwgKGxsLnN0YmQuYnR3LU1hdGguUEkpJSgyKk1hdGguUEkpKVxuICAgICAgICB9O1xuICAgICAgICBwaGVhZC5kdGkgPSBwb3NpdGlvbi5sYXRsb24ucmh1bWJEaXN0YW5jZVRvKHBoZWFkLmxhdGxvbik7XG4gICAgICAgIHNoZWFkLmR0aSA9IHBvc2l0aW9uLmxhdGxvbi5yaHVtYkRpc3RhbmNlVG8oc2hlYWQubGF0bG9uKTtcbiAgICAgICAgcGhlYWQuaXR3ID0gc2hlYWQubGF0bG9uLnJodW1iRGlzdGFuY2VUbyhuZXh0d3AubGF0bG9uKTtcbiAgICAgICAgc2hlYWQuaXR3ID0gcGhlYWQubGF0bG9uLnJodW1iRGlzdGFuY2VUbyhiZXh0d3AubGF0bG9uKTtcblxuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgdHRnIHRvIHRoZSBsYXlsaW5lXG4gICAgICAgIHNoZWFkLnR0aSA9IHBoZWFkLmR0aS9wb3NpdGlvbi5zcGVlZDtcbiAgICAgICAgcGhlYWQudHRpID0gc2hlYWQuZHRpL3Bvc2l0aW9uLnNwZWVkO1xuICAgICAgICBzaGVhZC50dHcgPSAocGhlYWQuZHRpK3BoZWFkLml0dykvcG9zaXRpb24uc3BlZWQ7XG4gICAgICAgIHBoZWFkLnR0dyA9IChzaGVhZC5kdGkrc2hlYWguaXR3KS9wb3NpdGlvbi5zcGVlZDtcblxuICAgIH1cblxuXG4gICAgdG9SZWxhdGl2ZUFuZ2xlKHIpIHtcbiAgICAgICAgaWYgKCByID4gTWF0aC5QSSApIHtcbiAgICAgICAgICAgIHJldHVybiByIC0gMipNYXRoLlBJOyBcbiAgICAgICAgfSBlbHNlIGlmICggciA8IC1NYXRoLlBJKSB7XG4gICAgICAgICAgICByZXR1cm4gciArIDIqTWF0aC5QSTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cblxuICAgIG1Ub0Rpc3BsYXkoZCkge1xuICAgICAgICBpZiAoIGQgPT09IHVuZGVmaW5lZCB8fCBkID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZCA8IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGQudG9GaXhlZCgwKStcIiBtXCI7XG4gICAgICAgIH0gXG4gICAgICAgIHJldHVybiBtVG9ObShkKS50b0ZpeGVkKDEpK1wiIG5tXCI7XG4gICAgfVxuICAgIHJhZFRvRGlzcGxheShyKSB7XG4gICAgICAgIGlmICggciA9PT0gdW5kZWZpbmVkIHx8IHIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByYWRUb0RlZyhyKS50b0ZpeGVkKDApK1wiwrBcIjtcbiAgICB9XG5cbiAgICBzeW1Ub0Rpc3BsYXkoYikge1xuICAgICAgICBpZiAoIHRoaXMuYm91eXNbYl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm91eXNbYl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIG1zVG9EaXNwbGF5KGIpIHtcbiAgICAgICAgaWYgKCBiID09PSB1bmRlZmluZWQgfHwgYiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiMC4wXCI7XG4gICAgICAgIH0gXG4gICAgICAgIHJldHVybiBtVG9LbihiKS50b0ZpeGVkKDEpK1wiIGtuXCI7XG4gICAgfVxuICAgIGR1cmF0aW9uVG9EaXNwbGF5KGQpIHtcbiAgICAgICAgaWYgKCBkID09PSB1bmRlZmluZWQgIHx8IGQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIi1cIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaCA9IChcIjAwMDBcIitNYXRoLmZsb29yKGQvMzYwMCkpLnN1YnN0cigtMyk7XG4gICAgICAgIHZhciBtID0gKFwiMDAwMFwiK01hdGguZmxvb3IoKGQlMzYwMCkvNjApKS5zdWJzdHIoLTIpO1xuICAgICAgICB2YXIgcyA9IChcIjAwMDBcIitNYXRoLmZsb29yKGQlNjApKS5zdWJzdHIoLTIpO1xuICAgICAgICByZXR1cm4gaCtcIjpcIittK1wiOlwiK3M7XG4gICAgfVxuXG5cbiAgcmVuZGVyUm91dGVUYWJsZSgpIHtcbiAgICB2YXIgcm93cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3V0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgciA9IHRoaXMuc3RhdGUucm91dGVbaV07XG4gICAgICAgIGlmICggci53cCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgcm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAoPHRyIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3IuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Pz8/PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICg8dHIga2V5PXtpfSA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Iud3AubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Iucm91bmRpbmd9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyLndwLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e1wiYm91eVwiK3Iud3Auc3ltfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN5bVRvRGlzcGxheShyLndwLnN5bSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ci53cC5sYXRsb24udG9TdHJpbmcoXCJkbVwiLDMpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5yYWRUb0Rpc3BsYXkoci5idHcpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5tVG9EaXNwbGF5KHIuZHR3KX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMubVRvRGlzcGxheShyLmRpc3QpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aD57dGhpcy5yYWRUb0Rpc3BsYXkoci50d2EpfTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKTtcblxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKDx0YWJsZSBjbGFzc05hbWU9XCJyb3V0ZVwiPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5leHQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Sb3VuZGluZzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Qm91eTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+bGF0bG9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5CVFcoTSk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRUVzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRXQTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIHtyb3dzfVxuXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+KTtcbiAgfVxuXG4gIHJlbmRlck1hcmtzVGFibGUoKSB7XG4gICAgdmFyIHJvd3MgPSBbXTtcbiAgICBmb3IgKCB2YXIgaWQgaW4gIHRoaXMuc3RhdGUubWFya3NEYikge1xuICAgICAgICB2YXIgbSA9IHRoaXMuc3RhdGUubWFya3NEYltpZF07XG4gICAgICAgIHJvd3MucHVzaChcbiAgICAgICAgICAgICg8dHIga2V5PXttLm5hbWV9PlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAge20ubmFtZX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAge20uZGVzY31cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e1wiYm91eVwiK20uc3ltfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3ltVG9EaXNwbGF5KG0uc3ltKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57bS5sYXRsb24udG9TdHJpbmcoXCJkbVwiLDMpfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSk7XG4gICAgfTtcbiAgICByZXR1cm4gKDx0YWJsZSBjbGFzc05hbWU9XCJtYXJrc1wiPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRlc2M8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBvc2l0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAge3Jvd3N9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+KTtcbiAgfVxuXG5cblxuICByZW5kZXJDdXJyZW50KCkge1xuICAgIGlmICggdGhpcy5zdGF0ZS5yb3V0ZS5sZW5ndGggPT09IDAgfHwgdGhpcy5zdGF0ZS5uZXh0bWFyay5pZCA9PSB1bmRlZmluZWQgfHwgdGhpcy5zdGF0ZS5yb3V0ZVt0aGlzLnN0YXRlLm5leHRtYXJrLmlkXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+Tm8gcm91dGUgZGVmaW5lZDwvZGl2PlxuICAgICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJjdXJyZW50XCI+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmV4dCBNYXJrPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5YVEU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRUVzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+QlRXPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5XQ1Y8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRURzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGF5bGluZSBCZWFyaW5nPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5MYXlsaW5lIERpc3RhbmNlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5MYXlsaW5lIFRpbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUubmV4dG1hcmsuaWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5tVG9EaXNwbGF5KHRoaXMuc3RhdGUubmV4dG1hcmsueHRlKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLm1Ub0Rpc3BsYXkodGhpcy5zdGF0ZS5uZXh0bWFyay5kdHcpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucmFkVG9EaXNwbGF5KHRoaXMuc3RhdGUubmV4dG1hcmsuYnR3KX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLm1zVG9EaXNwbGF5KHRoaXMuc3RhdGUubmV4dG1hcmsud2N2KX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLmR1cmF0aW9uVG9EaXNwbGF5KHRoaXMuc3RhdGUubmV4dG1hcmsudHRnKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnJhZFRvRGlzcGxheSh0aGlzLnN0YXRlLm5leHRtYXJrLmxheWxpbmViZWFyaW5nKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLm1Ub0Rpc3BsYXkodGhpcy5zdGF0ZS5uZXh0bWFyay5sYXlsaW5lZGlzdGFuY2UpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuZHVyYXRpb25Ub0Rpc3BsYXkodGhpcy5zdGF0ZS5uZXh0bWFyay5sYXlsaW5ldHRnKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICApO1xuXG4gICAgfVxuXG4gIH1cblxuICBjaGFuZ2VHd2QoZSkge1xuICAgIHZhciBnd2QgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLmd3ZCA9ICtnd2QqTWF0aC5QSS8xODA7XG4gICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICBnd2Q6IGd3ZFxuICAgIH07XG4gICAgdGhpcy5idWlsZFJvdXRlKG5ld1N0YXRlLCB0aGlzLnN0YXRlLmNvdXJzZSk7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH1cblxuICBjaGFuZ2VDb3Vyc2UoZSkge1xuICAgIHZhciBjb3Vyc2UgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB2YXIgbmV3U3RhdGUgPSB7XG4gICAgICAgIGNvdXJzZTogY291cnNlXG4gICAgfTtcbiAgICB0aGlzLmJ1aWxkUm91dGUobmV3U3RhdGUsIGNvdXJzZSk7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgfVxuXG5cbiAgY2hhbmdlTGF0KGUpIHtcbiAgICB2YXIgbGF0VHh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdmFyIGxhdCA9IERtcy5wYXJzZURNUyhsYXRUeHQpO1xuICAgIHZhciBwb3NpdGlvbiA9IHtcbiAgICAgICAgYWNjdXJhY3k6IC05OTksXG4gICAgICAgIGFsdGl0dWRlOiBudWxsLFxuICAgICAgICBhbHRpdHVkZUFjY3VyYWN5OiAtMSxcbiAgICAgICAgaGVhZGluZzogbnVsbCxcbiAgICAgICAgc3BlZWQ6IG51bGwsXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgbGF0bG9uOiBuZXcgTGF0TG9uKGxhdCwgdGhpcy5zdGF0ZS5wb3NpdGlvbi5sYXRsb24ubG9uKVxuICAgIH1cbiAgICB2YXIgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICBnZW9zdGF0ZTogXCJ1c2VyXCIsXG4gICAgICAgICAgICBsYXQ6IGxhdFR4dCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbiAgICAgICAgXG4gICAgfVxuICAgIHRoaXMuYnVpbGRSb3V0ZShuZXdTdGF0ZSwgdGhpcy5zdGF0ZS5jb3Vyc2UpO1xuICAgIHRoaXMudXBkYXRlTmV4dG1hcmsobmV3U3RhdGUsIHBvc2l0aW9uLCB0aGlzLnN0YXRlLm5leHRtYXJrLmlkKTtcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTsgICAgXG4gIH1cbiAgY2hhbmdlTG9uKGUpIHtcbiAgICB2YXIgbG9uVHh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdmFyIGxvbiA9IERtcy5wYXJzZURNUyhsb25UeHQpO1xuICAgIHZhciBwb3NpdGlvbiA9IHtcbiAgICAgICAgYWNjdXJhY3k6IC0xLFxuICAgICAgICBhbHRpdHVkZTogbnVsbCxcbiAgICAgICAgYWx0aXR1ZGVBY2N1cmFjeTogLTEsXG4gICAgICAgIGhlYWRpbmc6IG51bGwsXG4gICAgICAgIHNwZWVkOiBudWxsLFxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgIGxhdGxvbjogbmV3IExhdExvbih0aGlzLnN0YXRlLnBvc2l0aW9uLmxhdGxvbi5sYXQsIGxvbilcbiAgICB9XG4gICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgZ2Vvc3RhdGU6IFwidXNlclwiLFxuICAgICAgICAgICAgbG9uOiBsb25UeHQsXG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24gICAgICAgIFxuICAgIH1cbiAgICB0aGlzLmJ1aWxkUm91dGUobmV3U3RhdGUsIHRoaXMuc3RhdGUuY291cnNlKTtcbiAgICB0aGlzLnVwZGF0ZU5leHRtYXJrKG5ld1N0YXRlLCBwb3NpdGlvbix0aGlzLnN0YXRlLm5leHRtYXJrLmlkKTtcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuICBjaGFuZ2VHZW9zdGF0ZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGdlb3N0YXRlOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbih0aGlzLmdldExvY2F0aW9uLCB0aGlzLnBvc2l0aW9uRXJyb3IsIHtcbiAgICAgICAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSwgXG4gICAgICAgICAgICBtYXhpbXVtQWdlICAgICAgICA6IDMwMDAwLCBcbiAgICAgICAgICAgIHRpbWVvdXQgICAgICAgICAgIDogMjcwMDBcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlXCIgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRkaW5nXCI+SW5wdXRzPC9kaXY+XG4gICAgICAgIENvdXJzZSA8aW5wdXQgbmFtZT1cImNvdXJzZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuY291cnNlfSBvbkNoYW5nZT17dGhpcy5jaGFuZ2VDb3Vyc2V9IC8+XG4gICAgICAgIEdXRCAgICA8aW5wdXQgbmFtZT1cImd3ZFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5nd2R9ICBzdGVwPVwiMVwiIG1pbj1cIjBcIiBtYXg9XCIzNTlcIiAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUd3ZH0gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgTGF0TG9uICAgPGlucHV0IG5hbWU9XCJsYXRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmxhdH0gICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUxhdH0gLz4gXG4gICAgICAgIDxpbnB1dCBuYW1lPVwibG9uXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5sb259ICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VMb259IC8+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwiZ2Vvc3RhdGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmdlb3N0YXRlfSAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlR2Vvc3RhdGV9IC8+XG4gICAgICAgIHt0aGlzLnN0YXRlLnBvc2l0aW9uLmxhdGxvbi50b1N0cmluZyhcImRtXCIsMyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRkaW5nXCI+V2VhdGhlcjwvZGl2PlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93ZWF0aGVyZmlsZS5jb20vR0JSMDAwMDE0Jnd0PUtUU1wiID5MeW1pbmd0b24gU3RhcnRpbmcgUGxhdGZvcm08L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3dlYXRoZXJmaWxlLmNvbS9SUFIwMDAxNTQmd3Q9S1RTXCIgPlJ5ZGUgUGllcjwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd2VhdGhlcmZpbGUuY29tL0dCUjAwMDAyJnd0PUtUU1wiID5IdXJzdCBDYXN0bGU8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3dlYXRoZXJmaWxlLmNvbS9HQlIwMDAwNCZ3dD1LVFNcIiA+UG9vbDwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZGluZ1wiPlRvIG5leHQgbWFyazwvZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJDdXJyZW50KCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGRpbmdcIj5SYWNlIFBsYW48L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3V0ZVRhYmxlKCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGRpbmdcIj5BdmFpbGFibGUgTWFya3M8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNYXJrc1RhYmxlKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvdXJzZS5qc3giLCIvKmpzaGludCBub2RlOnRydWUgKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ291cnNlIGZyb20gJy4vQ291cnNlLmpzeCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG5cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5zb3VyY2VQcmlvcml0eSA9IHByb3BzLnNvdXJjZVByaW9yaXR5O1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICB9XG5cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgdG8gcmVuZGVyXCIpO1xuICAgIHJldHVybiAoIFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxDb3Vyc2UgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyAgPENhbGN1bGF0aW9ucyAgZGF0YWJ1cz17dGhpcy5kYXRhYnVzfSBzb3VyY2VJZD1cIm5tZWFGcm9tRmlsZS5JSVwiIC8+XG5cbmNvbnN0IGVsZW1lbnQgPSA8QXBwIHNvdXJjZVByaW9yaXR5PVwiXCIgPjwvQXBwPjsgICAgXG5cbmNvbnNvbGUubG9nKFwiTm93IFJ1bm5pbmdcIik7XG5yZW5kZXIoZWxlbWVudCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFjdFwiKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanN4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG4vKkBmb250LWZhY2Uge1xcbiAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICBzcmM6ICB1cmwoJy4vZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoJy4vZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICBmb250LXN0eWxlOiBub3JtYWw7XFxufSovXFxuXFxuLypcXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qL1xcblxcbi8qLmNoZWNrY3Nzd29ya2luZyB7XFxuICBjb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2ljb24ucG5nJyk7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxufSovXFxuXFxuLyogU1ZHIFVJIERheSBhbmQgY3NfbmlnaHQgKi9cXG5cXG5cXG5cXG5cXG4uY3Nfbm9ybWFsIHtcXG4gICAgc3Ryb2tlOiBibGFjaztcXG4gICAgZmlsbDogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5jc19pbnZlcnQge1xcbiAgICBzdHJva2U6IHdoaXRlO1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNzX25pZ2h0IHtcXG4gICAgc3Ryb2tlOiByZWQ7XFxuICAgIGZpbGw6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcblxcblxcblxcblxcblxcblxcbi5yZWFjdC1ncmlkLWxheW91dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMjAwbXMgZWFzZTtcXG59XFxuLnJlYWN0LWdyaWQtaXRlbSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQsIHRvcDtcXG59XFxuLnJlYWN0LWdyaWQtaXRlbS5jc3NUcmFuc2Zvcm1zIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcXG59XFxuLnJlYWN0LWdyaWQtaXRlbS5yZXNpemluZyB7XFxuICB6LWluZGV4OiAxO1xcbiAgd2lsbC1jaGFuZ2U6IHdpZHRoLCBoZWlnaHQ7XFxufVxcblxcbi5yZWFjdC1ncmlkLWl0ZW0ucmVhY3QtZHJhZ2dhYmxlLWRyYWdnaW5nIHtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxuICB6LWluZGV4OiAzO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG59XFxuXFxuLnJlYWN0LWdyaWQtaXRlbS5yZWFjdC1ncmlkLXBsYWNlaG9sZGVyIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMG1zO1xcbiAgei1pbmRleDogMjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnJlYWN0LWdyaWQtaXRlbSA+IC5yZWFjdC1yZXNpemFibGUtaGFuZGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm90dG9tOiAtNnB4O1xcbiAgcmlnaHQ6IC02cHg7XFxuICBjdXJzb3I6IHNlLXJlc2l6ZTtcXG59XFxuXFxuLmNzX25vcm1hbCAucmVhY3QtZ3JpZC1pdGVtID4gLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDNweDtcXG4gIGJvdHRvbTogM3B4O1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogNXB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLmNzX2ludmVydCAucmVhY3QtZ3JpZC1pdGVtID4gLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGU6OmFmdGVyLCAuY3NfbmlnaHQgLnJlYWN0LWdyaWQtaXRlbSA+IC5yZWFjdC1yZXNpemFibGUtaGFuZGxlOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzcHg7XFxuICBib3R0b206IDNweDtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwLjQpO1xcbn1cXG5cXG5cXG4ucmVhY3QtcmVzaXphYmxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQTJJRFlpSUhOMGVXeGxQU0ppWVdOclozSnZkVzVrTFdOdmJHOXlPaU5tWm1abVptWXdNQ0lnZUQwaU1IQjRJaUI1UFNJd2NIZ2lJSGRwWkhSb1BTSTJjSGdpSUdobGFXZG9kRDBpTm5CNElqNDhaeUJ2Y0dGamFYUjVQU0l3TGpNd01pSStQSEJoZEdnZ1pEMGlUU0EySURZZ1RDQXdJRFlnVENBd0lEUXVNaUJNSURRZ05DNHlJRXdnTkM0eUlEUXVNaUJNSURRdU1pQXdJRXdnTmlBd0lFd2dOaUEySUV3Z05pQTJJRm9pSUdacGJHdzlJaU13TURBd01EQWlMejQ4TDJjK1BDOXpkbWMrJyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XFxuICBwYWRkaW5nOiAwIDNweCAzcHggMDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY3Vyc29yOiBzZS1yZXNpemU7XFxufVxcblxcblxcbi5zZXR0aW5ncyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MHB4O1xcbiAgICBsZWZ0OiA0MHB4O1xcbiAgICByaWdodDogNDBweDtcXG4gICAgYm90dG9tOiA0MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA0LCAyMDQsIDIwNCk7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5jc19pbnZlcnQgLnNldHRpbmdzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNCwgMjA0LCAyMDQpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5jc19uaWdodCAuc2V0dGluZ3Mge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5zZXR0aW5nc19hZnRlci1vcGVuIHtcXG59XFxuLnNldHRpbmdzX2JlZm9yZS1jbG9zZSB7XFxufVxcbi5zZXR0aW5nc19iZWZvcmUtY2xvc2Uge1xcblxcbn1cXG4uc2V0dGluZ3NPdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXG4gICAgdG9wOiAwcHg7IFxcbiAgICBsZWZ0OiAwcHg7IFxcbiAgICByaWdodDogMHB4OyBcXG4gICAgYm90dG9tOiAwcHg7IFxcbn1cXG4uY3Nfbm9ybWFsIC5zZXR0aW5nc092ZXJsYXksIC5jc19uaWdodCAuc2V0dGluZ3NPdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjc1KTtcXG59XFxuXFxuLmNzX2ludmVydCAuc2V0dGluZ3NPdmVybGF5LCAuY3NfbmlnaHQgLnNldHRpbmdzT3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxufVxcbi5zZXR0aW5nc092ZXJsYXlfYWZ0ZXItb3BlbiB7XFxuXFxufVxcbi5zZXR0aW5nc092ZXJsYXlfYmVmb3JlLWNsb3NlIHtcXG59XFxuXFxuLmdsb2JhbFNldHRpbmdzQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTBweDtcXG4gICAgdG9wOiAxMHB4OyAgICAgICAgXFxufVxcblxcbi5nbG9iYWxTZXR0aW5nc0J1dHRvbiA+IGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuXFxuLnNldHRpbmdzQ2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIHRvcDogNXB4OyAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uc2V0dGluZ3NDbG9zZSA+IGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uc2V0dGluZ3NBcHBseSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEzNnB4O1xcbiAgICBib3R0b206IDE3cHg7XFxufVxcblxcbi5zZXR0aW5nc0FwcGx5ID4gaW5wdXQge1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MmIzZTY7XFxuICAgIGJvcmRlci1jb2xvcjogI2EwYjJjMTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZy10b3A6IDhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uY3NfaW52ZXJ0IC5zZXR0aW5nc0FwcGx5ID4gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJiM2U2N2E7XFxuICAgIGJvcmRlci1jb2xvcjogI2EwYjJjMTg3O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmNzX25pZ2h0IC5zZXR0aW5nc0FwcGx5ID4gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwZDQ7XFxuICAgIGJvcmRlci1jb2xvcjogI2YwMDtcXG4gICAgY29sb3I6ICMyMjI7XFxufVxcblxcblxcbi5zZXR0aW5nc0NhbmNlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDE3cHg7XFxuICAgIGJvdHRvbTogMTdweDtcXG59XFxuXFxuLnNldHRpbmdzQ2FuY2VsID4gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IHNvbGlkICM3OTc2NzY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZy10b3A6IDhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY3NfaW52ZXJ0IC5zZXR0aW5nc0NhbmNlbCA+IGJ1dHRvbiB7XFxuICAgIGJvcmRlci1jb2xvcjogc29saWQgI2FhYTtcXG59XFxuXFxuLmNzX25pZ2h0IC5zZXR0aW5nc0NhbmNlbCA+IGJ1dHRvbiB7XFxuICAgIGJvcmRlci1jb2xvcjogc29saWQgI2EwMDtcXG59XFxuXFxuLnRhYkNvbnRyb2xzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRvcDogNXB4O1xcbiAgICByaWdodDogMXB4O1xcbn1cXG5cXG5cXG4udGFiQ29udHJvbHMgPiBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5cXG4uZHJvcERvd24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0xcHg7XFxuICAgIHRvcDogMjlweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcXG4gICAgd2lkdGg6IDEyOXB4O1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5jc19ub3JtYWwgLmRyb3BEb3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjY2Y3OyAgXFxufVxcblxcbi5jc19pbnZlcnQgLmRyb3BEb3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjY2Y3OyAgXFxufVxcbi5jc19uaWdodCAuZHJvcERvd24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjZjc7ICBcXG59XFxuXFxuLmRyb3BEb3duID4gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLmNlbGxDb250cm9scyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICByaWdodDogLThweDtcXG4gICAgdG9wOiAtMnB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2VsbENvbnRyb2xzID4gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lOyAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNldHRpbmdzRm9ybSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDkwcHg7XFxuICAgIHJpZ2h0OiAyNSU7XFxuICAgIHRvcDogOTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAxMXB4O1xcbn1cXG5cXG4uc2V0dGluZ3NGb3JtIGxhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4uc2V0dGluZ3NGb3JtIGlucHV0ICB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5jc19uaWdodCAuc2V0dGluZ3NGb3JtIGlucHV0ICB7XFxuICBib3JkZXItY29sb3I6ICNjMDA7XFxufVxcblxcblxcbi5zZXR0aW5nc0Zvcm0gc2VsZWN0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmNzX25pZ2h0IC5zZXR0aW5nc0Zvcm0gc2VsZWN0ICB7XFxuICBib3JkZXItY29sb3I6ICNjMDA7XFxufVxcblxcblxcbi5zZXR0aW5nc0Zvcm0gLmhlbHAge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDI7XFxuICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4uc2V0dGluZ3NGb3JtIC5zZXR0aW5nc0dyb3VwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDExcHg7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcXG59XFxuXFxuLnNldHRpbmdzRm9ybSAuc2V0dGluZ3NHcm91cCA+IGRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcXG59XFxuXFxuXFxuLyogQ2FudmFzIGJhc2VkIGluc3RydW1lbnRzICovXFxuXFxuLmNlbGxDb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAwcHg7IFxcbiAgcmlnaHQ6IDBweDsgIFxcbn1cXG5cXG4uaW5zdHJ1bWVudENvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMHB4OyBcXG59XFxuLmNhbnZhc0hvbGRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDBweDsgXFxufVxcbi5pbnN0cnVtZW50Q29udGFpbmVyIGNhbnZhcyB7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDBweDsgXFxufVxcbi5jc19pbnZlcnQgLmluc3RydW1lbnRDb250YWluZXIgY2FudmFzIHsgXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xcbn1cXG4uY3NfbmlnaHQgLmluc3RydW1lbnRDb250YWluZXIgY2FudmFzIHsgXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcbi5jc19ub3JtYWwgLmRhdGFCb3hGaWxsIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjE1LDIxNSwyMTUsMC43KTsgICAgICBcXG59XFxuXFxuLmNzX2ludmVydCAuZGF0YUJveEZpbGwsIC5jc19uaWdodCAuZGF0YUJveEZpbGwgIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsNDAsNDAsMC4zKTsgICAgICBcXG59XFxuXFxuLmRhdGFCb3gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyAgIFxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNzX2ludmVydCAuZGF0YUJveCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmNzX25pZ2h0IC5kYXRhQm94IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmRhdGFCb3hGdWxsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyAgIFxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDkzcHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNzX2ludmVydCAuZGF0YUJveEZ1bGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXG59XFxuXFxuLmNzX25pZ2h0IC5kYXRhQm94RnVsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5kYXRhQm94VmFsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4uZGF0YUJveFVuaXRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogIDJweDtcXG4gIHJpZ2h0OiAgMnB4OyBcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmRhdGFCb3hUaXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206ICAycHg7XFxuICBsZWZ0OiAgMnB4OyBcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmlucHV0Rm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbn1cXG4uaW5wdXRGb3JtID4gbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcblxcblxcblxcbi5zdHJpcENoYXJ0IC5heGlzIHtcXG4gICAgc3Ryb2tlLXdpZHRoOiAxO1xcbn1cXG5cXG4uY3Nfbm9ybWFsIC5zdHJpcENoYXJ0IC5heGlzIC50aWNrIGxpbmUge1xcbiAgICBzdHJva2U6IGJsYWNrO1xcbn1cXG4uY3NfaW52ZXJ0IC5zdHJpcENoYXJ0IC5heGlzIC50aWNrIGxpbmUge1xcbiAgICBzdHJva2U6IHdoaXRlO1xcbn1cXG4uY3NfbmlnaHQgLnN0cmlwQ2hhcnQgLmF4aXMgLnRpY2sgbGluZSB7XFxuICAgIHN0cm9rZTogcmVkO1xcbn1cXG5cXG4uY3Nfbm9ybWFsIC5zdHJpcENoYXJ0IC5heGlzIC50aWNrIHRleHQge1xcbiAgICBmaWxsOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAwLjdlbTtcXG59XFxuLmNzX2ludmVydCAuc3RyaXBDaGFydCAuYXhpcyAudGljayB0ZXh0IHtcXG4gICAgZmlsbDogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMC43ZW07XFxufVxcbi5jc19uaWdodCAuc3RyaXBDaGFydCAuYXhpcyAudGljayB0ZXh0IHtcXG4gICAgZmlsbDogcmVkO1xcbiAgICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4uY3Nfbm9ybWFsIC5zdHJpcENoYXJ0IC5heGlzIC5kb21haW4ge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2U6IGJsYWNrO1xcbn1cXG4uY3NfaW52ZXJ0IC5zdHJpcENoYXJ0IC5heGlzIC5kb21haW4ge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2U6IHdoaXRlO1xcbn1cXG4uY3NfbmlnaHQgLnN0cmlwQ2hhcnQgLmF4aXMgLmRvbWFpbiB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogcmVkO1xcbn1cXG5cXG4uY3Nfbm9ybWFsIC5zdHJpcENoYXJ0IC5ncm91cCB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogYmxhY2s7XFxuICAgIHN0cm9rZS13aWR0aDogMS41O1xcbn1cXG4uY3NfaW52ZXJ0IC5zdHJpcENoYXJ0IC5ncm91cCB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogd2hpdGU7XFxuICAgIHN0cm9rZS13aWR0aDogMS41O1xcbn1cXG4uY3NfbmlnaHQgLnN0cmlwQ2hhcnQgLmdyb3VwIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlOiByZWQ7XFxuICAgIHN0cm9rZS13aWR0aDogMS41O1xcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0geTRFNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9