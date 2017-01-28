$(function(){
    var $tab_li = $('.tab_list li');
    $tab_li.on('click', function () {

        var $classLi = $(this).attr('class');
        var $div = $('.wrapper div');

        $('.tab_list li').each(function () {
            if( $(this).hasClass($classLi)) {
                $(this).css('background-color', 'blue');
            }
            else {
                $(this).css('background-color', 'gray');
            }
        });
        
        $('.wrapper div' ).each(function () {
            if ($(this).hasClass($classLi)){
                $(this).show();
            }
            else {

                $(this).hide();
            }
        });
    });
});
