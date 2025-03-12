let products = [
    ["mì tôm", 5, 5000], 
    ["bánh mì", 12, 15000], 
    ["bánh bao", 5, 8000], 
    ["mèn mén", 30, 20000]];
let cart = [];
let menu = `
--------Menu--------
1. Danh sách sản phẩm
2. Mua hàng
3. Tính tiền + hóa đơn
4. Thoát
Mời nhập vào sự lựa chọn`;
let input;
while (input !== 4){
    input = +prompt(menu);
    switch(input) {
        case 1:
            displayProduct(products);
            break;
        case 2:
            let productName = prompt("Nhập tên sản phẩm");
            let findIndex = -1;
            for (let index in products){
                if (productName === products[index][0]){
                    findIndex = index;
                }
            }
            if (findIndex === -1){
                console.log("Không tìm thấy sản phẩm");
            } else {
                let inCartIndex = -1;
              for (let i in cart){
                if (cart[i][0] === productName){
                    inCartIndex = i;
                }
              }
              if (inCartIndex === -1){
                let product = products[findIndex];
                let addProduct = [...product];
                cart.push(addProduct);
                console.log(cart);
              }else {
                products[inCartIndex][1]++;
              }
              console.log(products);
              products[inCartIndex][1]--;
            }
            break;
        case 3:
            displayProduct(cart);
            let sum = 0;
            for (let product of cart){
                sum = sum + product[1] * product[2];
            }
            console.log("Tổng hóa đơn bằng = ", sum);
            break;
        case 4:
            console.log("Thanks for using");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
        }
}
function displayProduct(productList){
    for (let index in productList){
        console.log(`${+(index) + 1}. ${productList[index][0]} - ${productList[index][2]} - ${productList[index][1]}`);
    }
}
