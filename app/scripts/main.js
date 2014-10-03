/*
$(document).ready(function(){

if $('.header1').is('click') ) {
  $('div').remove('.box2 .box3');

} else if
  ($('.header2').is('click') ) {
    $('div').remove('.box1 .box3');

} else if
   ($('.header3').is('click') ) {
    $('div').remove('.box1 .box2');
}

});
*/

$('.header1').click(function(){
  $('.box2').remove();
  $('.box3').remove();

 });
