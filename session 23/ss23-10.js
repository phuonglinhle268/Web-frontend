let arr = [];

while (true) {
    let menu = +prompt(
        "================== MENU ===================\n" +
        "1. Nhập số phần tử cần nhập và giá trị các phần tử\n" +
        "2. In ra giá trị các phần tử đang quản lý\n" +
        "3. In ra giá trị các phần tử chẵn và sắp xếp theo thứ tự giảm dần\n" +
        "4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng\n" +
        "5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n" +
        "6. Nhập vào một số và đếm số lần xuất hiện trong mảng\n" +
        "7. Thêm một phần tử vào vị trí chỉ định\n" +
        "8. Xóa một phần tử theo giá trị\n" +
        "9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần\n" +
        "10. Thoát\n" +
        "============================================\n" +
        "Lựa chọn của bạn: ");
    switch (menu) {
        case 1:
            let n = parseInt(prompt("Nhập số phần tử của mảng:"));
            if (n < 0) {
                console.log("Số lượng phần tử không được nhỏ hơn 0");
            } else {
                arr = [];
                for (let i = 0; i < n; i++) {
                    let numbers = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
                    arr.push(numbers);
                }
            }
            break;

        case 2:
            for (let i in arr) {
                console.log(`${i}. ${arr[i]}`);
              }
              break;

        case 3:
            let evenNum = 0;
            break;

        case 4:
            let max = arr[0];
            let min = arr[0];
            let numIndex = 0;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    numIndex = i;
                }
                if (arr[i] < min){
                    min = arr[i];
                   numIndex = i;
                }
            }
            console.log(`Giá trị lớn nhất là: ${max}, ở vị trí ${numIndex}`);
            console.log(`Giá trị nhỏ nhất là: ${min}, ở vị trí ${numIndex}`);
            break;

        case 5:
            let primeNum = [];
            let primeSum = 0;
            for (let i = 0; i < arr.length; i++) {
                let num1 = arr[i];
                let check = num1 > 1;
                for (let j = 2; j * j <= num1; j++) {
                    if (num1 % j === 0) {
                        check = false;
                        break;
                    }
                }
                if (check) {
                    primeNum.push(num1);
                    primeSum += num1;
                }
            }
            console.log(`Các số nguyên tố là:  ${primeNum}`);
            console.log(`Tổng các số nguyên tố là  ${primeSum}`)
            break;
        case 6:
            let a = parseInt(prompt("Nhập số cần thống kê số lần xuất hiện:"));
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === a) {
                    count++;
                }
            }
            console.log(`Số ${a} xuất hiện ${count} lần.`);
            break;
        case 7:
            let addNumber = +prompt("Mời nhập số lượng phần tử muốn thêm");
            let addIndex = +prompt("Mời nhập vào vị trí muốn thêm phần tử");
            if (addIndex < 0 || addIndex> arr.length) {
                console.log("Vị trí không hợp lệ!");
            } else {
                for (let i = 0; i < addNumber; i++) {
                    let addValue = +prompt("Mời nhập phần tử muốn thêm");
                    arr.splice(addIndex, 0, addValue);
                  }
                arr[addIndex] = value;
                console.log("Mảng sau khi thêm phần tử:", arr);
            }
            break;
        case 8:
            let position = +prompt("Mời bạn nhập vị trí muốn xóa");
            for(let i = 0; i <position; i++){
                arr.splice(position, 1);
            }
            break;
        case 9:
            break;
        case 10:
            console.log("Thoát");
            break;

        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }

    if (menu === 10) {
        break;
    }
}
