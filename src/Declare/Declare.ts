
// @ts-ignore
let name56: string = "bang";
let age: number = 12;
// khoi tao array
let myProject: String[] = ["danh", "bang"];
// type object
//Dang 1 khoi tao bang: TYPE
type Student = {
    name: string;
    age: number;
}

// khai bao bang interface :You should use interface
interface Student2 {
    name: string;
    age: number;
}

let student: Student2
//     :{
//   // viet the nay kha la xau
//   name:string;
//   age:number
// }
    = {
    name: "danh",
    age: 12,
}
//----------cach khai bao function
// khong tra ve gi
const notSomeThing: () => void = () => {
    console.log("notthing return")
}
// tra ve string
const ReturnName: () => string = () => {
    let name: string = "danh"
    return name
}
//return number
const ReturnNumber: () => number = () => {
    let age: number = 12;
    return age
}
// tra ve du lieu array va nhan mot bien so tu ngoai la AGE
const printSomething: (age: number) => string[] = (age: number) /*nhan mot bien tu ngoai vao*/ => {
    let name: string[] = ["bangdanh", "danh"];
    age = 21;
    return name;
}
//---------------------kethua Type-------------------
// Type
type Name = {
    name: string;
}
type StudentDetail = Name & {
    age: number;
    address: string;
}
// Interface
interface Name2 {
    name:string;
}
interface StudentDetail2 extends Name2{
    age:number;
    // co cung dc k co cung k sao
    address?:string;
}
let studentInherit: StudentDetail2 = {
    name: "bang",
    age: 12,
}