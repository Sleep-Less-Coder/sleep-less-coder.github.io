$( document ).ready(function() {

  //scroll down to show projects
  $('.cta-btn').on('click', function(){
  		$scrollHeight = $('h1.my-projects').offset().top;
  		$('html,body').animate({
			scrollTop: $scrollHeight
		}, 800);
  })

});