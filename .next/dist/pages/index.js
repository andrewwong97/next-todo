'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

exports.default = function () {
	return _react2.default.createElement('div', { className: 'App', 'data-jsx': 1772120195,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement(_head2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement('title', {
		'data-jsx': 1772120195,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, 'WorkBook | Feed-Based Task Tracking')), _react2.default.createElement(_header2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}), _react2.default.createElement('div', { md: 4, className: 'center-wrapper', 'data-jsx': 1772120195,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement('h1', {
		'data-jsx': 1772120195,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, 'To Do'), _react2.default.createElement(_status2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}), _react2.default.createElement(_task2.default, { text: 'derp', __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}), _react2.default.createElement(_task2.default, { text: 'derp', __source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}), _react2.default.createElement(_task2.default, { text: 'derp', __source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	})), _react2.default.createElement(_style2.default, {
		styleId: 1772120195,
		css: '\n\t\t\t.App {\n\t\t\t\tfont-family: Helvetica, sans-serif;\n\t\t\t}\n\n\t\t\t.main-nav {\n\t\t\t\tdisplay: flex;\n\t\t\t\theight: 40px;\n\t\t\t\tpadding: 5px 40px;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\tfont-weight: 300;\n\t\t\t\tborder-bottom: 1px solid #dfdfdf;\n\t\t\t}\n\n\t\t\t.main-nav-wrapper {\n\t\t\t\tlist-style-type: none;\n\t\t\t}\n\n\t\t\t.main-nav-wrapper > .main-nav-item {\n\t\t\t\tdisplay: inline;\n\t\t\t\tmargin: 20px;\n\t\t\t\tpadding: 20px;\n\t\t\t}\n\n\t\t\t.main-nav-wrapper > .main-nav-item > .main-nav-link {\n\t\t\t\ttext-decoration: none;\n\t\t\t\tcolor: #2575bb;\n\t\t\t\ttransition: color 200ms ease-in;\n\t\t\t}\n\n\t\t\t.main-nav-link:hover {\n\t\t\t\tcolor: red;\n\t\t\t}\n\n  \t\t.center-wrapper {\n  \t\t\tdisplay: block;\n  \t\t\tmargin: 0 auto;\n  \t\t\ttext-align: center;\n  \t\t}\n\n\t\t\th1 {\n\t\t\t\tfont-weight: 600;\n\t\t\t}\n\n\t\t\th2 {\n\t\t\t\tfont-weight: 400;\n\t\t\t}\n    \t'
	}));
};