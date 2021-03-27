// export {} treats this file as module rather than by default script
//module has its own scope
//script share global scope
export {} 
let text = 'Hello World '
console.log(text)

let x = 10
const y = 20

let sum
const title = 'Murali'

// syntax let variableName: type = Value
let isBoolean: boolean  = true
let total: number = 0
let name: string = 'Murali'

// Helpful in static type checking and intellisense 
//type checking example
// name = true
//intellisense example
// name. -> intellisense provides only string methods for name


//using template literals
let sentence:string = `My name is ${name}
I'm a react developer`
console.log(sentence)


let n:null = null
let u:undefined = undefined

let isNew:boolean = null
let nyName:string = undefined

//array types with same type
let list1:number[] = [1,2,3]
let list2:Array<number> = [2,3,4]

//array types with mixed type containing number and string
//known as tuples
let person1:[string,number] = ['Hello',25]

// enum types
enum Color { Red, Green, Blue } //{0,1,2}
let c: Color = Color.Green
console.log(c)//Outut 1

// enum with default value
enum ColorWithDefaultValue { Red=5, Green, Blue} //{5,6,7}
let cd: ColorWithDefaultValue = ColorWithDefaultValue.Green
console.log(cd)//Output 6

//Any TYPE
let randomValue: any = 10
randomValue = 'Hello'
randomValue = true

//problem wit any type
let myVariable: any = 10
// myVariable() error
// myVariable.toUpperCase() myVariable is not a function error

//unknown type
let myVariable2: unknown = 10

//tocheck if variable contains name
function hasName(obj:any) : obj is {name: string} {
    return !!obj &&
    typeof obj ==='object' &&
    "name" in obj
}

if(hasName(myVariable2)){
    console.log(myVariable2.name)
}
// myVariable2()//error
// (myVariable2 as string).toUpperCase() //type assertion like type checking


// union Type and Type inference  todo=>Read more
let multiType: number | boolean
multiType = 10
multiType = true

let anyType: any
anyType = 10
anyType = true

// static Type checking for parameters 
// num1: parameter type,  num2: parameter type, : return type 
function add(num1:number,num2:number):number{
    return num1 + num2
}
add(5,10)
// add(5,'10') => error

// Optional parameter => ?:  or ,,,default parameter num2:number = 20
function add2(num1:number,num2?:number ):number{
    if(num2)
        return num1 + num2
    else return num1
}
add2(5) // possible


// interface


interface Person{
    firstName:string,
    lastName:string
}

// function fullName(person: {firstName: string, lastName: string}){
function fullName(person: Person){

    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

fullName(p)

// Classes 

class Employee{
    //property
    employeeName: string

    //constructor
    constructor(name: string){
        this.employeeName = name
    }

    //method
    greet(){
        console.log(`Hello ${this.employeeName}`)
    }
}

const emp = new Employee('Murali')

console.log(emp.employeeName) //Murali
emp.greet()  //Hello Murali


//inheritance
class Manager extends Employee{
    constructor(managerName:string){
        //call base class contructor=>Employee..
        //  managerName gets initialized to employeeName
        // in Employee Class
        super(managerName)
    }

    delegateWork(){
        console.log('Manager delegating tasks')
    }

}

let m1 = new Manager('batman')
m1.delegateWork() //Manager delegating tasks
m1.greet() // Hello batman

console.log(m1.employeeName) //batman

//Access Modifiers --keywords which sets accessability of properties and 
// methods in class
//employeeName,greet()
// public --by default we can access properties(name,method) inside and outside parent/base class
// private --can be accessible only within base class,can't be accessible in child/derived class
// protected -- if we want to access base class properties in base class and in derived class use protected








