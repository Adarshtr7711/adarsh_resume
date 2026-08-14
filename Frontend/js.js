// // var num = 3;
// // if (num % 2===0)
// // {
// //     // document.write("Hi");
// //     console.log("Even");
// // }
// // else
// // {
// //     console.log("Odd");
// // }

// // console.log("Hi");

// // // Function with parameter and without parameter

// // //without parameter
// // function greetUser()
// // {
// //     console.log("This is java script")
// // }
// // greetUser()

// // //function with parameter
// // function greetUsers(username)
// // {
// //     console.log("Hello,"+username+ "welcome to js")
// // }
// // greetUsers("Adarsh ")

// // var a = 5;
// // var b = 6;
// // var c;
// // document.write("a+b=");
// // c = a/b;
// // document.write(c);

// // // Default parameter
// // function sum(num1, num2)
// // {
// //     console.log("sum of two number is:" +(num1 + num2) );
// // }
// // sum(3, 4);

// // // Return statement
// // function give(number)
// // {
// //     return number*number;
// // }
// // var solution = give(5);
// // console.log(solution);

// // Global context
// function c()
// {
//     console.log("Inside c");
// }
// function b()
// {
//     c();
//     console.log("Inside b");
// }
// function a()
// {
//     b();
//     console.log("Inside a");
// }
// a();
// console.log("Global context");

// // function Expression

// // function fact(n)
// // {
// //     var ans = 1;
// //     for(var i = 1; i<=n; i++)
// //     {
// //         ans *= i;
// //     }
// //     return ans;
// // }
// // var solv = fact(5);
// // console.log(solv);


// // var factorial = function fact(n)
// // {
// //     var ans = 1;
// //     for(var i=1; i<=n; i++)
// //     {
// //         ans*=i;
// //     }
// //     return ans;
// // }
// // var factorial = fact(5);
// // console.log(factorial);

// // var factorial = function fact(n)
// // {
// //     if(n==0)
// //     {
// //         return 1;
// //     }
// //     else
// //     {
// //         return n*fact(n-1);
// //     }
// // }
// // console.log(factorial(5));

// // passing function as a argument
// var factorial = function fact(n)
// {
//     var ans = 1;
//     for(var i = 1; i<=n; i++)
//     {
//         ans *=i;
//     }
//     return ans;
// }


// function ncr(n, r, factorial)
// {
//     return factorial(n)/factorial(r)*factorial(n-r); 
// }
// console.log(ncr(5,2,factorial));

// // division
// var a = 720;
// var b = 120;
// var c ;
// document.write("c=");
// c = a/b;
// document.write(c);

// // to find index using array values
// var teams = ["RCB", "CSK", "MI", "DC"];
// console.log("RCB_Index : ")
// var RCBindex = teams.indexOf("MI");
// console.log(RCBindex);

// // to find value is present or not
// var teams = ["RCB", "CSK", "MI", "DC"];
// console .log("Present_or_Not : ");
// var presentOrNot = teams.includes("SRH");
// console.log(presentOrNot);

// // to add values in between the array
// var teams = ["RCB","CSK", "MI", "DC"];
// console.log("inBetween :");
// var inBetween = teams.splice(3, 2, "GT");
// console.log(teams);

// // function with paramitar
// console.log("function with paramiter");
// function tree(name)
// {
//     console.log("2nd function with paramitar" +name+ "tree");
// }


console.log("Hello world")