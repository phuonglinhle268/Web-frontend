function checkNumber(arr, size) {
    if (!Array.isArray(arr) || typeof size !== "number" || size <= 0) {
        return "Dữ liệu không hợp lệ";
    }

    let result = [];
    let i = 0;
    while (i < arr.length) {
        let mang = [];
        let j = 0;
        while (j < size && (i + j) < arr.length) {
            mang[mang.length] = arr[i + j];
            j++;
        }
        result[result.length] = mang;
        i += size;
    }
    return result;
}

function userInput() {
    let inputNum = prompt("Nhập các số nguyên");
    let numberList = inputNum.split(",");

    let numbers = [];
    let i = 0;
    while (i < numberList.length) {
        let num = parseInt(numberList[i]);
        if (!isNaN(num)) {
            numbers[numbers.length] = num;
        } else {
            console.log("Dữ liệu không hợp lệ");
            return;
        }
        i++;
    }

    let mang_con = prompt("Nhập kích thước của mảng con:");
    let size = parseInt(mang_con);

    if (isNaN(size) || size <= 0) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let result = checkNumber(numbers, size);
    console.log(result);
}
userInput();
