(function () {
    var fakeMsg, fakeNum, isTyping, messages, uctTimer;
    messages = $(".messages-content");
    fakeNum = 0;
    isTyping = true;
    uctTimer = null;

    window.userTypingClear = function () {
        return uctTimer = setTimeout(function () {
            $(".message.personal.typing").remove();
            return isTyping = true;
        }, 3500);
    };

    window.setDate = function () {
        var d, timestamp;
        timestamp = $("<div>").addClass("timestamp");
        d = new Date();
        timestamp.text(d.getHours() + ":" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes());
        return timestamp.appendTo($('.message:last'));
    };

    window.updateScrollbar = function () {
        return messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
            scrollInertia: 10,
            timeout: 0
        });
    };

    fakeMsg = [
        "Hi there, I\'m Wg Sam and you?",
        "Nice to meet you",
        "How are you doing?",
        "Pretty good",
        "How\'s life been treating you?",
        "It could be worse, thanks",
        "I\'ve gotta go now",
        "It was a pleasure chat with you",
        "Bye 666 :)"
    ];

    window.setFakeMessage = function () {
        var typing;
        typing = $("<div><figure class='avatar'><img src='https://scontent.fkul2-1.fna.fbcdn.net/v/t1.0-1/p160x160/43612951_1983102335068647_8550882288328507392_n.jpg?_nc_cat=109&_nc_ht=scontent.fkul2-1.fna&oh=e636a858570664839777c954ad4d47f6&oe=5CBF62EB' /></figure>").append("<span>").addClass("message typing");
        typing.appendTo($('.mCSB_container'));
        updateScrollbar();
        return setTimeout(function () {
            var msg;
            typing.remove();
            msg = $('<div class="message new"><figure class="avatar"><img src="https://scontent.fkul2-1.fna.fbcdn.net/v/t1.0-1/p160x160/43612951_1983102335068647_8550882288328507392_n.jpg?_nc_cat=109&_nc_ht=scontent.fkul2-1.fna&oh=e636a858570664839777c954ad4d47f6&oe=5CBF62EB" /></figure>' + fakeMsg[fakeNum] + '</div>').appendTo($('.mCSB_container')).addClass("message");
            setDate();
            updateScrollbar();
            return fakeNum++;
        }, 1000 + (Math.random() * 10) * 100);
    };

    window.insertMessage = function () {
        var msg, msgText;
        msgText = $(".action-box-input").val();
        if ($.trim(msgText) === "") {
            return false;
        }
        msg = $("<div>").addClass("message");
        msg.text(msgText);
        msg.addClass("personal").appendTo($('.mCSB_container'));
        setDate();
        updateScrollbar();
        $(".action-box-input").val(null);
        $(".message.personal.typing").remove();
        isTyping = true;
        clearTimeout(uctTimer);
        if ($.trim(fakeMsg[fakeNum]) === "") {
            return false;
        }
        return setTimeout(function () {
            return setFakeMessage();
        }, 500 + (Math.random() * 10) * 100);
    };

    window.expand = function () {
        console.log("sas")
        $("#chat-circle").toggle('scale');
        $(".chat").toggle('scale');

        //auto scroll to bottom
        $('#mCSB_1').animate({
            scrollTop: $('#mCSB_1_container')[0].scrollHeight
        }, 500);
    };

    $(window).on('keydown', function (e) {
        if (e.which === 13) {
            insertMessage();
            return false;
        }
    });

    $(window).load(function () {
        messages.mCustomScrollbar();
        setTimeout(function () {
            return setFakeMessage();
        }, 100);
    });

    $(".action-box-input").on("keydown", function (e) {
        var typing;
        if ($(".action-box-input") !== "" && isTyping === true && e.which !== 13) {
            typing = $("<div>").append("<span>").addClass("message personal typing");
            typing.appendTo($('.mCSB_container'));
            updateScrollbar();
            isTyping = false;
            return userTypingClear();
        }
    });

}).call(this);
