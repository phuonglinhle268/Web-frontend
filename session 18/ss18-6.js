let year = parseInt(prompt("Nhap mot nam bat ki"));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    alert( year + " la nam nhuan");
} else {
    alert(year + " khong phai nam nhuan");
}