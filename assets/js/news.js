$('.center').slick({
  centerMode: true,
  infinite: true,
  centerPadding: '0px',
  speed: 500,
  variableWidth: true,
});
$('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log('beforeChange', currentSlide, nextSlide);
});
$('.center').on('afterChange', function(event, slick, currentSlide){
  console.log('afterChange', currentSlide);
});