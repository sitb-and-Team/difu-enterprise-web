(function ($) {
    "use strict";

    var input = $('.validate-input .input100');

    $('.register-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        if ($('.register-pwd').val() !== $('.register-rePwd').val()) {
            alert('两次密码不一致，请检查后重新输入');
            check = false;
        }
        return check;
    });

    $('.reset-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        if ($('.register-pwd').val() !== $('.register-rePwd').val()) {
            alert('两次密码不一致，请检查后重新输入');
            check = false;
        }
        return check;
    });

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        return check;
    });

    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });
    $('.register-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });
    $('.reset-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'number' || $(input).attr('name') == 'number') {
            if ($(input).val().trim().match(/^1[3456789][0-9]{9}$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }


    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    $('.register a').click(function () {
        $('.register-form').animate({height: "toggle", display: "siblings"}, "slow");
        $('.validate-form').css("display", "none");
        $('.reset-form').css("display", "none");
    });
    $('.login a').click(function () {
        $('.validate-form').animate({height: "toggle", display: "siblings"}, "slow");
        $('.register-form').css("display", "none");
        $('.reset-form').css("display", "none");
    });

    $('.resetPwd a').click(function () {
        $('.reset-form').animate({height: "toggle", display: "siblings"}, "slow");
        $('.register-form').css("display", "none");
        $('.validate-form').css("display", "none");
    });

})(jQuery);