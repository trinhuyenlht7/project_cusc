

function phanLoai(diem){
    do{
        var diem = parseInt(document.getElementById('nhap_diem').value)
        var hoTen = document.getElementById('nhap_ten').value
        document.write('Tên sinh viện là :' + hoTen + '<br />')
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
        break
    }while(diem<0 || diem >10)   
}

function huongDi(){
    var thaoTac = document.getElementById('thao_tac').value

switch (thaoTac) {
    case 'A': document.write('left')
        break;
    case 'D': document.write('right')    
        break
    case 'W': document.write('top') 
        break        
    case 'S': document.write('button') 
        break
    default:
        document.write('không hổ trợ khứa này, khứa này đi vô đầu cậu á')
        break;
}
}

function kiemTra(){
    var taikhoan = document.getElementById('tai_khoan').value
    var matkhau = document.getElementById('mat_khau').value

    var loi_tk =''
    if (taikhoan=='') {
        loi_tk += 'quên nhập tk kià bạn êy'
    }else if(taikhoan.length < 3){
        loi_tk += 'Nhập nhiều lên bạn êy'
    } else if(taikhoan.length >10){
        loi_tk += 'Nhập ít lại bạn êy'
    }

    var loi_mk =''
    if (matkhau ==''){
        loi_mk += 'quên nhập mk bạn êy'
    }else if(matkhau.length<3){
        loi_mk += 'mật khẩu ngắn vá bạn êy'
    }else if (matkhau.length >10){
        loi_mk+= 'Mật Khẩu dài quá bạn êy'
        }

    if(loi_mk==''&& loi_tk==''){
        document.getElementById('thong_bao').innerHTML = 'Đăng Nhập Thành Công'
    }else 
        document.getElementById('thong_bao').innerHTML = loi_tk + ' '+loi_mk
}  

