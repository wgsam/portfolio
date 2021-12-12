window.onload = function () {
    var h = $('.flag').width();
    for (var i = 0; i < h; i++) {
        var flagElement = $("<div class='flag-element'>");
        flagElement.css('background-position', -i + "px 0");
        flagElement.css('-webkit-animation-delay', i * 30 + 'ms');
        flagElement.css('-moz-animation-delay', i * 30 + 'ms');
        flagElement.css('-ms-animation-delay', i * 30 + 'ms');
        flagElement.css('animation-delay', i * 30 + 'ms');
        $('.flag').append(flagElement);
    }

    var h = $('.flag2').width();
    for (var i = 0; i < h; i++) {
        var flagElement = $("<div class='flag-element2'>");
        flagElement.css('background-position', -i + "px 0");
        flagElement.css('-webkit-animation-delay', i * 30 + 'ms');
        flagElement.css('-moz-animation-delay', i * 30 + 'ms');
        flagElement.css('-ms-animation-delay', i * 30 + 'ms');
        flagElement.css('animation-delay', i * 30 + 'ms');
        $('.flag2').append(flagElement);
    }
}