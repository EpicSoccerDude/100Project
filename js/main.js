$('.navContainer').on("click", function() {
	$(this).toggleClass('change');
  $('#overlay').toggleClass('open');
});

var wow = new WOW().init();
