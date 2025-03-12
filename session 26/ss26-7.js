function inputNumber() {
    let numbers = [];
    let count = 10; 

    for (let i = 0; i < count; i++) {
        let num = +prompt(`Nhap phần tử thứ ${i + 1}`);
        if (isNaN(num)) {
            console.log("Dữ liệu không hợp lệ");
        }
        numbers.push(num);
    }
    return numbers;
}

function checkNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Mảng trống";
    }
    let binh_phuong = arr.map(function (num) {
        return num * num;
    });
    let evenNum = binh_phuong.filter(function (num) {
        return num % 2 === 0;
    });

    if (evenNum.length === 0) {
        return "Không có số chẵn";
    }

    return evenNum;
}
let answer = inputNumber();
if (answer.length > 0) {
    let result = checkNumber(answer);
    console.log(result);
}
