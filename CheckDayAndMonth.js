var dayFromUser = 20;
var monthFromUser=5;
if((monthFromUser>=3 && monthFromUser<=6)&&(dayFromUser<=31 && dayFromUser <=1))
{
   console.log("True")
}
else if(monthFromUser==3 && dayFromUser<=20 && dayFromUser<=31)
{
    console.log("True")
}
else if(monthFromUser==4 && dayFromUser>=1 && dayFromUser<=30)
{
    console.log("True")
}
else if(monthFromUser==5 && dayFromUser>=1 && dayFromUser<=31)
{
    console.log("True")
}
else if(monthFromUser==6 && dayFromUser<=20 && dayFromUser>=1)
{
    console.log("True")
}
else
{
    console.log("False! Please enter date between 20 march and 20 june")
}