let n = 6;
parttern = ""

for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if (j == 0 && i < n || j == n && i == n || i == j || j + i == n - 1 || i <= n && j == n - 1) {
            parttern += "*"
        }
        else {
            parttern += " "
        }
    }
    parttern += "\n"
}
console.log(parttern);
