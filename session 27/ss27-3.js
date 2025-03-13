function calculatorShape() {
    while (true) {
        let choice = parseInt(prompt(
            "1. Tính diện tích hình tròn\n" +
            "2. Tính chu vi hình tròn\n" +
            "3. Tính diện tích hình chữ nhật\n" +
            "4. Tính chu vi hình chữ nhật\n" +
            "5. Thoát"
        ));

        switch (choice) {
            case 1:
                let radius1 = parseFloat(prompt("Nhập bán kính:"));
                if (isNaN(radius1) || radius1 <= 0) {
                    console.log("Giá trị không hợp lệ");
                } else {
                    let area = Math.PI * radius1 * radius1;
                    console.log(`Diện tích hình tròn là: ${area.toFixed(2)}`);
                }
                break;

            case 2:
                let radius2 = parseFloat(prompt("Nhập bán kính:"));
                if (isNaN(radius2) || radius2 <= 0) {
                    console.log("Giá trị không hợp lệ");
                } else {
                    let circumference = Math.PI * radius2 * 2;
                    console.log(`Chu vi hình tròn là: ${circumference.toFixed(2)}`);
                }
                break;

            case 3:
                let height = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
                let width = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
                if (isNaN(height) || isNaN(width) || width <= 0 || height <= 0) {
                    console.log("Thông tin không hợp lệ");
                } else {
                    let area = height * width;
                    console.log(`Diện tích hình chữ nhật là: ${area.toFixed(2)}`);
                }
                break;

            case 4:
                let chieu_rong = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
                let chieu_dai = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
                if (isNaN(chieu_dai) || isNaN(chieu_rong) || chieu_dai <= 0 || chieu_rong <= 0) {
                    console.log("Thông tin không hợp lệ");
                } else {
                    let perimeter = (chieu_dai + chieu_rong) * 2;
                    console.log(`Chu vi hình chữ nhật là: ${perimeter.toFixed(2)}`);
                }
                break;

            case 5:
                console.log("Thoát chương trình.");
                return; // Dừng vòng lặp

            default:
                console.log("Lựa chọn không hợp lệ, vui lòng nhập từ 1 đến 5.");
                break;
        }
    }
}

calculatorShape();
