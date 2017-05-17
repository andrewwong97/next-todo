'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

var _header = require('../components/header');

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