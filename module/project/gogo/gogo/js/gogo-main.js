$(document).ready(function () {
    // Label effect
    $('input, select').focus(function () {
        $(this).siblings('label').addClass('active');
    });

    $('input, select').bind('checkval', function () {
        var floatLabel = $(this).parent('.form-group').children('label');
        if (this.value !== '') {
            floatLabel.addClass('active');
        } else {
            floatLabel.removeClass('active');
        }
    }).blur(function () {

        // label effect
        if ($(this).val().length > 0) {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    }).trigger('checkval');
});

