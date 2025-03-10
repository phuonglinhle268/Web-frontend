let str = ""; 

while (true) {
    let menu = +prompt(
        "========== MENU ==========\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Loại bỏ khoảng trắng ở đầu và cuối chuỗi\n" +
        "4. Đảo ngược chuỗi ký tự\n" +
        "5. Đếm số lượng từ trong chuỗi\n" +
        "6. Tìm kiếm và thay thế ký tự\n" +
        "7. Thoát\n" +
        "==========================\n" +
        "Lựa chọn của bạn: "
    );

    switch (menu) {
        case 1:  
            str = prompt("Nhap chuoi");
            break;

        case 2: 
            console.log(`Chuoi da nhap la: ${str}`);
            break;

        case 3: 
            str = str.trim();
            console.log(`Chuoi sau khi loai bo khoang trang: ${str}`);
            break;

        case 4:  
            let dao_nguoc = str.split("").reverse().join("");
            console.log(`Chuoi sau khi dao nguoc la: ${dao_nguoc}`);
            break;
        case 5:
            let wordAmount = str.trim().split(" ");
            let count = 0;
            for (let i =0 ; i < wordAmount.length; i++){
                if (wordAmount[i] !== ""){
                    count++;
                }
            }
            console.log(`So luong tu trong chuoi la: ${count}`);
            break;

        // case 6:  
        //     let searchChar = prompt("Nhập ký tự cần tìm:");
        //     if (str.includes(searchChar)) {
        //         let replaceChar = prompt(`Nhập ký tự thay thế cho '${searchChar}':`);
        //         str = str.split(searchChar).join(replaceChar);
        //         console.log("Chuỗi sau khi thay thế:", str);
        //     } else {
        //         console.log(`Không tìm thấy ký tự '${searchChar}' trong chuỗi.`);
        //     }
        //     break;

        case 7: 
            console.log("Thoat");
            break;

        default:
            console.log("Lua chon khong hop le");
            break;
    }

    if (menu === 7){
        break;
    }
}
