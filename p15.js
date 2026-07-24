let n = 3;
let pattern = "";

for (let i = 0; i <= n * 2; i++) {
    for (let j = 0; j <= n * 2; j++) {
        if (i === j || j === n || i === n || i + j === n * 2) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    }
    pattern += "\n";
}

console.log(pattern);
