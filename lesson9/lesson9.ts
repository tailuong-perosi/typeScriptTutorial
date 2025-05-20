let name2: string = ` và "khoa hoc ts onlineonline"`;
let name3 = `hochoc ${name2}`; //template strings js

console.log(">>> check name = ", name3)
//check boolean
let status1: boolean = false;
let check1: boolean = true;
let pro: boolean = Boolean("");

console.log(">>> check pro: ", pro)

let pro1: {
    name: string,
    age: number
} = {
    name: "HopcHopc", //string
    age: 25 //age
}
//arrayarray
let test: (number | string)[] = ['Hoc564Hoc564', 69];

test.push('tao muon hochoc');

test.push(25);

console.log(">>> check array: ", test)
//
let skills: (string | number)[] = ['Hoc567Hoc567', 25];
skills.push('coding');
skills.push(69);

//tuple: dataType/size/order
let skills2: [string, number] = ['Hoc678Hoc678', 25];

let skills3: [boolean, string, number?];

skills3 = [true, 'atyuatyu'];
console.log(">>> check tuple:", skills3)