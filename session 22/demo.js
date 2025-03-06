let students = ["A", "B", "C"];
console.log(students);

let randomArr = [1, "Hello world", false, true];
console.log(randomArr);

console.log("moi em", students[0], "len bang");  //read one

for(let i =0; i <students.length; i= i + 1){  //read all
    console.log(students[i]);
}

for(let i = students.length - 1; i >= 0; i--){
    console.log(students[i]);
}

for(let student of students){  //lay toan bo phan tu ma ko can index
    console.log(student);
}

for (let index in students){  //lay ra toan bo chi so
    console.log(index);
}

//Thêm
//Đầu mảng
students.unshift("Nguyễn Văn A")
console.log(students);
//Cuối mảng
students.push("Nguyễn Văn A")
console.log(students);
//Thêm giữa
students.splice(1, 0, "Hello world");  //vị trí số 1, số 0 bắt buộc
console.log(students);

//Update
students[6]= "Nguyen Van A";
console.log(students);
//Đầu mảng
students.shift();
console.log(students);
//Cuối mảng
students.pop();
console.log(students);
//Giữa mảng
students.splice(3, 1);    //Gtri 1 bắt buộc
console.log(students);
