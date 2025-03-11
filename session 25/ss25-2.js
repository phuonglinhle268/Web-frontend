function calculateSum(number1, number2){
    if(Number.isInteger(number1) && Number.isInteger(number2)){
        return number1 + number2;
    }
    return "du lieu nhap khong hop le";
}
console.log(calculateSum(2, 6));
console.log(calculateSum(3, "text"));
console.log(calculateSum(7, -7));
console.log(calculateSum(4.5, 3));

