var num1 = parseInt(prompt("Nhập số thứ nhất"));
var num2 = parseInt(prompt("Nhập số thứ hai"));
var min = Math.min(num1, num2);
var max = Math.max(num1, num2);
var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
alert("Số ngẫu nhiên trong khoảng " + min + " đến " + max + " là: " + randomNum);