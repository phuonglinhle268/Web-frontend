const library =[
    {
        id: 1,
        name: "Harry Potter",
        price: 10000,
        quantity: 10,
        category: "Trinh thám"
      },
      {
        id: 2,
        name: "Think and Grow rich",
        price: 500000,
        quantity: 5,
        category: "Kinh nghiệm"
      },
      {
        id: 3,
        name: "Hai vạn dặm dưới biển",
        price: 20000,
        quantity: 20,
        category: "Trinh thám"
      },
];
let cart =[];
let menu = `
---------MENU---------
1.Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
2.Thêm sách mới vào kho
3.Tìm kiếm sách theo tên hoặc id.
4.Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
5.Sắp xếp sách theo giá:
a,Tăng dần.
b,Giảm dần.
6.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
7.Hiển thị tổng số lượng sách trong kho.
8.Thoát chương trình.
Nhập lựa chọn của bạn`;

let input;
while (input !== 8){
    input = +prompt(menu);
    switch (input){
        case 1:
            displayBook();
            break;
        case 2:
            addBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            let order = prompt("Nhập 'tang' để sắp xếp tăng dần, 'giam' để giảm dần:");
            sortBooks(order);
            break;
        case 6:
            calculateBook();
            break;
        case 7:
            totalStock();
            break;
        case 8:
            console.log("Thoát");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}
function displayBook() {
    let category = prompt("Nhập thể loại sách muốn xem:");
    let bookType = library.filter(function(book) {
        return book.category.toLowerCase() === category.toLowerCase();
    });
    if (bookType.length === 0) {
        console.log("Không tìm thấy sách thuộc thể loại này.");
    } else {
        bookType.forEach(function(book) {
            console.log(book);
        });
    }
}

function addBook() {
    let name = prompt("Nhập tên sách:");
    let price = +(prompt("Nhập giá sách:"));
    let quantity = +(prompt("Nhập số lượng sách:"));
    let category = prompt("Nhập thể loại sách:");
    let books = {
        id: Math.random(),
        name,
        price,
        quantity,
        category,
    };
    library.push(books);
    console.log("Sách đã được thêm thành công!");
}
function searchBook() {
    let key = prompt("Nhập tên hoặc ID sách để tìm kiếm:");
    let result = library.filter(function(book) {
        return book.name.toLowerCase().includes(key.toLowerCase()) || book.id == key;
    });
    if (result.length) {
        console.log(result);
    } else {
        console.log("Không tìm thấy sách.");
    }
}

function buyBook() {
    let id = +(prompt("Nhập ID sách muốn mua:"));
    let book =library.find(function(sell) {
        return sell.id === id;
    });
    if (!book) {
        console.log("Không tìm thấy sách.");
        return;
    }
    let quantity = +(prompt("Nhập số lượng muốn mua:"));
    if (book.quantity < quantity) {
        console.log("Sách không đủ số lượng.");
        return;
    }
    book.quantity -= quantity;
    let cartItem = cart.find(function(sell) {
        return sell.id === id;
    });
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({id: book.id, 
            name: book.name, 
            price: book.price, 
            quantity: quantity});
    }
    console.log(`Đã mua ${quantity} cuốn ${book.name}`);
}

function sortBooks(order) {
    for (let i = 0; i < library.length - 1; i++) {
        for (let j = 0; j < library.length - 1 - i; j++) {
            if ((order === 'tang' && library[j].price >library[j + 1].price) ||
                (order === 'giam' && library[j].price < library[j + 1].price)) {
                let temp = library[j];
                library[j] = library[j + 1];
                library[j + 1] = temp;
            }
        }
    }
    console.log("Danh sách sách sau khi sắp xếp:", library);
}
function calculateBook() {
    let totalBooks = cart.reduce(function(sum, book) {
        return sum + book.quantity;
    }, 0);
    let totalPrice = cart.reduce(function(sum, book) {
        return sum + book.price * book.quantity;
    }, 0);
    console.log(
        `Tong lượng sách đã mua: ${totalBooks} quyển`
        `Tổng tiền: ${totalPrice} VNĐ`
    );
}
function totalStock() {
    let totalStock = library.reduce(function(sum, book) {
        return sum + book.quantity;
    }, 0);
    console.log(`Tong lượng sách trong kho là ${totalStock}`);
}
