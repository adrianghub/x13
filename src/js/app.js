import '../scss/app.scss';
import 'bootstrap';

import $ from 'jquery';
import 'owl.carousel';

// eslint-disable-next-line no-unused-vars
import '@srexi/purecounterjs';

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

  $('.dropdown-menu').on('mouseenter', function() {
    $('#main').addClass('active');
  });

  $('.dropdown-menu').on('mouseleave', function() {
    $('#main').removeClass('active');
  });
});
