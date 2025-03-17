const library = [
    {
      id: 1,
      title: "Harry Potter",
      author: "J.K Rowling",
      year: 2000,
      price: 10,
      isAvailable: true,
    },
    {
      id: 2,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      year: 2010,
      price: 20,
      isAvailable: false,
    },
    {
      id: 3,
      title: "Cạnh Tranh",
      author: "Thầy Hữu Giang",
      year: 2024,
      price: 5,
      isAvailable: true,
    },
  ];
  
  let menu = `
  ------------------ MENU ------------------
  1. Thêm sách mới.
  2. Hiển thị danh sách sách.
  3. Tìm kiếm sách theo tiêu đề.
  4. Cập nhật trạng thái mượn/trả sách theo id sách.
  5. Xóa sách theo id sách ra khỏi danh sách.
  6. Sắp xếp sách theo giá tăng dần.
  7. Thoát.
  Mời bạn nhập sự lựa chọn của bạn:
  `;

  let input;
  
  while (input !== 7) {
    input = +prompt(menu);
    switch (input) {
      case 1:
        let title = prompt("Mời bạn nhập vào tiêu đề sách");
        let author = prompt("Mời bạn nhập vào tên tác giả");
        let year = prompt("Mời bạn nhập vào năm xuất bản");
        let price = prompt("Mời bạn nhập vào giá sách");
        let isAvailable = prompt("Mời bạn nhập vào trạng thái sách");

        let book = {
          id: Math.random(),
          title,
          author,
          year,
          price,
          isAvailable,
        };
        library.push(book);
        displayBook();
        break;
      case 2:
        displayBook();
        break;
      case 3:
        let searchTitle = prompt("Mời bạn nhập vào tiêu đề của sách cần tìm");
        let findIndex = search("title", searchTitle);
        if (findIndex === -1) {
          console.log(`Không có quyển sách nào với tiêu đề: ${searchTitle}`);
        } else {
          displayOneBook(library[findIndex], findIndex);
        }
        break;
      case 4:
        let searchId = +prompt(
          "Mời bạn nhập vào id của quyển sách cần phải cập nhật"
        );
        let updateIndex = search("id", searchId);
        if (updateIndex === -1) {
          console.log("Không tìm thấy quyển sách nào với id như trên");
        } else {
          library[updateIndex].price = +prompt("Mời bạn nhập vào giá cập nhật:");
          library[updateIndex].isAvailable = prompt(
            "Mời bạn nhập vào trạng thái cập nhật:"
          );
          displayOneBook(library[updateIndex], updateIndex);
        }
        break;
      case 5:
        // Xoá sách theo id
        let deleteId = +prompt("Nhập ID của quyển sách cần xóa:");
        let deleteIndex = search("id", deleteId);
        if (deleteIndex === -1) {
          console.log("Không tìm thấy sách với ID này.");
        } else {
          library.splice(deleteIndex, 1);
          console.log("Đã xóa sách thành công!");
          displayBook(library[deleteIndex], deleteIndex);
        }
        break;
      case 6:
        // Bubble sort 
        // sort();
        for (let i = 0; i < library.length - 1; i++) {
            for (let j = 0; j < library.length - 1 - i; j++) {
              if (library[j].price > library[j + 1].price) {
                let temp = library[j];
                library[j] = library[j + 1];
                library[j + 1] = temp;
              }
            }
          }
          console.log("Sách xếp theo thứ tự giá tăng dần!");
          displayBook();
        break;
      case 7:
        console.log("Thank you for using our library app !!!");
        break;
      default:
        break;
    }
  }
  
  function displayBook() {
    library.forEach(function (book, index) {
      console.log(`Quyển sách ${index + 1}:`);
      console.log("Id Sách:", book.id);
      console.log("Tiêu đề:", book.title);
      console.log("Tác giả:", book.author);
      console.log("Giá:", book.price);
      console.log("Trạng thái:", book.isAvailable);
      console.log("Năm xuất bản:", book.year);
      console.log("---------------------");
    });
  }
  
  function displayOneBook(book, index) {
    console.log(`Quyển sách ${+index + 1}:`);
    console.log("Id Sách:", book.id);
    console.log("Tiêu đề:", book.title);
    console.log("Tác giả:", book.author);
    console.log("Giá:", book.price);
    console.log("Trạng thái:", book.isAvailable);
    console.log("Năm xuất bản:", book.year);
    console.log("---------------------");
  }
  function search(key, value) {
    let findIndex = -1;
    for (let i in library) {
      if (value === library[i][key]) {
        findIndex = i;
        break;
      }
    }
    return findIndex;
  }