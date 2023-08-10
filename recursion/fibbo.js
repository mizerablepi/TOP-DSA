function fibb(n) {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    const a = seq[i - 2];
    const b = seq[i - 1];
    seq.push(a + b);
  }
  return seq;
}

function fibbRec(n, seq = [0, 1]) {
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);

  if (n <= 3) {
    return seq;
  } else {
    return fibbRec(n - 1, seq);
  }
}

console.log(fibb(8));
console.log(fibbRec(8));
