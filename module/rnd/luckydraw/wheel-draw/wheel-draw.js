$(document).ready(function () {
    //set default spin degree (360*50)
    var degree = 18000;

    var value = 0;
    var countClicked = 0;
    var clicked = false;

    function getPosition(position) {
        if (position <= 18) {
            $('.congratulation__note').text('0');
        } else if (position <= 54) {
            $('.congratulation__note').text('9');
        } else if (position <= 90) {
            $('.congratulation__note').text('8');
        } else if (position <= 126) {
            $('.congratulation__note').text('7');
        } else if (position <= 162) {
            $('.congratulation__note').text('6');
        } else if (position <= 198) {
            $('.congratulation__note').text('5');
        } else if (position <= 234) {
            $('.congratulation__note').text('4');
        } else if (position <= 270) {
            $('.congratulation__note').text('3');
        } else if (position <= 306) {
            $('.congratulation__note').text('2');
        } else if (position <= 342) {
            $('.congratulation__note').text('1');
        } else {
            $('.congratulation__note').text('0');
        }

        $('.popup').removeClass('active');
        $('.congratulation').fadeIn();
        clicked = false;
        countClicked = 0;
    }

    $('.wheel__button').click(function () {
        if (clicked == true) {

            let random = Math.floor((Math.random() * 360) + degree);
            value += random;
            console.log(random % 360);
            console.log("Value > ", value % 360);
            $(".wheel__inner").css("transform", `rotate(${value}deg)`);
            setTimeout(() => {
                getPosition(value % 360);
            }, 5000);
        }
        clicked = true;
    })

    $('.congratulation__close').click(function () {
        $('.congratulation').fadeOut();
    })

    $('.congratulation').click(function (event) {
        if (event.target != this)
            return;
        $(this).fadeOut();
    })
})