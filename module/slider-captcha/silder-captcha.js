$(function () {
    var slider = new SliderUnlock("#slider", {}, function () {
        $('#login').append('<input name=human value=1 type=hidden>');

        // place logic/api here
    });

    slider.init();
})

$('#login').on('submit', function () {
    $(this).removeClass('enters');
    if ($('#login input[name=human]').val() != 1) {
        $('.alert').addClass('hidden');
        $('.alert-warning').removeClass('hidden');
        $('#slider').removeClass('shake');

        setTimeout(function () {
            $('#slider').addClass('shake');
        }, 400);

        return false;
    } else if (!$('#login input[name=login]').val() || !$('#login input[name=pass]').val()) {
        $('.alert').addClass('hidden');
        $('.alert-danger').removeClass('hidden');
        $('#login').addClass('shake');

        setTimeout(function () {
            $('#login').removeClass('shake');
        }, 400);

        return false;
    } else {
        $('#login').html('Welcome, redirecting...');

        return false;
    }
});

; (function ($, window, document, undefined) {
    function SliderUnlock(elm, options, success) {
        var me = this;
        var $elm = me.checkElm(elm) ? $(elm) : $;
        success = me.checkFn(success) ? success : function () { };

        var opts = {
            successLabelTip: "Successfully Verified",
            duration: 200,
            swipestart: false,
            min: 0,
            max: $elm.width(),
            index: 0,
            IsOk: false,
            lableIndex: 0
        };

        opts = $.extend(opts, options || {});

        //$elm
        me.elm = $elm;
        //opts
        me.opts = opts;
        //是否开始滑动
        me.swipestart = opts.swipestart;
        //最小值
        me.min = opts.min;
        //最大值
        me.max = opts.max;
        //当前滑动条所处的位置
        me.index = opts.index;
        //是否滑动成功
        me.isOk = opts.isOk;
        //滑块宽度
        me.labelWidth = me.elm.find('#label').width();
        //滑块背景
        me.sliderBg = me.elm.find('#slider_bg');
        //鼠标在滑动按钮的位置
        me.lableIndex = opts.lableIndex;
        //success
        me.success = success;
    }

    SliderUnlock.prototype.init = function () {
        var me = this;

        me.updateView();
        me.elm.find("#label").on("mousedown", function (event) {
            var e = event || window.event;
            me.lableIndex = e.clientX - this.offsetLeft;
            me.handerIn();
        }).on("mousemove", function (event) {
            me.handerMove(event);
        }).on("mouseup", function (event) {
            me.handerOut();
        }).on("mouseout", function (event) {
            me.handerOut();
        }).on("touchstart", function (event) {
            var e = event || window.event;
            me.lableIndex = e.originalEvent.touches[0].pageX - this.offsetLeft;
            me.handerIn();
        }).on("touchmove", function (event) {
            me.handerMove(event, "mobile");
        }).on("touchend", function (event) {
            me.handerOut();
        });
    };

    /**
     *  when mouse/hand in the slider and start swiping 
     */
    SliderUnlock.prototype.handerIn = function () {
        var me = this;
        me.swipestart = true;
        me.min = 0;
        me.max = me.elm.width();
    };

    /**
     * when mouse/hand out of the slider while swiping 
     */
    SliderUnlock.prototype.handerOut = function () {
        var me = this;
        //stop
        me.swipestart = false;
        //me.move();
        if (me.index < me.max) {
            me.reset();
        }
    };

    /**
     * while swiping
     * @param event
     * @param type
     */
    SliderUnlock.prototype.handerMove = function (event, type) {
        var me = this;
        if (me.swipestart) {
            event.preventDefault();
            event = event || window.event;
            if (type == "mobile") {
                me.index = event.originalEvent.touches[0].pageX - me.lableIndex;
            } else {
                me.index = event.clientX - me.lableIndex;
            }
            me.move();
        }
    };

    /**
     * while swiping
     */
    SliderUnlock.prototype.move = function () {
        var me = this;
        if ((me.index + me.labelWidth) >= me.max) {
            me.index = me.max - me.labelWidth - 2;
            //stop
            me.swipestart = false;
            //success unlock
            me.isOk = true;
        }
        if (me.index < 0) {
            me.index = me.min;
            //not success unlock
            me.isOk = false;
        }
        if (me.index + me.labelWidth + 2 == me.max && me.max > 0 && me.isOk) {
            //unlock process

            //loading style1
            $('.lds-ellipsis').css('display', 'inline-block');

            $('#label').unbind().next('#labelTip').text("").css({ 'color': '#fff' })
            setTimeout(function () {
                $('.lds-ellipsis').css('display', 'none');
                $('#labelTip').text(me.opts.successLabelTip).css({ 'color': '#fff' }).removeClass("slider-text-effect");
                $('#label').css("line-height", "35px").text('').addClass("glyphicon-ok");
            }, 1500);

            me.success();
        }
        me.updateView();
    };

    SliderUnlock.prototype.updateView = function () {
        var me = this;

        me.sliderBg.css('width', me.index + 40);
        me.elm.find("#label").css("left", me.index + "px")
    };


    SliderUnlock.prototype.reset = function () {
        var me = this;

        me.index = 0;
        me.sliderBg.animate({ 'width': 0 }, me.opts.duration);
        me.elm.find("#label").animate({ left: me.index }, me.opts.duration)
            .next("#lableTip").animate({ opacity: 1 }, me.opts.duration);
        me.updateView();
    };

    /**
     *  checking elm 
     * @param elm
     * @returns {boolean}
     */
    SliderUnlock.prototype.checkElm = function (elm) {
        if ($(elm).length > 0) {
            return true;
        } else {
            throw "this element does not exist.";
        }
    };

    /**
     * checking fn
     * @param fn
     * @returns {boolean}
     */
    SliderUnlock.prototype.checkFn = function (fn) {
        if (typeof fn === "function") {
            return true;
        } else {
            throw "the param is not a function.";
        }
    };

    window['SliderUnlock'] = SliderUnlock;
})(jQuery, window, document);


