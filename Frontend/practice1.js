//arrow_function
let add = (anum1, anum2, anum3) =>

     anum1+anum2+anum3;


let solu = add(2, 3, 4);
console.log(solu);

// function in side the object
let laptop1 = {
     processor : 'i5',
     ram : 16,
     brand : 'Acer',
     fIno : function()
     {
          console.log("Hi");
     }
}
laptop1.fIno();

// this keyword
let laptop_1 = {
     processor : 'i5',
     ram : 16,
     brand : 'Acer',
     fIno : function()
     {
          console.log(this.processor);
     }
}
laptop_1.fIno();

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
let data = new Array()
console.log(data.push(1,4,7))
console.log(data, typeof data);

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

// destructuring array
let darr = [5, 7, 2, 4];
// console.log(darr);
let [a,b,,d] = darr;
console.log(d);

//swaping numbers
// let [e,f] = [3,4];
// [e,f] = [f,e]
// console.log(e,f);

let e = 3;
let f = 4;
[e,f] = [f,e];
console.log(e,f);

//array with strings
let word = "My name is Adarsh js".split(' ');
let[p,q,,...s] = word;
console.log(s);

//forEach method

let numfe = [42, 51, 24, 98, 65, 12]

let result = numfe.filter((n) => n%2===0)
                  .map((n) => n*2)
                  .reduce((a,b) => a+b );

console.log(result);

// result.forEach((n) => console.log(n)); //n is a call back function it takes new values every time

// sets
let numSet = new Set();
numSet.add(3)
numSet.add(4)
numSet.add('Adarsh')
console.log(numSet.has(1));
numSet.forEach((a) => {console.log(a)})

// Map()
let map = new Map()
map.set("Adarsh", "java");
map.set("Naveen", "Js");
map.set("chirag", "ML")
console.log(map.has("Naveen"), typeof map);

// recursion using factorial
// finding the factorial of 5! = 5*4*3*2*1

function fact(n)
{
     if(n==0)
          return 1;
     else
          return n*fact(n-1);
}
// let num = 5;
let results = fact(4);
console.log(results);
