
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(434);

var _document2 = _interopRequireDefault(_document);

var _server = __webpack_require__(233);

var _server2 = _interopRequireDefault(_server);

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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, 'body { margin: 0 } /* custom! */')), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })));
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

      var qs = __webpack_require__(83)
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

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(236);


/***/ })

},[556]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/ZDRhZTdlMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytCOzs7O0FBQ3hCOzs7Ozs7O0FBRlA7OztJQUlxQjs7Ozs7Ozs7Ozs7NkJBUWpCOzZCQUNDOztvQkFBQTtzQkFDRTtBQURGO0FBQUEseUJBQ0c7O29CQUFEO3NCQUNFO0FBREY7QUFBQSx5QkFDRTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRUY7O29CQUFBO3NCQUNFO0FBREY7QUFBQSx5QkFDRzs7b0JBQUQ7c0JBQ0E7QUFEQTtBQUFBLDBCQUNDOztvQkFBRDtzQkFJTjtBQUpNO0FBQUE7Ozs7MENBZGlDO1VBQUE7O3dCQUNqQjtVQUFkO1VBQU0sbUJBQ2I7O1VBQU0sU0FDTjthQUFPLEVBQUUsTUFBRixNQUFRLE1BQVIsTUFBYyxRQUN0Qjs7Ozs7QUFMcUM7O2tCQUFuQixXIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLi9wYWdlcy9fZG9jdW1lbnQuanNcbmltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZW5kZXJQYWdlIH0pIHtcbiAgICBjb25zdCB7aHRtbCwgaGVhZH0gPSByZW5kZXJQYWdlKClcbiAgICBjb25zdCBzdHlsZXMgPSBmbHVzaCgpXG4gICAgcmV0dXJuIHsgaHRtbCwgaGVhZCwgc3R5bGVzIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgPGh0bWw+XG4gICAgICAgPEhlYWQ+XG4gICAgICAgICA8c3R5bGU+e2Bib2R5IHsgbWFyZ2luOiAwIH0gLyogY3VzdG9tISAqL2B9PC9zdHlsZT5cbiAgICAgICA8L0hlYWQ+XG4gICAgICAgPGJvZHk+XG4gICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICA8L2JvZHk+XG4gICAgIDwvaHRtbD5cbiAgICApXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9fZG9jdW1lbnQuanM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        