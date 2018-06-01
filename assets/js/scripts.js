$(document).ready(function() {
	// fullPage.js
	$('#fullpage').fullpage({
		fadingEffect: true,
		navigation: true,
		showActiveTooltip: true,
		slidesNavigation: false,
		autoScrolling: true, // scrolleo de un toque desactivado
		recordHistory: false,
		anchors: ['inicio', 'tutorial', 'menu', 'proteinas', 'frutas', 'grasas', 'carbohidratos', 'calcio', 'dulce', 'hidratacion', 'vegetales', 'conoce-mas'],
		menu: '.main-nav ul',
		fixedElements: '.header, .footer',
		paddingTop: '54px',
		// paddingBottom: '55px',
		scrollOverflow: true,
		controlArrows: false,
		keyboardScrolling: true,
		loopHorizontal: false,
		onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
			var leavingSlide = $(this);
	
			// agregamos/quitamos clase active cuando se dezliza slide (touch)
			var proteinasIndex = 4;
			var frutasIndex = 5;
			var grasasIndex = 6;
			var carbohidratosIndex = 7;
			var calcioIndex = 8;
			var dulceIndex = 9;
			var hidratacionIndex = 10;
			var vegetalesIndex = 11;
			
			// proteínas
			if(index == proteinasIndex && slideIndex == 0 && direction == 'right'){
				$('.btn-izq-1').removeClass('active');
				$('.btn-mano-1').addClass('active');
				$('.btn-der-1').removeClass('active');
			}

			if(index == proteinasIndex && slideIndex == 1 && direction == 'left'){
				$('.btn-izq-1').addClass('active');
				$('.btn-mano-1').removeClass('active');
				$('.btn-der-1').removeClass('active');
			}

			if(index == proteinasIndex && slideIndex == 1 && direction == 'right'){
				$('.btn-izq-1').removeClass('active');
				$('.btn-mano-1').removeClass('active');
				$('.btn-der-1').addClass('active');
			}

			if(index == proteinasIndex && slideIndex == 2 && direction == 'left'){
				$('.btn-izq-1').removeClass('active');
				$('.btn-mano-1').addClass('active');
				$('.btn-der-1').removeClass('active');
			}

			// frutas
			if(index == frutasIndex && slideIndex == 0 && direction == 'right'){
				$('.btn-izq-2').removeClass('active');
				$('.btn-mano-2').addClass('active');
				$('.btn-der-2').removeClass('active');
			}

			if(index == frutasIndex && slideIndex == 1 && direction == 'left'){
				$('.btn-izq-2').addClass('active');
				$('.btn-mano-2').removeClass('active');
				$('.btn-der-2').removeClass('active');
			}

			if(index == frutasIndex && slideIndex == 1 && direction == 'right'){
				$('.btn-izq-2').removeClass('active');
				$('.btn-mano-2').removeClass('active');
				$('.btn-der-2').addClass('active');
			}

			if(index == frutasIndex && slideIndex == 2 && direction == 'left'){
				$('.btn-izq-2').removeClass('active');
				$('.btn-mano-2').addClass('active');
				$('.btn-der-2').removeClass('active');
			}

			// grasas
			if(index == grasasIndex && slideIndex == 0 && direction == 'right'){
				$('.btn-izq-3').removeClass('active');
				$('.btn-mano-3').addClass('active');
				$('.btn-der-3').removeClass('active');
			}

			if(index == grasasIndex && slideIndex == 1 && direction == 'left'){
				$('.btn-izq-3').addClass('active');
				$('.btn-mano-3').removeClass('active');
				$('.btn-der-3').removeClass('active');
			}

			if(index == grasasIndex && slideIndex == 1 && direction == 'right'){
				$('.btn-izq-3').removeClass('active');
				$('.btn-mano-3').removeClass('active');
				$('.btn-der-3').addClass('active');
			}

			if(index == grasasIndex && slideIndex == 2 && direction == 'left'){
				$('.btn-izq-3').removeClass('active');
				$('.btn-mano-3').addClass('active');
				$('.btn-der-3').removeClass('active');
			}

			// carbohidratos
			if(index == carbohidratosIndex && slideIndex == 0 && direction == 'right'){
				$('.btn-izq-4').removeClass('active');
				$('.btn-mano-4').addClass('active');
				$('.btn-der-4').removeClass('active');
			}

			if(index == carbohidratosIndex && slideIndex == 1 && direction == 'left'){
				$('.btn-izq-4').addClass('active');
				$('.btn-mano-4').removeClass('active');
				$('.btn-der-4').removeClass('active');
			}

			if(index == carbohidratosIndex && slideIndex == 1 && direction == 'right'){
				$('.btn-izq-4').removeClass('active');
				$('.btn-mano-4').removeClass('active');
				$('.btn-der-4').addClass('active');
			}

			if(index == carbohidratosIndex && slideIndex == 2 && direction == 'left'){
				$('.btn-izq-4').removeClass('active');
				$('.btn-mano-4').addClass('active');
				$('.btn-der-4').removeClass('active');
			}

			// calcio
			if(index == calcioIndex && slideIndex == 0 && direction == 'right'){
				$('.btn-izq-5').removeClass('active');
				$('.btn-mano-5').addClass('active');
				$('.btn-der-5').removeClass('active');
			}

			if(index == calcioIndex && slideIndex == 1 && direction == 'left'){
				$('.btn-izq-5').addClass('active');
				$('.btn-mano-5').removeClass('active');
				$('.btn-der-5').removeClass('active');
			}

			if(index == calcioIndex && slideIndex == 1 && direction == 'right'){
				$('.btn-izq-5').removeClass('active');
				$('.btn-mano-5').removeClass('active');
				$('.btn-der-5').addClass('active');
			}

			if(index == calcioIndex && slideIndex == 2 && direction == 'left'){
				$('.btn-izq-5').removeClass('active');
				$('.btn-mano-5').addClass('active');
				$('.btn-der-5').removeClass('active');
			}

			// dulce
			if(index == dulceIndex && slideIndex == 0 && direction == 'right'){
				$('.btn-izq-6').removeClass('active');
				$('.btn-mano-6').addClass('active');
				$('.btn-der-6').removeClass('active');
			}

			if(index == dulceIndex && slideIndex == 1 && direction == 'left'){
				$('.btn-izq-6').addClass('active');
				$('.btn-mano-6').removeClass('active');
				$('.btn-der-6').removeClass('active');
			}

			if(index == dulceIndex && slideIndex == 1 && direction == 'right'){
				$('.btn-izq-6').removeClass('active');
				$('.btn-mano-6').removeClass('active');
				$('.btn-der-6').addClass('active');
			}

			if(index == dulceIndex && slideIndex == 2 && direction == 'left'){
				$('.btn-izq-6').removeClass('active');
				$('.btn-mano-6').addClass('active');
				$('.btn-der-6').removeClass('active');
			}

			// hidratación
			if(index == hidratacionIndex && slideIndex == 0 && direction == 'right'){
				$('.btn-izq-7').removeClass('active');
				$('.btn-mano-7').addClass('active');
				$('.btn-der-7').removeClass('active');
			}

			if(index == hidratacionIndex && slideIndex == 1 && direction == 'left'){
				$('.btn-izq-7').addClass('active');
				$('.btn-mano-7').removeClass('active');
				$('.btn-der-7').removeClass('active');
			}

			if(index == hidratacionIndex && slideIndex == 1 && direction == 'right'){
				$('.btn-izq-7').removeClass('active');
				$('.btn-mano-7').removeClass('active');
				$('.btn-der-7').addClass('active');
			}

			if(index == hidratacionIndex && slideIndex == 2 && direction == 'left'){
				$('.btn-izq-7').removeClass('active');
				$('.btn-mano-7').addClass('active');
				$('.btn-der-7').removeClass('active');
			}

			// vegetales
			if(index == vegetalesIndex && slideIndex == 0 && direction == 'right'){
				$('.btn-izq-8').removeClass('active');
				$('.btn-mano-8').addClass('active');
				$('.btn-der-8').removeClass('active');
			}

			if(index == vegetalesIndex && slideIndex == 1 && direction == 'left'){
				$('.btn-izq-8').addClass('active');
				$('.btn-mano-8').removeClass('active');
				$('.btn-der-8').removeClass('active');
			}

			if(index == vegetalesIndex && slideIndex == 1 && direction == 'right'){
				$('.btn-izq-8').removeClass('active');
				$('.btn-mano-8').removeClass('active');
				$('.btn-der-8').addClass('active');
			}

			if(index == vegetalesIndex && slideIndex == 2 && direction == 'left'){
				$('.btn-izq-8').removeClass('active');
				$('.btn-mano-8').addClass('active');
				$('.btn-der-8').removeClass('active');
			}
		}
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

// botones de navegación entre slides
// proteínas
$(document).on('click', '.btn-izq-1', function(){
	$.fn.fullpage.moveTo('proteinas', 0);
});

$(document).on('click', '.btn-mano-1', function(){
	$.fn.fullpage.moveTo('proteinas', 1);
});

$(document).on('click', '.btn-der-1', function(){
	$.fn.fullpage.moveTo('proteinas', 2);
});

// frutas
$(document).on('click', '.btn-izq-2', function(){
	$.fn.fullpage.moveTo('frutas', 0);
});

$(document).on('click', '.btn-mano-2', function(){
	$.fn.fullpage.moveTo('frutas', 1);
});

$(document).on('click', '.btn-der-2', function(){
	$.fn.fullpage.moveTo('frutas', 2);
});

// grasas
$(document).on('click', '.btn-izq-3', function(){
	$.fn.fullpage.moveTo('grasas', 0);
});

$(document).on('click', '.btn-mano-3', function(){
	$.fn.fullpage.moveTo('grasas', 1);
});

$(document).on('click', '.btn-der-3', function(){
	$.fn.fullpage.moveTo('grasas', 2);
});

// carbohidratos
$(document).on('click', '.btn-izq-4', function(){
	$.fn.fullpage.moveTo('carbohidratos', 0);
});

$(document).on('click', '.btn-mano-4', function(){
	$.fn.fullpage.moveTo('carbohidratos', 1);
});

$(document).on('click', '.btn-der-4', function(){
	$.fn.fullpage.moveTo('carbohidratos', 2);
});

// calcio
$(document).on('click', '.btn-izq-5', function(){
	$.fn.fullpage.moveTo('calcio', 0);
});

$(document).on('click', '.btn-mano-5', function(){
	$.fn.fullpage.moveTo('calcio', 1);
});

$(document).on('click', '.btn-der-5', function(){
	$.fn.fullpage.moveTo('calcio', 2);
});

// dulce
$(document).on('click', '.btn-izq-6', function(){
	$.fn.fullpage.moveTo('dulce', 0);
});

$(document).on('click', '.btn-mano-6', function(){
	$.fn.fullpage.moveTo('dulce', 1);
});

$(document).on('click', '.btn-der-6', function(){
	$.fn.fullpage.moveTo('dulce', 2);
});

// hidratación
$(document).on('click', '.btn-izq-7', function(){
	$.fn.fullpage.moveTo('hidratacion', 0);
});

$(document).on('click', '.btn-mano-7', function(){
	$.fn.fullpage.moveTo('hidratacion', 1);
});

$(document).on('click', '.btn-der-7', function(){
	$.fn.fullpage.moveTo('hidratacion', 2);
});

// vegetales
$(document).on('click', '.btn-izq-8', function(){
	$.fn.fullpage.moveTo('vegetales', 0);
});

$(document).on('click', '.btn-mano-8', function(){
	$.fn.fullpage.moveTo('vegetales', 1);
});

$(document).on('click', '.btn-der-8', function(){
	$.fn.fullpage.moveTo('vegetales', 2);
});

// agregamos/quitamos clase active cuando se presiona botón
$('.fp-slidesNav-custom > ul > li > button').each(function() { 
	if ( $(this).hasClass('btn-proteinas') ) {
		$(this).click(function () {
			$('.btn-proteinas').removeClass('active');
			$(this).toggleClass('active');
		});
	} else if ( $(this).hasClass('btn-frutas') ) {
		$(this).click(function () {
			$('.btn-frutas').removeClass('active');
			$(this).toggleClass('active');
		});
	} else if ( $(this).hasClass('btn-grasas') ) {
		$(this).click(function () {
			$('.btn-grasas').removeClass('active');
			$(this).toggleClass('active');
		});
	} else if ( $(this).hasClass('btn-carbohidratos') ) {
		$(this).click(function () {
			$('.btn-carbohidratos').removeClass('active');
			$(this).toggleClass('active');
		});
	} else if ( $(this).hasClass('btn-calcio') ) {
		$(this).click(function () {
			$('.btn-calcio').removeClass('active');
			$(this).toggleClass('active');
		});
	} else if ( $(this).hasClass('btn-dulce') ) {
		$(this).click(function () {
			$('.btn-dulce').removeClass('active');
			$(this).toggleClass('active');
		});
	} else if ( $(this).hasClass('btn-hidratacion') ) {
		$(this).click(function () {
			$('.btn-hidratacion').removeClass('active');
			$(this).toggleClass('active');
		});
	} else if ( $(this).hasClass('btn-vegetales') ) {
		$(this).click(function () {
			$('.btn-vegetales').removeClass('active');
			$(this).toggleClass('active');
		});
	}
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