let arr = [];
while (true){
    let menu = +prompt(
        "========== MENU ===========\n" +
        "1. Nhập mảng \n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất trong mảng và in ra các chỉ số của nó\n" +
        "4. Tính tổng và trung bình cộng của các số dương trong mảng\n" +
        "5. Đảo ngược mảng\n" +
        "6. Kiểm tra mảng có đối xứng không\n" +
        "7. Thoát\n" +
        "============================\n" +
        "Lựa chọn của bạn: ");
    switch (menu){
        case 1:
            let n = parseInt(prompt("Nhap so luong phan tu muon them muon mang"));
            if (n < 0){
                console.log("So luong phan tu khong hop le");
            } else {
                arr = [];
                for (let i = 0; i < n; i++){
                    let numbers = parseInt(prompt(`Nhap phan tu thu ${i + 1}`));
                    arr.push(numbers);
                }
            }
            break;
        case 2:
            for (let i in arr){
                console.log(`${i}. ${arr[i]}`);
            }
            break;
        case 3:
            let max = arr[0];
            let index = 0;
            for (let i = 1; i < arr.length; i++){
                if (arr[i] > max){
                    max = arr[i];
                    index = i;
                }
            }
            console.log(`So lon nhat trong mang la ${max}`);
            console.log(`So lon nhat o vi tri thu ${index}`);
            break;
        case 4:
            let sum = 0;
            let count = 0;
            for (let i = 0; i < arr.length; i++){
                if (arr[i] > 0){
                    sum += arr[i];
                    count++;
                }
            }
            let average = 0;
            if (count > 0){
                average = sum / count;
            }
            console.log(`Tong cac so duong la ${sum}`);
            console.log(`Trung binh cong cac so duong la ${average}`);
            break;
        case 5:
            let dao_nguoc = [];
            for (let i = arr.length - 1; i >= 0; i--) {
                dao_nguoc.push(arr[i]);
            }        
            console.log(`Mang sau khi dao nguoc la ${dao_nguoc}`);
            break;
        case 6:
            let doixung = true;
            for (let i = 0; i < arr.length / 2; i++) {
                if (arr[i] !== arr[arr.length - 1 - i]) {
                    doixung = false;
                    break;
                }
            }
            if (doixung){
                console.log("Day la mang doi xung");
            } else{
                console.log("Day khong phai mang doi xung");
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