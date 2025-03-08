let arr = [];
let n = +prompt("Nhap so phan tu cua mang");
let str =  "";
if (n > 0){
    for (let i = 0; i < n; i++){
        let input = prompt(`Nhap phan tu thu ${i + 1}`);
        arr.push(input);
    }
    for (let i =0 ; i < n; i++){
        if (Number.isInteger(parseInt(arr[i]))){
            str += arr[i] + " ";
        }
    }
    console.log("So phan tu la so la: "+str);
} else {
    console.log("Mang khong co phan tu");
}