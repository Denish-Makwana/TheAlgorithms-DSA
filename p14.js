let n = 10;
let pattern = '';

for (let i = 0; i < n; i++) {
    for (let j = 2; j <= n * 2; j++) {
        if (j == 2 || i + j === n + 1 || j - i == n + 1 || j == n * 2 || i == 0) {
            pattern += '*';
        } else {
            pattern += ' ';
        }
    }
    pattern += '\n';
}

console.log(pattern);


// sem -2


// let n = 5;
// let pattern = '';

// partten = "";
// for (i = 0; i < n * 2 + 1; i++) {
//     partten += "*";
// }
// console.log(partten);

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= n * 2; j++) {
//         if (j === 0 || i + j === n - 1 || j - i == n + 1  || j==n*2) {
//             pattern += '*';
//         } else {
//             pattern += ' ';
//         }
//     }
//     pattern += '\n';
// }

// console.log(pattern);
