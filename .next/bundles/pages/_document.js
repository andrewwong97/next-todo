
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _document = __webpack_require__(439);

var _document2 = _interopRequireDefault(_document);

var _server = __webpack_require__(234);

var _server2 = _interopRequireDefault(_server);

var _header = __webpack_require__(526);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Andrew/Desktop/try-next/pages/_document.js?entry';
// ./pages/_document.js


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        'data-jsx': 2869886489,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'body { margin: 0 } /* custom! */')), _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('body', {
        'data-jsx': 2869886489,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: 2869886489,
        css: '\n      @import url(\'https://fonts.googleapis.com/css?family=Varela+Round\');\n\n \t\t\tbody {\n \t\t\t\tfont-family: \'Varela Round\', Helvetica, sans-serif;\n        color: #2575bb;\n \t\t\t}\n      \n      a {\n        text-decoration: none !important;\n      }\n\n      a:visited {\n        text-decoration: none !important;\n      }\n\n \t\t\t\n\n   \t\t.center-wrapper {\n   \t\t\tdisplay: block;\n   \t\t\tmargin: 0 auto;\n   \t\t\ttext-align: center;\n   \t\t}\n\n \t\t\th1 {\n \t\t\t\tfont-weight: 600;\n \t\t\t}\n\n \t\t\th2 {\n \t\t\t\tfont-weight: 400;\n \t\t\t}\n     \t'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head;

      var styles = (0, _server2.default)();
      return { html: html, head: head, styles: styles };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Andrew/Desktop/try-next/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Andrew/Desktop/try-next/pages/_document.js"); } } })();
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
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

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

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(238);


/***/ })

},[561]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/ZGI0MjgxZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz9kYjQyODFmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytCOzs7O0FBQ3hCOzs7O0FBQ0E7Ozs7Ozs7QUFIUDs7O0lBS3FCOzs7Ozs7Ozs7Ozs2QkFRakI7NkJBQ0M7b0JBQUE7O29CQUFBO3NCQUNFO0FBREY7QUFBQSx5QkFDRzs7b0JBQUQ7c0JBQ0U7QUFERjtBQUFBLHlCQUNFOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FFRixzREFBQzs7b0JBQUQ7c0JBQ0E7QUFEQTtBQUFBLDBCQUNBO29CQUFBOztvQkFBQTtzQkFDRTtBQURGO0FBQUEseUJBQ0c7O29CQUFEO3NCQUNBO0FBREE7QUFBQSwwQkFDQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBO2lCQVBKO2FBMkNGO0FBM0NFOzs7OzBDQVJxQztVQUFBOzt3QkFDakI7VUFBZDtVQUFNLG1CQUNiOztVQUFNLFNBQ047YUFBTyxFQUFFLE1BQUYsTUFBUSxNQUFSLE1BQWMsUUFDdEI7Ozs7O0FBTHFDOztrQkFBbkIsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7Ozs7OztrQkFBZTt5QkFDYix1QkFBSyxXQUFVLHNCQUFmOztnQkFBQTtrQkFDRTtBQURGO0dBQUEsa0JBQ0UsdUJBQUssV0FBVSx3QkFBZjs7Z0JBQUE7a0JBQ0U7QUFERjtxQkFDRyxnQ0FBSyxVQUFOLE1BQWUsTUFBSyxLQUFJLFNBQU07Z0JBQTlCO2tCQUFBO0FBQUE7S0FDQSxtREFBSSxXQUFVLGdDQUFkOztnQkFBQTtrQkFDRTtBQURGO3FCQUNFLHNCQUFJLFdBQVUsNkJBQWQ7O2dCQUFBO2tCQUE4QjtBQUE5QjtxQkFBK0IsZ0NBQUssVUFBTixNQUFlLE1BQUs7Z0JBQXBCO2tCQUEyQjtBQUEzQjtxQkFBMkIscUJBQUcsV0FBVSw2QkFBYjs7Z0JBQUE7a0JBQUE7QUFBQTtLQUN6RCxnREFBSSxXQUFVLDZCQUFkOztnQkFBQTtrQkFBOEI7QUFBOUI7cUJBQStCLGdDQUFLLE1BQUs7Z0JBQVg7a0JBQWtCO0FBQWxCO3FCQUFrQixxQkFBRyxXQUFVLDZCQUFiOztnQkFBQTtrQkFBQTtBQUFBO0tBQ2hELGdEQUFJLFdBQVUsNkJBQWQ7O2dCQUFBO2tCQUE4QjtBQUE5QjtxQkFBK0IsZ0NBQUssTUFBSztnQkFBWDtrQkFBb0I7QUFBcEI7cUJBQW9CLHFCQUFHLFdBQVUsNkJBQWI7O2dCQUFBO2tCQUFBO0FBQUE7S0FBQTthQU54RDtTQUFBO0FBQUE7QUFERixFIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLi9wYWdlcy9fZG9jdW1lbnQuanNcbmltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVuZGVyUGFnZSB9KSB7XG4gICAgY29uc3Qge2h0bWwsIGhlYWR9ID0gcmVuZGVyUGFnZSgpXG4gICAgY29uc3Qgc3R5bGVzID0gZmx1c2goKVxuICAgIHJldHVybiB7IGh0bWwsIGhlYWQsIHN0eWxlcyB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgIDxodG1sPlxuICAgICAgIDxIZWFkPlxuICAgICAgICAgPHN0eWxlPntgYm9keSB7IG1hcmdpbjogMCB9IC8qIGN1c3RvbSEgKi9gfTwvc3R5bGU+XG4gICAgICAgPC9IZWFkPlxuICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICA8Ym9keT5cbiAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgIDwvYm9keT5cbiAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1WYXJlbGErUm91bmQnKTtcblxuIFx0XHRcdGJvZHkge1xuIFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiAjMjU3NWJiO1xuIFx0XHRcdH1cbiAgICAgIFxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBhOnZpc2l0ZWQge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuIFx0XHRcdFxuXG4gICBcdFx0LmNlbnRlci13cmFwcGVyIHtcbiAgIFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuICAgXHRcdFx0bWFyZ2luOiAwIGF1dG87XG4gICBcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBcdFx0fVxuXG4gXHRcdFx0aDEge1xuIFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcbiBcdFx0XHR9XG5cbiBcdFx0XHRoMiB7XG4gXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuIFx0XHRcdH1cbiAgICAgXHRgfTwvc3R5bGU+XG4gICAgIDwvaHRtbD5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL19kb2N1bWVudC5qcz9lbnRyeSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCIgY2xhc3M9XCJicmFuZFwiPldvcmtCb29rPC9MaW5rPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1haW4tbmF2LXdyYXBwZXJcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1haW4tbmF2LWl0ZW1cIj48TGluayBwcmVmZXRjaCBocmVmPVwiL29uZVwiPjxhIGNsYXNzTmFtZT1cIm1haW4tbmF2LWxpbmtcIj5PbmU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYWluLW5hdi1pdGVtXCI+PExpbmsgaHJlZj1cIi90d29cIj48YSBjbGFzc05hbWU9XCJtYWluLW5hdi1saW5rXCI+VHdvPC9hPjwvTGluaz48L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWFpbi1uYXYtaXRlbVwiPjxMaW5rIGhyZWY9XCIvdGhyZWVcIj48YSBjbGFzc05hbWU9XCJtYWluLW5hdi1saW5rXCI+VGhyZWU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgLm1haW4tbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggNDBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmZjtcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI2Y1ZjVmZjtcbiAgICAgIH1cblxuICAgICAgLm1haW4tbmF2LXdyYXBwZXIge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5tYWluLW5hdi13cmFwcGVyID4gLm1haW4tbmF2LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIH1cblxuICAgICAgLm1haW4tbmF2LXdyYXBwZXIgPiAubWFpbi1uYXYtaXRlbSA+IC5tYWluLW5hdi1saW5rIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzI1NzViYjtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZS1pbjtcbiAgICAgIH1cblxuICAgICAgLm1haW4tbmF2LWxpbms6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        