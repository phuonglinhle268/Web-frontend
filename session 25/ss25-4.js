function checkNum(n) {
    if (!Number.isInteger(n) || n < 2 || typeof n !== "number"){
        return "Giá trị không hợp lệ";
    }
   for (let i = 2; i <= Math.sqrt(n); i++){
    if (n % i === 0){
        return "Đây không phải số nguyên tố";
    }
   }
   return "Đây là số nguyên tố";
}
console.log(checkNum(17));
console.log(checkNum(6));
console.log(checkNum("text"));
