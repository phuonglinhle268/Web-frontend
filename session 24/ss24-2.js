let arr = [];
while (true){
    let menu = +prompt(
        "========== MENU ===========\n" +
        "1. Nhập mảng \n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm các phần tử chẵn và lẻ\n" +
        "4. Tính trung bình cộng của mảng\n" +
        "5. Xóa phần tử tại vị trí chỉ định\n" +
        "6. Tìm phần tủ lớn thứ hai trong mảng\n" +
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
            let oddNum = [];
            let evenNum = [];
            for (let i = 0; i < arr.length; i++){
                if( arr[i] % 2 === 0){
                    evenNum.push(arr[i]);
                } else{
                    oddNum.push(arr[i]);
                }
            }
            console.log(`So luong so chan la: ${evenNum}`);
            console.log(`So luong so le la: ${oddNum}`);
            break;

        case 4:
            let sum = 0;
            for (i = 0; i < arr.length; i++){
                sum += arr[i];
            } 
            let average = sum / arr.length;
            console.log(average);
            break;

        case 5:
            let position = +prompt("Nhap vi tri muon xoa");
            for(let i = 0; i <position; i++){
                arr.splice(position, 1);
            }
            break;
        case 6:
            for (let i = 0; i < arr.length - 1; i++){
                for (let j = 0; j < arr.length -1 - i; j++){
                    if (arr[j] < arr[j + 1]){
                        let temp = arr[j];
                        arr[j]= arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            let max1 = arr[0];
            let max2 = -1;
            for (let i = 1; i < arr.length; i++){
                if (arr[i] < max1){
                    max2 = arr[i];
                    break;
                }
            }
            if (max2 === -1){
                console.log("Khong co so lon thu hai");
            } else {
                console.log(`So lon thu hai la ${max2}`);
            }
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