'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _status = require('../components/status.js');

var _status2 = _interopRequireDefault(_status);

var _task = require('../components/task.js');

var _task2 = _interopRequireDefault(_task);

var _header = require('../components/header.js');

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