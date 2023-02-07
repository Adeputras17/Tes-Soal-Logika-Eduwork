function tahunKabisat(tahun) {
    if (tahun % 400 === 0 || (tahun % 100 !== 0 && tahun % 4 === 0)) {
        return tahun + " adalah tahun kabisat";
    }
    return tahun + " bukan tahun kabisat";
}

console.log(tahunKabisat(2021));
console.log(tahunKabisat(2024));