// console.log(document);
//  let h1 = document.getElementById(`demo-id `); //lấy phần tử qua id
//  console.log(h1);

// let htmlList = document.getElementsByClassName("demo-class");
// console.log(htmlList);

// console.log(htmlList[0]);    -> lấy phần tử con
// console.log(htmlList[2]);

// for (let i =0; i < htmlList.length; i++){
//     console.log(htmlList[i]);
// }
let h1 = document.getElementById("demo-id");

console.log(h1.innerHTML);  //giữ nguyên các thẻ html có trong đoạn
console.log(h1.innerText);  //cho vào bên trong đoạn text
console.log(h1.textContent); //cho vào bên trong, giữ nguyên các khoản cách, xuống dòng giống y hệt bên html

let div = document.getElementById("demo-inner");
console.log(div.innerHTML);  
console.log(div.innerText);
console.log(div.textContent);

div.innerText = "hello world";
div.innerHTML = `
<ul>
<li>Hello world 1</li>
<li>Hello world 2</li>
<li>Hello world 3</li>
</ul>`;

div.id  // lấy ra thuộc tính : demo-inner

// console.log(div.style);
// div.style.backgroundColor = "pink";
// div.style.borderRadius = "50%"
// div.style.border = "1px solid black";
// div.style.width = "200px";
// div.style.height = "200px";
// div.style.textAlign = "center";

console.log(div.classList);
div.classList.add("class-02");
div.classList.add("demo");
//div.classList.remove("demo");
console.log(div.children[0].parentElement); //lấy ra ul (vị trí thứ 1), lấy thẻ div
