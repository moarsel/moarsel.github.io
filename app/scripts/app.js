$(document).ready(function () {
  'use strict';

  $('.portfolio__header .arrow').on('click', function () {
      var offset = $('.profile').offset().top;
      $('html,body').animate({scrollTop: offset }, 1000, 'swing');
    });

  $('.accordion-tabs-minimal').each(function () {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function (event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});
