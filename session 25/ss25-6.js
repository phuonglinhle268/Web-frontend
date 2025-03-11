function checkString(str) {
    if (typeof str !== "string" || str.length === 0) {
        return "Dữ liệu không hợp lệ";
    }
    let viet_thuong = str.toLowerCase();
    let formalText = "";
    for (let char of viet_thuong) {
        if (char !== " ") {
           formalText += char;
        }
    }
    let dao_nguoc = "";
    for (let i = formalText.length - 1; i >= 0; i--) {
       dao_nguoc += formalText[i];
    }

    return formalText === dao_nguoc;
}
let chuoi = prompt("Nhập một chuỗi để kiểm tra đối xứng:");
if (chuoi === null) {
    console.log("Dữ liệu chưa nhập");
} else {
    let result = checkString(chuoi);
    if (result === true) {
        console.log("Đây là chuỗi đối xứng");
    } else if (result === false) {
        console.log("Đây không phải chuỗi đối xứng");
    } else {
        console.log(result);
    }
}
