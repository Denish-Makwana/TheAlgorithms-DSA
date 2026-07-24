// Expected output: a 5-by-5 clockwise spiral matrix that counts down from 25 to 1.
let n = 5;
let pattern = Array.from({ length: n }, () => Array(n));
let count = n * n;
let top = 0, bottom = n - 1, left = 0, right = n - 1;

while (count >= 1) {
    for (let i = left; i <= right; i++) {
        pattern[top][i] = count--;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
        pattern[i][right] = count--;
    }
    right--;

    for (let i = right; i >= left; i--) {
        pattern[bottom][i] = count--;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
        pattern[i][left] = count--;
    }
    left++;
}

// print the pattern
let result = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        result += pattern[i][j] + "\t";
    }
    result += "\n";
}
console.log(result);


// let n = 9;
// for (i = 0; i < n; i++) {
//     parttern = ""
//     for (j = 0; j < n * 2-1; j++) {
//         if (i + j == n - 1 && i < n / 2 || j - i == n - 1 && i < n / 2 || 
//             i == Math.floor(n / 2) && (j <= Math.floor(n / 2) || j >= n * 2 - Math.floor(n / 2))
//         ) {
//             parttern += "*"
//         }
//         else {
//             parttern += " "
//         }
//     }
//     console.log(parttern);
// }




