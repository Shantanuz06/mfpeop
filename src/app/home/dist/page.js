'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var mfpop_1 = require("mfpop");
var Home = function (children) {
    var ex = mfpop_1["default"]("25-1982-10", "dd-yyyy-MM", "dd-MMMM-yyyy");
    function addCommasToNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("main", { className: "flex min-h-screen w-full justify-between p-24" },
            React.createElement("h1", null, addCommasToNumber(9997)),
            React.createElement("h6", null, ex),
            React.createElement(link_1["default"], { href: "/list" }, "List"))));
};
exports["default"] = Home;
