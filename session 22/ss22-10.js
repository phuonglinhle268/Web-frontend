// B1:
let arr = [];
let choice;
let loop = true;
// B2:
let menu = `
------ MENU ------
1. Nhập vào mảng
2. Hiển thị mảng
3. Thêm phần tử
4. Sửa phần tử
5. Xóa phần tử
6. Thoát

Lựa chọn của bạn là gì?
`;

while (loop) {
  choice = +prompt(menu);

  // B3: Validate

  switch (choice) {
    case 1:
      let count = +prompt("Mời nhập vào số lượng phần tử muốn thêm");
      for (let i = 0; i < count; i++) {
        let input = prompt("Mời bạn nhập vào phần tử muốn thêm");
        arr.push(input);
      }
      console.log(arr);
      break;
    case 2:
      for (let i in arr) {
        console.log(`${i}. ${arr[i]}`);
      }
      break;
    case 3:
      let addNumber = +prompt("Mời nhập số lượng phần tử muốn thêm");
      let addIndex = +prompt("Mời nhập vào vị trí muốn thêm phần tử");
      for (let i = 0; i < addNumber; i++) {
        let addValue = +prompt("Mời nhập phần tử muốn thêm");
        arr.splice(addIndex, 0, addValue);
      }
      break;
    case 5:
        let position = +prompt("Mời bạn nhập vị trí muốn xóa");
        for(let i = 0; i <position; i++){
            arr.splice(position, 1);
        }
    case 6:
      console.log("Kết thúc chương trình. Cảm ơn !!!!!");
      loop = false;
      break;
  }
}