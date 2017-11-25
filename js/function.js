
//quantity set
function setClickListener(){
    var a=0;
    $('.tambah').on('click',function(){
        a=a+1;
        $('#angka').text(a);
    });
    
    $('.kurang').on('click',function(){
        a=a-1;
        $('#angka').text(a);
    });
}

setClickListener();