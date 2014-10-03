/* If/Else statement (not working)
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
------------------------------ */

 /*THIS works but cannot chain

$('.header1').click(function(){
  $('.box2').remove();
  $('.box3').remove();

 });

 --------------------------------*/
$('.mainBox').remove('.box1 .box2 .box3');

if ($('.header1').is('click')) {
  $('.box1').add();

} else if
  ($('.header2').is('click') ) {
    $('.box2').add();

} else
   ($('.header3').is('click') )
    $('.box3').add();
