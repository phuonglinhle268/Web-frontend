//   // Hiển thị tên người dùng khi trang tải
//   let currentUser = localStorage.getItem("currentUser");
//   if (currentUser) {
//       currentUser = JSON.parse(currentUser);
//       document.getElementById("userName").innerHTML = `Xin chào, ${currentUser.name}`;
//   }

//   // Xử lý đăng xuất
//   function logout() {
//       localStorage.removeItem("currentUser");
//       window.location.href = "login.html"; // Điều hướng về trang đăng nhập
//   }


// Hiển thị tên người dùng khi trang tải
let currentUser = localStorage.getItem("currentUser");
if (currentUser) {
    currentUser = JSON.parse(currentUser);
    document.getElementById("userName").innerHTML = `Xin chào, ${currentUser.name}`;
}

// Xử lý đăng xuất
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html"; // Điều hướng về trang đăng nhập
}

// Hàm lấy danh sách dịch vụ từ localStorage
function getAllServices() {
    const servicesData = localStorage.getItem("services");
    return servicesData ? JSON.parse(servicesData) : [];
}

// Hàm lưu danh sách dịch vụ vào localStorage
function saveAllServices(services) {
    localStorage.setItem("services", JSON.stringify(services));
}

// Hàm khởi tạo dữ liệu dịch vụ ban đầu (nếu localStorage rỗng)
function initializeServices() {
    let services = getAllServices();
    if (services.length === 0) {
        services = [
            {
                name: "Gym",
                description: "Tập luyện với các thiết bị hiện đại",
                imageUrl: "../asset/photo/anh1.png"
            },
            {
                name: "Yoga",
                description: "Thư giãn và cân bằng tâm trí",
                imageUrl: "../asset/photo/anh2.png"
            },
            {
                name: "Zumba",
                description: "Đốt cháy calories với những điệu nhảy sôi động",
                imageUrl: "../asset/photo/anh3.png"
            }
        ];
        saveAllServices(services);
    }
    displayServices(services);
}

// Hàm hiển thị danh sách dịch vụ
function displayServices(services) {
    const cardHolder = document.querySelector('.card-holder');
    cardHolder.innerHTML = "";
    if (services.length === 0) {
        cardHolder.innerHTML = "<p>Chưa có dịch vụ nào.</p>";
    } else {
        services.forEach(service => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${service.imageUrl}" alt="${service.name}">
                <h5>${service.name}</h5>
                <p style="color: grey;">${service.description}</p>
                <button type="submit" class="btn btn-primary">Đặt lịch</button>
            `;
            cardHolder.appendChild(card);
        });
    }
}

// Khởi tạo dữ liệu khi trang tải
document.addEventListener("DOMContentLoaded", function () {
    initializeServices();

    // Lắng nghe sự kiện thay đổi localStorage (để đồng bộ thời gian thực)
    window.addEventListener('storage', function (e) {
        if (e.key === 'services') {
            const services = getAllServices();
            displayServices(services);
        }
    });
});