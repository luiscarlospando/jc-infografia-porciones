$(document).ready(function() {
	// fullPage.js
	$('#fullpage').fullpage({
		navigation: true,
		showActiveTooltip: true,
		slidesNavigation: false,
		autoScrolling: true, // scrolleo de un sólo toque desactivado
		recordHistory: false,
		anchors: ['inicio', 'seccion-1', 'seccion-2','seccion-3', 'seccion-4'],
		menu: '.main-nav ul',
		fixedElements: '.header, .footer',
		paddingTop: '30px',
		// paddingBottom: '55px',
		scrollOverflow: true,
		controlArrows: false,
		keyboardScrolling: true,
		loopHorizontal: false
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

// botones slides
// sección 1
$(document).on('click', '.btn-izq-1', function(){
	$.fn.fullpage.moveTo('seccion-1', 0);
});

$(document).on('click', '.btn-mano-1', function(){
	$.fn.fullpage.moveTo('seccion-1', 1);
});

$(document).on('click', '.btn-der-1', function(){
	$.fn.fullpage.moveTo('seccion-1', 2);
});

// sección 2
$(document).on('click', '.btn-izq-2', function(){
	$.fn.fullpage.moveTo('seccion-2', 0);
});

$(document).on('click', '.btn-mano-2', function(){
	$.fn.fullpage.moveTo('seccion-2', 1);
});

$(document).on('click', '.btn-der-2', function(){
	$.fn.fullpage.moveTo('seccion-2', 2);
});

// svgs
var svg1 = new Vivus('svg-1', {
		type: 'oneByOne',
		duration: 150,
		start: 'inViewport'
	},
	function (obj) {
		obj.el.classList.add('finished');
	}
);

var svg2 = new Vivus('svg-2', {
	type: 'oneByOne',
	duration: 150,
	start: 'inViewport'
},
function (obj) {
	obj.el.classList.add('finished');
}
);  