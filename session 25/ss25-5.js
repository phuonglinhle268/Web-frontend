function checkNumber (arr){
    if (!Array.isArray(arr)) {
        return "gia tri khong hop le";
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++ ){
        if (typeof arr[i] === "number" && arr[i] > 0 && Number.isInteger(arr[i])){
            count++;
        }
    }
    return count;
}
console.log(checkNumber([4, 4.5, 6, -2]));
console.log(checkNumber([1, 2, 3, 5, 7, -8, 6]));
console.log(checkNumber([1.2, -3, -6]));