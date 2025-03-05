
for (let number = 100; number < 1000; number++) {
    let sum = 0;
    let temp = number;
    while (temp > 0) {
        let check = temp % 10;
        sum += check** 3;
        temp = Math.floor(temp / 10);
    }
    if (sum === number) {
        console.log(number);
    }
}