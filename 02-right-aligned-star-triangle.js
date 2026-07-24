// Expected output: a right-aligned star triangle with 1 to 5 stars per row.
let row = 5,n,j,k;
let column ="";

for(i=1;i<=row;i++)
{
    for(j=1;j<=row-i;j++)
    {
        column+= " ";
    }
    for(k=1;k<=i;k++)
    {
        column+=  "*";
    }
    column+= "\n";
}
console.log(column);
