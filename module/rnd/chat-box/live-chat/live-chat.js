(function () {
    window.expand = function () {
        $("#live-chat").toggle('scale');
        $(".toggle-livechat").toggle('scale');
    };

    $("#hide_merchant").on("click", function () {
        $(".marchant-panel").addClass("active");
        $("#merchant-search").addClass("active");
        console.log("open")
        // $(this).toggleClass("active");
    });

    $("#show_merchant").on("click", function () {
        $(".marchant-panel").removeClass("active");
        $("#merchant-search").removeClass("active");
        console.log("open")
        // $(this).toggleClass("active");
    });

    $('.feature-container ul li').click(function () {
        $('.feature-container ul li').removeClass('selected');
        $(this).addClass('selected');
    });

    $('.marchant-panel ul li').click(function () {
        $('.marchant-panel ul li').removeClass('active');
        $(this).addClass('active');
    });

    $('.user-panel ul li').click(function () {
        $('.user-panel ul li').removeClass('active');
        $(this).addClass('active');
    });

    var chat = {
        messageToSend: '',
        messageResponses: [
            'Vincent, at ur service!',
            'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
            'What is the most used language in programming? Profanity.',
            'What is the object-oriented way to become wealthy? Inheritance.',
            'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol'
        ],
        init: function () {
            this.cacheDOM();
            this.bindEvents();
            this.render();
        },
        cacheDOM: function () {
            this.$chatHistory = $('.chat-history');
            this.$button = $('.send');
            this.$textarea = $('#message-to-send');
            this.$chatHistoryList = this.$chatHistory.find('ul');
        },
        bindEvents: function () {
            this.$button.on('click', this.addMessage.bind(this));
            this.$textarea.on('keyup', this.addMessageEnter.bind(this));
        },
        render: function () {
            this.scrollToBottom();
            if (this.messageToSend.trim() !== '') {
                var template = Handlebars.compile($("#message-template").html());
                var context = {
                    messageOutput: this.messageToSend,
                    time: this.getCurrentTime()
                };

                this.$chatHistoryList.append(template(context));
                this.scrollToBottom();
                this.$textarea.val('');

                // responses
                var templateResponse = Handlebars.compile($("#message-response-template").html());
                var contextResponse = {
                    response: this.getRandomItem(this.messageResponses),
                    time: this.getCurrentTime()
                };

                setTimeout(function () {
                    this.$chatHistoryList.append(templateResponse(contextResponse));
                    this.scrollToBottom();
                }.bind(this), 1500);

            }

        },

        addMessage: function () {
            this.messageToSend = this.$textarea.val()
            this.render();
        },
        addMessageEnter: function (event) {
            // enter was pressed
            if (event.keyCode === 13) {
                this.addMessage();
            }
        },
        scrollToBottom: function () {
            this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
        },
        getCurrentTime: function () {
            return new Date().toLocaleTimeString().
                replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
        },
        getRandomItem: function (arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

    };

    chat.init();

    var searchFilter = {
        options: {
            valueNames: ['name']
        },
        init: function () {
            var userList = new List('people-list', this.options);
            var noItems = $('<li id="no-items-found">No items found</li>');

            userList.on('updated', function (list) {
                if (list.matchingItems.length === 0) {
                    $(list.list).append(noItems);
                } else {
                    noItems.detach();
                }
            });
        }
    };

    searchFilter.init();

})();