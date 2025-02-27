let number = parseFloat(prompt("Mời nhập số bất kì"));
if (number >= 0) {
    let afterNum = Math.sqrt(number);
    alert(`Căn bậc hai của ${number} là ${afterNum}`);
} else {
    alert("Không thể tính căn bậc hai của số âm trong tập số thực.");
}

