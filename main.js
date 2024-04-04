do{
    var diem = parseInt(prompt('nhập điểm vào :'))
    if(diem >= 0 && diem <4){
        document.write('Rớt')
    }else if(diem >= 4 && diem <5){
        document.write('TB')
    }else if(diem >= 5 && diem <7){
        document.write('Khá')
    }else if(diem >= 7 && diem <9){
        document.write('Gioi')
    }else if(diem >= 9 && diem <=10){
        document.write('Very Good')
    }else 
    document.write('nhập sai xin nhập lại')
}while(diem<0 || diem >10)

