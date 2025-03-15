const company = {
    name: "RikkeiSoft",
    location: "Ha Noi",
    employees: [
        {name: "Nguyen Van Luan", position: "Developer"},
        {name: "Nguyen Van Hoang", position: "Tester"},
        {name: "Hoang Nam Cao", position: "Manager"}
    ]
};
console.log(`Ten cong ty: ${company.name}`);
console.log("Cac nhan vien: ");
company.employees.forEach(employee => {
    console.log(employee.name);
});