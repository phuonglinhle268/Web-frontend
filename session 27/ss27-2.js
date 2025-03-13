function studentManager() {
    let students = [];

    while (true) {
        let choice = parseInt(prompt(
            "Chọn chức năng:\n" +
            "1. Nhập danh sách sinh viên\n" +
            "2. Hiển thị danh sách sinh viên\n" +
            "3. Tìm sinh viên theo tên\n" +
            "4. Xóa sinh viên khỏi danh sách\n" +
            "5. Thoát"
        ));

        switch (choice) {
            case 1:
                let count = parseInt(prompt("Nhập số lượng sinh viên:"));
                if (isNaN(count) || count <= 0) {
                    console.log("Số lượng không hợp lệ!");
                    break;
                }
                for (let i = 0; i < count; i++) {
                    let name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
                    if (name !== null && name !== "") {
                        students.push(name);
                    } else {
                       console.log("Tên không hợp lệ, vui lòng nhập lại.");
                    }
                }
                break;

            case 2:
                if (students.length === 0) {
                    console.log("Danh sách trống.");
                } else {
                    console.log("Danh sách sinh viên:\n" + students.join("\n"));
                }
                break;

            case 3:
                let search = prompt("Nhập tên sinh viên cần tìm:");
                if (search === null) {
                    console.log("Tên không hợp lệ.");
                    break;
                }
                let found = students.filter(student => student.toLowerCase() === search.toLowerCase());
                if (found.length > 0) {
                    console.log("Sinh viên tìm thấy: " + found.join("\n"));
                } else {
                    console.log("Không tìm thấy");
                }
                break;

            case 4:
                let deleteStudent = prompt("Nhập tên sinh viên cần xóa:");
                if (deleteStudent === null) {
                    console.log("Tên không hợp lệ.");
                    break;
                }
                let index = students.findIndex(student => student.toLowerCase() === deleteStudent.toLowerCase());
                if (index !== -1) {
                    students.splice(index, 1);
                    console.log("Sinh viên đã được xóa.");
                } else {
                    console.log("Không tìm thấy sinh viên để xóa.");
                }
                break;

            case 5:
                console.log("Thoát");
                return;

            default:
                alert("Lựa chọn không hợp lệ");
        }
    }
}

studentManager();
