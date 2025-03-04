let string = prompt("Nhập một chuỗi kí tự");
let search = prompt("Nhập kí tự cần tìm");
if ( !string || search.length !== 1 ){
    console.log("Dữ liệu không hợp lệ");
} else {
    let found = false;
    for (let i = 0; i < string.length; i++){
        if (string[i] === search){
            found = true;
            break;
        }
    }
    if (found) {
        console.log("Tồn tại kí tự cần tìm kiếm");
    } else {
        console.log("Không tồn tại kí tự cần tìm kiếm");
    }
}
