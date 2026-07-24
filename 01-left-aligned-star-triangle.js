// Expected output: a left-aligned star triangle with 1 to 5 stars per row.
let row = 5;
let column = "";

for (i = 0; i <= row; i++) {
    // console.log(i);
    for (j = 0; j < i; j++) {
        column += " *";
    }
    column += "\n";
}
console.log(column);


// let n = 10;
// line = "";

// for (i = 1; i <= n; i++) {
//     for (j = 0; j < i; j++) {
//         line += i;
//     }
//     line += "\n"
// }
// console.log(line);



