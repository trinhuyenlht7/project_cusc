alert('bạn chọn 1 hoặc 2 nha')
alert('chọn 1 là đồng ý Thu Vy  là chó')
alert('chọn số khác bất kì là không đồng ý Thu Vy là chó')

do{
    var a = prompt('mời bạn nhập lựa chọn ạ')
    if(a==1){
        alert('Bạn đã đúng, Thu Vy là chó')
    }else 
        alert('Bạn đã chọn sai, mời bạn chọn lại ạ')
}while(a!=1)

var ho = prompt('nhập họ của bạn vào ạ')
var ten = prompt('nhập tên của bạn vào ạ')
document.write('họ tên thí sinh là :'+ho+' '+ten+' ')

