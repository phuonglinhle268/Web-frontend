let employees = [];

function add(id, name, position, salary) {
    employees.push({ id, name, position, salary });
    console.log("Them nhan vien thanh cong");
}
function deleted(id) {
    let index = employees.findIndex(employee => employee.id === id);
    if (index !== -1) {
        let choice = prompt(`Ban co muon xoa ${employees[index].name} khong? Nhap "yes"`);
        if (choice && choice.toLowerCase() === 'yes') {
            employees.splice(index, 1);
            console.log("Da xoa thanh cong");
        } else {
            console.log("Xoa that bai");
        }
    } else {
        console.log("Khong tim thay nhan vien");
    }
}
function updated(id, salary) {
    let nhan_vien = employees.find(employee => employee.id === id);
    if (nhan_vien) {
       nhan_vien.salary = salary;
        console.log("Da cap nhat muc luong");
    } else {
        console.log("Khong tim thay nhan vien");
    }
}
function search(name) {
    let results = employees.filter(employee => employee.name.toLowerCase().includes(name.toLowerCase()));
    if (results.length > 0) {
        console.log(results);
    } else {
        console.log("Khong thay nhan vien");
    }
}
