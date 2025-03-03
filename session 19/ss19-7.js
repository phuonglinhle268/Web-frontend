let num1 = +prompt("Nhap so thu nhat");
let num2 = +prompt("Nhap so thu hai");
let num3 = +prompt("Nhap so thu ba");
let max_num = (num1 > num2 && num1 > num3) ? num1 : (num2 > num3 ? num2 : num3);
alert(`So lon nhat trong ba so la ${max_num}`);