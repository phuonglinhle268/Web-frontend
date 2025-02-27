let numA = parseInt(prompt("nhap vao so a"));
let numB = parseInt(prompt("nhap vao so b"));
let numC = parseInt(prompt("nhap vao so c"));
let bieuthuc = `${numA}x^2 + ${numB}x + ${numC} = 0`;

alert(bieuthuc);
let delta = numB**2 -4*numA*numC;
alert( "Delta bằng: " + delta);
if(delta>0 || delta==0){
    const canbac2 = Math.sqrt(delta);
    let x1 = (-numB + canbac2)/(2*numA);
    let x2 = (-numB - canbac2)/(2*numA);
    alert(`x1 bang ${x1}`);
    alert(`x2 bang ${x2}`);
}
else if(delta<0) {
    var string = "ban nhap sai";
    alert(string);
}



