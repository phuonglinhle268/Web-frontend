let num = +prompt("Nhap mot so bat ki");
if ((num % 3 === 0) && (num % 5=== 0)){
    alert(`${num} chia het cho ca 3 va 5`);
} else{
    alert(`${num} khong chia het cho ca 3 va 5`);
}