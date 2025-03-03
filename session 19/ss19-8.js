let month = +prompt("Nhap mot thang trong nam");
switch(month){
    case 1:
    case 2:
    case 3:{
        alert("Spring");
        break;
    }
    case 4:
    case 5:
    case 6:{
        alert("Summer");
        break;
    }
    case 7:
    case 8:
    case 9:{
        alert("Autumn");
        break;
    }
    case 10:
    case 11:
    case 12:{
        alert("Winter");
        break;
    }
    default:
        alert("Thang khong hop le");
}
