let n = 10;
let pattern = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i == (Math.floor(n / 2)) || j <= i && j < n - i || j >= i && j > n - i - 2) {
            pattern += "*"
        }
        else {
            pattern += " "
        }
    }
    pattern += "\n";
}
console.log(pattern);


// if (j == 0 && i < n || j == n && i == n || i == j || j + i == n - 1 || i <= n && j == n - 1) {
//     parttern += "*"
// }

// let n = 5;
// let pattern = '';

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//         pattern += "*"
//     }
//     for (k = 0; k < (n - i) *2; k++) {
//         pattern += " "
//     }
//     for (j = 0; j < i; j++) {
//         pattern += "*"
//     }
//     pattern += '\n';
// }
// for (let i = n; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//         pattern += "*"
//     }
//     for (k = 0; k < (n - i) * 2; k++) {
//         pattern += " "
//     }
//     for (j = 0; j < i; j++) {
//         pattern += "*"
//     }
//     pattern += '\n';
// }


// console.log(pattern);