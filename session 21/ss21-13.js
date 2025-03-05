let a = 10; 
for (let i = a; i > 0; i--) {
    console.log("*".repeat(i));
}

let b = 10; 
for (let i = 1; i <= b; i++) {
    console.log("*".repeat(i));
}
let c = 10;
for (let i = 1; i <= c; i++) {
    console.log(" ".repeat(c - i) + "*".repeat(i));
}

let d = 10;
for (let i = d; i > 0; i--) {
    console.log(" ".repeat(d - i) + "*".repeat(i));
}