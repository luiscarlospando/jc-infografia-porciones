$(document).ready(function() {
	// fullPage.js
	$('#fullpage').fullpage({
		navigation: true,
		showActiveTooltip: true,
		slidesNavigation: false,
		recordHistory: false,
		anchors: ['inicio', 'seccion-1', 'seccion-2','seccion-3', 'seccion-4'],
		menu: '.main-nav ul',
		fixedElements: '.header, .footer',
		paddingTop: '30px',
		// paddingBottom: '55px',
		scrollOverflow: true,
		controlArrows: false,
		keyboardScrolling: true,
		loopHorizontal: false,
		// onLeave: function(index, nextIndex, direction){
		// 	var leavingSection = $(this);

		// 	// after leaving inicio (index 1)
		// 	if(index == 1 && direction =='down'){
		// 		console.log("Going to seccion-1");
		// 		$.fn.fullpage.silentMoveTo('seccion-1', 1);
		// 	}
	
		// 	// after leaving seccion-1 (index 2)
		// 	if(index == 2 && direction =='up'){
		// 		console.log("Going to inicio");
		// 	}
	
		// 	else if(index == 2 && direction == 'down'){
		// 		console.log("Going to seccion-2");
		// 	}
		// }
	});

	// animate.css
	// var index = 0;
	// var total = $(".media").length;

	// $(".animar").click(function () {
	// 	$(".media").eq(index).addClass("current animated fadeInDown");
	// 	index = (index + 1) % total;
	// });

	setTimeout(function () {
		$('#queso').show().addClass('animated fadeInDown');
	}, 1500);

	setTimeout(function () {
		$('#miel').show().addClass('animated fadeInDown');
	}, 2000);

	setTimeout(function () {
		$('#banana').show().addClass('animated fadeInDown');
	}, 2500);

	setTimeout(function () {
		$('#pan').show().addClass('animated fadeInDown');
	}, 3000);

	setTimeout(function () {
		$('#brocoli').show().addClass('animated fadeInDown');
	}, 3500);

	setTimeout(function () {
		$('#pescado').show().addClass('animated fadeInDown');
	}, 4000);

	setTimeout(function () {
		$('#mano').show().addClass('animated fadeIn');
	}, 5000);

	setTimeout(function () {
		$('#porciones').show().addClass('animated fadeIn');
	}, 6000);
});

// slides
$(document).on('click', '.btn-izq', function(){
	$.fn.fullpage.moveSlideLeft();
});

$(document).on('click', '.btn-der', function(){
	$.fn.fullpage.moveSlideRight();
});