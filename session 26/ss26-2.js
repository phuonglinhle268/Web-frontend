function inputString (){
    let arr = [];
    let count = prompt(`Nhập số chuỗi muốn nhập`);
    if (isNaN(count) || count <= 0){
        console.log("Giá trị không hợp lệ");
    } 
    for (let i = 0; i < count; i++){
        let str = prompt(`Nhập chuỗi kí tự thứ ${i + 1}`);
        arr.push(str);
    }
    return arr;
}
function checkString(arr){
    return arr.filter(function(str){
        return str.length > 5;
    });
}
let chuoi = inputString();
if(chuoi.length > 0){
    let result = checkString(chuoi);
    if (result.length > 0){
        console.log("Chuỗi có độ dài hơn 5 kí tự là: " + result);
    } else{
        console.log("Không có chuỗi nào dài hơn 5 kí tự");
    }
}