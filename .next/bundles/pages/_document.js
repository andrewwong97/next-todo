
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
        'data-jsx': 215837640,
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
        'data-jsx': 215837640,
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
        styleId: 215837640,
        css: '\n \t\t\tbody {\n \t\t\t\tfont-family: Helvetica, sans-serif;\n \t\t\t}\n\n      a:visited {\n        text-decoration: none;\n      }\n\n \t\t\t.main-nav {\n \t\t\t\tdisplay: flex;\n \t\t\t\theight: 40px;\n \t\t\t\tpadding: 5px 40px;\n \t\t\t\talign-items: center;\n \t\t\t\tjustify-content: space-between;\n \t\t\t\tfont-weight: 300;\n \t\t\t\tborder-bottom: 1px solid #dfdfdf;\n \t\t\t}\n\n \t\t\t.main-nav-wrapper {\n \t\t\t\tlist-style-type: none;\n \t\t\t}\n\n \t\t\t.main-nav-wrapper > .main-nav-item {\n \t\t\t\tdisplay: inline;\n \t\t\t\tmargin: 20px;\n \t\t\t\tpadding: 20px;\n \t\t\t}\n\n \t\t\t.main-nav-wrapper > .main-nav-item > .main-nav-link {\n \t\t\t\ttext-decoration: none;\n \t\t\t\tcolor: #2575bb;\n \t\t\t\ttransition: color 200ms ease-in;\n \t\t\t}\n\n \t\t\t.main-nav-link:hover {\n \t\t\t\tcolor: red;\n \t\t\t}\n\n   \t\t.center-wrapper {\n   \t\t\tdisplay: block;\n   \t\t\tmargin: 0 auto;\n   \t\t\ttext-align: center;\n   \t\t}\n\n \t\t\th1 {\n \t\t\t\tfont-weight: 600;\n \t\t\t}\n\n \t\t\th2 {\n \t\t\t\tfont-weight: 400;\n \t\t\t}\n     \t'
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

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(238);


/***/ })

},[561]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/Nzg2MmRjYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz83ODYyZGNhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytCOzs7O0FBQ3hCOzs7O0FBQ0E7Ozs7Ozs7QUFIUDs7O0lBS3FCOzs7Ozs7Ozs7Ozs2QkFRakI7NkJBQ0M7b0JBQUE7O29CQUFBO3NCQUNFO0FBREY7QUFBQSx5QkFDRzs7b0JBQUQ7c0JBQ0U7QUFERjtBQUFBLHlCQUNFOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FFRixzREFBQzs7b0JBQUQ7c0JBQ0E7QUFEQTtBQUFBLDBCQUNBO29CQUFBOztvQkFBQTtzQkFDRTtBQURGO0FBQUEseUJBQ0c7O29CQUFEO3NCQUNBO0FBREE7QUFBQSwwQkFDQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBO2lCQVBKO2FBZ0VGO0FBaEVFOzs7OzBDQVJxQztVQUFBOzt3QkFDakI7VUFBZDtVQUFNLG1CQUNiOztVQUFNLFNBQ047YUFBTyxFQUFFLE1BQUYsTUFBUSxNQUFSLE1BQWMsUUFDdEI7Ozs7O0FBTHFDOztrQkFBbkIsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7Ozs7O2tCQUFlO3lCQUNiLHVCQUFLLFdBQVU7Z0JBQWY7a0JBQ0U7QUFERjtHQUFBLGtCQUNFLHVCQUFLLFdBQVU7Z0JBQWY7a0JBQ0U7QUFERjtxQkFDRyxnQ0FBSyxVQUFOLE1BQWUsTUFBSyxLQUFJLFNBQU07Z0JBQTlCO2tCQUFBO0FBQUE7S0FDQSxtREFBSSxXQUFVO2dCQUFkO2tCQUNFO0FBREY7cUJBQ0Usc0JBQUksV0FBVTtnQkFBZDtrQkFBOEI7QUFBOUI7cUJBQStCLGdDQUFLLFVBQU4sTUFBZSxNQUFLO2dCQUFwQjtrQkFBMkI7QUFBM0I7cUJBQTJCLHFCQUFHLFdBQVU7Z0JBQWI7a0JBQUE7QUFBQTtLQUN6RCxnREFBSSxXQUFVO2dCQUFkO2tCQUE4QjtBQUE5QjtxQkFBK0IsZ0NBQUssTUFBSztnQkFBWDtrQkFBa0I7QUFBbEI7cUJBQWtCLHFCQUFHLFdBQVU7Z0JBQWI7a0JBQUE7QUFBQTtLQUNoRCxnREFBSSxXQUFVO2dCQUFkO2tCQUE4QjtBQUE5QjtxQkFBK0IsZ0NBQUssTUFBSztnQkFBWDtrQkFBb0I7QUFBcEI7cUJBQW9CLHFCQUFHLFdBQVU7Z0JBQWI7a0JBQUE7QUFBQTtLQUFBO0FBUDFELEUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuL3BhZ2VzL19kb2N1bWVudC5qc1xuaW1wb3J0IERvY3VtZW50LCB7IEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xuaW1wb3J0IGZsdXNoIGZyb20gJ3N0eWxlZC1qc3gvc2VydmVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZW5kZXJQYWdlIH0pIHtcbiAgICBjb25zdCB7aHRtbCwgaGVhZH0gPSByZW5kZXJQYWdlKClcbiAgICBjb25zdCBzdHlsZXMgPSBmbHVzaCgpXG4gICAgcmV0dXJuIHsgaHRtbCwgaGVhZCwgc3R5bGVzIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgPGh0bWw+XG4gICAgICAgPEhlYWQ+XG4gICAgICAgICA8c3R5bGU+e2Bib2R5IHsgbWFyZ2luOiAwIH0gLyogY3VzdG9tISAqL2B9PC9zdHlsZT5cbiAgICAgICA8L0hlYWQ+XG4gICAgICAgPEhlYWRlciAvPlxuICAgICAgIDxib2R5PlxuICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgPC9ib2R5PlxuICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gXHRcdFx0Ym9keSB7XG4gXHRcdFx0XHRmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuIFx0XHRcdH1cblxuICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gXHRcdFx0Lm1haW4tbmF2IHtcbiBcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG4gXHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG4gXHRcdFx0XHRwYWRkaW5nOiA1cHggNDBweDtcbiBcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gXHRcdFx0XHRmb250LXdlaWdodDogMzAwO1xuIFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG4gXHRcdFx0fVxuXG4gXHRcdFx0Lm1haW4tbmF2LXdyYXBwZXIge1xuIFx0XHRcdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuIFx0XHRcdH1cblxuIFx0XHRcdC5tYWluLW5hdi13cmFwcGVyID4gLm1haW4tbmF2LWl0ZW0ge1xuIFx0XHRcdFx0ZGlzcGxheTogaW5saW5lO1xuIFx0XHRcdFx0bWFyZ2luOiAyMHB4O1xuIFx0XHRcdFx0cGFkZGluZzogMjBweDtcbiBcdFx0XHR9XG5cbiBcdFx0XHQubWFpbi1uYXYtd3JhcHBlciA+IC5tYWluLW5hdi1pdGVtID4gLm1haW4tbmF2LWxpbmsge1xuIFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuIFx0XHRcdFx0Y29sb3I6ICMyNTc1YmI7XG4gXHRcdFx0XHR0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluO1xuIFx0XHRcdH1cblxuIFx0XHRcdC5tYWluLW5hdi1saW5rOmhvdmVyIHtcbiBcdFx0XHRcdGNvbG9yOiByZWQ7XG4gXHRcdFx0fVxuXG4gICBcdFx0LmNlbnRlci13cmFwcGVyIHtcbiAgIFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuICAgXHRcdFx0bWFyZ2luOiAwIGF1dG87XG4gICBcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBcdFx0fVxuXG4gXHRcdFx0aDEge1xuIFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcbiBcdFx0XHR9XG5cbiBcdFx0XHRoMiB7XG4gXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuIFx0XHRcdH1cbiAgICAgXHRgfTwvc3R5bGU+XG4gICAgIDwvaHRtbD5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL19kb2N1bWVudC5qcz9lbnRyeSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCIgY2xhc3M9XCJicmFuZFwiPldvcmtCb29rPC9MaW5rPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1haW4tbmF2LXdyYXBwZXJcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1haW4tbmF2LWl0ZW1cIj48TGluayBwcmVmZXRjaCBocmVmPVwiL29uZVwiPjxhIGNsYXNzTmFtZT1cIm1haW4tbmF2LWxpbmtcIj5PbmU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYWluLW5hdi1pdGVtXCI+PExpbmsgaHJlZj1cIi90d29cIj48YSBjbGFzc05hbWU9XCJtYWluLW5hdi1saW5rXCI+VHdvPC9hPjwvTGluaz48L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWFpbi1uYXYtaXRlbVwiPjxMaW5rIGhyZWY9XCIvdGhyZWVcIj48YSBjbGFzc05hbWU9XCJtYWluLW5hdi1saW5rXCI+VGhyZWU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICA8L2Rpdj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        