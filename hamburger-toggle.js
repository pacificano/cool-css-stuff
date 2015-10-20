$(function () {

	$(window).resize(function() {

		var $windowWidth = $(window).width();

		    if ($windowWidth > 768) {

		    	$(".overlay").css("visibility", "hidden");

		    } else {
		    	$(".overlay").css("visibility", "visible")
		    };
	});
    

    $(".menu-button").click(function() {
		$(".overlay").toggleClass("overlay-open");
	});

});