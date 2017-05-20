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