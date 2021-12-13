$(function () {
  // $('#walletDataTable').bootstrapTable();

  // $('.modal').on('shown.bs.modal', function () {
  //   $('body').addClass('modal-open');
  //   // BS adds some padding-right to acomodate the scrollbar at right
  //   $('body').removeAttr('style');
  // })

  // $(".modal [data-toggle='modal']").click(function () {
  //   $(this).closest(".modal").modal('hide');
  // });


  /*-------------------------------------------
  01. Header Bar Language Menu
--------------------------------------------- */
  $("#language").on("click", function () {
    $(".language-opt").fadeToggle("fast");
  });


  /*-------------------------------------------
  02. Slider Amount / Price
--------------------------------------------- */
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [0, 1000],
    slide: function (event, ui) {
      $("#amount").val(" $ " + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $("#amount").val(" $ " + $("#slider-range").slider("values", 0) +
    " -  $ " + $("#slider-range").slider("values", 1));

});


/*-------------------------------------------
  03. Cutom Option Selection for Instant & Size
--------------------------------------------- */

$(".instant-opt-container").delegate(".custom-border", "click", (e) => {
  $(".custom-border").removeClass("custom-border__selected")
  $(e.target).addClass("custom-border__selected")
})

$(".size-opt-container").delegate(".custom-border", "click", (e) => {
  $(".custom-border").removeClass("custom-border__selected")
  $(e.target).addClass("custom-border__selected")
})



$(document).ready(function () {
  ContactSideMenuPanel();

  /*-------------------------------------------
  04. Slick Carousel 
--------------------------------------------- */
  $('.slick-carousel-items').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 400,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  $('.slick-brands-items').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 400,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  });

  /*-------------------------------------------
  05. Rating Stars
--------------------------------------------- */
  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function () {
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function (e) {
      if (e < onStar) {
        $(this).addClass('hover');
      } else {
        $(this).removeClass('hover');
      }
    });

  }).on('mouseout', function () {
    $(this).parent().children('li.star').each(function (e) {
      $(this).removeClass('hover');
    });
  });


  /* 2. Action to perform on click */
  $('#stars li').on('click', function () {
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }

    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue > 1) {
      msg = "Thanks! You rated this " + ratingValue + " stars.";
    } else {
      msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    responseMessage(msg);

  });

  /*-------------------------------------------
  06. Color Radio Button
--------------------------------------------- */

  $('label[for=choice-1]').click(function () {});

  $('label[for=choice-2]').click(function () {});

  $('label[for=choice-3]').click(function () {});

  /*-------------------------------------------
  07. Product Swiper
--------------------------------------------- */
  var ProductCarousel = new Swiper('.product-carousel', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: false,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 4,
      }
    }
  })

  var ProductSlider = new Swiper('.product-slider', {
    spaceBetween: 10,
    loop: false,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: ProductCarousel,
    },
  })

});

/*-------------------------------------------
  08. Side Menu
--------------------------------------------- */

function ContactSideMenuPanel() {
  var mainWrapper = $('.main-wrapper'),
    contactBtnOpener = $('#side-menu-open'),
    contactBtnCloser = $('.sr-contact-side-menu-closer'),
    open = 'sr-contact-side-menu-opened';

  mainWrapper.prepend('<div class="sr-cover"/>');

  var n = function () {
      $(document.body).removeClass(open), contactBtnOpener.removeClass("opened");
    },
    d = function () {
      $(document.body).addClass(open), contactBtnOpener.addClass("opened"),
        $('.main-wrapper .sr-cover').on('click', function () {
          $(document.body).removeClass(open), contactBtnOpener.removeClass("opened");
        });

      var lastScrollTop = 0;
      $(window).scroll(function () {
        Math.abs(lastScrollTop - $(window).scrollTop()) > 400 && n()
      });
    };

  contactBtnOpener.on('click', function () {
    event.preventDefault(), contactBtnOpener.hasClass("opened") || d()
  }), contactBtnCloser.on('click', function () {
    event.preventDefault(), contactBtnOpener.hasClass("opened") && n()
  });
}


// function responseMessage(msg) {
//   $('.success-box').fadeIn(200);
//   $('.success-box div.text-message').html("<span>" + msg + "</span>");
// }

/*-------------------------------------------
  09. Edit Address
--------------------------------------------- */

const editAddressInfo = document.querySelectorAll(".edit-address");

editAddressInfo.forEach(editAddress => {
  editAddress.addEventListener("click", () => {
    const current = document.querySelector(".edit-address.active");

    if (current && current !== editAddress) {
      current.classList.toggle("active");
      current.nextElementSibling.style.maxHeight = 0;
    }

    editAddress.classList.toggle("active");

    const editAddressBody = document.querySelector(".address-item-body");

    if (editAddress.classList.contains("active")) {
      editAddressBody.style.maxHeight = editAddressBody.scrollHeight + "px";
    } else {
      editAddressBody.style.maxHeight = 0;
    }
  });
});


/*-------------------------------------------
  10. Order List
--------------------------------------------- */

const orderItemHeaders = document.querySelectorAll(
  ".order-item-header"
);

orderItemHeaders.forEach(orderItemHeader => {
  orderItemHeader.addEventListener("click", () => {
    const current = document.querySelector(".order-item-header.active");

    if (current && current !== orderItemHeader) {
      current.classList.toggle("active");
      current.nextElementSibling.style.maxHeight = 0;
    }
    orderItemHeader.classList.toggle("active");

    const orderItemBody = orderItemHeader.nextElementSibling;

    if (orderItemHeader.classList.contains("active")) {
      orderItemBody.style.maxHeight = orderItemBody.scrollHeight + "px";
    } else {
      orderItemBody.style.maxHeight = 0;
    }
  });
});


/*-------------------------------------------
  11. Custom Search Box
--------------------------------------------- */

$('.search__open').on('click', function () {
  $('body').toggleClass('search__box__show__hide');
  return false;
});

$('.search__close__btn .search__close__btn_icon').on('click', function () {
  $('body').toggleClass('search__box__show__hide');
  return false;
});