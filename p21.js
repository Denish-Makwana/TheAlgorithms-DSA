let rows = 5;
let line = "";


for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= rows - i; j++) {
        line += " ";
    }
    for (let k = 0; k < i; k++) {
        line += "  *";
    }
    line += "\n";
}
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i; j++) {
        line += "  ";
    }
    for (let k = 0; k < rows * 2 - i; k++) {
        line += "*  ";
    }
    line += "\n"
}
for (let i = 0; i < rows - 1; i++) {
    if (i % 2 !== 0) {
        line += "   ";
    }
    for (let j = 0; j < rows * 2; j++) {
        line += "~     ";
    }
    line += "\n"
}

console.log(line);

