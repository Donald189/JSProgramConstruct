let num = window.prompt("Enter the number in the form of 1, 10, 100, 1000, 10000......");
if(num == 1)
{
    console.log("One");
}
else if(num == 10)
{
    console.log("Tens")
}
else if(num == 100)
{
    console.log("Hundreds")
}
else if(num == 1000)
{
    console.log("Thousands")
}
else if(num == 10000)
{
    console.log("Ten Thousands")
}
else{
    console.log("Please enter valid number")
}