let editingBookingRow = null; // Biến cho Quản lý lịch
let editingServiceRow = null; // Biến cho Quản lý dịch vụ

document.addEventListener("DOMContentLoaded", function () {
    const saveBookingButton = document.getElementById("saveBooking");
    const bookingForm = document.getElementById("bookingForm");
    const tableBody = document.getElementById("bookingTableBody");
    const addBookingButton = document.querySelector('[data-bs-target="#bookingModal"]');

    // Hàm lấy tất cả tài khoản user từ localStorage
    function getAllUsers() {
        const usersData = localStorage.getItem("users");
        return usersData ? JSON.parse(usersData) : [];
    }

    // Hàm kiểm tra xem "Họ và tên" và "Email" có khớp với một user đã tồn tại hay không
    function isValidUser(name, email, checkName, checkEmail) {
        const users = getAllUsers();
        const user = users.find(user => user.email === email);
        if (!user) {
            checkEmail.innerHTML = "Email không tồn tại";
            return false;
        }
        if (user.name !== name) {
            checkName.innerHTML = "Họ và tên không khớp với email";
            return false;
        }
        return true;
    }

       // Hàm thu thập lịch tập
       function getAllBookings() {
        const allBookings = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i); //key đại diện cho lịch tập 1 user
            if (key.startsWith("bookings_")) {
                const bookings = JSON.parse(localStorage.getItem(key)) || [];
                allBookings.push(...bookings);
                //...: trải từng phần tử ra, lần lượt cho từng phần tử vào thay vì cho nguyên mảng
            }
        }
        return allBookings;
    }

    // Hàm khởi tạo dữ liệu
    function initializeData() {
        const allBookings = getAllBookings();
        displayBookings(allBookings);
        updateChart();
        updateStats();
        // Khởi tạo danh sách dịch vụ (lấy từ localStorage)
        initializeServices();
    }

    // Hàm hiển thị danh sách lịch tập
    function displayBookings(bookings) {
        tableBody.innerHTML = "";
        bookings.forEach((booking, index) => {
            const row = document.createElement("tr");
            row.setAttribute("data-index", index);
            row.setAttribute("data-email", booking.email);
            row.innerHTML = `
                <td>${booking.class}</td>
                <td>${booking.date}</td>
                <td>${booking.time}</td>
                <td>${booking.name}</td>
                <td>${booking.email}</td>
                <td>
                    <a href="#" class="text-primary edit-btn">Sửa</a>  
                    <a href="#" class="text-danger delete-btn">Xóa</a>
                </td>
            `;
            tableBody.appendChild(row);
            addRowEventListeners(row);
        });
        updateChart();
        updateStats();
    }

    // // Hàm hiển thị danh sách lịch tập (nhóm theo user, sắp xếp theo tên lớp trong mỗi user)
    // function displayBookings(bookings) {
    //     // Sắp xếp danh sách bookings: nhóm theo email user, sau đó sắp xếp theo tên lớp trong mỗi user
    //     const sortedBookings = [...bookings].sort((a, b) => {
    //         // So sánh theo email user trước
    //         const emailComparison = a.email.localeCompare(b.email, 'vi', { sensitivity: 'base' });
    //         if (emailComparison !== 0) {
    //             return emailComparison;
    //         }
    //         // Nếu email giống nhau, so sánh theo tên lớp học
    //         return a.class.localeCompare(b.class, 'vi', { sensitivity: 'base' });
    //     });

    //     tableBody.innerHTML = "";
    //     sortedBookings.forEach((booking, index) => {
    //         const row = document.createElement("tr");
    //         row.setAttribute("data-index", index);
    //         row.setAttribute("data-email", booking.email);
    //         row.innerHTML = `
    //             <td>${booking.class}</td>
    //             <td>${booking.date}</td>
    //             <td>${booking.time}</td>
    //             <td>${booking.name}</td>
    //             <td>${booking.email}</td>
    //             <td>
    //                 <a href="#" class="text-primary edit-btn">Sửa</a>  
    //                 <a href="#" class="text-danger delete-btn">Xóa</a>
    //             </td>
    //         `;
    //         tableBody.appendChild(row);
    //         addRowEventListeners(row);
    //     });
    //     updateChart();
    //     updateStats();
    // }

    // // Hàm hiển thị danh sách lịch tập (sắp xếp theo tên lớp, sau đó theo tên user)
    // function displayBookings(bookings) {
    //     // Sắp xếp danh sách bookings trước khi hiển thị
    //     const sortedBookings = [...bookings].sort((a, b) => {
    //         // So sánh theo tên lớp học trước
    //         const classComparison = a.class.localeCompare(b.class, 'vi', { sensitivity: 'base' });
    //         if (classComparison !== 0) {
    //             return classComparison;
    //         }
    //         // Nếu tên lớp giống nhau, so sánh theo tên user
    //         return a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' });
    //     });

    //     tableBody.innerHTML = "";
    //     sortedBookings.forEach((booking, index) => {
    //         const row = document.createElement("tr");
    //         row.setAttribute("data-index", index);
    //         row.setAttribute("data-email", booking.email);
    //         row.innerHTML = `
    //             <td>${booking.class}</td>
    //             <td>${booking.date}</td>
    //             <td>${booking.time}</td>
    //             <td>${booking.name}</td>
    //             <td>${booking.email}</td>
    //             <td>
    //                 <a href="#" class="text-primary edit-btn">Sửa</a>  
    //                 <a href="#" class="text-danger delete-btn">Xóa</a>
    //             </td>
    //         `;
    //         tableBody.appendChild(row);
    //         addRowEventListeners(row);
    //     });
    //     updateChart();
    //     updateStats();
    // }

    // Kiểm tra trùng lịch (kiểm tra trong lịch của người dùng tương ứng)
    function isDuplicateBooking(newBooking, excludeIndex = -1) {
        const userStorageKey = `bookings_${newBooking.email}`;
        let bookings = JSON.parse(localStorage.getItem(userStorageKey)) || [];
        return bookings.some((booking, idx) =>
            idx !== excludeIndex &&
            booking.class === newBooking.class &&
            booking.date === newBooking.date &&
            booking.time === newBooking.time
        );
    }

    // Hàm lưu dữ liệu vào localStorage (cập nhật hoặc thêm mới, kiểm tra trùng lịch)
    function saveToLocalStorage(booking) {
        const userStorageKey = `bookings_${booking.email}`;
        let bookings = JSON.parse(localStorage.getItem(userStorageKey)) || [];

        if (editingBookingRow) {
            const index = parseInt(editingBookingRow.getAttribute("data-index"));
            const allBookings = getAllBookings();
            const bookingToUpdate = allBookings[index];
            const userBookings = JSON.parse(localStorage.getItem(userStorageKey)) || [];

            const bookingIndex = userBookings.findIndex(b =>
                b.class === bookingToUpdate.class &&
                b.date === bookingToUpdate.date &&
                b.time === bookingToUpdate.time &&
                b.email === bookingToUpdate.email
            );

            if (bookingIndex !== -1) {
                if (isDuplicateBooking(booking, bookingIndex)) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Lịch tập đã được đặt!"
                    });
                    return;
                }
                userBookings[bookingIndex] = booking;
                localStorage.setItem(userStorageKey, JSON.stringify(userBookings));
            }
        } else {
            if (isDuplicateBooking(booking)) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Lịch tập đã được đặt!"
                });
                return;
            }
            bookings.push(booking);
            localStorage.setItem(userStorageKey, JSON.stringify(bookings));
        }

        filterBookings();
    }

    // Khi nhấn "Đặt lịch mới", reset form và xóa thông báo lỗi
    addBookingButton.addEventListener("click", function () {
        bookingForm.reset();
        clearErrorMessages();
        editingBookingRow = null;
    });

    // Xử lý sự kiện khi nhấn "Lưu"
    saveBookingButton.addEventListener("click", function () {
        const classValue = document.getElementById("classSelect").value;
        const dateValue = document.getElementById("dateInput").value;
        const timeValue = document.getElementById("timeSelect").value;
        const nameValue = document.getElementById("nameInput").value.trim();
        const emailValue = document.getElementById("emailInput").value.trim();
    
        const checkClass = document.getElementById("checkClass");
        const checkDate = document.getElementById("checkDate");
        const checkTime = document.getElementById("checkTime");
        const checkName = document.getElementById("checkName");
        const checkEmail = document.getElementById("checkEmail");
    
        //Xóa thông báo lỗi cũ
        clearErrorMessages();
    
        //Kiểm tra hiển thị lỗi
        let isValid = true;
    
        if (classValue === "") {
            checkClass.innerHTML = "Lớp học không được để trống";
            isValid = false;
        }
    
        if (dateValue === "") {
            checkDate.innerHTML = "Ngày tập không được để trống";
            isValid = false;
        }
    
        if (timeValue === "") {
            checkTime.innerHTML = "Giờ không được để trống";
            isValid = false;
        }
    
        if (nameValue === "") {
            checkName.innerHTML = "Họ và tên không được để trống";
            isValid = false;
        }
    
        if (emailValue === "") {
            checkEmail.innerHTML = "Email không được để trống";
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            checkEmail.innerHTML = "Email không hợp lệ";
            isValid = false;
        }
    
        // Validate User (Họ và tên và Email phải khớp với một user đã đăng ký)
        if (nameValue !== "" && emailValue !== "" && isValidEmail(emailValue)) {
            if (!isValidUser(nameValue, emailValue, checkName, checkEmail)) {
                isValid = false;
            }
        }
    
        if (!isValid) {
            return;
        }
    
        const booking = {
            class: classValue,
            date: dateValue,
            time: timeValue,
            name: nameValue,
            email: emailValue,
        };
    
        saveToLocalStorage(booking);
    
        const modal = bootstrap.Modal.getInstance(document.getElementById("bookingModal"));
        modal.hide();
        bookingForm.reset();
        clearErrorMessages();
        editingBookingRow = null;
    });

    //Hàm kiểm tra định dạng email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    //Hàm xóa thông báo lỗi cho Quản lí Lịch
    function clearErrorMessages() {
        document.getElementById("checkClass").innerHTML = "";
        document.getElementById("checkDate").innerHTML = "";
        document.getElementById("checkTime").innerHTML = "";
        document.getElementById("checkName").innerHTML = "";
        document.getElementById("checkEmail").innerHTML = "";
    }

    //Thêm sự kiện từng dòng trong bảng
    function addRowEventListeners(row) {
        const deleteBtn = row.querySelector(".delete-btn");
        const editBtn = row.querySelector(".edit-btn");

        deleteBtn.addEventListener("click", function (event) {
            event.preventDefault();

            Swal.fire({
                title: "Bạn chắc chắn muốn xóa lịch tập này?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Xóa",
            }).then((result) => {
                if (result.isConfirmed) {
                    const email = row.getAttribute("data-email");
                    const userStorageKey = `bookings_${email}`;
                    let bookings = JSON.parse(localStorage.getItem(userStorageKey)) || [];
                    const index = row.getAttribute("data-index");
                    const allBookings = getAllBookings();
                    const bookingToDelete = allBookings[index];
                    const bookingIndex = bookings.findIndex(
                        (b) =>
                            b.class === bookingToDelete.class &&
                            b.date === bookingToDelete.date &&
                            b.time === bookingToDelete.time &&
                            b.email === bookingToDelete.email
                    );
                    if (bookingIndex !== -1) {
                        bookings.splice(bookingIndex, 1);
                        localStorage.setItem(userStorageKey, JSON.stringify(bookings));
                    }
                    filterBookings();

                    Swal.fire({
                        title: "Xóa thành công!",
                        text: "Đã xóa lịch tập.",
                        icon: "success",
                    });
                }
            });
        });

        editBtn.addEventListener("click", function () {
            const cells = row.querySelectorAll("td");
            document.getElementById("classSelect").value = cells[0].innerText;
            document.getElementById("dateInput").value = cells[1].innerText;
            document.getElementById("timeSelect").value = cells[2].innerText;
            document.getElementById("nameInput").value = cells[3].innerText;
            document.getElementById("emailInput").value = cells[4].innerText;
            clearErrorMessages();
            const modal = new bootstrap.Modal(document.getElementById("bookingModal"));
            modal.show();
            editingBookingRow = row;
        });
    }

    //Xử lí đăng xuất
    function logout() {
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    }

    //Hiển thị section tương ứng
    function showSection(sectionId) {
        document.querySelectorAll('.content').forEach(section => {
            section.style.display = 'none';
        });

        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        } else {
            console.error(`Section with ID ${sectionId} not found`);
        }

        document.querySelectorAll('.sidebar a').forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.querySelector(`.sidebar a[id="${sectionId}Link"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        } else {
            console.error(`Link for section ${sectionId} not found`);
        }

        // Cập nhật dữ liệu khi chuyển section
        if (sectionId === 'home') {
            displayHomeServices(); // Cập nhật trang chủ admin
        } else if (sectionId === 'services') {
            displayServices(getAllServices()); // Cập nhật Quản lý dịch vụ
        } else if (sectionId === 'schedule') {
            displayBookings(getAllBookings()); // Cập nhật Quản lý lịch
        }
    }

    //Gắn sự kiện cho sidebar
    const scheduleLink = document.getElementById('scheduleLink');
    const servicesLink = document.getElementById('servicesLink');
    const homeLink = document.getElementById('homeLink');
    const logoutLink = document.getElementById('logoutLink');

    if (scheduleLink) {
        scheduleLink.addEventListener('click', function (e) {
            e.preventDefault();
            showSection('schedule');
        });
    }

    if (servicesLink) {
        servicesLink.addEventListener('click', function (e) {
            e.preventDefault();
            showSection('services');
        });
    }

    if (homeLink) {
        homeLink.addEventListener('click', function (e) {
            e.preventDefault();
            showSection('home');
        });
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', function (e) {
            e.preventDefault();
            logout();
        });
    }

    showSection('home');

    //Khởi tạo và cập nhật biểu đồ
    const ctx = document.getElementById('myChart');
    let chartInstance = null;

    function updateChart() {
        const allBookings = getAllBookings();
        const gymCount = allBookings.filter(booking => booking.class === "Gym").length;
        const yogaCount = allBookings.filter(booking => booking.class === "Yoga").length;
        const zumbaCount = allBookings.filter(booking => booking.class === "Zumba").length;

        if (chartInstance) {
            chartInstance.destroy();
        }

        if (ctx) {
            chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Gym', 'Yoga', 'Zumba'],
                    datasets: [{
                        label: 'Số lượng lịch tập',
                        data: [gymCount, yogaCount, zumbaCount],
                        borderWidth: 1,
                        backgroundColor: ['#f9e79f', '#cfe2ff', '#f3a6c0'],
                        borderColor: ['#f9e79f', '#cfe2ff', '#d3a6c0'],
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                font: {
                                    size: 14
                                }
                            }
                        }
                    }
                }
            });
        } else {
            console.error('Canvas element with ID "myChart" not found');
        }
    }

    //Tính số liệu thống kê
    function updateStats() {
        const allBookings = getAllBookings();
        const gymCount = allBookings.filter(booking => booking.class === "Gym").length;
        const yogaCount = allBookings.filter(booking => booking.class === "Yoga").length;
        const zumbaCount = allBookings.filter(booking => booking.class === "Zumba").length;

        const gymStat = document.querySelector('.start-box:nth-child(1) strong');
        const yogaStat = document.querySelector('.start-box:nth-child(2) strong');
        const zumbaStat = document.querySelector('.start-box:nth-child(3) strong');

        //Kiểm tra ptu có tồn tại không
        if (gymStat && yogaStat && zumbaStat) {
            gymStat.innerText = gymCount;  //gán phần tử con start-box = số liệu Count
            yogaStat.innerText = yogaCount;
            zumbaStat.innerText = zumbaCount;
        } else {
            console.error('Stats elements not found');
        }
    }

    //Hàm lọc danh sách lịch tập
    function filterBookings() {
        let allBookings = getAllBookings();
        
        const classFilter = document.getElementById('filterClassSelect').value;
        const emailFilter = document.getElementById('emailFilter').value.trim().toLowerCase();
        const dateFilter = document.getElementById('dateFilter').value;

        let filteredBookings = allBookings.filter(booking => {
            const matchesClass = classFilter === "Tất cả" || booking.class === classFilter;
            const matchesEmail = emailFilter === "" || booking.email.toLowerCase().includes(emailFilter);
            const matchesDate = dateFilter === "" || booking.date === dateFilter;
            return matchesClass && matchesEmail && matchesDate;
        });

        displayBookings(filteredBookings);
    }

    //Gắn sự kiện cho các trường bộ lọc
    const filterClassSelect = document.getElementById('filterClassSelect');
    const emailFilter = document.getElementById('emailFilter');
    const dateFilter = document.getElementById('dateFilter');

    if (filterClassSelect) {
        filterClassSelect.addEventListener('change', filterBookings);
    }

    if (emailFilter) {
        emailFilter.addEventListener('input', filterBookings);
    }

    if (dateFilter) {
        dateFilter.addEventListener('change', filterBookings);
    }

    // Phần Quản lý dịch vụ

    // Hàm lấy danh sách dịch vụ từ localStorage (dùng chung với trang Home)
    function getAllServices() {
        const servicesData = localStorage.getItem("services");
        return servicesData ? JSON.parse(servicesData) : [];
    }

    // Hàm lưu danh sách dịch vụ vào localStorage (đồng bộ với trang Home)
    function saveAllServices(services) {
        localStorage.setItem("services", JSON.stringify(services));
        // Cập nhật section "home" trong trang admin nếu đang hiển thị
        const homeSection = document.getElementById('home');
        if (homeSection && homeSection.style.display === 'block') {
            displayHomeServices();
        }
    }

    // Hàm hiển thị danh sách dịch vụ trong Quản lý dịch vụ
    function displayServices(services) {
        const tableBody = document.querySelector('#services table tbody');
        tableBody.innerHTML = "";
        services.forEach((service, index) => {
            const newRow = document.createElement('tr');
            newRow.setAttribute("data-index", index);
            newRow.innerHTML = `
                <td>${service.name}</td>
                <td>${service.description}</td>
                <td><img src="${service.imageUrl}" alt="${service.name}" style="width: 100px;"></td>
                <td style="text-align: center;">
                    <button class="btn btn-warning btn-sm">Sửa</button>
                    <button class="btn btn-danger btn-sm">Xóa</button>
                </td>
            `;
            tableBody.appendChild(newRow);
            attachDeleteEvent(newRow.querySelector('.btn-danger'));
            attachEditEvent(newRow.querySelector('.btn-warning'));
        });
    }

    // Hàm khởi tạo danh sách dịch vụ (lấy từ localStorage, không tạo dữ liệu mẫu)
    function initializeServices() {
        const services = getAllServices();
        displayServices(services);
    }

    //Hàm hiển thị danh sách dịch vụ ở section "home" trong trang admin
    function displayHomeServices() {
        const services = getAllServices();
        const homeServicesContainer = document.querySelector('#home .services-container');
        if (homeServicesContainer) {
            homeServicesContainer.innerHTML = "";
            if (services.length === 0) {
                homeServicesContainer.innerHTML = "<p>Chưa có dịch vụ nào.</p>";
            } else {
                services.forEach(service => {
                    const serviceItem = document.createElement('div');
                    serviceItem.classList.add('service-item');
                    serviceItem.innerHTML = `
                        <img src="${service.imageUrl}" alt="${service.name}" style="width: 200px; height: auto;">
                        <h3>${service.name}</h3>
                        <p>${service.description}</p>
                    `;
                    homeServicesContainer.appendChild(serviceItem);
                });
            }
        }
    }

    // Hàm xóa thông báo lỗi cho Quản lý dịch vụ
    function clearErrorMessage() {
        document.getElementById("checkName").innerHTML = "";
        document.getElementById("checkDes").innerHTML = "";
        document.getElementById("checkImg").innerHTML = "";
    }

    // Hàm lưu dịch vụ (thêm mới hoặc sửa)
    function saveService() {
        const name = document.getElementById('serviceName').value.trim();
        const description = document.getElementById('serviceDescription').value.trim();
        const imageUrl = document.getElementById('serviceImage').value.trim();

        const checkName = document.getElementById("checkName");
        const checkDes = document.getElementById("checkDes");
        const checkImg = document.getElementById("checkImg");

        clearErrorMessage();
        let isValid = true;

        if (name === "") {
            checkName.innerHTML = "Tên dịch vụ không được để trống";
            isValid = false;
        }

        if (description === "") {
            checkDes.innerHTML = "Mô tả dịch vụ không được để trống";
            isValid = false;
        }

        if (imageUrl === "") {
            checkImg.innerHTML = "Link ảnh không được để trống";
            isValid = false;
        }

        // if (!name) {
        //     checkServiceName.innerHTML = "Tên dịch vụ không được để trống";
        //     isValid = false;
        // } else if (name.length < 3) {
        //     checkServiceName.innerHTML = "Tên dịch vụ phải có ít nhất 3 ký tự";
        //     isValid = false;
        // } else if (editingRow ? isDuplicateServiceName(name, parseInt(editingRow.getAttribute("data-index"))) : isDuplicateServiceName(name)) {
        //     checkServiceName.innerHTML = "Tên dịch vụ đã tồn tại";
        //     isValid = false;
        // }
        // // Kiểm tra Mô tả
        // if (!description) {
        //     checkDes.innerHTML = "Mô tả dịch vụ không được để trống";
        //     isValid = false;
        // } else if (description.length < 10) {
        //     checkDes.innerHTML = "Mô tả phải có ít nhất 10 ký tự";
        //     isValid = false;
        // }
        // // Kiểm tra URL Hình ảnh
        // if (!imageUrl) {
        //     checkImg.innerHTML = "Link ảnh không được để trống";
        //     isValid = false;
        // } else if (!isValidImageUrl(imageUrl)) {
        //     checkImg.innerHTML = "Link ảnh không hợp lệ (phải bắt đầu bằng http/https và có đuôi .jpg, .jpeg, .png, .gif)";
        //     isValid = false;
        // }

        if (!isValid) return;

        let services = getAllServices();

        if (editingServiceRow) {
            const index = parseInt(editingServiceRow.getAttribute("data-index"));
            services[index] = { name, description, imageUrl };
        } else {
            services.push({ name, description, imageUrl });
        }

        saveAllServices(services);
        displayServices(services);

        document.getElementById('serviceForm').reset();
        clearErrorMessage();
        const modalEl = document.getElementById('addServiceModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();
        editingServiceRow = null;
    }

    //Gắn sự kiện cho nút Lưu
    const saveServiceButton = document.getElementById("saveServiceButton");
    if (saveServiceButton) {
        saveServiceButton.addEventListener("click", saveService);
    }

    //Nút xóa, khi tìm thấy tr chứa nó, thực hiện lệnh
    function attachDeleteEvent(button) {
        button.addEventListener('click', function () {
            const row = button.closest('tr');
            Swal.fire({
                title: "Bạn có chắc chắn muốn xóa dịch vụ này?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "YES",
                cancelButtonText: "CANCEL"
            }).then((result) => {
                if (result.isConfirmed) {
                    const index = parseInt(row.getAttribute("data-index"));
                    let services = getAllServices();
                    services.splice(index, 1);
                    saveAllServices(services);
                    displayServices(services);
                    Swal.fire("Xóa thành công!", "Đã xóa dịch vụ", "success");
                }
            });
        });
    }
    
    //Nút sửa
    function attachEditEvent(button) {
        button.addEventListener('click', function () {
            editingServiceRow = button.closest('tr');
            const index = parseInt(editingServiceRow.getAttribute("data-index"));
            const services = getAllServices();
            const service = services[index];

            document.getElementById('serviceName').value = service.name;
            document.getElementById('serviceDescription').value = service.description;
            document.getElementById('serviceImage').value = service.imageUrl;

            clearErrorMessage();
            const modal = new bootstrap.Modal(document.getElementById('addServiceModal'));
            modal.show();
        });
    }

    //Nút thêm dịch vụ
    const addBtn = document.querySelector('[data-bs-target="#addServiceModal"]');
    if (addBtn) {
        addBtn.addEventListener('click', function () {
            document.getElementById('serviceForm').reset();
            clearErrorMessage();
            editingServiceRow = null;
        });
    }

    // Khởi tạo dữ liệu khi tải trang
    initializeData();

    // Lắng nghe sự kiện thay đổi localStorage (để đồng bộ thời gian thực)
    window.addEventListener('storage', function (e) {
        if (e.key === 'services') {
            const homeSection = document.getElementById('home');
            if (homeSection && homeSection.style.display === 'block') {
                displayHomeServices();
            }
            const servicesSection = document.getElementById('services');
            if (servicesSection && servicesSection.style.display === 'block') {
                displayServices(getAllServices());
            }
        }
    });
});