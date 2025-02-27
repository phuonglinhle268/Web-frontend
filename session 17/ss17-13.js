let amount = parseFloat(prompt("Nhập số tiền gửi: "));
let month = parseInt(prompt("Nhập số tháng gửi: "));
const yearRate = 4.3 / 100;
let monthRate = yearRate / 12;
let rate = amount * (monthRate * month);
alert(`Số tiền lãi nhận được sau ${month} tháng là: ${rate.toLocaleString(`vi-VN`)} VNĐ`);
