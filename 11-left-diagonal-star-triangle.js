// Expected output: a 3-row left-edge and diagonal star triangle.
let n = 3;

for (i = 0; i < n; i++) {
    parttern = "";
    for (j = 0; j < n; j++) {
        if ((i <= n && j == 0) || i <= n && i - j == 0 || i == n - 1 && j <= n) {
            parttern += "*"
        } else {
            parttern += " "
        }
    }
    console.log(parttern);
}



