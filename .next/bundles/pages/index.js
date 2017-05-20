
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
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: "/", "class": "brand", __source: {
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
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: "/one", __source: {
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

var _jsxFileName = "/Users/Andrew/Desktop/try-next/components/status.js";


var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	function _class(props) {
		(0, _classCallCheck3.default)(this, _class);

		var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(_class, [{
		key: "handleSubmit",
		value: function handleSubmit(event) {
			event.preventDefault();
			this.props.data.push(event.target.value);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", { className: "status", "data-jsx": 74545828,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, _react2.default.createElement("form", { onSubmit: this.handleSubmit, "data-jsx": 74545828,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, _react2.default.createElement("input", { name: "task", type: "text", placeholder: "Type a task...", "data-jsx": 74545828,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}), _react2.default.createElement("input", { name: "priority", type: "number", placeholder: "1", min: "1", max: "3", "data-jsx": 74545828,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			})), _react2.default.createElement(_style2.default, {
				styleId: 74545828,
				css: ".status[data-jsx=\"74545828\"] input[data-jsx=\"74545828\"] {outline: none;padding: 10px;width: 12em;font-size: 14pt;font-weight: 300;border: 1px solid rgba(0,0,0,.15);border-radius: 3px;-webkit-transition: border 150ms ease-in-out;-moz-transition: border 150ms ease-in-out;-ms-transition: border 150ms ease-in-out;transition: border 150ms ease-in-out;}.status[data-jsx=\"74545828\"] input[data-jsx=\"74545828\"]:focus {border: 1px solid rgba(66, 134, 244, .85);}.status[data-jsx=\"74545828\"] input[name=\"priority\"][data-jsx=\"74545828\"] {display: inline-block;margin: 10px;width: 2em;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdHVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CZ0IsQUFDSSx5REFDQSxjQUNBLGNBQ0YsWUFDSSxnQkFDQyxpQkFDaUIsa0NBQ2YsbUJBQ2tCLHFLQUNyQyxDQUVvQiwrREFDc0IsMENBQzFDLENBRStCLDBFQUNULHNCQUNULGFBQ0YsV0FDWCIsImZpbGUiOiJjb21wb25lbnRzL3N0YXR1cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvQW5kcmV3L0Rlc2t0b3AvdHJ5LW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aGFuZGxlU3VibWl0KGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnByb3BzLmRhdGEucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0YXR1c1wiPlxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwidGFza1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUeXBlIGEgdGFzay4uLlwiPjwvaW5wdXQ+XG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIjFcIiBtaW49XCIxXCIgbWF4PVwiM1wiPjwvaW5wdXQ+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5zdGF0dXMgaW5wdXQge1xuXHRcdFx0XHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTJlbTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRwdDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3JkZXIgMTUwbXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnN0YXR1cyBpbnB1dDpmb2N1cyB7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY2LCAxMzQsIDI0NCwgLjg1KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuc3RhdHVzIGlucHV0W25hbWU9XCJwcmlvcml0eVwiXSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/status.js */"
			}));
		}
	}]);

	return _class;
}(_react2.default.Component);

exports.default = _class;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz8wMTNhZTFhIiwid2VicGFjazovLy8uL3BhZ2VzPzAxM2FlMWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdGF0dXMuanM/MDEzYWUxYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rhc2suanM/MDEzYWUxYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztrQkFBZTt5QkFDYix1QkFBSyxXQUFVO2dCQUFmO2tCQUNFO0FBREY7R0FBQSxrQkFDRSx1QkFBSyxXQUFVO2dCQUFmO2tCQUNFO0FBREY7cUJBQ0csZ0NBQUssVUFBTixNQUFlLE1BQUssS0FBSSxTQUFNO2dCQUE5QjtrQkFBQTtBQUFBO0tBQ0EsbURBQUksV0FBVTtnQkFBZDtrQkFDRTtBQURGO3FCQUNFLHNCQUFJLFdBQVU7Z0JBQWQ7a0JBQThCO0FBQTlCO3FCQUErQixnQ0FBSyxVQUFOLE1BQWUsTUFBSztnQkFBcEI7a0JBQTJCO0FBQTNCO3FCQUEyQixxQkFBRyxXQUFVO2dCQUFiO2tCQUFBO0FBQUE7S0FDekQsZ0RBQUksV0FBVTtnQkFBZDtrQkFBOEI7QUFBOUI7cUJBQStCLGdDQUFLLE1BQUs7Z0JBQVg7a0JBQWtCO0FBQWxCO3FCQUFrQixxQkFBRyxXQUFVO2dCQUFiO2tCQUFBO0FBQUE7S0FDaEQsZ0RBQUksV0FBVTtnQkFBZDtrQkFBOEI7QUFBOUI7cUJBQStCLGdDQUFLLE1BQUs7Z0JBQVg7a0JBQW9CO0FBQXBCO3FCQUFvQixxQkFBRyxXQUFVO2dCQUFiO2tCQUFBO0FBQUE7S0FBQTtBQVAxRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRk87Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBU0g7NkJBQ0ksdUJBQUssV0FBVSxtQkFBZjs7b0JBQUE7c0JBQ0c7QUFESDtPQUFBLGtCQUNJOztvQkFBRDtzQkFDQztBQUREO0FBQUEseUJBQ0M7b0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUVGLGdGQUFLLFdBQVUsOEJBQWY7O29CQUFBO3NCQUNDO0FBREQ7eUJBQ0M7b0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUNBLDBCQUFDOztvQkFBRDtzQkFDRztBQURIO0FBQUEsMEJBQ0csc0JBQUksV0FBVSx3QkFBZDs7b0JBQUE7c0JBQ0E7QUFEQTtjQUNLLE1BQU0sS0FBSyxJQUFJLFVBQUMsR0FDckI7K0JBQVMsZ0NBQUssTUFBTTtzQkFBWjt3QkFDUjtBQURRO1NBQUE7QUFEUjtpQkFSTjthQWlDTDtBQWpDSzs7Ozs7Ozs7OztpREFMQyxFQUFDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sU0FBUyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBRm5CLGdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQ0xsQzs7aUJBQVksT0FBTztzQ0FBQTs7b0lBRWxCOztRQUFLLGVBQWUsTUFBSyxhQUFhLEtBQXRDO1NBQ0E7Ozs7OytCQUVZLE9BQ1o7U0FDQTtRQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sT0FDM0I7Ozs7MkJBR0E7MEJBQ0MsdUJBQUssV0FBVSxzQkFBZjs7ZUFBQTtpQkFDQztBQUREO0lBQUEsa0JBQ0Msd0JBQU0sVUFBVSxLQUFLLDBCQUFyQjs7ZUFBQTtpQkFDQztBQUREOytDQUNRLE1BQUssUUFBTyxNQUFLLFFBQU8sYUFBWSw4QkFBM0M7O2VBQUE7aUJBQ0E7QUFEQTtnREFDTyxNQUFLLFlBQVcsTUFBSyxVQUFTLGFBQVksS0FBSSxLQUFJLEtBQUksS0FBSSxpQkFBakU7O2VBQUE7aUJBQUE7QUFBQTs7YUFIRjtTQThCRDtBQTlCQzs7Ozs7RUFiMEIsZ0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNDQ2xDOztpQkFBWSxPQUFPO3NDQUFBOzsrSEFFbEI7Ozs7OzJCQUdBOzBCQUNBLHNCQUFJLFdBQVUsb0JBQWQ7O2VBQUE7aUJBQ0U7QUFERjtJQUFBLE9BQ08sTUFBTTthQURiO1NBNEJBO0FBNUJBOzs7OztFQVAyQixnQkFBTSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgPG5hdiBjbGFzc05hbWU9XCJtYWluLW5hdlwiPlxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIiBjbGFzcz1cImJyYW5kXCI+V29ya0Jvb2s8L0xpbms+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1uYXYtd3JhcHBlclwiPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWFpbi1uYXYtaXRlbVwiPjxMaW5rIHByZWZldGNoIGhyZWY9XCIvb25lXCI+PGEgY2xhc3NOYW1lPVwibWFpbi1uYXYtbGlua1wiPk9uZTwvYT48L0xpbms+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1haW4tbmF2LWl0ZW1cIj48TGluayBocmVmPVwiL3R3b1wiPjxhIGNsYXNzTmFtZT1cIm1haW4tbmF2LWxpbmtcIj5Ud288L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYWluLW5hdi1pdGVtXCI+PExpbmsgaHJlZj1cIi90aHJlZVwiPjxhIGNsYXNzTmFtZT1cIm1haW4tbmF2LWxpbmtcIj5UaHJlZTwvYT48L0xpbms+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gIDwvZGl2PlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgU3RhdHVzIGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdHVzLmpzJ1xuaW1wb3J0IFRhc2sgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrLmpzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlci5qcydcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG5cdFx0cmV0dXJuIHtkYXRhOiBbJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJ119XG5cdH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgICBcdDxIZWFkPlxuICAgICAgICAgIFx0XHQ8dGl0bGU+V29ya0Jvb2sgfCBGZWVkLUJhc2VkIFRhc2sgVHJhY2tpbmc8L3RpdGxlPlxuICAgICAgICAgIFx0PC9IZWFkPlxuICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJjZW50ZXItd3JhcHBlclwiPlxuICAgICAgICBcdFx0XHQ8aDE+VG8gRG88L2gxPlxuICAgICAgICBcdFx0XHQ8U3RhdHVzIC8+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YXNrbGlzdFwiPlxuICAgICAgICAgIFx0XHRcdHt0aGlzLnByb3BzLmRhdGEubWFwKChpKSA9PiB7XG4gICAgICAgICAgXHRcdFx0XHRyZXR1cm4gKDxUYXNrIHRleHQ9e2l9IC8+KTtcbiAgICAgICAgICBcdFx0XHR9KX1cbiAgICAgICAgICBcdFx0PC91bD5cbiAgICAgICAgXHRcdDwvZGl2PlxuXG4gICAgICAgIFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICBcdFx0XHQuQXBwIHtcbiAgICBcdFx0XHRcdGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgXHRcdFx0fVxuXG5cbiAgICBcdFx0XHRoMSB7XG4gICAgXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGgyIHtcbiAgICBcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgXHRcdFx0fVxuXG4gICAgICAgICAgXG5cbiAgICAgICAgXHRgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aGFuZGxlU3VibWl0KGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnByb3BzLmRhdGEucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0YXR1c1wiPlxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwidGFza1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUeXBlIGEgdGFzay4uLlwiPjwvaW5wdXQ+XG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIjFcIiBtaW49XCIxXCIgbWF4PVwiM1wiPjwvaW5wdXQ+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5zdGF0dXMgaW5wdXQge1xuXHRcdFx0XHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTJlbTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRwdDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3JkZXIgMTUwbXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnN0YXR1cyBpbnB1dDpmb2N1cyB7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY2LCAxMzQsIDI0NCwgLjg1KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuc3RhdHVzIGlucHV0W25hbWU9XCJwcmlvcml0eVwiXSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDEwcHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc3RhdHVzLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0PGxpIGNsYXNzTmFtZT1cInRhc2tcIj5cblx0XHRcdHt0aGlzLnByb3BzLnRleHR9XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdC50YXNrIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XG5cdFx0XHRcdFx0Ym9yZGVyLXRvcDogbm9uZTtcblx0XHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnRhc2s6bnRoLWNoaWxkKDEpIHtcblx0XHRcdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2VmZWZlZiAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnRhc2s6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlZmVmZWY7XG5cdFx0XHRcdH1cblx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvbGk+XG5cdFx0KVxuXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFzay5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        