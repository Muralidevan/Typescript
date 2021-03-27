"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var text = 'Hello World';
console.log(text);
var x = 10;
var y = 20;
var sum;
var title = 'Murali';
// syntax let variableName: type = Value
var isBoolean = true;
var total = 0;
var name = 'Murali';
// Helpful in static type checking and intellisense 
//type checking example
// name = true
//intellisense example
// name. -> intellisense provides only string methods for name
//using template literals
var sentence = "My name is " + name + "\nI'm a react developer";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var nyName = undefined;
//array types with same type
var list1 = [1, 2, 3];
var list2 = [2, 3, 4];
//array types with mixed type containing number and string
//known as tuples
var person1 = ['Hello', 25];
// enum types
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //{0,1,2}
var c = Color.Green;
console.log(c); //Outut 1
// enum with default value
var ColorWithDefaultValue;
(function (ColorWithDefaultValue) {
    ColorWithDefaultValue[ColorWithDefaultValue["Red"] = 5] = "Red";
    ColorWithDefaultValue[ColorWithDefaultValue["Green"] = 6] = "Green";
    ColorWithDefaultValue[ColorWithDefaultValue["Blue"] = 7] = "Blue";
})(ColorWithDefaultValue || (ColorWithDefaultValue = {})); //{5,6,7}
var cd = ColorWithDefaultValue.Green;
console.log(cd); //Output 6
//Any TYPE
var randomValue = 10;
randomValue = 'Hello';
randomValue = true;
//problem wit any type
var myVariable = 10;
// myVariable() error
// myVariable.toUpperCase() myVariable is not a function error
//unknown type
var myVariable2 = 10;
//tocheck if variable contains name
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
// myVariable2()//error
// (myVariable2 as string).toUpperCase() //type assertion like type checking
// union Type and Type inference  todo=>Read more
var multiType;
multiType = 10;
multiType = true;
var anyType;
anyType = 10;
anyType = true;
// static Type checking for parameters 
// num1: parameter type,  num2: parameter type, : return type 
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add(5,'10') => error
// Optional parameter => ?:  or ,,,default parameter num2:number = 20
function add2(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add2(5); // possible
// function fullName(person: {firstName: string, lastName: string}){
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
// Classes 
var Employee = /** @class */ (function () {
    //constructor
    function Employee(name) {
        this.employeeName = name;
    }
    //method
    Employee.prototype.greet = function () {
        console.log("Hello " + this.employeeName);
    };
    return Employee;
}());
var emp = new Employee('Murali');
console.log(emp.employeeName); //Murali
emp.greet(); //Hello Murali
//inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        //call base class contructor=>Employee..
        //  managerName gets initialized to employeeName
        // in Employee Class
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delegating tasks');
    };
    return Manager;
}(Employee));
var m1 = new Manager('batman');
m1.delegateWork(); //Manager delegating tasks
m1.greet(); // Hello batman
console.log(m1.employeeName); //batman
//Access Modifiers --keywords which sets accessability of properties and 
// methods in class
//employeeName,greet()
// public --by default we can access properties(name,method) inside and outside parent/base class
// private --can be accessible only within base class,can't be accessible in child/derived class
// protected -- if we want to access base class properties in base class and in derived class use protected
