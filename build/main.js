"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Classes
var SuperHero_1 = __importDefault(require("./classes/SuperHero"));
var MyMath_1 = __importDefault(require("./classes/MyMath"));
var simpleClass = function () {
    var math = new MyMath_1.default();
    console.log("simpleClass::", math.PI);
};
var simpleConstructor = function () {
    var hercules = new SuperHero_1.default("Hercules", 2000, "Demigod");
    console.log("simpleConstructor::", hercules);
};
var duckTyping = function () {
    var printPerson = function (person) {
        console.log("duckTyping::", "name: " + person.name + ", age: " + person.age);
    };
    printPerson({ name: "Archimedes", age: 37 });
};
simpleClass();
simpleConstructor();
duckTyping();
