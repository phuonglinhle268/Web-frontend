let arr = [];
while (true){
    let menu = +prompt(
        "========== MENU ===========\n" +
        "1. Nhập mảng \n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n" +
        "4. Tính tổng các phần tử trong mảng\n" +
        "5. Tìm số lần xuất hiện của một phần tử trong mảng\n" +
        "6. Sắp xếp mảng tăng dần\n" +
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
            let min = arr[0];
            for (let i = 1; i < arr.length; i++){
                if (arr[i] > max){
                    max = arr[i];
                }
                if (arr[i] < min){
                    min = arr[i];
                }
            }
            console.log(`Gia tri lon nhat la ${max}`);
            console.log(`Gia tri nho nhat la ${min}`);
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++){
                sum += arr[i];
            }
            console.log(`Tong cac phan tu co trong mang la ${sum}`);
            break;
        case 5:
            let a = parseInt(prompt("Nhap phan tu can tim so lan xuat hien"));
            let count = 0;
            for (let i =0 ; i < arr.length; i++){
                if (arr[i] === a){
                    count++;
                }
            }
            if (count > 0){
                console.log(`Số ${a} xuất hiện ${count} lần.`);
               } else{
                console.log("Khong ton tai phan tu");
               }
            break;
        case 6:
            for (let i =0; i < arr.length - 1; i++){
                for (j = i + 1; j < arr.length; j ++){
                    if (arr[i] > arr[j]){
                        let temp = arr [i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            console.log(`Mang sap theo thu tu tang dan la ${arr}`);
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