function inputNumber (){
    let numbers = [];
    for (let i = 0; i < 10; i++){
        let num = +prompt(`Nhap số nguyên thứ ${i + 1}`);
        if (isNaN(num)) {
            console.log("Giá trị không hợp lệ");
        } else {
            numbers.push(num);
        }
    }
    return numbers;
}
function checkNumber(arr){
    let max = arr[0];
    let index = 0;
    arr.forEach(function(num, i) {
        if (num > max){
            max = num;
            index = i;
        } 
    });
    return {max, index};
}
let numbers = inputNumber();
let result = checkNumber(numbers);
console.log(`Số lớn nhất là:` + result.max);
console.log(`Vi trí trong mảng là: ` + result.index);