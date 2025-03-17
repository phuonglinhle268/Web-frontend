const product = [
    {
        id: 1,
        name: "Sách",
        price: 10000,
        category: "Truyện, sgk",
        quantity: 3
    },
    {
        id: 2,
        name: "Thực phẩm",
        price: 5000,
        category: "Gạo, đường, muối",
        quantity: 10
    },
    {
        id: 3,
        name: "Đồ dùng",
        price: 20000,
        category: "Nồi, niêu",
        quantity: 1
    }
];

let menu = `
--------MENU--------
1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo id.
4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
5. Xóa sản phẩm theo id.
6. Lọc sản phẩm theo khoảng giá.
7. Thoát.
Nhập lựa chọn của bạn`;

let input;
while (input !== 7) {
    input = +prompt(menu);
    switch (input) {
        case 1:
            let name = prompt("Mời nhập tên sản phẩm");
            let price = +prompt("Mời nhập giá");
            let category = prompt("Mời nhập danh mục sản phẩm");
            let quantity = +prompt("Mời nhập số lượng");
            let item = {
                id: Math.random(),
                name,
                price,
                category,
                quantity,
            };
            product.push(item);
            displayProduct();
            break;
        case 2:
            displayProduct();
            break;
        case 3:
            let searchID = +prompt("Nhập ID sản phẩm cần tìm");
            let findIndex = search("id", searchID);
            if (findIndex === -1) {
                console.log("Không tìm thấy sản phẩm.");
            } else {
                displayOneProduct(product[findIndex]);
            }
            break;
        case 4:
            let updateID = +prompt("Nhập ID sản phẩm cần cập nhật");
            let updateIndex = search("id", updateID);
            if (updateIndex === -1) {
                console.log("Không tìm thấy sản phẩm.");
            } else {
                product[updateIndex].name = prompt("Mời nhập tên mới");
                product[updateIndex].category = prompt("Mời nhập danh mục sản phẩm mới");
                product[updateIndex].price = +prompt("Mời nhập giá tiền mới");
                product[updateIndex].quantity = +prompt("Mời nhập số lượng mới");
                displayOneProduct(product[updateIndex]);
            }
            break;
        case 5:
            let deleteId = +prompt("Nhập ID của sản phẩm cần xóa:");
            let deleteIndex = search("id", deleteId);
            if (deleteIndex === -1) {
                console.log("Không tìm thấy sản phẩm.");
            } else {
                product.splice(deleteIndex, 1);
                console.log("Đã xóa sản phẩm thành công!");
                displayProduct();
            }
            break;
        case 6:
            let minPrice = +prompt("Nhập số tiền tối thiểu");
            let maxPrice = +prompt("Nhập số tiền tối đa");
            let checkPrice = [];
            for (let i = 0; i < product.length; i++) {
                if (product[i].price >= minPrice && product[i].price <= maxPrice) {
                    checkPrice.push(product[i]);
                }
            }
            if (checkPrice.length === 0) {
                console.log("Không có sản phẩm nào trong khoảng giá này.");
            } else {
                console.log("Danh sách sản phẩm trong khoảng giá:");
                for (let i = 0; i < checkPrice.length; i++) {
                    displayOneProduct(checkPrice[i]);
                }
            }
            break;
        case 7:
            console.log("Thoát");
            break;
        default:
            break;
    }
}

function displayProduct() {
    console.log("Danh sách sản phẩm:");
    product.forEach(function (item, index) {
        console.log(`Sản phẩm ${index + 1}:`);
        console.log("ID:", item.id);
        console.log("Tên:", item.name);
        console.log("Giá:", item.price);
        console.log("Danh mục:", item.category);
        console.log("Số lượng:", item.quantity);
        console.log("------------------");
    });
}

function displayOneProduct(item) {
    console.log("Chi tiết sản phẩm:");
    console.log("ID:", item.id);
    console.log("Tên:", item.name);
    console.log("Giá:", item.price);
    console.log("Danh mục:", item.category);
    console.log("Số lượng:", item.quantity);
    console.log("------------------");
}

function search(key, value) {
    for (let i = 0; i < product.length; i++) {
        if (product[i][key] === value) {
            return i;
        }
    }
    return findIndex;
}
