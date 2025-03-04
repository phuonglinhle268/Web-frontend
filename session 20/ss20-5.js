let a = parseInt(prompt("Nhap so a"));
let b = parseInt(prompt("Nhap so b"));
if (b < 0 || isNaN(a) || isNaN(b)){
    console.log("Không hợp lệ");
} else {
    let multiple = 1;
    for (let i = 0; i < b; i++){
        multiple *= a;
    }
    console.log(`a^b = ${multiple}`);
}