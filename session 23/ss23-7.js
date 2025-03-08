let n = parseInt(prompt("Nhap so phan tu cua mang"));
if (n < 0){
    console.log("So luong phan tu khong hop le");
} else if (n === 0){
    console.log("Khong co phan tu trong mang");
} else{
    let arr = [];
    for (let i = 0; i < n; i++){
        let number = parseInt(prompt(`Nhap phan tu thu ${i + 1}`));
        arr.push(number);
    }
    for (let i =0; i < arr.length - 1; i++){
        for (let j = 0; j < arr.length - 1 -i; j++){
            if (arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
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

    } else{
        console.log(`So lon thu hai la ${max2}`);
    }
}