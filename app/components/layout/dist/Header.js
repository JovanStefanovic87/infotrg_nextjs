"use strict";
exports.__esModule = true;
var HamburgerButton_1 = require("../buttons/HamburgerButton");
var LogoButton_1 = require("../buttons/LogoButton");
var NavButtons_1 = require("../buttons/NavButtons");
var Header = function () {
    return (React.createElement("header", { className: 'bg-main flex justify-between items-center px-4 py-4 fixed w-screen z-10 h-header' },
        React.createElement("div", { className: 'flex items-center space-x-4' },
            React.createElement("div", { className: 'block md:hidden' },
                React.createElement(HamburgerButton_1["default"], null)),
            React.createElement("div", { className: 'hidden md:flex' },
                React.createElement(NavButtons_1["default"], null))),
        React.createElement(LogoButton_1["default"], null)));
};
exports["default"] = Header;
