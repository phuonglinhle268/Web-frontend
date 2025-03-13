function checkNumber() {
    while (true) {
        let menu = parseInt(prompt(
            "Chọn chức năng:\n" +
            "1. Cộng hai số\n" +
            "2. Trừ hai số\n" +
            "3. Nhân hai số\n" +
            "4. Chia hai số\n" +
            "5. Thoát"
        ));
         let num1 = parseInt(prompt("Nhập số thứ nhất:"));
        let num2 = parseInt(prompt("Nhập số thứ hai:"));

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Số không hợp lệ");
        }

        let result;
        switch (menu) {
            case 1:
                result = num1 + num2;
                console.log(`Tổng hai số: ${num1} + ${num2} = ${result}`);
                break;
            case 2:
                result = num1 - num2;
                console.log(`Hiệu hai số: ${num1} - ${num2} = ${result}`);
                break;
            case 3:
                result = num1 * num2;
                console.log(`Tích hai số: ${num1} * ${num2} = ${result}`);
                break;
            case 4:
                if (num2 === 0) {
                    console.log("Số chia không được bằng 0");
                } else {
                    result = num1 / num2;
                    console.log(`Thương hai số: ${num1} ÷ ${num2} = ${result}`);
                }
                break;
            case 5:
                console.log("Thoát");
                break;
            default:
                console.log("Lựa chọn không hợp lệ");
                break;
        }
    }
}

checkNumber();
