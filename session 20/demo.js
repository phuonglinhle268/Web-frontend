//for...loop

//Lặp đi lặp lại tác vụ: giải btvn
//b1: mở máy tính
//b2 đọc dề
//b3: ptich
//b4: code
//b5: đóng máy đi ngủ
// for(let i = 0; i < 4; i = i + 1) { // -> lặp lại 4 lần
//     //(let i=8; i>0; i=i-2) 

//     //bodyconsole.log("Mở máy")
//     console.log("Đọc đề");
//     console.log("Phân tích");
//     console.log("Code");
//     console.log("Đóng máy đi ngủ");
// }

// for (let i = 0; i < 5; i = i + 1) {  // -> lặp 20 lần
//     for (let j = 0; j < 4; j = j + 1){
//         console.log(i, j);
//     }
// }

//while...loop
//Tính năng đăng nhập vào fb.com
//Ktra email, password
//Đúng hết -> vào trang newsfeed
//Sai -> lặp lại quá trình trên

//B1:
// Cho 1 biến result = 49
// Cho người dùng nhập vào gtri cần đoán
// Lặp đi lặp lại quá trình kiểm
// tra xem số người dùng đoán có === result
// Nếu trùng --> In ra là Bingo
// Nếu sai lặp đi lặp lại quá trình trên

let result = 49;
let loop = true;
while (loop === true){
   let answer = +prompt("Nhap dap an");
     if (answer === result){
         console.log("Bingo");
         loop = false;
     }
}
// let answer;
// while (answer !== result){
//     let answer = +prompt("Nhap dap an");
// }
// console.log("Bingo");


//do...while
let condition = 1;
do {
    console.log("Hello world");
} while (condition == 0);