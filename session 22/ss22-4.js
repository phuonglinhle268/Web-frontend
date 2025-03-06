let arr = prompt("Nhập dãy số bất kì");
let check = true;
for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        check = false;
    }
}
if(check){
    let number = arr.split("");
    let maxNum = Math.max(...arr);
    console.log(`Số lớn nhất là: ${maxNum}`);
}else{
    console.log("Dãy số không hợp lệ");
}



