let n = 10;
let pattern = "";

// 1
for (let i = 0; i < Math.floor(n / 3); i++) {
    for (let j = 0; j < n; j++) {
        if (j === Math.floor(n / 2) - i || j === Math.floor(n / 2) + i) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    }
    pattern += "\n";
}

// 2
for (let i = 0; i < n; i++) {
    pattern += "* ";
}
pattern += "\n";

// 3
for (let i = 0; i < n; i++) {
    if ( i==0) {
        pattern += " *";
    }
    else if (i === Math.floor(n-2)){
        pattern += " *";
    }
    else{
        pattern+="  "
    }
}
pattern += "\n";

// 5
for (let i = 0; i < n-1; i++) {
    if(i==0){
        pattern+= " "
    }
    else{
        pattern+=" *"
    }
}
pattern += "\n";

// 6
for (let i = 0; i < n/2-1; i++) {
    if (i % 2 !== 0) {
        pattern += "   ";
    }
    for (let j = 0; j < n  ; j++) {
        pattern += "~     ";
    }
    pattern += "\n"
}

console.log(pattern);

