function checkNumber() {
    let numbers = []; 

    while (true) {
        let choice = parseInt(prompt(
            "1. Nhập danh sách số nguyên\n" +
            "2. Tính trung bình các số\n" +
            "3. Tìm số chẵn lớn nhất\n" +
            "4. Tìm số lẻ nhỏ nhất\n" +
            "5. Thoát"
        ));

        switch (choice) {
            case 1:
                let count = parseInt(prompt("Nhập số lượng số nguyên:"));
                if (isNaN(count) || count <= 0) {
                    console.log("Giá trị không hợp lệ!");
                    break;
                }
                numbers = []; 
                for (let i = 0; i < count; i++) {
                    while (true) {
                        let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`));
                        if (isNaN(num)) {
                            console.log("Giá trị không hợp lệ! Vui lòng nhập lại.");
                        } else {
                            numbers.push(num);
                            break;
                        }
                    }
                }
                break;

            case 2:
                if (numbers.length === 0) {
                    console.log("Danh sách trống!");
                } else {
                    let sum = 0;
                    for (let num of numbers) {
                        sum += num;
                    }
                    let average = sum / numbers.length;
                    console.log(`Trung bình các số là: ${average}`);
                }
                break;

            case 3:
                let maxEven = null;
                for (let num of numbers) {
                    if (num % 2 === 0) {
                        if (maxEven === null || num > maxEven) {
                            maxEven = num;
                        }
                    }
                }
                if (maxEven === null) {
                    console.log("Không có số chẵn trong danh sách.");
                } else {
                    console.log(`Số chẵn lớn nhất là: ${maxEven}`);
                }
                break;

            case 4:
                let minOdd = null;
                for (let num of numbers) {
                    if (num % 2 !== 0) {
                        if (minOdd === null || num < minOdd) {
                            minOdd = num;
                        }
                    }
                }
                if (minOdd === null) {
                    console.log("Không có số lẻ");
                } else {
                    console.log(`Số lẻ nhỏ nhất là: ${minOdd}`);
                }
                break;

            case 5:
                console.log("Thoát ");
                return;

            default:
                console.log("Lựa chọn không hợp lệ");
                break;
        }
    }
}

checkNumber();
