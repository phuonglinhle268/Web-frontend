let d1 = prompt("Hãy nhập ngày tháng (theo dạng YYYY/MM/DD");
let d2 = prompt("Hãy nhập ngày tháng (theo dạng YYYY/MM/DD");

const date1 = new Date(d1);
const date2 = new Date(d2);

let dayLeft = (Math.abs(date2 - date1));
let mili = ((dayLeft)/(1000*60*60*24));
alert("Số ngày chênh lệch là " + mili);
