function checkNumber(arr) {
    if (!Array.isArray(arr) || arr.length < 2){
        return "dữ liệu không hợp lệ";
    }

    let i = 0;
    while (i < arr.length - 2) {
        if (arr[i + 2] - arr[i + 1] !== arr[i + 1] - arr[i]){
            return "FALSE";
        }
        i++;
    }
    return "TRUE";
}

function userInput() {
    let numbers = prompt("Nhập các số nguyên").split(",");
    let i = 0;
    while (i < numbers.length) {
        numbers[i] = parseInt(numbers[i]);
        if (isNaN(numbers[i])) {
            console.log("dữ liệu không hợp lệ");
            return;
        }
        i++;
    }
    console.log(checkNumber(numbers));
}

userInput();
