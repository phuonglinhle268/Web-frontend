let number = parseInt(prompt("Nhập số nguyên bất kì"));
let chinhPhuong = Math.sqrt(number);
let result = (Math.floor(chinhPhuong) === chinhPhuong) ? "Số chính phương" : "Không phải số chính phương";
alert(result);