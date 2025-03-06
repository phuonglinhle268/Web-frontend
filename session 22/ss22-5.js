let numbers = [];
for (let i = 0; i < 5; i++) {
    let num = +(prompt(`Nhập số nguyên thứ`));

    if (isNaN(num)) {
        console.log("Không hợp lệ");
        i--;
    } else {
        numbers.push(num);
    }
}
let oddNumber = 0;
let evenNumber = 0;
for (let num of numbers) {
    if (num % 2 === 0) {
        evenNumber += num; 
    } else {
        oddNumber += num;  
    }
}
console.log("Tổng các số lẻ:", oddNumber);
console.log("Tổng các số chẵn:", evenNumber);

