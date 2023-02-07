
function printDigit(str) {
    let digit = "";
    let hasil = [];
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            digit += str[i];
        } else {
            if (digit.length > 0) {
                hasil.push(parseInt(digit));
                digit = "";
            }
        }
    }
    if (digit.length > 0) {
        hasil.push(parseInt(digit));
    }
    hasil.forEach(function (value) {
        console.log(value);
    });
}

printDigit("9.86-A5.321");
