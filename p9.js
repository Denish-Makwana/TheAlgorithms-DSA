let n = 4;


for (i = 0; i <= n; i++) {
    star = "";
    for (j = 0; j < i; j++) {
        star += "*";
    }
    for (k = 0; k <= (n-i) * 2; k++) {
        star += " "
    }
    for (l = 0; l < i; l++) {
        star += "*"
    }
    console.log(star);
}


partten = "";
for (i = 0; i < n*2+1; i++) {
    partten += "*";
}
console.log(partten);



