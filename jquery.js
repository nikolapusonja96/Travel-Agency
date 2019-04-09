/*menu*/
$(document).ready(function(){
  $('#navigation li ul').css({
    display: "none"
  }); 
  $('#navigation li').hover(function() {
    $(this)
      .find('ul')
      .stop(true, true)
      .slideDown('fast');
		
  }, function() {
    $(this)
      .find('ul')
      .stop(true,true)
      .fadeOut('fast');
	 
  });
});


/*slider*/
$(document).ready(function(){
  slideShow();
});

function slideShow() {
  var current = $('#middle1 #slider .show');
 var next=current.next().length ? current.next() : current.parent().children(':first');
  
  current.hide().removeClass('show');
  next.fadeIn().addClass('show');
  
  setTimeout(slideShow, 3000);
}

/*social*/
$(document).ready(function(){
 $("#social span img").hover(function(){
 $(this).fadeTo( "fast", 0.6 );}, function(){
 $(this).fadeTo( "fast", 3 );
 });
});
$(document).ready(function(){
    $("img.img").hover(function(){
			$(this).animate({ "border-radius": "15px" }, 200);
        }, function(){
      	$(this).animate({ "border-radius": "45px" }, 200);
				});
});



 