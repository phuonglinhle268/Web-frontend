let str = "";  
while (true) {
    let menu = +prompt(
        "========== MENU ==========\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Tính độ dài của chuỗi\n" +
        "4. Đếm số lần xuất hiện của một ký tự\n" +
        "5. Kiểm tra chuỗi có đối xứng không\n" +
        "6. Viết hoa chữ cái đầu tiên của mỗi từ\n" +
        "7. Thoát\n" +
        "==========================\n" +
        "Lựa chọn của bạn: "
    );

    switch (menu) {
        case 1:
            str = prompt("Nhap chuoi");
            break;

        case 2:
            console.log(`Chuoi da nhap: ${str}`);
            break;

        case 3:
            console.log("Do dai cua chuoi la: " + str.length);
            break;

        case 4:
            let ki_tu = prompt("Nhap ki tu can biet so lan xuat hien");
            let count = 0;

            for (let i = 0; i < str.length; i++) {
                if (str[i] === ki_tu) {
                    count++;
                }
            }

            console.log(`So lan xuat hien cua ${ki_tu} la: ${count}`);
            break;

        case 5:
            let doi_xung = str.split("").reverse().join(" ");
            if (str === doi_xung) {
                console.log("Day la chuoi doi xung");
            } else {
                console.log("Day khong phai chuoi doi xung");
            }
            break;

        case 6:
            let in_hoa = str.split(" ");
            for (let i = 0; i < in_hoa.length; i++) {
                if (in_hoa[i].length > 0) {
                    in_hoa[i] = in_hoa[i][0].toUpperCase() + in_hoa[i].slice(1);
                }
            }
            str = in_hoa.join(" ");
            console.log(`Chuoi sau khi viet hoa la: ${str}`);
            break;

        case 7:
            console.log("Thoat");
            break;

        default:
            console.log("Lua chon khong hop le");
            break;
    }

    if (menu === 7) {
        break;
    }
}
