const contact = [
    {
        id: 1,
        name: "Lê Văn A",
        email: "levana@gmail.com",
        phone: "123456"
    },
    {
        id: 2,
        name: "Lê Văn B",
        email: "levanb@gmail.com",
        phone: "234567"
    },
    {
        id: 3,
        name: "Lê Văn C",
        email: "levanc@gmail.com",
        phone: "345678"
    }
];
let menu = `
--------MENU--------
1.Thêm đối tượng Contact vào danh sách liên hệ.
2.Hiển thị danh sách danh bạ.
3.Tìm kiếm thông tin Contact theo số điện thoại.
4.Cập nhật thông tin Contact(name, email, phone) theo id.
5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
6.Thoát.
Nhập lựa chọn của bạn`;

let input;
while (input !== 6){
    input = +prompt(menu);
    switch (input){
        case 1:
            let name = prompt("Mời nhập tên");
            let email = prompt("Mời nhập email");
            let phone = prompt("Mời nhập số điện thoại");
            let address = {
                id: Math.random(),
                name,
                email,
                phone,
            };
            contact.push(address);
            displayContact();
            break;
        case 2:
            displayContact();
            break;
        case 3:
            let searchPhone = prompt("Nhập số điện thoại cần tìm:");
            let foundIndex = search("phone", searchPhone);
            if (foundIndex === -1) {
              console.log("Không tìm thấy");
            } else {
              displayOneContact(contact[foundIndex], foundIndex);
            }
            break;
        case 4:
            let searchID = +prompt("Nhập id liên hệ cần cập nhật");
            let updateIndex = search("id", searchID);
            if (updateIndex === -1){
                console.log("Không tìm thấy")
            } else{
                contact[updateIndex].name = prompt("Mời nhập tên mới");
                contact[updateIndex].email = prompt("Mời nhập email mới");
                contact[updateIndex].phone = prompt("Mời nhập số điện thoại mới");
                displayOneContact(contact[updateIndex], updateIndex);
            }
            break;
        case 5:
            let deleteId = +prompt("Nhập ID của liên hệ cần xóa:");
            let deleteIndex = search("id", deleteId);
        if (deleteIndex === -1) {
          console.log("Không tìm thấy");
        } else {
          contact.splice(deleteIndex, 1);
          console.log("Đã xóa sách thành công!");
          displayContact(contact[deleteIndex], deleteIndex);
        }
            break;
        case 6:
            console.log("Thoát");
            break;
        default:
            break;
    }
}
function displayContact(){
    contact.forEach(function(address, index){
        console.log(`Lien hệ ${index + 1}`);
        console.log("Id", address.id);
        console.log("Tên", address.name);
        console.log("Email", address.email);
        console.log("Số điện thoại", address.phone);
        console.log("------------------");
    });
}
function displayOneContact(address, index){
    console.log(`Lien hệ ${+index + 1}`);
    console.log("Id", address.id);
    console.log("Tên", address.name);
    console.log("Email", address.email);
    console.log("Số điện thoại", address.phone);
    console.log("------------------");
}
function search(key, value){
    let findIndex = -1;
    for (let i in contact){
        if (value === contact[i][key]){
            findIndex = i;
            break;
        }
    }
    return findIndex;
}