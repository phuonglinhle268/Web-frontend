const products = [
    {
        id: 1,
        name: "Mèn mén",
        price: 20000,
        quantity: 20,
        category: "Món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "Mứt",
        price: 80000,
        quantity: 21,
        category: "Món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "Cơm lam",
        price: 40000,
        quantity: 15,
        category: "Món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "Bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "Món ăn dân tộc Kinh",
    },
];
let cart = [];
let menu = `
----------MENU----------
1.Hiển thị các sản phẩm theo tên danh mục.
2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
a,Sản phẩm không có trong cửa hàng hiển thị thông báo.
b,Sản phẩm có trong cửa hàng
i.Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
ii.Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
a,Tăng dần.
b,Giảm dần.
4.Tính số tiền thanh toán trong giỏ hàng.
5.Thoát.`;

let input;
while (input !== 5){
    input = +prompt(menu);
    switch (input){
        case 1:
            displayCart();
            break;
        case 2:
            displayOneCart();
            break;
        case 3:
            let sap_xep = prompt("Nhập 'tang' để sắp xếp tăng dần, 'giam' để sắp xếp giảm dần:");
            sortProducts(sap_xep);
            break;
        case 4:
            totalProduct();
            break;
        case 5:
            console.log("Thoát");
            break;
    
    }
}
function displayCart() {
    let categories = {};
    products.forEach(product => {
        if (!categories[product.category]) {
            categories[product.category] = [];
        }
        categories[product.category].push(product);
    });
    for (let category in categories) {
        categories[category].forEach(p => console.log(`ID: ${p.id}
             Tên: ${p.name}
             Giá: ${p.price}
             Số lượng: ${p.quantity}
             Miêu tả: ${p.category}`));
    }
}

function displayOneCart() {
    let id = +prompt("Nhập ID món ăn muốn mua:");
    let product = products.find(p => p.id === id);
    if (!product) {
        console.log("Không có sản phẩm trong cửa hàng");
        return;
    }
    let quantity = +prompt("Nhập số lượng muốn mua:");
    if (product.quantity < quantity) {
        console.log("Sản phẩm không đủ số lượng");
        return;
    }
    product.quantity -= quantity;
    let findCart = cart.find(p => p.id === id);
    if (findCart) {
        findCart.quantity += quantity;
    } else {
        cart.push({ id: product.id, 
            name: product.name, 
            price: product.price, 
            quantity });
    }
    console.log(`Đã mua ${quantity} sản phẩm ${product.name}`);
}

function sortProducts(order) {
    
    for (let i = 0; i < products.length - 1; i++) {
        for (let j = 0; j < products.length - 1 - i; j++) {
            if ((order === 'tang' && products[j].price > products[j + 1].price) ||
                (order === 'giam' && products[j].price < products[j + 1].price)) {
                let temp = products[j];
                products[j] = products[j + 1];
                products[j + 1] = temp;
            }
        }
    }
    console.log("Danh sách sản phẩm sau khi sắp xếp:");
    displayCart();
}
function totalProduct(){
    
        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        console.log(`Tổng số tiền cần thanh toán: ${total} VND`);
    

}