let n = parseInt(prompt("Nhap so phan tu cua mang"));
if (n < 0){
    console.log("So luong phan tu khong hop le");
} else if (n === 0){
    console.log("Khong hop le");
} else{
    let arr = [];
    for (let i = 0; i < n; i++){
        let number = parseInt(prompt(`Nhap phan tu thu ${i + 1}`));
        arr.push(number);
    }
    let check = true;
    if (n > 2){
        for (let i = 2; i < n; i++){
            if (arr[i] !== arr[i - 1] + arr[i - 2]){
                check = false;
            }
        }
    }
    if (check){
        console.log("Day la day so fibonacci");
    }
    else {
        console.log("Day khong phai day fibonacci");
    }
}