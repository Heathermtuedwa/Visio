$(document).ready(function () {
  const $imagesContainer = $('.carousel-images');
  const $images = $('.carousel-images img');
  const $nextLink = $('.nextlink');
  const $prevLink = $('.prevlink');
  const $indicatorsContainer = $('.carousel-indicators');
  let currentIndex = 0;

  // Create and append indicators based on the number of images
  $images.each(function(index) {
    $indicatorsContainer.append(`<div class="carousel-indicator${index === 0 ? ' active' : ''}" data-index="${index}"></div>`);
  });

  function showImage(index) {
    const offset = -index * 100;
    $imagesContainer.css('transform', `translateX(${offset}%)`);
    $('.carousel-indicator').removeClass('active');
    $(`.carousel-indicator[data-index="${index}"]`).addClass('active');
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % $images.length;
    showImage(currentIndex);
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + $images.length) % $images.length;
    showImage(currentIndex);
  }

  $nextLink.on('click', function (event) {
    event.preventDefault();
    showNextImage();
  });

  $prevLink.on('click', function (event) {
    event.preventDefault();
    showPrevImage();
  });

  $indicatorsContainer.on('click', '.carousel-indicator', function () {
    const index = $(this).data('index');
    currentIndex = index;
    showImage(index);
  });
});
