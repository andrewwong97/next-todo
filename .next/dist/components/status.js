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