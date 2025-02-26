//alert("Hello world")

//script//
//biến

//var
var fullname = "Le Phuong Linh";

//let
let age = 18;

//const
const birthday = "1/1/2006";

//sdung bien
//alert(fullname); //lẩy ra đc giá trị
age;
birthday;

fullname = "Tú Sena"; // gán lại gtri
//alert(fullname);

var fullname = "Xemesi"; // khai báo lại gtri
// alert(fullname);

age = 19;
//alert(age); //gán lại gtri

//let age = 18;
//alert(age);  //lỗi, ko thể khai báo lại

let random;
//alert(random); -> hiện undefined

let number1 = 3;
let number2 = 2;

alert(number1 + number2);
alert(number1 - number2);
alert(number1 * number2);
alert(number1 / number2);
alert(number1 % number2); //chia lấy dư
alert(number1 ** number2); //số mũ

//string
let student = "Trần Văn A";
let student02 = 'Trần Văn B';
let student03 = `Tan Van C`;

alert(student);
alert(student02);
alert(student03);

 let concat = student + " " + student02; //nối liền 2 chuỗi với nhau
 //cho thêm khoảng trắng để cách ra
 alert(concat);

 let sentence = '${student} ---- ${student02}';
 alert(sentence);

 let result = "Hello world";
 let upper = result.toUpperCase(); //viết hoa hết
 alert(upper);
 let lower = result.toLowerCase();

 let demo = "    Hello world    ";
 alert(demo.trim());

 let demoSlice = "hello world jdieie";
 let nes = demoSlice.slice(0 ,4); //Hell

 //alert(res);
 let realAge = prompt("Mời bạn nhập số tuổi");
 console.log(realAge);

 //Bài toán:
 //Cho người dùng nhập vào số thứ nhất
 //Cho ng dùng nhập vào số thứ hai
//tính tổng 2 số và hiển thị ra kết quả ra màn hình console

// Input:
// number1 (Số thứ 1)
// number2 (Số thứ 2)
// result (Biến dùng để lưu trữ kết quả)

// Process:
// B1: Cho người dùng nhập vào số đầu tiên
let numberA = prompt("Mời bạn nhập số đầu tiên"); //"+":chuyển chữ thành số
let numberB = prompt("Mời bạn nhập số thứ 2");

// B2: Lưu trữ giá trị người dùng nhập vào
// vào biến number1
// B3: Cho người dùng nhập vào số thứ hai
// B4: Lưu trữ giá trị người dùng nhập vào 
// vào biến number2
// B5: Tính tổng number1 + number2 và lưu tổng
let sum = + numberA + + numberB;
// đó vào biến result;
// B6:

// Output
// Giá trị nằm trong biến result
console.log(sum);




