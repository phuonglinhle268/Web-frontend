let arr =[];
for (let i = 0; i < 10; i++){
    let input = +prompt("Moi nhap vao phan tu");
    arr.push(input);
}
let max = arr[0];
let index = 0;
for (let i = 1; i < arr.length; i++){
    if (arr[i] > max) {
        max = arr[i];
        index = i;
    }
}
console.log("Phan tu lon nhat la: " + max);
console.log("So lon nhat o vi tri thu " + index);