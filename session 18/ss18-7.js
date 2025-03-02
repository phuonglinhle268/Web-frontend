let a = parseInt(prompt("Nhap so a"));
let b = parseInt(prompt("Nhap so b"));
let result = prompt("Nhap phep toan muon su dung (+, -, *, /)");
switch (result) {
    case "+": {
       result = a + b;
       alert("Ket qua phep tinh la: a + b = " + result);
        break;
    }    
    case "-": {
        result = a - b;
        alert("Ket qua phep tinh la : a - b = " + result);
        break;
    }    
    case "*": {
        result = a * b;
        alert("Ket qua phep tinh la: a * b = " + result);
        break;
    }    
    case "/": {
        result = a / b;
        alert("Ket qua phep tinh la: a / b = " + result);
        break;
    }      
    default:
        alert("Phep toan khong hop le");
        break;
} 
