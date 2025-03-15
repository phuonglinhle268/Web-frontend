let test_case1 = [2,1,4,6,18,12,3];
let test_case2 =[4,16,5,8,122,5];
let test_case3="abc";
function sortEven (arr){
    if (Array.isArray(arr)){
        let evenArr = arr.filter(item => item % 2 == 0);
        console.log("evenArr", evenArr);
        for (let i = 0; i < evenArrrr.length - 1; i++){
            for (let j = 0; j < evenArr.length - 1 - i; j++){
                if (evenArr[j] > evenArr[j + 1]){
                    let temp = evenArr[j];
                    evenArr[j] = evenArr[j + 1];
                    evenArr[j + 1] = temp;
                }
            }
        }
        console.log("mảng sau khi sắp xếp", evenArr);
        let count = 0;
        for (let i =0; i < arr.length; i++){
            if (arr[i] % 2 == 0){
                arr[i] = evenArr[count];
                count++;
            }
        }
        console.log("mảng sau khi sắp xếp các phần tử chẵn tăng dần",)
    } else {
        console.log("dữ liệu không hợp lệ");
    }
}
sortEven(test_case2);