let n = 5;
let parttern = "";

for (i = n; i >= 1; i--) {
    for (j = 0; j <n-i ; j++) {
        parttern += " ";
    }
    for (k = 0; k < i*2 -1; k++) {
        parttern += "*";
    } 
    parttern += "\n";
}
console.log(parttern);
