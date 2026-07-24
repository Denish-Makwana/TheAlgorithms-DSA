let n = 9;
parttern = ""
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i <= n / 2 && j == 0 || i == j || i == Math.floor(n / 2) && j < Math.floor(n / 2) || 
            i > Math.floor(n / 2) && j == Math.floor(n / 2) ||
            i == n - 1 && j > Math.floor(n / 2)) {
            parttern += "*";
        } else {
            parttern += " ";
        }
    }
    parttern += "\n";
}
console.log(parttern);











