
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(434);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Andrew/Desktop/try-next/components/header.js";

exports.default = function () {
  return _react2.default.createElement("div", { className: "header", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("nav", { className: "main-nav", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("a", { href: "/", "class": "brand", __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "WorkBook"), _react2.default.createElement("ul", { className: "main-nav-wrapper", __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("li", { className: "main-nav-item", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_link2.default, { href: "/one", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("a", { className: "main-nav-link", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "One"))), _react2.default.createElement("li", { className: "main-nav-item", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_link2.default, { href: "/two", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("a", { className: "main-nav-link", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Two"))), _react2.default.createElement("li", { className: "main-nav-item", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_link2.default, { href: "/three", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("a", { className: "main-nav-link", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Three"))))));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Andrew/Desktop/try-next/components/header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Andrew/Desktop/try-next/components/header.js"); } } })();

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(75);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(65);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(30);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(29);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(555);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

var _link = __webpack_require__(434);

var _link2 = _interopRequireDefault(_link);

var _status = __webpack_require__(565);

var _status2 = _interopRequireDefault(_status);

var _task = __webpack_require__(566);

var _task2 = _interopRequireDefault(_task);

var _header = __webpack_require__(526);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Andrew/Desktop/try-next/pages/index.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'App', 'data-jsx': 1427830469,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('title', {
        'data-jsx': 1427830469,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'WorkBook | Feed-Based Task Tracking')), _react2.default.createElement('div', { className: 'center-wrapper', 'data-jsx': 1427830469,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('h1', {
        'data-jsx': 1427830469,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'To Do'), _react2.default.createElement(_status2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('ul', { className: 'tasklist', 'data-jsx': 1427830469,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.props.data.map(function (i) {
        return _react2.default.createElement(_task2.default, { text: i, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        });
      }))), _react2.default.createElement(_style2.default, {
        styleId: 1427830469,
        css: '\n    \t\t\t.App {\n    \t\t\t\tfont-family: Helvetica, sans-serif;\n    \t\t\t}\n\n\n    \t\t\th1 {\n    \t\t\t\tfont-weight: 600;\n    \t\t\t}\n\n    \t\t\th2 {\n    \t\t\t\tfont-weight: 400;\n    \t\t\t}\n\n          \n\n        \t'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', { data: ['one', 'two', 'three', 'four', 'five'] });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Andrew/Desktop/try-next/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Andrew/Desktop/try-next/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = __webpack_require__(555);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Andrew/Desktop/try-next/components/status.js";

exports.default = function () {
	return _react2.default.createElement("div", { className: "status", "data-jsx": 1747616516,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 3
		}
	}, _react2.default.createElement("form", {
		"data-jsx": 1747616516,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, _react2.default.createElement("input", { name: "task", type: "text", placeholder: "Type a task...", "data-jsx": 1747616516,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}), _react2.default.createElement("input", { name: "priority", type: "number", placeholder: "1", min: "1", max: "3", "data-jsx": 1747616516,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	})), _react2.default.createElement(_style2.default, {
		styleId: 1747616516,
		css: ".status[data-jsx=\"1747616516\"] input[data-jsx=\"1747616516\"] {outline: none;padding: 10px;width: 12em;font-size: 14pt;font-weight: 300;border: 1px solid rgba(0,0,0,.15);border-radius: 3px;-webkit-transition: border 150ms ease-in-out;-moz-transition: border 150ms ease-in-out;-ms-transition: border 150ms ease-in-out;transition: border 150ms ease-in-out;}.status[data-jsx=\"1747616516\"] input[data-jsx=\"1747616516\"]:focus {border: 1px solid rgba(66, 134, 244, .85);}.status[data-jsx=\"1747616516\"] input[name=\"priority\"][data-jsx=\"1747616516\"] {display: inline-block;margin: 10px;width: 2em;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdHVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9jLEFBQ0ksNkRBQ0EsY0FDQSxjQUNGLFlBQ0ksZ0JBQ0MsaUJBQ2lCLGtDQUNmLG1CQUNrQixxS0FDckMsQ0FFb0IsbUVBQ3NCLDBDQUMxQyxDQUUrQiw4RUFDVCxzQkFDVCxhQUNGLFdBQ1giLCJmaWxlIjoiY29tcG9uZW50cy9zdGF0dXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0FuZHJldy9EZXNrdG9wL3RyeS1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzXCI+XG5cdFx0PGZvcm0+XG5cdFx0XHQ8aW5wdXQgbmFtZT1cInRhc2tcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBhIHRhc2suLi5cIj48L2lucHV0PlxuXHRcdFx0PGlucHV0IG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIjFcIiBtaW49XCIxXCIgbWF4PVwiM1wiPjwvaW5wdXQ+XG5cdFx0PC9mb3JtPlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdC5zdGF0dXMgaW5wdXQge1xuXHRcdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHR3aWR0aDogMTJlbTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB0O1xuXHRcdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRcdFx0dHJhbnNpdGlvbjogYm9yZGVyIDE1MG1zIGVhc2UtaW4tb3V0O1xuXHRcdFx0fVxuXG5cdFx0XHQuc3RhdHVzIGlucHV0OmZvY3VzIHtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSg2NiwgMTM0LCAyNDQsIC44NSk7XG5cdFx0XHR9XG5cblx0XHRcdC5zdGF0dXMgaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdIHtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdHdpZHRoOiAyZW07XG5cdFx0XHR9XG5cdFx0YH1cblx0XHQ8L3N0eWxlPlxuXHQ8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=components/status.js */"
	}));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Andrew/Desktop/try-next/components/status.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Andrew/Desktop/try-next/components/status.js"); } } })();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(30);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(29);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(555);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Andrew/Desktop/try-next/components/task.js";


var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	function _class(props) {
		(0, _classCallCheck3.default)(this, _class);

		return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
	}

	(0, _createClass3.default)(_class, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement("li", { className: "task", "data-jsx": 2649985292,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 9
				}
			}, this.props.text, _react2.default.createElement(_style2.default, {
				styleId: 2649985292,
				css: ".task[data-jsx=\"2649985292\"] {display:-webkit-flex; display:flex;justify-content: center;font-weight: 300;width: 50%;padding: 20px;margin: 0 auto;border: 1px solid #efefef;border-top: none;list-style-type: none;-webkit-transition: all 200ms ease-in-out;-moz-transition: all 200ms ease-in-out;-ms-transition: all 200ms ease-in-out;transition: all 200ms ease-in-out;}.task[data-jsx=\"2649985292\"]:nth-child(1) {border-top: 1px solid #efefef !important;}.task[data-jsx=\"2649985292\"]:hover {background: #efefef;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFzay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVZSxBQUNKLDhCQUNRLG1DQUNVLHdCQUNQLGlCQUNOLFdBQ0csY0FDQyxlQUNXLDBCQUNULGlCQUNLLHNCQUNZLHlKQUNsQyxDQUVtQiwyQ0FDc0IseUNBQ3pDLENBRVksb0NBQ1Esb0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvdGFzay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvQW5kcmV3L0Rlc2t0b3AvdHJ5LW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHQ8bGkgY2xhc3NOYW1lPVwidGFza1wiPlxuXHRcdFx0e3RoaXMucHJvcHMudGV4dH1cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0LnRhc2sge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcblx0XHRcdFx0XHRib3JkZXItdG9wOiBub25lO1xuXHRcdFx0XHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQudGFzazpudGgtY2hpbGQoMSkge1xuXHRcdFx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWZlZmVmICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQudGFzazpob3ZlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2VmZWZlZjtcblx0XHRcdFx0fVxuXHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9saT5cblx0XHQpXG5cblx0fVxufVxuIl19 */\n/*@ sourceURL=components/task.js */"
			}));
		}
	}]);

	return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Andrew/Desktop/try-next/components/task.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Andrew/Desktop/try-next/components/task.js"); } } })();

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(564);


/***/ })

},[567]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz9jNTg3NGY5Iiwid2VicGFjazovLy8uL3BhZ2VzP2M1ODc0ZjkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdGF0dXMuanM/YzU4NzRmOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rhc2suanM/YzU4NzRmOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztrQkFBZTt5QkFDYix1QkFBSyxXQUFVO2dCQUFmO2tCQUNFO0FBREY7R0FBQSxrQkFDRSx1QkFBSyxXQUFVO2dCQUFmO2tCQUNFO0FBREY7cUJBQ0UscUJBQUcsTUFBSyxLQUFJLFNBQU07Z0JBQWxCO2tCQUFBO0FBQUE7S0FDQSxtREFBSSxXQUFVO2dCQUFkO2tCQUNFO0FBREY7cUJBQ0Usc0JBQUksV0FBVTtnQkFBZDtrQkFBOEI7QUFBOUI7cUJBQStCLGdDQUFLLE1BQUs7Z0JBQVg7a0JBQWtCO0FBQWxCO3FCQUFrQixxQkFBRyxXQUFVO2dCQUFiO2tCQUFBO0FBQUE7S0FDaEQsZ0RBQUksV0FBVTtnQkFBZDtrQkFBOEI7QUFBOUI7cUJBQStCLGdDQUFLLE1BQUs7Z0JBQVg7a0JBQWtCO0FBQWxCO3FCQUFrQixxQkFBRyxXQUFVO2dCQUFiO2tCQUFBO0FBQUE7S0FDaEQsZ0RBQUksV0FBVTtnQkFBZDtrQkFBOEI7QUFBOUI7cUJBQStCLGdDQUFLLE1BQUs7Z0JBQVg7a0JBQW9CO0FBQXBCO3FCQUFvQixxQkFBRyxXQUFVO2dCQUFiO2tCQUFBO0FBQUE7S0FBQTtBQVAxRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRk87Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBU0g7NkJBQ0ksdUJBQUssV0FBVSxtQkFBZjs7b0JBQUE7c0JBQ0c7QUFESDtPQUFBLGtCQUNJOztvQkFBRDtzQkFDQztBQUREO0FBQUEseUJBQ0M7b0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUVGLGdGQUFLLFdBQVUsOEJBQWY7O29CQUFBO3NCQUNDO0FBREQ7eUJBQ0M7b0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUNBLDBCQUFDOztvQkFBRDtzQkFDRztBQURIO0FBQUEsMEJBQ0csc0JBQUksV0FBVSx3QkFBZDs7b0JBQUE7c0JBQ0E7QUFEQTtjQUNLLE1BQU0sS0FBSyxJQUFJLFVBQUMsR0FDckI7K0JBQVMsZ0NBQUssTUFBTTtzQkFBWjt3QkFDUjtBQURRO1NBQUE7QUFEUjtpQkFSTjthQWlDTDtBQWpDSzs7Ozs7Ozs7OztpREFMQyxFQUFDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sU0FBUyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBRm5CLGdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm5DOzs7Ozs7OztrQkFBZTt3QkFDZCx1QkFBSyxXQUFVLHNCQUFmOzthQUFBO2VBQ0M7QUFERDtFQUFBLGtCQUNDO2NBQUE7O2FBQUE7ZUFDQztBQUREO0FBQUEsNkNBQ1EsTUFBSyxRQUFPLE1BQUssUUFBTyxhQUFZLDhCQUEzQzs7YUFBQTtlQUNBO0FBREE7OENBQ08sTUFBSyxZQUFXLE1BQUssVUFBUyxhQUFZLEtBQUksS0FBSSxLQUFJLEtBQUksaUJBQWpFOzthQUFBO2VBQUE7QUFBQTs7V0FIRjtPQUFBO0FBQUE7QUFERCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0NDQzs7aUJBQVksT0FBTztzQ0FBQTs7K0hBRWxCOzs7OzsyQkFHQTswQkFDQSxzQkFBSSxXQUFVLG9CQUFkOztlQUFBO2lCQUNFO0FBREY7SUFBQSxPQUNPLE1BQU07YUFEYjtTQTRCQTtBQTVCQTs7Ozs7RUFQMkIsZ0JBQU0iLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cbiAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3M9XCJicmFuZFwiPldvcmtCb29rPC9hPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1haW4tbmF2LXdyYXBwZXJcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1haW4tbmF2LWl0ZW1cIj48TGluayBocmVmPVwiL29uZVwiPjxhIGNsYXNzTmFtZT1cIm1haW4tbmF2LWxpbmtcIj5PbmU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYWluLW5hdi1pdGVtXCI+PExpbmsgaHJlZj1cIi90d29cIj48YSBjbGFzc05hbWU9XCJtYWluLW5hdi1saW5rXCI+VHdvPC9hPjwvTGluaz48L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWFpbi1uYXYtaXRlbVwiPjxMaW5rIGhyZWY9XCIvdGhyZWVcIj48YSBjbGFzc05hbWU9XCJtYWluLW5hdi1saW5rXCI+VGhyZWU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICA8L2Rpdj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFN0YXR1cyBmcm9tICcuLi9jb21wb25lbnRzL3N0YXR1cy5qcydcbmltcG9ydCBUYXNrIGZyb20gJy4uL2NvbXBvbmVudHMvdGFzay5qcydcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIuanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuXHRcdHJldHVybiB7ZGF0YTogWydvbmUnLCAndHdvJywgJ3RocmVlJywgJ2ZvdXInLCAnZml2ZSddfVxuXHR9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgICAgXHQ8SGVhZD5cbiAgICAgICAgICBcdFx0PHRpdGxlPldvcmtCb29rIHwgRmVlZC1CYXNlZCBUYXNrIFRyYWNraW5nPC90aXRsZT5cbiAgICAgICAgICBcdDwvSGVhZD5cbiAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLXdyYXBwZXJcIj5cbiAgICAgICAgXHRcdFx0PGgxPlRvIERvPC9oMT5cbiAgICAgICAgXHRcdFx0PFN0YXR1cyAvPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFza2xpc3RcIj5cbiAgICAgICAgICBcdFx0XHR7dGhpcy5wcm9wcy5kYXRhLm1hcCgoaSkgPT4ge1xuICAgICAgICAgIFx0XHRcdFx0cmV0dXJuICg8VGFzayB0ZXh0PXtpfSAvPik7XG4gICAgICAgICAgXHRcdFx0fSl9XG4gICAgICAgICAgXHRcdDwvdWw+XG4gICAgICAgIFx0XHQ8L2Rpdj5cblxuICAgICAgICBcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgXHRcdFx0LkFwcCB7XG4gICAgXHRcdFx0XHRmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIFx0XHRcdH1cblxuXG4gICAgXHRcdFx0aDEge1xuICAgIFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRoMiB7XG4gICAgXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuICAgIFx0XHRcdH1cblxuICAgICAgICAgIFxuXG4gICAgICAgIFx0YH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzXCI+XG5cdFx0PGZvcm0+XG5cdFx0XHQ8aW5wdXQgbmFtZT1cInRhc2tcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBhIHRhc2suLi5cIj48L2lucHV0PlxuXHRcdFx0PGlucHV0IG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIjFcIiBtaW49XCIxXCIgbWF4PVwiM1wiPjwvaW5wdXQ+XG5cdFx0PC9mb3JtPlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdC5zdGF0dXMgaW5wdXQge1xuXHRcdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHR3aWR0aDogMTJlbTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB0O1xuXHRcdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRcdFx0dHJhbnNpdGlvbjogYm9yZGVyIDE1MG1zIGVhc2UtaW4tb3V0O1xuXHRcdFx0fVxuXG5cdFx0XHQuc3RhdHVzIGlucHV0OmZvY3VzIHtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSg2NiwgMTM0LCAyNDQsIC44NSk7XG5cdFx0XHR9XG5cblx0XHRcdC5zdGF0dXMgaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdIHtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdHdpZHRoOiAyZW07XG5cdFx0XHR9XG5cdFx0YH1cblx0XHQ8L3N0eWxlPlxuXHQ8L2Rpdj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc3RhdHVzLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0PGxpIGNsYXNzTmFtZT1cInRhc2tcIj5cblx0XHRcdHt0aGlzLnByb3BzLnRleHR9XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdC50YXNrIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XG5cdFx0XHRcdFx0Ym9yZGVyLXRvcDogbm9uZTtcblx0XHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnRhc2s6bnRoLWNoaWxkKDEpIHtcblx0XHRcdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2VmZWZlZiAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnRhc2s6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlZmVmZWY7XG5cdFx0XHRcdH1cblx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvbGk+XG5cdFx0KVxuXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFzay5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        