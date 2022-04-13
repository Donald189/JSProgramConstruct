// program to find the largest among three numbers

// take input from the user
num1 = 569;
num2 = 987;
num3 = 999;
let Minimum;
let Maximum

// check the condition for Maximum Number
if(num1 >= num2 && num1 >= num3)
{
    Maximum = num1;
}
else if (num2 >= num1 && num2 >= num3) 
{
    Maximum = num2;
}
else 
{
    Maximum = num3;
}

// display the result
console.log("The largest number is " + Maximum);

// check the condition for Minimum Number
if(num1 <= num2 && num1 <= num3)
{
    Minimum = num1;
}
else if (num2 <= num1 && num2 <= num3) 
{
    Minimum = num2;
}
else 
{
    Minimum = num3;
}

// display the result
console.log("The mallest number is " + Minimum);