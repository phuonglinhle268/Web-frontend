let numbers = [1, 3, 10, 3, 1, 5, 1, 5, 8, 10];
let user = +(prompt("Nhap so can tim"));
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === user) {
        count++;
    }
}
if (count > 0) {
    console.log("So " + user + " xuat hien "+ count + " lan");
} else {
    console.log("Khong co so "+ user);
}
