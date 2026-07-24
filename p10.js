let n = 100;
function myFunction(n, count = 1) {
    if (count > n) return;
    console.log(count);
    myFunction(n, count + 1);
}
myFunction(n);










    

