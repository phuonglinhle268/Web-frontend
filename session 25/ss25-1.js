function min (arr){
    if (!Array.isArray(arr)) {
        return "gia tri khong hop le";
    }
    if (arr.length === 0){
        return "Mang khong co gia tri";
    }
    let minNumber = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < minNumber){
            minNumber = arr[i];
        }
    }
    return `Phan tu nho nhat trong mang la ${minNumber}`;
}
console.log(min([2, 4, 8, 1, 9]));
console.log(min([]));
console.log(min("abc"));
console.log(min([5, 2, 7, 5, 4]));