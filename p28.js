let n = 10;
let pattern = Array.from({ length: n }, () => Array(n).fill(0));
let count = 1;

let top = 0, bottom = n - 1;
let left = 0, right = n - 1;

while (count <= n * n) {
    for (let i = bottom; i >= top ; i--) {
        pattern[i][right] = count++;
    }
    right--;

    for (let i = right; i >= left; i--) {
        pattern[top][i] = count++;
    }
    top++;

    for (let i = top; i <= bottom ; i++) {
        pattern[i][left] = count++;
    }
    left++;

    for (let i = left; i <= right; i++) {
        pattern[bottom][i] = count++;
    }
    bottom--;
}

let result = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        result += pattern[i][j] + "\t";
    }
    result += "\n";
}
console.log(result);
