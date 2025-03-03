let number = +prompt("Nhap so tien muon doi");
let cash = prompt("Loai tien muon doi (VND->USD / USD->VND)");
if (cash === "VND->USD"){
    let vietnam = number / 23000;
    alert(number + " VND = " + vietnam.toLocaleString(`vi-VN`) + " USD");
} else if (cash==="USD->VND"){
    let usd = number * 23000;
    alert(number + " $ = " + usd.toLocaleString(`en-US`) + " VND");
}

