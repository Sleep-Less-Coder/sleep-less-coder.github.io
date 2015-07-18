$( document ).ready(function() {

  //scroll down to show projects
  $('.cta-btn').on('click', function(){
  		$scrollHeight = $('section.portfolio').offset().top;
  		$('html,body').animate({
			scrollTop: $scrollHeight
		}, 800);
  })

});