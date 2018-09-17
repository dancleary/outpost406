// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};
window.onresize = function() {setValues()};
var navbar;
var divider;
var sticky;
var nav_bg;
setValues();
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	console.log(sticky + " : " + window.pageYOffset);
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  }else {
    navbar.classList.remove("sticky");
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