function checkInformation (input){
    if(!Array.isArray(input)){
        return "Không hợp lệ";
    }
    let arr = [];
    for (let i = 0; i < input.length; i++){
        let time = input[i];
        if (typeof time === "string" && time.length === 10){
            let khoang_cach = time.split("-");
            if (khoang_cach.length === 3){
                let year = khoang_cach[0];
                let month = khoang_cach[1];
                let day = khoang_cach[2];
                let checkYear = Number(year);
                let checkMonth = Number(month);
                let checkDay = Number(day);
                if (!isNaN(checkYear) && !isNaN(checkMonth) && !isNaN(checkDay)){
                    if (year.length === 4 && month.length === 2 && day.length === 2){
                        arr.push(day + "/" + month + "/" + year);
                    }
                }
            }
        }
    }
    if (arr.length === 0){
        console.log("Không có phần tử trong mảng");
    }
    return arr;
}
function userInput() {
    let dates = [];
    let count = +prompt("Nhập số ngày");
    if (isNaN(count) || count <= 0){
        console.log("Dữ liệu không hợp lệ");
    }
    for (let i = 0; i < count; i++){
        let date = prompt(`Nhap thời gian thứ ${i + 1} (YYYY-MM-DD)`);
        if (typeof date !== "string"){
            console.log("Dữ liệu không hợp lệ");
        } else {
            dates.push(date);
        }
    }
    return dates;
}
let choice = userInput();
if (choice.length > 0){
    let result = checkInformation(choice);
    if (typeof result === "string"){
        console.log(result);
    } else {
        console.log(`Chuoi ngay hợp lệ: ${result}`);
    }
}