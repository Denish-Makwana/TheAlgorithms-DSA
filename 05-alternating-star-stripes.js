// Expected output: five rows of alternating full and two-star stripes.
let row = 5;
let col = 5;

for (i = 0; i < row; i++) {
    pattern = "";
    for (j = 0; j < col; j++)
        if ((i % 2 === 0) || (i % 2 !== 0 && j === 0) || (j === 1 && i % 2 !== 0)) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    console.log(pattern);
}



