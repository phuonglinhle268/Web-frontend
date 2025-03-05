let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`));
    if (num % 2 !== 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log(`So luong so chan la: ${evenCount}`);
console.log(`So luong so le la: ${oddCount}`);