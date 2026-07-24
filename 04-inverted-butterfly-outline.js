// Expected output: an inverted butterfly outline, beginning with a 21-star top border.
let n = 10;

partten = "";
for (i = 0; i < n*2+1; i++) {
    partten += "*";
}
console.log(partten);


for (i = 0; i < n; i++) {
    star = "";
    for (j = 0; j < n - i; j++) {
        star += "*";
    }
    for (k = i - 1; k < i * 3; k++) {
        star += " "
    }
    for (l = 0; l < n - i; l++) {
        star += "*"
    }
    console.log(star);
}




