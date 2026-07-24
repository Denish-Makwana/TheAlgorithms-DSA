// Expected output: a right-aligned inverted star triangle with 5 to 1 stars per row.
let row = 5;
let column = "";

for (i = 0; i < row; i++) {
    for (j = 0; j < i; j++) {
        column += " ";
    }
    for (k = 0; k < row - i; k++) {
        column += "*";
    }
    column += "\n";
}
console.log(column);




