function ibg(){
	let ibg = document.querySelectorAll('.ibg');
	let container =document.querySelectorAll('.container')
	for(var i=0; i<container.length; i++){
		if(ibg[i].querySelector('img')){
			container[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
			ibg[i].querySelector('img').remove()
		}
	};
	console.log(container)
}
ibg()
document.getElementById('burger_menu').onclick = function(){
	document.getElementById('mobile_menu').classList.toggle('active')
}

$(document).ready(function() {
  var btn = $('#btn_up');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
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
$(window).scroll(function(e){
	let s=0-$(this).scrollTop()/1.8;
	$('.mainblock').css('transform','translate3d(0, '+s+'px,0)');
})
