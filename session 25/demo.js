// // function declaration
// //khai báo hàm thông thường
// // ngoặc đơn: parameters: tham số -> biến, chỉ tồn tại nội bộ
// function calculateSum(number1, number2){
//     // logic
//     // let number1 = 10 (đối số thực tế)
//     // let number2 = 20;
//      return number1 + number2;   // -> trả ra kqua: return;
//      // -> viết logic sau return -> vô tác dụng
// }

// //function excution
// //Thực thi hàm
// //argument : đối số thực tế
//  let sum = calculateSum(10, 20);
// calculateSum(1, 2);
// calculateSum(-2, 3);

// console.log(sum);

// //IIFE: imediately involking function express
// let result = (function(a, b) {   // -> hàm ko tên : cho vào 1 ngoặc đơn bên trong + 1 ngoặc đơn bên ngoài
//     return a*b
// }) (10, 20);
// console.log(result);
// // function expression - biểu thức hàm
// let calculateResult = function (a, b){
//     return a / b;
// };
// calculateResult(10, 20);

let sum = (a, b)=>{
    return a + b;
}
console.log(sum(10,20));

let sum2 = (a, b)=>a + b;
console.log(sum(10,20));

