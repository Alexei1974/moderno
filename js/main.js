$(function () {

  $('.products-slider-inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 975,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });


  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });
  $('.user-menu').on('click', function () {
    $('.header__box').slideToggle();
  })
  $('.btn-menu').on('click', function () {
    $('.menu__list').slideToggle();
  })

 





 $('.product-one__tabs .tab').on('click', function(event) {
  var id = $(this).attr('data-id');
    $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs').find('.tab').removeClass('active');
    $('.sort-2').removeClass('sort-btn btn--active');
    $('.new-items__box ').removeClass('product-item__wraper--list');
    $('.sort-1').addClass('sort-btn btn--active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    
    return false;
  });

  $('.sort-1 ').on('click', function () {
    $(this).addClass('sort-btn btn--active');
    $('.sort-2').removeClass('sort-btn btn--active');
    $('.new-items__box ').removeClass('product-item__wraper--list');
});
$('.sort-2').on('click', function () {
    $(this).addClass('sort-btn btn--active');
    $('.sort-1').removeClass('sort-btn btn--active');
    $('.new-items__box ').addClass('product-item__wraper--list');
});

var mixer = mixitup('.products__inner-box');

var marginSlider = document.getElementById('sourse-slider');

noUiSlider.create(marginSlider, {
    start: [0, 600],
    connect:true,
    range: {
        'min': 0,
        'max': 1000
    },
    format: {
      from: function(value) {
              return parseInt(value);
          },
      to: function(value) {
              return parseInt(value);
          }
      }
});
var marginMin = document.getElementById('sourse-slider__min'),
    marginMax = document.getElementById('sourse-slider__max');

marginSlider.noUiSlider.on('update', function (values, handle) {
    if (handle) {
        marginMax.innerHTML = values[handle];
    } else {
        marginMin.innerHTML = values[handle];
    }
});



 

});
