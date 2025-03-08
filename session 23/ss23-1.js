let arr = [];
let count = 0;
for (let i =0; i < 10; i++){
    let input = +prompt("Moi nhap vao phan tu");
    arr.push(input);
    if (arr[i] >= 10) {
        console.log(arr[i]);
        count++;
    }
}
if (count === 0){
    console.log("Khong co so nao lon hon bang 10");
}
