"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

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