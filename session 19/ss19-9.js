//let result = "javascript" + 5;
// Kết quả = javascript5 -> Đây là phép nối chuỗi (chuỗi javascript + số 5)

//let result = "javascript" - 5;
//Kết quả = NaN 
// -> phép trừ chỉ thực hiện với các số, javascript chưa đc chuyển thành số

//let result = "3" + 2;
// Kết quả = 32 -> Phép nối chuỗi (chuỗi 3 và số 2)

//let result = “5” - 4;
//Kết quả = 1 -> Có thể chuyển 5 thành số -> thực hiện phép trừ

//let result =  isNaN( “123”);
//Kết quả : false
//"123" là chuỗi hợp lệ để chuyển đổi thành số, nhưng đây lại là hàm để ktra không phải là số

//let result = isNaN(“hello”);
//Kết quả : true;
//Chuỗi "hello" không chuyển đổi về số, nên hợp lệ (NaN: not a number)

//let result = Number.isNaN("123");
//Kết quả: false;
//Hàm dùng để ktra chính xác xem giá trị có phải NaN không, nhưng "123" là 1 chuỗi

//let result = Number.isNaN(NaN);
//Kết quả: true;
//NaN chính xác bằng NaN

alert(result);