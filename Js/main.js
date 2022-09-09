let navWidth=$('.navigationBar').innerWidth();
$('#navIcon').click(function(){
  navWidth=$('.navigationBar').innerWidth();
  if($('#navIcon').css('margin-left')=='0px'){
      $('.navigationBar').css({'left':'0'});
      $('#navIcon').css({'margin-left':`${navWidth}`});
      $('.homeContent').css({'margin-left':`${navWidth}`});
        }
  else{
    $('.navigationBar').css({'left':`-${navWidth}`});
    $('#navIcon').css({'margin-left':'0'});
    $('.homeContent').css({'margin-left':'0'});

     }
})

$("#navExitIcon").click(function(){
  navWidth=$('.navigationBar').innerWidth();
  $('.navigationBar').css({'left':`-${navWidth}`});
  $('#navIcon').css({'margin-left':'0'});
  $('.homeContent').css({'margin-left':'0'});

})

$(".singer").click(function(){
let currentSingerContent=$(this).find('.detailsContent');
  $('.detailsContent').not(currentSingerContent).slideUp(1000);
  $(currentSingerContent).slideToggle(1000);
}
)


function countdown() {
  var now = new Date();
  var eventDate = new Date(2022, 7, 1);
  var currentTiime = now.getTime();
  var eventTime = eventDate.getTime();
  var remTime = eventTime - currentTiime;
  var s = Math.floor(remTime / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24) - 30;

  h %= 24;
  m %= 60;
  s %= 60;

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
$('#days').html(`<h3>${d}D</h3>`);
$('#hours').html(`<h3>${h}h</h3>`);
$('#minutes').html(`<h3>${m}m</h3>`);
$('#seconds').html(`<h3>${s}s</h3>`);
  setTimeout(countdown, 1000);
}

countdown();
