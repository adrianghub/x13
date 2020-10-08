import $ from 'jquery';
import 'bootstrap';
import 'owl.carousel';
import '@srexi/purecounterjs';

import '../scss/app.scss';

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

  $('.dropdown').on('show.bs.dropdown ', function() {
    $('#main').css('opacity', '0.5');
  });

  $('.dropdown').on('hide.bs.dropdown ', function() {
    $('#main').css('opacity', '1');
  });
});
