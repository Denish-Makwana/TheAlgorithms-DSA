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



