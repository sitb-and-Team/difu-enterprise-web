$(function(){
    $('.question h6').click(function(){
        var $this = $(this);
        var $index = $this.index();
        var $anwser = $('.question .anwser').eq($index / 2);
        $anwser.addClass('active');
        $anwser.siblings('.anwser').removeClass('active');
    })
});