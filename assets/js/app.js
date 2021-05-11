// declaring variables to add and remove a class on navbar to change background color
var nav = $('nav');
var scrollTrigger = 50;
function getScroll() {
  return document.body.scrollTop || document.documentElement.scrollTop;
}

// add class on page load and scroll
$(window).on('load scroll', function () {
  if (getScroll() > scrollTrigger) {
    nav.addClass('navScroll');
  } else {
    nav.removeClass('navScroll');
  }
});
