"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

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