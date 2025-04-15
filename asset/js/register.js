let acc = [];

function getAcc() {
    let data = localStorage.getItem('users');
    if (data) {
        acc = JSON.parse(data);
    } else {
        acc = [];
    }
    console.log(acc);
}

function submitForm(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm = document.getElementById('confirm').value;
    
    let checkNameDiv = document.getElementById('checkName');
    let checkEmailDiv = document.getElementById('checkEmail');
    let checkPassDiv = document.getElementById('checkPass');
    let confirmPassDiv = document.getElementById('confirmPass');

    // Reset thông báo lỗi
    checkNameDiv.innerHTML = "";
    checkEmailDiv.innerHTML = "";
    checkPassDiv.innerHTML = "";
    confirmPassDiv.innerHTML = "";

    let isValid = true;

    // Validate Họ và tên
    if (name === "") {
        checkNameDiv.innerHTML = "Họ và tên không được để trống";
        isValid = false;
    }

    // Validate Email
    if (email === "") {
        checkEmailDiv.innerHTML = "Email không được để trống";
        isValid = false;
    } else if (!isValidEmail(email)) {
        checkEmailDiv.innerHTML = "Email không đúng định dạng";
        isValid = false;
    } else if (checkEmail(email)) {
        checkEmailDiv.innerHTML = "Email đã tồn tại";
        isValid = false;
    }

    // Validate Password
    if (password === "") {
        checkPassDiv.innerHTML = "Mật khẩu không được để trống";
        isValid = false;
    } else if (password.length < 8) {
        checkPassDiv.innerHTML = "Mật khẩu phải có ít nhất 8 ký tự";
        isValid = false;
     } //else if (!isValidPasswordFormat(password)) {
    //     checkPassDiv.innerHTML = "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường và kết thúc bằng số";
    //     isValid = false;
    //}

    //ko đc chứa kí tự đặc biệt
    // else if (containsSpecialCharacters(password)) {
    //     checkPassDiv.innerHTML = "Mật khẩu không được chứa ký tự đặc biệt";
    //     isValid = false;

    //chỉ toàn chữ/số
    // else if (!isLettersOrNumbersOnly(password)) {
    //     checkPassDiv.innerHTML = "Mật khẩu chỉ được chứa toàn chữ hoặc toàn số";
    //     isValid = false;

    //bắt đầu bằng chữ thường
    // else if (!startsWithLowercase(password)) {
    //     checkPassDiv.innerHTML = "Mật khẩu phải bắt đầu bằng chữ thường";
    //     isValid = false;}

    //bắt đầu bằng chữ in hoa
    // else if (!startsWithUppercase(password)) {
    //     checkPassDiv.innerHTML = "Mật khẩu phải bắt đầu bằng chữ in hoa";
    //     isValid = false;
    // }

    //bắt đầu bằng chữ
    // else if (!startsWithLetter(password)) {
    //     checkPassDiv.innerHTML = "Mật khẩu phải bắt đầu bằng chữ cái";
    //     isValid = false;
    // }

    // Validate Confirm Password
    if (confirm === "") {
        confirmPassDiv.innerHTML = "Mật khẩu xác nhận không được để trống";
        isValid = false;
    } else if (password !== confirm) {
        confirmPassDiv.innerHTML = "Mật khẩu không trùng khớp";
        isValid = false;
    }

    // Nếu form hợp lệ thì lưu dữ liệu và điều hướng
    if (isValid) {
        let user = {
            name: name,
            email: email,
            password: password
        };

        acc.push(user);
        localStorage.setItem('users', JSON.stringify(acc));
        document.getElementById("form").reset();
        window.location.href = 'home.html'; // Điều hướng sang trang chủ
    }
}

// Hàm kiểm tra định dạng email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Hàm kiểm tra mật khẩu có chứa ký tự đặc biệt hay không
// function containsSpecialCharacters(password) {
//     // Biểu thức chính quy kiểm tra:
//     // - Chỉ cho phép chữ cái (a-z, A-Z) và số (0-9)
//     // - Nếu có ký tự khác ngoài chữ cái và số, trả về true (tức là có ký tự đặc biệt)
//     const specialCharRegex = /[^a-zA-Z0-9]/;
//     return specialCharRegex.test(password);
// }

// // Hàm kiểm tra định dạng mật khẩu
// function isValidPasswordFormat(password) {
//     // Biểu thức chính quy kiểm tra:
//     // - (?=\S*[A-Z]) : ít nhất 1 chữ hoa
//     // - (?=\S*[a-z]) : ít nhất 1 chữ thường
//     // - \d$ : kết thúc bằng số
//     const passwordRegex = /^(?=\S*[A-Z])(?=\S*[a-z]).*\d$/;
//     return passwordRegex.test(password);
// }

//mật khẩu chỉ chứa số/chữ
// function isLettersOrNumbersOnly(password) {
//     const onlyLettersRegex = /^[a-zA-Z]+$/;
//     const onlyNumbersRegex = /^[0-9]+$/;
//     return onlyLettersRegex.test(password) || onlyNumbersRegex.test(password);
// }

//Kiểm tra bắt đầu bằng chữ thường
// function startsWithLowercase(password) {
//     const lowercaseStartRegex = /^[a-z]/;
//     return lowercaseStartRegex.test(password);
// }

// Hàm kiểm tra mật khẩu bắt đầu bằng chữ in hoa
// function startsWithUppercase(password) {
//     const uppercaseStartRegex = /^[A-Z]/;
//     return uppercaseStartRegex.test(password);
// }

// Hàm kiểm tra mật khẩu bắt đầu bằng chữ cái (a-z hoặc A-Z)
// function startsWithLetter(password) {
//     const letterStartRegex = /^[a-zA-Z]/;
//     return letterStartRegex.test(password);
// }

// Hàm kiểm tra email đã tồn tại
function checkEmail(email) {
    for (let i = 0; i < acc.length; i++) {
        if (email === acc[i].email) {
            return true;
        }
    }
    return false;
}

// Gắn sự kiện submit cho form
document.getElementById("form").onsubmit = submitForm;
getAcc();