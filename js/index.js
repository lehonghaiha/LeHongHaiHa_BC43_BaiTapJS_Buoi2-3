//BÀI TẬP 1
function tinhLuong() {
    //Input:
        // Số ngày làm việc
        // Lương một ngày: 100000
    var soNgayLam = document.getElementById('soNgayLam').value;
    const luongMotNgay = 100000;
    //Output
        //Lương nhân viên
    var luongNhanVien = 0;
    //Process
        // Lương nhân viên = số ngày làm * lương một ngày
    luongNhanVien = soNgayLam * luongMotNgay;
    document.getElementById('tienLuongNhanVien').innerHTML = luongNhanVien.toLocaleString();
}

//BÀI TẬP 2
function tinhTrungBinh() {
    //Input
        // Giá trị 5 số thực

    var soThuc1 = document.getElementById('soThuc1').value;
    var soThuc2 = document.getElementById('soThuc2').value;
    var soThuc3 = document.getElementById('soThuc3').value;
    var soThuc4 = document.getElementById('soThuc4').value;
    var soThuc5 = document.getElementById('soThuc5').value;
    //Output
        // Giá trị trung bình của 5 số thực
    var giaTriTrungBinh=0;
    //Process
        // Giá trị trung bình = (số thực 1 + số thực 2+...+ số thực 5)/5
   giaTriTrungBinh = (Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4) + Number(soThuc5)) / 5;
    document.getElementById('giaTriTrungBinh').innerHTML = giaTriTrungBinh;    
}

//BÀI TẬP 3
function quyDoiUsd(){
    //Input
        //Số tiền USD
        // giá USD: 23.500VND
    var soUsd = document.getElementById('soUsd').value;
    const giaUsd = 23500;
    //Output
        //Giá VND
    var giaVnd = 0;
    giaVnd = Number(soUsd)*giaUsd;
    document.getElementById('giaVnd').innerHTML=giaVnd.toLocaleString();
}

//BÀI TẬP 4
function tinhDienTichChuVi(){
    //Input
        // Chiều dài hình chữ nhật
        // Chiều rộng hình chữ nhật
    var chieuDai=document.getElementById('chieuDai').value; 
    var chieuRong=document.getElementById('chieuRong').value;
    //Output
    var dienTich=0;
    var chuVi=0;
    //Process
        //Diện tích HCN: chieuDai*chieuRong
        // Chu vi HCN: (chieuDai+chieuRong)*2
    dienTich=Number(chieuDai)*Number(chieuRong);
    chuVi=(Number(chieuDai)+Number(chieuRong))*2;
    document.getElementById('dienTich').innerHTML='Diện tích = '+ dienTich;
    document.getElementById('chuVi').innerHTML='Chu vi = '+ chuVi;
}

//BÀI TẬP 5
function tongKy2So(){
    //Input
        // Số có 2 chữ số
        // Chữ số hàng chục
        // Chữ số hàng đơn vị
        var tagSo=document.getElementById('tagSo').value;
        var hangChuc = 0;
        var hangDonVi = 0;
    //Output
        //Tính tổng 2 ký số
    var tinhTong = 0;
    //Process
        //Lấy số hàng chục: hangChuc = tagSo/10
        // Lấy số hàng đơn vị: hangDonVi = tagSo%10
        // ket qua tinhTong = hangChuc + hangDonVi
    hangChuc=Math.floor(Number(tagSo)/10);
    hangDonVi=Math.floor(Number(tagSo)%10);
    tinhTong=hangChuc+hangDonVi;
    document.getElementById('tinhTong').innerHTML='Tổng ký 2 số là : ' + tinhTong;
     
}
    



