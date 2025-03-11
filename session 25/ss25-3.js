function checkNumber (arr){
    if (!Array.isArray(arr)) {
        return "gia tri khong hop le";
    }
    let evenNum = [];
    for (let i = 0; i < arr.length; i++ ){
        if (arr[i] % 2 === 0){
            evenNum.push(arr[i]);
        }
    }
    if (evenNum.length === 0){
        return "Mang khong co so chan";
    }
    return evenNum.join(" ");
}
console.log(checkNumber([11, 46, 6, 57]));
console.log(checkNumber([1, 3, 5, 7, 11]));
console.log(checkNumber("text"));