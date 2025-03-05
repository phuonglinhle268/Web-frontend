let numA, numB, numC;
let isNumber = true;
do {
    numA = parseInt(prompt("nhap vao so a"));
    if (isNaN(numA) || numA === 0){
        alert("So nhap khong hop le");
        isNumber = false;
    } 
} while ( isNaN(numA) || numA === 0);
do {
    numB = parseInt(prompt("nhap vao so b"));
    if (isNaN(numB)){
        alert("So nhap khong hop le");
        isNumber = false;
    } 
} while ( isNaN(numB));
do {
    numC = parseInt(prompt("nhap vao so c"));
    if (isNaN(numC)){
        alert("So nhap khong hop le");
        isNumber = false;
    } 
} while ( isNaN(numC));

let bieuthuc = `${numA}x^2 + ${numB}x + ${numC} = 0`;
let delta = numB**2 -4*numA*numC;

if(delta>0 ){
    const canbac2 = Math.sqrt(delta);
    let x1 = (-numB + canbac2)/(2*numA);
    let x2 = (-numB - canbac2)/(2*numA);
    alert(`x1 bang ${x1}`);
    alert(`x2 bang ${x2}`);
}
else if(delta<0) {
   alert("Phuong trinh vo nghiem");
}
else if (delta === 0){
    const no_kep = -(numB)/2*numA;
    let x1 = x2 = no_kep;
    alert(`Phuong trinh co nghiem kep x = ${no_kep}`);
}
