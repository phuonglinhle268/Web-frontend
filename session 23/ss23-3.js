let n = parseInt(prompt("Nhập số phần tử của mảng: "));
if(n<0){
    console.log("Số lượng phần tử không hợp lệ");
} else if(n === 0){
    console.log("Mảng không có phần tử");
}
let arr = [];
let Count = 0;
    for (let i = 0; i < n; i++) {
        let num = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
        arr.push(num);
        if (num < 0 && Number.isInteger(num)) {
            Count++;
        }
    }
    console.log("Mảng vừa nhập:", arr);
    console.log("Số lượng số nguyên âm trong mảng:", Count);
