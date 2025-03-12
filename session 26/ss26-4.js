function checkNum(num) {
    if (num < 2){
      return false;
    }
   for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0){
        return false;
    }
   }
   return true;
}
function inputAmount () {
    let arr = [];
    let count = +prompt("Nhập số lượng phần tử có trong mảng");
    if (isNaN(count) || count <= 0){
        console.log("Số lượng không hợp lệ");
    }
    for (let i = 0; i < count; i++){
        let num = +prompt(`Nhập phần tử thứ ${i + 1}`);
        if (isNaN(num)) {
            console.log("Gía trị không hợp lệ");
        } else {
            arr.push(num); 
        }
    }
    return arr;
}
function inputCheck(arr){
    return arr.filter(checkNum);
}
let numbers = inputAmount();
if(numbers.length > 0){
    let result = inputCheck(numbers);
    if (result.length > 0){
        console.log("Các số nguyên tố là: " + result);
    } else {
        console.log("Không có số nguyên tố");
    }
}
