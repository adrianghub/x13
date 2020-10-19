import $ from 'jquery';

import 'bootstrap/js/src/tab';
import 'bootstrap/js/src/dropdown';
import 'bootstrap/js/src/modal';
import 'bootstrap/js/src/collapse';
import 'owl.carousel';
import '@srexi/purecounterjs';

import '../scss/app.scss';

$(function() {
  $('.brand-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        margin: 20,
      },
      600: {
        items: 3,
        margin: 30,
      },
      1000: {
        items: 5,
        margin: 50,
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
