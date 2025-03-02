let subject1 = +prompt("Nhap diem mon Toan");
let subject2 = +prompt("Nhap diem mon Van");
let subject3 = +prompt("Nhap diem mon Anh");
let average = (subject1 + subject2 + subject3) / 3;
if (average < 5.0){
    alert("xep loai: Yeu");
} else if(average <= 6.4){
    alert("Xep loai: Trung binh");
} else if (average <= 7.9){
    alert("Xep loai: Kha");
} else{
    alert("Xep loai: Gioi");
}
