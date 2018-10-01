// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};
window.onresize = function() {setValues()};
var navbar;
var divider;
var sticky;
var nav_bg;
var fading_in = false;
var fading_out = false;

setValues();
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	console.log(sticky + " : " + window.pageYOffset);
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    if(fading_in == false){
    		fading_in = true;
    		fading_out = false;
    		$('#return-to-top').fadeIn(500, function(){
    			fading_in = false;
    		});
	}
  }else {
    navbar.classList.remove("sticky");
    if(fading_out == false){
    		fading_out = true;
    		fading_in = false;
    		$('#return-to-top').fadeOut(500, function(){
    			fading_out = false;
    		});
	}
  }
  if(window.pageYOffset >= nav_bg){
  	navbar.classList.add("nav-bg")
  }else {
    navbar.classList.remove("nav-bg");
  }
}

function setValues() {
	// Get the navbar
	navbar = document.getElementById("navbar");
	divider = document.getElementById("divider");
	// Get the offset position of the navbar
	sticky = (navbar.offsetTop > 300)?navbar.offsetTop:300;
	nav_bg = divider.offsetTop;
}

$('#nav-hamburger').on('click', function(){
	console.log("clicked");
	/*if($('navbarNav').hasClass('show')){
		$(this).closest('button').removeClass('is-active');
	}else{
		$(this).closest('button').addClass('is-active');
	}*/
});

$('#drinkBtn').on('click', function(){
	console.log('hello?');
	$('#food-menu').fadeOut();
	$('#drink-menu').fadeIn();
	$(this).addClass('underlined');
	$('#foodBtn').removeClass('underlined');
		
});
$('#foodBtn').on('click', function(){
	$('#drink-menu').fadeOut();
	$('#food-menu').fadeIn();
	$(this).addClass('underlined');
	$('#drinkBtn').removeClass('underlined')
});

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 600);
});

$('.nav-link').on('click', function(){
		$('body,html').animate({
        		scrollTop : $($(this).attr('data')).offset().top                      // Scroll to top of body
    		}, 600);
});