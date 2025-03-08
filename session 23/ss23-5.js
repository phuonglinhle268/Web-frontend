let arr = [];
let n = +prompt("Nhap so phan tu cua mang");
let str =  "";
let total = 0;
if (n >0){
    for (let i =0; i < n; i++){
        arr[i] = prompt(`Nhap cac phan tu `);
        
    }
    for (let i of arr){
        if (i >= 0){
            total += i - 0;
        }
    }
    if (total === 0){
        console.log("Khong co phan tu la so");
    } else {
        console.log(`${total}`);
    }
} else if (n === 0){
    console.log("Mang khong co phan tu");
} else{
    console.log("Mang khong duoc am");
}
