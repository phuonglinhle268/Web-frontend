function findNumber(arr) {
    let before = (arr[0] + arr[arr.length - 1]) * (arr.length + 1) / 2;
    let after = 0, i = 0;
    while (i < arr.length) {
        after += arr[i];
        i++;
    }
    
    return before - after;
}

let userInput = prompt("Nhập dãy số nguyên");
let numbers = userInput.split(",");
let arr = [], i = 0;

while (i < numbers.length) {
    let num = parseInt(numbers[i]);
    if (!isNaN(num)) {
        arr.push(num);
    } else {
        console.log("Dữ liệu không hợp lệ");
        break;
    }
    i++;
}

if (arr.length > 1) {
    console.log("Số bị thiếu là:", findNumber(arr));
} else {
    console.log("Không hợp lệ.");
}
