function myFn(fn) {
    fn();

    return () => 10;
}

let numberList = [10, 30, 20, 50, 70];

//.forEach()  -> phải truyền vào đối số thực tế (1 hàm)
//Luôn có 2 gtri, lấy toàn phần tử, duyệt qua từng vị trí  -> biển thể vòng lặp for...
numberList.forEach(function(element, index){
    console.log(index, element);
})

//map : chuyển đổi toàn bộ phần tử thành phương thức nào đó
let newArr = numberList.map(function(element, index) {
    return `Phần tử: ${element}`;
});
console.log(newArr);

// -> lọc qua từng phần có trong mảng thỏa mãn đk
// -> sau return có thể thêm các phép ss, ktra đk thỏa mãn
 let result = numberList.filter(function(element, index) {
    return element > 20;
});
console.log(result);

let answer = numberList.reduce(function(acc, cur){
    console.log("acc", acc);
    console.log("cur", cur);
    return acc + cur;
}, 0);
console.log(answer);
// reduce: chuyển đổi một mảng thành một giá trị duy nhất bằng cách tích lũy kết quả qua từng phần tử
//   lặp qua một mảng và tích lũy giá trị dựa trên một hàm callback
// array.reduce((accumulator, currentValue, [currentIndex, array]) => {// Logic xử lý}, 0);

// dùng để tính tổng, nhân tích, gộp dữ liệu hoặc thực hiện các phép tính phức tạp trên một mảng.
// accumulator: biến tích lữu, thu gọn  -> đại diện cho gtri tích lũy đc sau mx lần duyệt
//cur: current value: gtri hien tai, đại diện cho các phần tử được duyệt qua (phần tử có trong mảng)
