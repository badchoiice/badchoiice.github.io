document.getElementById('burger_menu').onclick = function(){
	document.getElementById('mobile_menu').classList.toggle('active')
}

$(document).ready(function() {
  var btn = $('#btn_up');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 450) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '2000');
   });
});
