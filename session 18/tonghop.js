//Bai 1
let salary = +prompt("Nhập mức thu nhập hàng tháng");
if (salary < 5000000){
    let taxRate = 0;
    console.log("Thuế bạn cần đóng là: 0 VNĐ");
} else if(salary < 10000000){
    let taxRate = salary * 0.05;
    console.log(`Thue ban can dong la ${taxRate} VND`);
} else if(salary < 18000000){
    let taxRate = salary * 0.1;
    console.log(`Thue ban can dong la ${taxRate} VND`);
}
else if(salary < 32000000){
    let taxRate = salary * 0.15;
    console.log(`Thue ban can dong la ${taxRate} VND`);
} else if (salary > 32000000){
    let taxRate = salary * 0.2;
    console.log(`Thue ban can dong la ${taxRate} VND`);
}

//Bai 2
let numberCode = +prompt("Nhap ma so HTTP");
switch (numberCode) {
    case 200: {
        console.log("Thanh cong");
        break;
    }    
    case 201: {
        console.log("Them thanh cong");
        break;
    }    
    case 400: {
        console.log("Loi request");
        break;
    }    
    case 404: {
        console.log("Khong tim thay");
        break;
    }   
    case 500: {
        console.log("Loi server");
        break;
    }   
    default:
        console.log("Khong tim thay");
        break;
} 
