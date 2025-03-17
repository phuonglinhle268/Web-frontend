const menu = [
    {
        category: "Món Chính",
        dishes: [
            {name: "Phở Bò", price: 30000, description: "Món ăn truyền thống" },
            {name: "Bánh cuốn", price: 20000, description: "Dễ ăn" }
        ]
    },
    {
        category: "Tráng Miệng",
        dishes: [
            {name: "Kem", price: 10000, description: "Ăn tráng miệng" },
        ]
    }
];

let menuList = `
------------------ MENU ------------------
1. Thêm món ăn vào danh mục.
2. Hiển thị toàn bộ menu.
3. Tìm kiếm món ăn theo tên.
4. Cập nhật thông tin món ăn theo tên.
5. Xóa món ăn theo tên.
6. Thoát.
Mời bạn nhập sự lựa chọn của bạn:
`;

let input;
while (input !== 6) {
    input = +prompt(menuList);
    switch (input) {
        case 1:
            let categoryName = prompt("Nhập danh mục món ăn:");
            let category = menu.find(c => c.category.toLowerCase() === categoryName.toLowerCase());

            if (!category) {
                category = { category: categoryName, dishes: [] };
                menu.push(category);
            }

            let name = prompt("Nhập tên món ăn:");
            let price = +prompt("Nhập giá món ăn:");
            let description = prompt("Nhập mô tả món ăn:");

            let dish = { 
                name, 
                price, 
                description 
            };
            category.dishes.push(dish);
            displayMenu();
            break;

        case 2:
            displayMenu();
            break;

        case 3:
            let searchName = prompt("Nhập tên món ăn cần tìm:");
            let findDish = search(searchName);
            if (!findDish) {
                console.log(`Không có món ăn nào với tên: ${searchName}`);
            } else {
                displayOneDish(findDish.dish, findDish.category);
            }
            break;

        case 4:
            let updateName = prompt("Nhập tên món ăn cần cập nhật:");
            let dishUpdate = search(updateName);
            if (!dishUpdate) {
                console.log("Không tìm thấy món ăn này.");
            } else {
                dishUpdate.dish.name = prompt("Nhập tên mới:");
                dishUpdate.dish.price = +prompt("Nhập giá mới:");
                dishUpdate.dish.description = prompt("Nhập mô tả mới:");
                console.log("Cập nhật thành công!");
                displayOneDish(dishUpdate.dish, dishUpdate.category);
            }
            break;

        case 5:
            let deleteName = prompt("Nhập tên món ăn cần xóa:");
            let dishDelete = search(deleteName);
            if (!dishDelete) {
                console.log("Không tìm thấy món ăn này.");
            } else {
                let index = dishDelete.category.dishes.indexOf(dishDelete.dish);
                dishDelete.category.dishes.splice(index, 1);
                console.log("Đã xóa món ăn thành công!");
                displayMenu();
            }
            break;

        case 6:
            console.log("Thoát");
            break;

        default:
            break;
    }
}
function displayMenu() {
    console.log("Danh sách món ăn");
    menu.forEach(category => {
        console.log(`Danh mục: ${category.category}`);
        category.dishes.forEach(function(dish, index){
            console.log(`Món ${index + 1}:`);
            console.log("Tên:", dish.name);
            console.log("Giá:", dish.price);
            console.log("Mô tả:", dish.description);
            console.log("------------------------------");
        });
    });
}

function displayOneDish(dish, category) {
    console.log("Chi tiết món ăn");
    console.log(`Danh mục: ${category.category}`);
    console.log("Tên:", dish.name);
    console.log("Giá:", dish.price);
    console.log("Mô tả:", dish.description);
    console.log("------------------------------");
}

function search(name) {
    for (let category of menu) {
        let dish = category.dishes.find(d => d.name.toLowerCase() === name.toLowerCase());
        if (dish) return { dish, category };
    }
    return null;
}
