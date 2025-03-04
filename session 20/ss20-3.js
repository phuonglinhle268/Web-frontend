let num = parseInt(prompt("Nhập một số nguyên:"));
//Chuyển thành chuỗi
let strNum = num.toString();
let doixung = true;
for (let i = 0, j = strNum.length - 1; i < j; i++, j--) {
    if (strNum[i] !== strNum[j]) {
        doixung = false;
        break;
    }
}
if (doixung) {
    console.log(`${num} là số đối xứng.`);
} else {
    console.log(`${num} không phải là số đối xứng.`);
}


