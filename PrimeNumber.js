var x=11;
var flag=0;
for( var i=2;i<=x;i++)
{
    if(x%i==0)
    {
        flag=0;
        for( var j=2;j<=i/2;j++)
        {
            if(i%j==0)
            {
                flag=1;
            }
        }
    }
}