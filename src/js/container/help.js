$(function(){
    $('.question h6').click(function(){
        var $this = $(this);
        var $index = $this.index();
        var $anwser = $('.question .anwser').eq($index / 2);
        $anwser.animate({height: "toggle", display: "siblings"}, "slow");
    })
});