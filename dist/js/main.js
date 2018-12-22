$(document).ready(function(){
    $('#yes').on('click',function(e){
        e.preventDefault();
        $('#form-hide').slideDown();
        $(this).hide();
        $('#no').css('width','100%')
    })
})