// Expected output: seven centered rows of Pascal's triangle, from 1 to 1 6 15 20 15 6 1.
let n = 7;

for (i = 0; i < n; i++) {
    let str = " ";
    for (space = 0; space < n - i; space++) {
        str += " ";
    }
    let val = 1;
    for (j = 0; j <= i; j++) {
        str += val + " ";
        val = val * (i - j) / (j + 1);
    }
    console.log(str);
}



