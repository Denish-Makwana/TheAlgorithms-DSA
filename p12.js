// let n = 9;

// for (i = 0; i < n; i++) {
//     parttern = "";
//     for (j = 0; j < n ; j++) {
//         if (i === n - 9) {
//             parttern += "*";
//         } else if (j === i || j === 1) {
//             parttern += "*";
//         } else {
//             parttern += " ";
//         }
//     }
//     console.log(parttern);
// }

let n = 10;

for (i = 0; i < n; i++) {
    parttern = "";
    for (j = 0; j < n; j++) {
        if ((i == 0 && j < n) || (j == 0 && j < i) || i + j == n-1) {
            parttern += "*"
        } else {
            parttern += " "
        }
    }
    console.log(parttern);
}


// (i >= 0 && j == 0) || i + j == 9 



