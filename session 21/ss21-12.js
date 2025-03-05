const colors = ["blue", "green", "yellow", "red", "pink", "orange", "purple", "black", "grey", "black"];
for (let i = 0; i < 10; i++) {
    let change = colors[parseInt(Math.random() * colors.length)];
    console.log(`%cMàu sắc đã được thay đổi`, `color: ${change};`);
}
