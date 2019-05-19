"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyMath = /** @class */ (function () {
    function MyMath() {
        this.PI = Math.PI;
    }
    MyMath.prototype.double = function (value) {
        return 2 * value;
    };
    MyMath.prototype.squared = function (value) {
        return Math.pow(value, 2);
    };
    MyMath.prototype.floor = function (value) {
        return Math.floor(value);
    };
    MyMath.prototype.ceil = function (value) {
        return Math.ceil(value);
    };
    return MyMath;
}());
exports.MyMath = MyMath;
