let number = parseInt(prompt("Nhập số lượng số nguyên tố cần tìm: "));
let check = 0;
let i = 2;
while (check < number) {
    let primeNumber = true;
    if (i < 2) {
        primeNumber = false;
    } else {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                primeNumber = false;
                break;
            }
        }
    }
    if (primeNumber) {
        console.log(`Số nguyên tố thứ ${check++}: ${i}`);
       
    }
    i++;
}
