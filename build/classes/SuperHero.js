"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SuperHero = /** @class */ (function () {
    function SuperHero(name, age, superPower) {
        this.name = name;
        this.age = age;
        this.superPower = superPower;
    }
    SuperHero.prototype.getName = function () {
        return this.name;
    };
    SuperHero.prototype.getAge = function () {
        return this.age;
    };
    SuperHero.prototype.getSuperPower = function () {
        return this.superPower;
    };
    SuperHero.prototype.setSuperPower = function (superPower) {
        this.superPower = superPower;
    };
    return SuperHero;
}());
exports.default = SuperHero;
