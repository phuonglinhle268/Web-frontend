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
            let maxNum = matrix[0][0];
            let maxCol = 0, maxRow = 0;
            for (let i = 0; i < rows; i++){
                for (let j = 0; j < cols; j++){
                    if (matrix[i][j] > maxNum){
                        maxNum = matrix[i][j];
                        maxCol = j;
                        maxRow = i;
                    }
                }
            }
            console.log(`So lon nhat trong mang la ${maxNum}`);
            console.log(`So lon nhat o vi tri [${maxRow}][${maxCol}]`);
            break;
        case 5:
            let indexRow = parseInt(prompt(`Nhap so hang (0 - ${rows - 1}) de tinh trung binh`));
            if (indexRow < 0 || indexRow >= rows){
                console.log("Chi so nhap khong hop le");
            } else {
                let rowSum = 0;
                for (j = 0; j < cols; j++){
                    rowSum += matrix[indexRow][j];
                }
                let average = rowSum / cols;
                console.log(`Trung binh cua hang ${indexRow} la: ${average}`);
            }
            break;
        case 6:
            for (let i = 0; i < rows; i++){
                matrix.reverse();
            }
            console.log("Mang sau khi dao nguoc hang la:");
            for (let i = 0; i < rows; i++) {
                console.log(matrix[i].join("\t"));
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