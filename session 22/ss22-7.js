let numbers = [13, 24, 66, 90, 1, 8, 26, 19, 10, 3];
console.log("Mang ban dau la: " +numbers);
let n = numbers.length;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log("Mang theo thu tu tang dan la: "+ numbers);


