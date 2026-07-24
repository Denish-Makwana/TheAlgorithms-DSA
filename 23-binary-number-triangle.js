// Expected output: a centered binary triangle with alternating 1 and 0 values.
let n = 5;
parttern = ""

for (i = 0; i <= n; i++) {
    for (k = 0; k < n - i; k++) {
        parttern += " "
    }
    for (j = 0; j < i; j++) {
        if (j % 2 == 0) {
            parttern += "1 "
        }
        else {
            parttern += "0 "
        }
    }
    {
        parttern += " "
    }
    parttern += "\n"

}
console.log(parttern);
