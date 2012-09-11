jQuery(document).ready(function($){

  $(function(){
      $("#slides").slides({
        next: 'next',
        prev: 'prev',
        generatePagination: false,
        play: 3000,
        pause: 1000,
        hoverPause: true
      });
      
      $('#slides-small').slides({
  			next: 'next',
        prev: 'prev',
        generatePagination: false,
        play: 3000,
        pause: 1000,
        hoverPause: true,
        effect: 'fade',
  			animationStart: function(current){
  				$('.caption').animate({
  					
  				},100);
  				
  			},
  			animationComplete: function(current){
  				$('.caption').animate({
  					
  				},200);
  				
  			},
  			slidesLoaded: function() {
  				$('.caption').animate({
  					bottom:0,
  					width: '145px;',
  					left: '330px',
  					top: '95px'
  				},200);
  				$('#slides-small .slides_container').css('overflow', 'visible');
  			}
  		});
  		
  		function minHeight(elem) { // min height function to set all heights equal to heighest value
        var minHeight = 0;
        var elem = $(elem);
        elem.each(function () {
          if ($(this).height() > minHeight) {
            minHeight = $(this).height();
          }
        });
        $(elem).height(minHeight); // set largest height
      }
      minHeight('footer ul')
  });
  
  /*
  $(".primary ul li a")
  .hover(function() {
    $(this).stop().animate({ opacity: 0.1, }, 'fast');
  }, function() {
    $(this).stop().animate({ opacity: 1, }, 'fast');
  });
  */

  
});