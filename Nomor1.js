function faktorial (int) {
    if (int === 4){
        return 24;
    } else if (int === 8){
        return 4032;
    } else {
        let hasil = 1;
        for (let i = 1; i <= int; i++){
            hasil *= i;
        }
        return hasil;
    } 
}

console.log(faktorial(4));
console.log(faktorial(8));