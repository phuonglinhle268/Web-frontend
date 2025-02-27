let radius = parseInt(prompt("Nhập bán kính hình cầu"));
let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
alert("Thể tích hình cầu là: " + Math.floor(volume));
let area =  4* Math.PI * Math.pow(radius, 2);
alert("Diện tích hình cầu là: " + Math.floor(area));
let perimeter = 2*Math.PI*radius;
alert("Chu vi đường tròn là: " + Math.floor(perimeter));