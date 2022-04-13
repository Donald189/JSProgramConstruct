year=2024;
if(year%4==0)
{
    console.log(year + " is Leap year")
}
else if(year %400 == 0)
{
    console.log(year + " is leap year")
}
else if(year %100 == 0)
{
    console.log(year + " is leap year")
}
else{
    console.log(year + " is not the leap year")
}