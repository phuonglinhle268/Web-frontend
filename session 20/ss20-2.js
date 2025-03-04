let number = parseInt(prompt("Nhập số bất kì"));
let result = [] ;
    for (let i = 5; i <= number; i += 5) {
        result.push(i);
    }
    console.log(`các số chia hết cho 5 từ 1 đến ${number} là: ${result}`);
