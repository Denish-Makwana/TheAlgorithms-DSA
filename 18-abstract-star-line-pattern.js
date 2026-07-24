// Expected output: a 10-row abstract line pattern with a central cross and outer edges.
let n = 10;
parttern = ""

for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if (
            (j < (Math.floor(n / 2)) && i == 0 ||
            (i < n && j == Math.floor(n / 2)) ||
            i < n && (j == Math.floor(n / 2)) ||
            (i === Math.floor(n / 2)))        || 
            (i==n-1 && j>=(Math.floor(n / 2))) ||
            (i>=(Math.floor(n/ 2)) && j==0) ||
            (i>=(Math.floor(n / 2)) && j==0) ||
            (i<=(Math.floor(n / 2)) && j==n-1)
        )
        {
            parttern += "*"
        }
        else {
            parttern += " "
        }
    }
    parttern += "\n"
}
console.log(parttern);
