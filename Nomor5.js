function angkaToString(num) {
    let hasil = '';
    let digit1 = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
    let digit2 = ['', 'sepuluh', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];

    if (num >= 1 && num <= 100) {
        if (num < 10) {
            hasil = digit1[num];
        } else if (num % 10 === 0) {
            hasil = digit2[num / 10];
        } else {
            hasil = digit2[Math.floor(num / 10)] + ' ' + digit1[num % 10];
        }
    } else {
        hasil = 'silahkan masukkan bilangan 1-100';
    }

    return hasil;
}

console.log(angkaToString(4));
console.log(angkaToString(20));
console.log(angkaToString(39));
console.log(angkaToString(104));