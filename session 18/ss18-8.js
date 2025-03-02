let a = +prompt("Nhap canh thu nhat");
let b = +prompt("Nhap canh thu hai");
let c = +prompt("Nhap canh thu ba");
if ( a + b > c && a + c > b && c + b > a){
   if (a === b && b === c){
    alert("Day la tam giac deu");
   } else if ( a === b || a === c || b === c){
    alert("Day la tam giac can");
   } else if(a * a + b * b === c * c || a * a + c * c === b * b || c * c + b * b === a * a){
    alert("Day la tam giac vuong");
   } else{
    alert("Day la tam giac thuong");
   }
} else{
    alert("Ba canh tren khong tao ra hinh tam giac");
}