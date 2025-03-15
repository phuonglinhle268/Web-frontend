let students = [
    {name: "Tran Tri Duong", score: {toan: 9, anh: 8, van: 7}},
    {name: "Ha Bich Ngoc", score: {toan: 3, anh: 2, van: 5}},
    {name: "Bui Thai Son", score: {toan: 9.5, anh: 9, van: 9}},
];
function studentScore(students){
    return students.filter(student => {
        let average = (student.score.toan + student.score.van + student.score.anh)/ 3;
        return average >= 8;
    });
}
console.log("Hoc sinh co diem trung binh tren 8 la", studentScore(students));