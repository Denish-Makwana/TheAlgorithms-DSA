// Expected output: a 5-by-5 counter-clockwise spiral matrix containing 1 through 25.
let n = 5;
let pattern = Array.from({ length: n }, () => Array(n));
let count = 1;
let top = 0, right = n - 1, bottom = n - 1, left = 0;

while (count <= n * n) {
    for (let i = right; i >= left; i--) {
        pattern[top][i] = count++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
        pattern[i][left] = count++;
    }
    left++;

    for (let i = left; i <= right; i++) {
        pattern[bottom][i] = count++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
        pattern[i][right] = count++;
    }
    right--;
}

// Print the pattern
let result = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        result += pattern[i][j] + "\t";
    }
    result += "\n";
}
console.log(result);

