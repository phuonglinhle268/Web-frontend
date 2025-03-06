let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
document.write(numbers);
document.write("<br>");
numbers.sort();
let index1 = 0;
let index2;
let temp = numbers[0];
for (let i = 0; i < 10; i++){
    index2 = 0;
    for (let j = 0; j < 10; j++){
        if (numbers[i] === numbers[j]){
            index2++;
        }
    }
    if(index1 < index2){
        temp = numbers[i];
        index1 = index2;
    }
}
document.write("So xuat hien nhieu nhat " + temp);