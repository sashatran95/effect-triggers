$('.btn-show-hide').on('click', function (e) {
  $('.box').toggleClass('is-clicked');
});

$('.btn-move').on('click', function (e) {
  $('.diamond').toggleClass('is-clicked2');
});

$('.btn-collapse-expand').on('click', function (e) {
  $('.panel').toggleClass('is-clicked3');
});

$('.btn-bounce').on('click', function (e) {
  $('.circle').addClass('is-clicked4');
});

$('.circle').on('animationend', function (e) {
  $(this).removeClass('is-clicked4');
});

$('.btn-append').on('click', function (e) {
  $('.list').append('<li>New List Item</li>');
});
