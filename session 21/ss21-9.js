let number = parseInt(prompt("Nhap mot so bat ki"));
if (isNaN(number) || number < 2){
    console.log("So khong hop le");
} else {
    let primeNum = true;
    for (let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            primeNum = false;
        }
    }
    if (primeNum){
        console.log("Day la so nguyen to");
    } else {
        console.log("Day khong phai so nguyen to");
    }
}