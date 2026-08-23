// document.write("Hello World")
// let num = 5
// document.write(num)
// num = 6
// document.write(num);

// let userName = "Adarsh"
// document.write(userName)
// const keyword
// to find area of the circle
let redus = 5
const pi = 3.14
let area

area = pi * redus * redus
console.log(area)
 
redus = 6
// pi = 4  if we change constent value it gives error = Assignment to constent 
area = pi * redus * redus
console.log(area)

// Data Type
let data = 0xf //0x defins hexadecimal number
console.log( data)

let num1 = 1.5e12 //15_00_00_00_00_000
console.log(num1)

let num2 = 10_00_00_00_000
console.log(num2)

let num3 = 2424242424242424242424242424n //adding n denotes BigInt
console.log(num3);

//String
let userName = "Adarsh\tT R"
console.log(userName)

let firstName = "Adarsh"
let lastName = "T R"
console.log(firstName + " " + lastName)

// Type conversion & coercion
let x 
console.log(x, typeof x)

x = 8
console.log(x, typeof x)

x = x + " "
console.log(x, typeof x)

x = x - 2
console.log(x, typeof x)

x = !x
console.log(x, typeof x)

let x2 = "23"
x2 = Number(x2)
console.log(x2, typeof x2)

// Oparetors
let num = 4
num += 2
console.log(num)

let num_1 = 3
num_2 = ++num_1 
console.log(num_2, num_1)

num += 4
console.log(num)

// Power(^)
result = 10 ** 2 //4 cube 3
console.log(result) 

//To find number even or odd
let num_3 = 12
if(num_3 % 2 == 0){
    console.log("even number")
}
else{
    console.log("odd number")
}

//switch statement
let day_1 = "Sunday"
switch(day_1){
    case "Monday":
        console.log("7am");
        break;

    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("4am");
        break;
    
    case "Friday":
        console.log("9am");
        break;
     
    case "Saturday":
    case "Sunday":
        console.log("8am");
        break;
        
    default:
        console.log("Wrong Input");    
}

//or

 let day = "Wednesday";
if(day==="Monday"){
    console.log("7am")
}
else if(day==="Tuesday"||day==="Wednesday"||day==="Thursday"){
    console.log("4am")
}
else if(day==="Friday"){
    console.log("8am")
}
else if(day==="Saturday"||day==="Sunday"){
    console.log("8am")
}
else{
    console.log("Wrong Input")
}

//Templet Litral
let $num1 = 5;
let $num2 = 4;
let $result = $num1 + $num2;

console.log(`The addition of ${$num1}  and  ${$num2} is ${$result}`);

//to display output in newline

console.log(`My Name is
          Adarsh T R`);

// While loop
let i = 1;
while(i<=5)
    {
        console.log("Hi", i)
        i++;
    }          

//do while
let j = 10;
do
{
    console.log("Hi", j);
    j++;
}while(j<=5)

console.log(j);

//for loop
for(let k=1;k<=5;k++)
{
    console.log("Hii", k);

    for(let l=1;l<=5;l++)
    {
        console.log("Hello",l);
    }
}

console.log("-why while");
let num_4 = 343678;
while(num_4>0){
console.log(num_4%10);
num_4 = parseInt(num_4/10);
console.log(num_4);
}
// while(num_4>0)
// // {
// //     consol.log(num_4%10);
// //     num = num/10;
// // }

//object
console.log("Objects");
let obj = {
    brand : "Acer",
    RAM : "16GB",
    SSD : "512GB",
    'price' : 60000,
    software : {
        name : "windows11",
        MSoffice : 2021
    }
}
delete obj.brand
//for in loop
for(key in obj.software)
{
    console.log(key, obj.software[key]);
}

//function
function greet(user)
{
    return `Good Morning ${user}`
}
let user = "Adarsh T R"
let results = greet(user);
console.log(results);

////function expression
 let add = function(nu1, nu2, nu3)
 {
    return nu1 + nu2
 }

 let r = add(2, 2, 3);
 console.log(r);

//arrow_function
let aadd = (anum1, anum2, anum3) =>

     anum1+anum2+anum3;


let solu = aadd(3, 4, 5);
console.log(solu);

// function in side the object
let laptop_1 = {
     processor : 'i5',
     ram : 16,
     brand : 'Acer',
     fIno : function()
     {
          console.log("Hi");
     }
}
laptop_1.fIno();

// this keyword
let laptop_2 = {
     processor : 'i5',
     ram : 16,
     brand : 'Acer',
     fIno : function()
     {
          console.log(laptop_2.processor);
     }
}
laptop_2.fIno();

// construtor and new keyworld
function Alien(name, tech)
{
     this.name = name;
     this.tech = tech;
}

let alien1 = new Alien('Adarsh', 'js');
let alien2 = new Alien('somu','Blockchine');
alien2.tech = 'java'; 
console.log(alien2);

// Array function
let data1 = new Array()
console.log(data1.push(1,4,7))
console.log(data1, typeof data1);

let arr = [7, 4, 6, 8]
console.log(arr.splice(1, 2, 9, 2, 3, 5));
console.log(arr, arr.length);

//for- of loop
let nums = [];
nums[0] = 5;
nums[99] = 9;

console.log(nums,nums.length);
for(let n of nums)
{
     console.log(n);
}

// for(key in nums)
// {
//      console.log(nums[key]);
// }

