let number = +(prompt("Nhập vào một số nguyên:"));
if (!isNaN(number)) {
    console.log(`Ước của ${number} là: `);
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
} 
