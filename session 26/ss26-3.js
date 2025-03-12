function checkMail (input){
    if(!Array.isArray(input)){
        return("Dữ liệu không hợp lệ");
    }
    let arr = [];
    for(let i = 0; i < input.length; i++){
        let email = input[i];
        if (typeof email === "string"){
            let ki_tu = false;
            let khoang_trang = false;
            for (let j = 0; j < email.length; j++){
                if (email[j] === "@"){
                    ki_tu = true;
                }
                if (email[j] === " "){
                    khoang_trang = true;
                    break;
                }
            }
            if (ki_tu && !khoang_trang){
                arr.push(email);
            }
        }
    }
    if (arr.length === 0){
        return "Mảng trống";
    }
    return arr;
}
function inputMail(){
    let mail = [];
    let count = +prompt("Nhập số lượng email");
    if (isNaN(count) || count <= 0){
        console.log("Dữ liệu không hợp lệ");
    }
    for (let i = 0; i < count; i++){
        let email = prompt(`Nhap email thu ${i + 1}`);
        if(typeof email !== "string"){
            console.log("Dữ liệu không hợp lệ");
        } else{
            mail.push(email);
        }
    }
    return mail;
} 
let user = inputMail();
if (user.length > 0){
    let result = checkMail(user);
    if (typeof result === "string"){
        console.log(result);
    } else {
        console.log(`Email hợp lệ là: ${result}`);
    }
}