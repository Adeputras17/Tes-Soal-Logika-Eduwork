function faktorial(int) {
    let hasil = 1;
    for (let i = 1; i <= int; i++) {
        hasil *= i;
    }
    return hasil;

}

console.log(faktorial(4));
console.log(faktorial(8));
console.log(faktorial(5));