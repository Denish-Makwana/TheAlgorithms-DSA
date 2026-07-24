let n = 5;
pattern =""
for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= n - i; j++) {
      pattern += ' ';
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
      if (k === 1 || k === (2 * i - 1) || i === n) {
        pattern += '*';
      } else {
        pattern += ' ';
      }
    }
    pattern += '\n';
  }
  console.log(pattern);
  