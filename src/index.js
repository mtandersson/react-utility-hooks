"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// Custom state hook tailored for updating html input states
function useHTMLState(initialState) {
    var _a = react_1.useState(initialState), s = _a[0], f = _a[1];
    return [s, function (e) { return f(e.target.value); }];
}
exports.useHTMLState = useHTMLState;
