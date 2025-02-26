var number1 = parseInt(prompt("Nhập số thứ nhất"));
var number2 = parseInt(prompt("Nhập số thứ hai"));
var min = Math.min(number1, number2);
var max = Math.max(number1, number2);
var randomNum = Math.floor(Math.random() * (max - min - 2 + 1)) + min + 1;
alert("Số ngẫu nhiên trong khoảng " + min + " đến " + max + " là: " + randomNum);