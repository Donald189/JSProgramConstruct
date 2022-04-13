let a=10;
let b=15;
let c=20;
let d=a+b*c;
let d1=a%b+c;
let d2=c+a/b;
let d3=a*b+c;
//printing result
console.log(d, + d1, + d2, + d3);

//cheking maximum number
if(d>d1 && d>d2 && d>d3)
{
    console.log(d + " Largest output")
    
}
else if(d1>d && d1>d2 && d1>d3)
{
    console.log(d1 + " Largest output")
    
}
else if(d2>d && d2>d1 && d2>d3)
{
    console.log(d1 + " Largest output")

}
else
{
    console.log(d3 + " Largest output")
    
}
//Cheking minimum number
if(d<d1 && d<d2 && d<d3)
{
    
    console.log(d + " smallest output")
}
else if(d1<d && d1<d2 && d1<d3)
{
    
    console.log(d1 + " smallest output")
}
else if(d2<d && d2<d1 && d2<d3)
{
    
    console.log(d2 + " smallest output")
}
else
{
    
    console.log(d3 + " smallest output")
}