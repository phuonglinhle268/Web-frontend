        let numbers = [];
        for (let i = 0; i < 10; i++){
            let num = +prompt(`Nhập số nguyên thứ ${i + 1}`);
            numbers.push(num);
        }   
    let checkNumber = numbers.filter(function(num){
        return num >= 10;
    });
    if (checkNumber.length > 0){
        console.log("Các phần tử lớn hơn 10 là: " + checkNumber);
    } else {
        console.log("Không có phần tử nào lớn hơn 10");
    }
