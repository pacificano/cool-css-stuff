

function articleTada() {
	
	var randNum = Math.floor(Math.random() * $('img').length);
	
	$('img').eq(randNum).addClass('is-anim').siblings().removeClass('is-anim');

}


$(function() {

	//	
	setInterval(function () {

		articleTada();

	}, 500);
	

});