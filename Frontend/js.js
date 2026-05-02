var num = 3;
if (num % 2===0)
{
    // document.write("Hi");
    console.log("Even");
}
else
{
    console.log("Odd");
}

console.log("Hi");

// Function with parameter and without parameter

//without parameter
function greetUser()
{
    console.log("This is java script")
}
greetUser()

//function with parameter
function greetUsers(username)
{
    console.log("Hello,"+username+ "welcome to js")
}
greetUsers("Adarsh ")