

function articleTada() {
	
	var randNum = Math.floor(Math.random() * $('img').length);
	
	$('img').eq(randNum).addClass('is-anim').siblings().removeClass('is-anim');

}


$(function() {

	// TADA
	setInterval(function () {

		articleTada();

	}, 500);

	// designBGStuff
	designBGStuff();
	

});

function designBGStuff () {
	
	var dataColorArray = $('a');
	// select the links
	// for each one grab the data-color value
	// set the css color of each link based on that
	$('a').each(function (i) {
		var dataColor = $(this).data("color");
		// console.log(dataColor);
		$(this).css("color", "#" + dataColor);
		$(this).attr("data-rank", i);
	});





	$('a').hover(function () {
		var dataRank = $(this).data("rank");

		// $('img').data("rank", dataRank).css("opacity", "0.5");

		$('img').each(function () {
			if ($(this).data("rank") === dataRank) {
				$(this).css("opacity", "0.5");
			}
		});
		
	}, function () {
		$('img').css("opacity", "1");
	});





	$('img').each(function (i) {
		// var dataColor = $('img').data("color");
		var dataData = dataColorArray.eq(i).data("color");
		$(this).attr("src", "http://placehold.it/300x200/" + dataData + "/000000");
		$(this).attr("data-rank", i);
	});
}