
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(555);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(434);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Andrew/Desktop/try-next/components/header.js";

exports.default = function () {
  return _react2.default.createElement("div", { className: "header", "data-jsx": 4011845526,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("nav", { className: "main-nav", "data-jsx": 4011845526,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: "/", "class": "brand", __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "WorkBook"), _react2.default.createElement("ul", { className: "main-nav-wrapper", "data-jsx": 4011845526,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("li", { className: "main-nav-item", "data-jsx": 4011845526,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: "/one", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("a", { className: "main-nav-link", "data-jsx": 4011845526,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "One"))), _react2.default.createElement("li", { className: "main-nav-item", "data-jsx": 4011845526,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_link2.default, { href: "/two", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("a", { className: "main-nav-link", "data-jsx": 4011845526,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Two"))), _react2.default.createElement("li", { className: "main-nav-item", "data-jsx": 4011845526,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_link2.default, { href: "/three", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("a", { className: "main-nav-link", "data-jsx": 4011845526,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Three"))))), _react2.default.createElement(_style2.default, {
    styleId: 4011845526,
    css: "\n    .main-nav {\n        display: flex;\n        height: 40px;\n        padding: 5px 40px;\n        align-items: center;\n        justify-content: space-between;\n        font-weight: 300;\n        // border-bottom: 1px solid #f5f5ff;\n        // background: #f5f5ff;\n      }\n\n      .main-nav-wrapper {\n        list-style-type: none;\n      }\n\n      .main-nav-wrapper > .main-nav-item {\n        display: inline;\n        margin: 20px;\n        padding: 20px;\n      }\n\n      .main-nav-wrapper > .main-nav-item > .main-nav-link {\n        text-decoration: none;\n        color: #2575bb;\n        transition: color 200ms ease-in;\n      }\n\n      .main-nav-link:hover {\n        color: red;\n      }\n    "
  }));
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
      return _react2.default.createElement('div', { className: 'App', 'data-jsx': 2589626189,
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
        'data-jsx': 2589626189,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'WorkBook | Feed-Based Task Tracking')), _react2.default.createElement('div', { className: 'center-wrapper', 'data-jsx': 2589626189,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('h1', {
        'data-jsx': 2589626189,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'To Do'), _react2.default.createElement(_status2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('ul', { className: 'tasklist', 'data-jsx': 2589626189,
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
        styleId: 2589626189,
        css: '\n    \t\t\th1 {\n    \t\t\t\tfont-weight: 600;\n    \t\t\t}\n\n    \t\t\th2 {\n    \t\t\t\tfont-weight: 400;\n    \t\t\t}\n        \t'
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
			return _react2.default.createElement("div", { className: "status", "data-jsx": 2188495950,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, _react2.default.createElement("form", { onSubmit: this.handleSubmit, "data-jsx": 2188495950,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, _react2.default.createElement("input", { name: "task", type: "text", placeholder: "Type a task...", "data-jsx": 2188495950,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}), _react2.default.createElement("input", { name: "priority", type: "number", placeholder: "1", min: "1", max: "3", "data-jsx": 2188495950,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			})), _react2.default.createElement(_style2.default, {
				styleId: 2188495950,
				css: ".status[data-jsx=\"2188495950\"] input[data-jsx=\"2188495950\"] {font-family: 'Helvetica', sans-serif;outline: none;padding: 10px;width: 12em;font-size: 14pt;font-weight: 200;border: 1px solid rgba(0,0,0,.15);border-radius: 3px;-webkit-transition: border 150ms ease-in-out;-moz-transition: border 150ms ease-in-out;-ms-transition: border 150ms ease-in-out;transition: border 150ms ease-in-out;}.status[data-jsx=\"2188495950\"] input[data-jsx=\"2188495950\"]:focus {border: 1px solid rgba(66, 134, 244, .85);}.status[data-jsx=\"2188495950\"] input[name=\"priority\"][data-jsx=\"2188495950\"] {display: inline-block;margin: 10px;width: 2em;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdHVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CZ0IsQUFDSSw2REFDdUIscUNBQ3ZCLGNBQ0EsY0FDRixZQUNJLGdCQUNDLGlCQUNpQixrQ0FDZixtQkFDa0IscUtBQ3JDLENBRW9CLG1FQUNzQiwwQ0FDMUMsQ0FFK0IsOEVBQ1Qsc0JBQ1QsYUFDRixXQUNYIiwiZmlsZSI6ImNvbXBvbmVudHMvc3RhdHVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9BbmRyZXcvRGVza3RvcC90cnktbmV4dCIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG5cdH1cblxuXHRoYW5kbGVTdWJtaXQoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucHJvcHMuZGF0YS5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzXCI+XG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJ0YXNrXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgYSB0YXNrLi4uXCI+PC9pbnB1dD5cblx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiMVwiIG1pbj1cIjFcIiBtYXg9XCIzXCI+PC9pbnB1dD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LnN0YXR1cyBpbnB1dCB7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ0hlbHZldGljYScsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMmVtO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB0O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDIwMDtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE1KTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGJvcmRlciAxNTBtcyBlYXNlLWluLW91dDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuc3RhdHVzIGlucHV0OmZvY3VzIHtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjYsIDEzNCwgMjQ0LCAuODUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zdGF0dXMgaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAyZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuIl19 */\n/*@ sourceURL=components/status.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz9jZTIzYjY3Iiwid2VicGFjazovLy8uL3BhZ2VzP2NlMjNiNjciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdGF0dXMuanM/Y2UyM2I2NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rhc2suanM/M2U5MmE1OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7a0JBQWU7eUJBQ2IsdUJBQUssV0FBVSxzQkFBZjs7Z0JBQUE7a0JBQ0U7QUFERjtHQUFBLGtCQUNFLHVCQUFLLFdBQVUsd0JBQWY7O2dCQUFBO2tCQUNFO0FBREY7cUJBQ0csZ0NBQUssVUFBTixNQUFlLE1BQUssS0FBSSxTQUFNO2dCQUE5QjtrQkFBQTtBQUFBO0tBQ0EsbURBQUksV0FBVSxnQ0FBZDs7Z0JBQUE7a0JBQ0U7QUFERjtxQkFDRSxzQkFBSSxXQUFVLDZCQUFkOztnQkFBQTtrQkFBOEI7QUFBOUI7cUJBQStCLGdDQUFLLFVBQU4sTUFBZSxNQUFLO2dCQUFwQjtrQkFBMkI7QUFBM0I7cUJBQTJCLHFCQUFHLFdBQVUsNkJBQWI7O2dCQUFBO2tCQUFBO0FBQUE7S0FDekQsZ0RBQUksV0FBVSw2QkFBZDs7Z0JBQUE7a0JBQThCO0FBQTlCO3FCQUErQixnQ0FBSyxNQUFLO2dCQUFYO2tCQUFrQjtBQUFsQjtxQkFBa0IscUJBQUcsV0FBVSw2QkFBYjs7Z0JBQUE7a0JBQUE7QUFBQTtLQUNoRCxnREFBSSxXQUFVLDZCQUFkOztnQkFBQTtrQkFBOEI7QUFBOUI7cUJBQStCLGdDQUFLLE1BQUs7Z0JBQVg7a0JBQW9CO0FBQXBCO3FCQUFvQixxQkFBRyxXQUFVLDZCQUFiOztnQkFBQTtrQkFBQTtBQUFBO0tBQUE7YUFOeEQ7U0FBQTtBQUFBO0FBREYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQVNIOzZCQUNJLHVCQUFLLFdBQVUsbUJBQWY7O29CQUFBO3NCQUNHO0FBREg7T0FBQSxrQkFDSTs7b0JBQUQ7c0JBQ0M7QUFERDtBQUFBLHlCQUNDO29CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FFRixnRkFBSyxXQUFVLDhCQUFmOztvQkFBQTtzQkFDQztBQUREO3lCQUNDO29CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDQSwwQkFBQzs7b0JBQUQ7c0JBQ0c7QUFESDtBQUFBLDBCQUNHLHNCQUFJLFdBQVUsd0JBQWQ7O29CQUFBO3NCQUNBO0FBREE7Y0FDSyxNQUFNLEtBQUssSUFBSSxVQUFDLEdBQ3JCOytCQUFTLGdDQUFLLE1BQU07c0JBQVo7d0JBQ1I7QUFEUTtTQUFBO0FBRFI7aUJBUk47YUF5Qkw7QUF6Qks7Ozs7Ozs7Ozs7aURBTEMsRUFBQyxNQUFNLENBQUMsT0FBTyxPQUFPLFNBQVMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUZuQixnQkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0NMbEM7O2lCQUFZLE9BQU87c0NBQUE7O29JQUVsQjs7UUFBSyxlQUFlLE1BQUssYUFBYSxLQUF0QztTQUNBOzs7OzsrQkFFWSxPQUNaO1NBQ0E7UUFBSyxNQUFNLEtBQUssS0FBSyxNQUFNLE9BQzNCOzs7OzJCQUdBOzBCQUNDLHVCQUFLLFdBQVUsc0JBQWY7O2VBQUE7aUJBQ0M7QUFERDtJQUFBLGtCQUNDLHdCQUFNLFVBQVUsS0FBSywwQkFBckI7O2VBQUE7aUJBQ0M7QUFERDsrQ0FDUSxNQUFLLFFBQU8sTUFBSyxRQUFPLGFBQVksOEJBQTNDOztlQUFBO2lCQUNBO0FBREE7Z0RBQ08sTUFBSyxZQUFXLE1BQUssVUFBUyxhQUFZLEtBQUksS0FBSSxLQUFJLEtBQUksaUJBQWpFOztlQUFBO2lCQUFBO0FBQUE7O2FBSEY7U0ErQkQ7QUEvQkM7Ozs7O0VBYjBCLGdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQ0NsQzs7aUJBQVksT0FBTztzQ0FBQTs7K0hBRWxCOzs7OzsyQkFHQTswQkFDQSxzQkFBSSxXQUFVLG9CQUFkOztlQUFBO2lCQUNFO0FBREY7SUFBQSxPQUNPLE1BQU07YUFEYjtTQTRCQTtBQTVCQTs7Ozs7RUFQMkIsZ0JBQU0iLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCIgY2xhc3M9XCJicmFuZFwiPldvcmtCb29rPC9MaW5rPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1haW4tbmF2LXdyYXBwZXJcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1haW4tbmF2LWl0ZW1cIj48TGluayBwcmVmZXRjaCBocmVmPVwiL29uZVwiPjxhIGNsYXNzTmFtZT1cIm1haW4tbmF2LWxpbmtcIj5PbmU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYWluLW5hdi1pdGVtXCI+PExpbmsgaHJlZj1cIi90d29cIj48YSBjbGFzc05hbWU9XCJtYWluLW5hdi1saW5rXCI+VHdvPC9hPjwvTGluaz48L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWFpbi1uYXYtaXRlbVwiPjxMaW5rIGhyZWY9XCIvdGhyZWVcIj48YSBjbGFzc05hbWU9XCJtYWluLW5hdi1saW5rXCI+VGhyZWU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgLm1haW4tbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggNDBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmZjtcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI2Y1ZjVmZjtcbiAgICAgIH1cblxuICAgICAgLm1haW4tbmF2LXdyYXBwZXIge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5tYWluLW5hdi13cmFwcGVyID4gLm1haW4tbmF2LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIH1cblxuICAgICAgLm1haW4tbmF2LXdyYXBwZXIgPiAubWFpbi1uYXYtaXRlbSA+IC5tYWluLW5hdi1saW5rIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzI1NzViYjtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZS1pbjtcbiAgICAgIH1cblxuICAgICAgLm1haW4tbmF2LWxpbms6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci5qcyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBTdGF0dXMgZnJvbSAnLi4vY29tcG9uZW50cy9zdGF0dXMuanMnXG5pbXBvcnQgVGFzayBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2suanMnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyLmpzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcblx0XHRyZXR1cm4ge2RhdGE6IFsnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJywgJ2ZpdmUnXX1cblx0fVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICAgIFx0PEhlYWQ+XG4gICAgICAgICAgXHRcdDx0aXRsZT5Xb3JrQm9vayB8IEZlZWQtQmFzZWQgVGFzayBUcmFja2luZzwvdGl0bGU+XG4gICAgICAgICAgXHQ8L0hlYWQ+XG4gICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci13cmFwcGVyXCI+XG4gICAgICAgIFx0XHRcdDxoMT5UbyBEbzwvaDE+XG4gICAgICAgIFx0XHRcdDxTdGF0dXMgLz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhc2tsaXN0XCI+XG4gICAgICAgICAgXHRcdFx0e3RoaXMucHJvcHMuZGF0YS5tYXAoKGkpID0+IHtcbiAgICAgICAgICBcdFx0XHRcdHJldHVybiAoPFRhc2sgdGV4dD17aX0gLz4pO1xuICAgICAgICAgIFx0XHRcdH0pfVxuICAgICAgICAgIFx0XHQ8L3VsPlxuICAgICAgICBcdFx0PC9kaXY+XG5cbiAgICAgICAgXHQ8c3R5bGUganN4IGdsb2JhbD57YFxuICAgIFx0XHRcdGgxIHtcbiAgICBcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aDIge1xuICAgIFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcbiAgICBcdFx0XHR9XG4gICAgICAgIFx0YH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcblx0fVxuXG5cdGhhbmRsZVN1Ym1pdChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wcm9wcy5kYXRhLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGF0dXNcIj5cblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cblx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cInRhc2tcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBhIHRhc2suLi5cIj48L2lucHV0PlxuXHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCIxXCIgbWluPVwiMVwiIG1heD1cIjNcIj48L2lucHV0PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuc3RhdHVzIGlucHV0IHtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEyZW07XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHQ7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogMjAwO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTUpO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYm9yZGVyIDE1MG1zIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zdGF0dXMgaW5wdXQ6Zm9jdXMge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSg2NiwgMTM0LCAyNDQsIC44NSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnN0YXR1cyBpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl0ge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N0YXR1cy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdDxsaSBjbGFzc05hbWU9XCJ0YXNrXCI+XG5cdFx0XHR7dGhpcy5wcm9wcy50ZXh0fVxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHQudGFzayB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xuXHRcdFx0XHRcdGJvcmRlci10b3A6IG5vbmU7XG5cdFx0XHRcdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC50YXNrOm50aC1jaGlsZCgxKSB7XG5cdFx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmVmZWYgIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC50YXNrOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuXHRcdFx0XHR9XG5cdFx0XHRgfVxuXHRcdFx0PC9zdHlsZT5cblx0XHQ8L2xpPlxuXHRcdClcblxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3Rhc2suanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        