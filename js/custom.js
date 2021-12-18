$('#staking').click(function() {

  $('#popbox').show();
  $('#popbox2').hide();
  $('#popbox3').hide();
});
$('#Recorvery').click(function() {

  $('#popbox').hide();
  $('#popbox2').hide();
  $('#popbox3').show();
});

$('#Validation').click(function() {

  $('#popbox').hide();
  $('#popbox2').show();
  $('#popupbox3').hide();
});

// Show
$('.close').click(function() {
  $('#popbox').hide();
  $('#popbox2').hide();
  $('#popbox3').hide();
});


$('.tab_container:first').show();
$('.nav #navi:first').addClass('active');
$('.nav #navi').attr('disabled',true);

$('.nav #navi').click(function(event){
    index = $(this).index();
    $('.nav #navi').removeClass('active');
    $(this).addClass('active');
    $('.tab_container').hide();
    $('.tab_container').eq(index).show();
});
