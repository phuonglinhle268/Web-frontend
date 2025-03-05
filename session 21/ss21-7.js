let tien_goc = Number(prompt("Nhap so tien: "));
let lai_xuat = Number(prompt("Nhap lai xuat"));
let month = Number(prompt("Nhap so thang"));
let temp = tien_goc;
lai_xuat = lai_xuat / 100;

for (let i =0 ; i < month; i++){
    tien_goc += tien_goc * lai_xuat;
}
let tien_lai = tien_goc - temp;
console.log(`So tien sau ${month} la: ${tien_goc}`);
console.log(`Tien lai nhan duoc la: ${tien_lai} `);