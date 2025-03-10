let matrix = [];
let rows = 0, cols = 0;
while (true){
    let menu = +prompt(
        "========== MENU ===========\n" +
        "1. Nhập mảng 2 chiều \n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n" +
        "5. Tính trung bình cộng các phần tử của một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong\n" +
        "7. Thoát\n" +
        "============================\n" +
        "Lựa chọn của bạn: ");
    switch (menu){
        case 1:
            let rows = parseInt(prompt("Nhap so hang cua mang"));
            let cols = parseInt(prompt("Nhap so cot cua mang"));
            matrix = [];
            for (let i = 0; i < rows; i++){
                matrix[i] =[];
                for (let j = 0; j < cols; j++){
                    matrix[i][j] = parseInt(prompt(`Nhap phan tu thu [${i}][${j}]`));
                }
            }
            console.log(`Mang 2 chieu da nhap ${matrix}`);
            break;
        case 2:
            console.log("Mang 2 chieu:");
            for (let i = 0; i < rows; i++) {
                console.log(matrix[i].join("\t"));
            }
            break; 
        case 3:
            let sum = 0;
            for (let i =0; i < rows; i++){
                for (let j =0; j < cols; j++){
                        sum += matrix[i][j];
                }
            }
            console.log("Tong cac phan tu trong mang la: " + sum);
            break;
        case 4:
            if (rows !== cols){
                console.log("Day khong phai ma tran vuong");
            } else {
                let cheo_chinh = 0;
                for (let i = 0; i < rows; i++){
                    cheo_chinh += matrix[i][i];
                }
                console.log(`Tong duong cheo chinh la: ${cheo_chinh}`);
            }
            break;
        case 5:
            if (rows !== cols) {
                console.log("Day khong phai ma tran vuong");
            } else {
                let cheo_phu = 0;
                for (let i = 0; i < rows; i++) {
                    cheo_phu += matrix[i][cols - 1 - i];
                }
                console.log(`Tong duong cheo phu la: ${cheo_phu}`);
            }
            break;
        case 6: 
        let average = prompt("Chon tinh trung binh cong cua hang (chon 1) hay cot (chon 2)");
        if (average == "1"){
            let rowIndex = parseInt(prompt(`Nhap chi so hang (tu 0 den ${rows - 1})`));
        if (rowIndex >= 0 && rowIndex < rows){
            let rowSum = 0;
            for (let j = 0; j < cols; j++){
                rowSum += matrix[rowIndex][j];
            }
            console.log(`Trung binh cong cua hang ${rowIndex} la: ` + rowSum / cols);
        } else {
            console.log("Chi so hang khong hop le");
        }
        } else if(average = "2") {
            let colIndex = parseInt(prompt(`Nhap chi so hang (tu 0 den ${cols - 1})`));
            if (colIndex >= 0 && colIndex < cols) {
                let colSum = 0;
                for (let i = 0; i < rows; i++) {
                   colSum += matrix[i][colIndex];
                }
                console.log(`Trung binh cong cua cot ${colIndex} la: `+ colSum / rows);
            } else {
                console.log("Chi so cot khong hop le");
            }
    
        } else {
            console.log("Lua chon khong hop le");
        }
        break;
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