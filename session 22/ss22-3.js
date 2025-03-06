let number = prompt("Nhập dãy số bất kì");

let check = true;
for (let i = 0; i < number.length; i++) {
    if (isNaN(number[i])) {
        check = false;
    }
}
if(check){
    let reverseNum = number.split("").reverse().join("");
    console.log("Dãy số đảo ngược là" , reverseNum);
}else{
    console.log("Dãy số không hợp lệ");
}