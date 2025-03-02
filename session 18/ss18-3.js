let name = prompt("Nhập tên");
if (name === "ADMIN"){
    let password = prompt("Nhập mật khẩu");
    if (password === "TheMaster"){
        alert("Welcome");
    } else if (password === null){
        alert("Cancelled");
    } else{
        alert("Wrong password");
    }
} else if (name === null) {
    alert("Cancelled");
} else {
    alert("I don't know you");
}

