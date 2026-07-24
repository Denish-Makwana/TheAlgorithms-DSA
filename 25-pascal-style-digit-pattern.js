// Expected output: a seven-row Pascal-style digit pattern generated with arithmetic.
let n = 7, val = 1; let x = 1;
for (let i = 0; i < n; i++) {
    let line = "";
    for (k = 0; k < n - i; k++) {
        line += " "
    };
    let m = x;
    for (let j = 0; j <= i; j++) {
        line += Math.floor(val / m) % 10 + " ";
        m = m / 10;
    };
    val *= 11;
    x *= 10;
    console.log(line);
};











// let n = 7, val = 1;
// for (let i = 0; i <= n; i++) {
//     let pattern = " ";
//     let temp = val,div = 1;
//     while (temp / div >= 10) div *= 10;
//     while (div > 0) {
//         pattern += Math.floor(temp / div) + " ";
//         temp %= div;
//         div = Math.floor(div / 10);
//     }
//     val = val *= 11
//     console.log(pattern);
// }
