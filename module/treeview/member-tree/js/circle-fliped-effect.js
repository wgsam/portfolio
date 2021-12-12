function ccFlipedInfo() {
    var ccIcon = $('.cc-fliped-icon');
    ccIcon.click(function () {
        console.log("triggle flip function")
        var card = $(this).parent(".circle-container").children(".card");
        card.toggleClass('flipped');
        card.children(".front").toggleClass('front-hide');
        card.children(".back").toggleClass('back-show');
    });
}

function flipfront() {
    console.log("triggle flip front function")
    $('.card').each(function () {
        $(this).removeClass('flipped');
        $(this).children(".front").removeClass('front-hide');
        $(this).children(".back").removeClass('back-show');
    });
}

function flipback() {
    console.log("triggle flip back function")
    $('.card').each(function () {
        if ($(this).closest('tr').closest('tr').css('visibility') != 'hidden') {
            $(this).addClass('flipped');
            $(this).children(".front").addClass('front-hide');
            $(this).children(".back").addClass('back-show');
        }
    });
}






