let row = 5;
let column = "";

for (i = 0; i < row; i++) {
    for (j = 0; j <row- i; j++) {
        column += "*";
    }
    column += "\n";
}
console.log(column);




