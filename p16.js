let n = 10;
let pattern = "";

for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
        if (j+i==n-1 || i-j==n-1 || j-i == n-1 || j === (3 * (n - 1)) - i) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    }
    pattern += "\n";
}

console.log(pattern);








// j === n - 1 - i || j === n - 1 + i || j === i - (n - 1) || j === (3 * (n - 1)) - i



