import '../scss/app.scss';
import 'bootstrap';

$(function() {
  $('.brand-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // Counter

  $.fn.jQuerySimpleCounter = function (options) {
    const settings = $.extend(
      {
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: '',
      },
      options,
    );

    const thisElement = $(this);

    $({
      count: settings.start,
    }).animate(
      {
        count: settings.end,
      },
      {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
          const mathCount = Math.ceil(this.count);
          thisElement.text(mathCount);
        },
        complete: function () {
          const mathCount = this.count > settings.maxNumber
            ? settings.maxNumber + '+'
            : this.count;
          thisElement.text(mathCount);
        },
      },
    );
  };

  $('.counting1').jQuerySimpleCounter({
    end: 497,
    duration: 2000,
  });
  $('.counting2').jQuerySimpleCounter({
    end: 38,
    duration: 3000,
    maxNumber: 35,
  });
  $('.counting3').jQuerySimpleCounter({
    end: 9580,
    duration: 2000,
    maxNumber: 9570,
  });
  $('.counting4').jQuerySimpleCounter({
    end: 65,
    duration: 3000,
  });

  $('.dropdown-menu').on('mouseenter', function() {
    $('#main').addClass('active');
  });

  $('.dropdown-menu').on('mouseleave', function() {
    $('#main').removeClass('active');
  });
});
