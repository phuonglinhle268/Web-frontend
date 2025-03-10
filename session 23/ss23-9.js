let arr = [];

while (true) {
    let menu = +prompt(
        "================== MENU ===================\n" +
        "1. Nhập số phần tử cần nhập và giá trị các phần tử\n" +
        "2. In ra giá trị các phần tử đang quản lý\n" +
        "3. In ra giá trị các phần tử chẵn và tính tổng\n" +
        "4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n" +
        "5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n" +
        "6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n" +
        "7. Thêm một phần tử vào vị trí chỉ định\n" +
        "8. Thoát\n" +
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
            let evenNum = [];
            let evenSum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    evenNum.push(arr[i]);
                    evenSum += arr[i];
                }
            }
            console.log(`Các số chẵn là: ${evenNum}`);
            console.log(`Tổng các số chẵn là:  ${evenSum}`);
            break;

        case 4:
            let max = arr[0];
            let min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
                if (arr[i] < min)  {
                    min = arr[i];
                }
            }
            console.log(`Giá trị lớn nhất là: ${max} `);
            console.log(`Giá trị nhỏ nhất là: ${min}`);
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
           if (count > 0){
            console.log(`Số ${a} xuất hiện ${count} lần.`);
           } else{
            console.log("Khong ton tai phan tu");
           }
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
            console.log("Thoát");
            break;

        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }

    if (menu === 8) {
        break;
    }
}
