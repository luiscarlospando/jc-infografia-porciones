$(document).ready(function() {
	// fullPage.js
	$('#fullpage').fullpage({
		fadingEffect: true,
		fadingEffectKey: 'anVudG9zY29udGFtb3MuY29tX0toYlptRmthVzVuUldabVpXTjB0eng=',
		// fadingEffectKey: 'aW50ZXJhY3RpdmVzb2x1dGlvbnMuaW5mb190NmhabUZrYVc1blJXWm1aV04wN3BH',
		navigation: true,
		slidesNavigation: true, // activado para sección de instrucciones
		autoScrolling: false, // scrolleo de un toque activado
		dragAndMove: false, // permitimos scrolleo con dedos solamente (desactivado)
		recordHistory: false,
		anchors: ['inicio', 'instrucciones', 'menu', 'proteinas', 'calcio', 'frutas', 'vegetales', 'grasas', 'carbohidratos', 'endulzantes', 'hidratacion', 'conoce-mas'],
		navigationTooltips: ['', '', '', 'Proteínas', 'Calcio', 'Frutas', 'Vegetales', 'Grasas', 'Carbohidratos', 'Endulzantes', 'Hidratación'],
		animateAnchor: true,
		paddingTop: '130px',
		// paddingBottom: '80px',
		scrollOverflow: true,
		controlArrows: false,
		keyboardScrolling: true,
		loopHorizontal: false,
		afterLoad: function(anchorLink, index){
			var loadedSection = $(this);
	
			// mostramos navbar y footer en secciones donde son necesarios
			if (!((index == 1) || (index == 2) || (index == 3))) {
				$('.navbar').addClass('d-flex');
				$('footer').show();
			} else {
				$('.navbar').removeClass('d-flex');
				$('footer').hide();
			}

			// hack que soluciona la falta de animación de elementos al usar beans y flechas del teclado
			if ((index == 4) || (index == 5) || (index == 6) || (index == 7) || (index == 8) || (index == 9) || (index == 10) || (index == 11)) {
				$('.buttons-container').addClass('animated fadeInDown');
				$('.titulo-que-son-mobile').addClass('animated fadeInDown');
				$('.img-que-son').addClass('animated fadeInDown');
				$('.info-que-son').addClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').addClass('animated fadeInUp');

				$('.titulo-porciones-mobile').addClass('animated fadeInDown');
				$('.img-porciones').addClass('animated fadeInDown');
				$('.info-porciones').addClass('animated fadeInUp');

				$('.titulo-recomendaciones').addClass('animated fadeInDown');

				$('.elemento-recomendaciones-1').addClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').addClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').addClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').addClass('animated fadeInRight');
			}

			// ocultamos el footer de la última página
			if (index == 12) {
				$('footer').hide();
			} 
		},
		afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
			var loadedSlide = $(this);

			/// inicio de animaciones ///
			// instrucciones (slide 1)
			if (anchorLink == 'instrucciones' && slideIndex == 0) {
				$('#titulo-instrucciones-1').addClass('animated fadeInUp');

				$('#img-instrucciones-1').addClass('animated fadeIn');

				setTimeout(function () {
					$('#btn-anterior-1').addClass('animated fadeInLeft');
					$('#btn-siguiente-1').addClass('animated fadeInRight');
					$('#texto-instrucciones-1').addClass('animated fadeInDown');
				}, 1000);

				setTimeout(function () {
					$('#cerrar-instrucciones').addClass('animated fadeIn');
				}, 2000);
			}
			// instrucciones (slide 2)
			if (anchorLink == 'instrucciones' && slideIndex == 1) {
				$('#titulo-instrucciones-2').addClass('animated fadeInUp');

				setTimeout(function () {
					$('#texto-instrucciones-2-1-a').addClass('animated fadeInDown');
					$('#texto-instrucciones-2-1-b').addClass('animated fadeInDown');
				}, 500);

				setTimeout(function () {
					$('#texto-instrucciones-2-3').addClass('animated fadeInDown');
				}, 1000);

				setTimeout(function () {
					$('#texto-instrucciones-2-2').addClass('animated fadeInUp');
				}, 1500);

				setTimeout(function () {
					$('#cerrar-instrucciones').addClass('animated fadeIn');
					$('#btn-anterior-2').addClass('animated fadeInLeft');
					$('#btn-siguiente-2').addClass('animated fadeInRight');
				}, 1500);
			}

			// menú
			if (anchorLink == 'menu') {
				$('#titulo-menu').addClass('animated fadeInUp');

				setTimeout(function () {
					$('#elemento-menu-1').addClass('animated jackInTheBox');
				}, 500);

				setTimeout(function () {
					$('#elemento-menu-2').addClass('animated jackInTheBox');
				}, 700);

				setTimeout(function () {
					$('#elemento-menu-3').addClass('animated jackInTheBox');
				}, 1000);

				setTimeout(function () {
					$('#elemento-menu-4').addClass('animated jackInTheBox');
				}, 1300);

				setTimeout(function () {
					$('#elemento-menu-5').addClass('animated jackInTheBox');
				}, 1600);

				setTimeout(function () {
					$('#elemento-menu-6').addClass('animated jackInTheBox');
				}, 1900);

				setTimeout(function () {
					$('#elemento-menu-7').addClass('animated jackInTheBox');
				}, 2200);

				setTimeout(function () {
					$('#elemento-menu-8').addClass('animated jackInTheBox');
				}, 2500);

				setTimeout(function () {
					$('#conoce-mas-menu').addClass('animated fadeInUp');
				}, 2800);
			}

			// animaciones (slide 1)
			if (((anchorLink == 'proteinas' || anchorLink == 'calcio' || anchorLink == 'frutas' || anchorLink == 'vegetales' || anchorLink == 'grasas' || anchorLink == 'carbohidratos' || anchorLink == 'endulzantes' || anchorLink == 'hidratacion') && slideIndex == 0)) {
				$('.buttons-container').addClass('animated fadeInDown');
				$('.titulo-que-son-mobile').addClass('animated fadeInDown');
				$('.img-que-son').addClass('animated fadeInDown');
				$('.info-que-son').addClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').addClass('animated fadeInUp');
			}
			// animaciones (slide 2)
			if (((anchorLink == 'proteinas' || anchorLink == 'calcio' || anchorLink == 'frutas' || anchorLink == 'vegetales' || anchorLink == 'grasas' || anchorLink == 'carbohidratos' || anchorLink == 'endulzantes' || anchorLink == 'hidratacion') && slideIndex == 1)) {
				$('.buttons-container').addClass('animated fadeInDown');
				$('.titulo-porciones-mobile').addClass('animated fadeInDown');
				$('.img-porciones').addClass('animated fadeInDown');
				$('.info-porciones').addClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').addClass('animated fadeInUp');
			}
			// animaciones (slide 3)
			if (((anchorLink == 'proteinas' || anchorLink == 'calcio' || anchorLink == 'frutas' || anchorLink == 'vegetales' || anchorLink == 'grasas' || anchorLink == 'carbohidratos' || anchorLink == 'endulzantes' || anchorLink == 'hidratacion') && slideIndex == 2)) {
				$('.buttons-container').addClass('animated fadeInDown');
				$('.titulo-recomendaciones').addClass('animated fadeInDown');
				$('.mensaje-teclado-contenedor').addClass('animated fadeInUp');

				setTimeout(function () {
					$('.elemento-recomendaciones-1').addClass('animated fadeInLeft');
				}, 500);

				setTimeout(function () {
					$('.elemento-recomendaciones-2').addClass('animated fadeInRight');
				}, 700);

				setTimeout(function () {
					$('.elemento-recomendaciones-3').addClass('animated fadeInLeft');
				}, 1000);

				setTimeout(function () {
					$('.elemento-recomendaciones-4').addClass('animated fadeInRight');
				}, 1300);
			}
			/// fin de animaciones ///

			// proteínas
			if (anchorLink == 'proteinas' || anchorLink == 'calcio' || anchorLink == 'frutas' || anchorLink == 'vegetales' || anchorLink == 'grasas' || anchorLink == 'carbohidratos' || anchorLink == 'endulzantes' || anchorLink == 'hidratacion') {
				setTimeout(function () {
					$('.mensaje-teclado').addClass('mensaje-teclado-oculto');
				}, 3000);

				setTimeout(function () {
					$('.mensaje-teclado-contenedor').addClass('d-none');
				}, 3500);
			}

			if (anchorLink == 'proteinas' && slideIndex == 0) {
				$('.btn-izq-1').addClass('active');
				$('.btn-mano-1').removeClass('active');
				$('.btn-der-1').removeClass('active');
			}

			if (anchorLink == 'proteinas' && slideIndex == 1) {
				$('.btn-izq-1').removeClass('active');
				$('.btn-mano-1').addClass('active');
				$('.btn-der-1').removeClass('active');
			}

			if (anchorLink == 'proteinas' && slideIndex == 2) {
				$('.btn-izq-1').removeClass('active');
				$('.btn-mano-1').removeClass('active');
				$('.btn-der-1').addClass('active');
			}

			// frutas
			if (anchorLink == 'frutas' && slideIndex == 0) {
				$('.btn-izq-2').addClass('active');
				$('.btn-mano-2').removeClass('active');
				$('.btn-der-2').removeClass('active');
			}

			if (anchorLink == 'frutas' && slideIndex == 1) {
				$('.btn-izq-2').removeClass('active');
				$('.btn-mano-2').addClass('active');
				$('.btn-der-2').removeClass('active');
			}

			if (anchorLink == 'frutas' && slideIndex == 2) {
				$('.btn-izq-2').removeClass('active');
				$('.btn-mano-2').removeClass('active');
				$('.btn-der-2').addClass('active');
			}

			// grasas
			if (anchorLink == 'grasas' && slideIndex == 0) {
				$('.btn-izq-3').addClass('active');
				$('.btn-mano-3').removeClass('active');
				$('.btn-der-3').removeClass('active');
			}

			if (anchorLink == 'grasas' && slideIndex == 1) {
				$('.btn-izq-3').removeClass('active');
				$('.btn-mano-3').addClass('active');
				$('.btn-der-3').removeClass('active');
			}

			if (anchorLink == 'grasas' && slideIndex == 2) {
				$('.btn-izq-3').removeClass('active');
				$('.btn-mano-3').removeClass('active');
				$('.btn-der-3').addClass('active');
			}

			// carbohidratos
			if (anchorLink == 'carbohidratos' && slideIndex == 0) {
				$('.btn-izq-4').addClass('active');
				$('.btn-mano-4').removeClass('active');
				$('.btn-der-4').removeClass('active');
			}

			if (anchorLink == 'carbohidratos' && slideIndex == 1) {
				$('.btn-izq-4').removeClass('active');
				$('.btn-mano-4').addClass('active');
				$('.btn-der-4').removeClass('active');
			}

			if (anchorLink == 'carbohidratos' && slideIndex == 2) {
				$('.btn-izq-4').removeClass('active');
				$('.btn-mano-4').removeClass('active');
				$('.btn-der-4').addClass('active');
			}

			// calcio
			if (anchorLink == 'calcio' && slideIndex == 0) {
				$('.btn-izq-5').addClass('active');
				$('.btn-mano-5').removeClass('active');
				$('.btn-der-5').removeClass('active');
			}

			if (anchorLink == 'calcio' && slideIndex == 1) {
				$('.btn-izq-5').removeClass('active');
				$('.btn-mano-5').addClass('active');
				$('.btn-der-5').removeClass('active');
			}

			if (anchorLink == 'calcio' && slideIndex == 2) {
				$('.btn-izq-5').removeClass('active');
				$('.btn-mano-5').removeClass('active');
				$('.btn-der-5').addClass('active');
			}

			// endulzantes
			if (anchorLink == 'endulzantes' && slideIndex == 0) {
				$('.btn-izq-6').addClass('active');
				$('.btn-mano-6').removeClass('active');
				$('.btn-der-6').removeClass('active');
			}

			if (anchorLink == 'endulzantes' && slideIndex == 1) {
				$('.btn-izq-6').removeClass('active');
				$('.btn-mano-6').addClass('active');
				$('.btn-der-6').removeClass('active');
			}

			if (anchorLink == 'endulzantes' && slideIndex == 2) {
				$('.btn-izq-6').removeClass('active');
				$('.btn-mano-6').removeClass('active');
				$('.btn-der-6').addClass('active');
			}

			// hidratación
			if (anchorLink == 'hidratacion' && slideIndex == 0) {
				$('.btn-izq-7').addClass('active');
				$('.btn-mano-7').removeClass('active');
				$('.btn-der-7').removeClass('active');
			}

			if (anchorLink == 'hidratacion' && slideIndex == 1) {
				$('.btn-izq-7').removeClass('active');
				$('.btn-mano-7').addClass('active');
				$('.btn-der-7').removeClass('active');
			}

			if (anchorLink == 'hidratacion' && slideIndex == 2) {
				$('.btn-izq-7').removeClass('active');
				$('.btn-mano-7').removeClass('active');
				$('.btn-der-7').addClass('active');
			}

			// vegetales
			if (anchorLink == 'vegetales' && slideIndex == 0) {
				$('.btn-izq-8').addClass('active');
				$('.btn-mano-8').removeClass('active');
				$('.btn-der-8').removeClass('active');
			}

			if (anchorLink == 'vegetales' && slideIndex == 1) {
				$('.btn-izq-8').removeClass('active');
				$('.btn-mano-8').addClass('active');
				$('.btn-der-8').removeClass('active');
			}

			if (anchorLink == 'vegetales' && slideIndex == 2) {
				$('.btn-izq-8').removeClass('active');
				$('.btn-mano-8').removeClass('active');
				$('.btn-der-8').addClass('active');
			}
		},
		onLeave: function (index, nextIndex, direction) {
			var leavingSection = $(this);

			// resetamos clases al visitar cada sección para que animaciones se vuelvan a reproducir
			if ((index == 4 && nextIndex !== 4) || (index == 5 && nextIndex !== 5) || (index == 6 && nextIndex !== 6) || (index == 7 && nextIndex !== 7) || (index == 8 && nextIndex !== 8) || (index == 9 && nextIndex !== 9) || (index == 10 && nextIndex !== 10) || (index == 11 && nextIndex !== 11)) {
				$('.buttons-container').removeClass('animated fadeInDown');
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}
		},
		onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
			var leavingSlide = $(this);
	
			// agregamos/quitamos clase active cuando se dezliza slide (touch)
			var proteinasIndex = 4;
			var frutasIndex = 6;
			var grasasIndex = 8;
			var carbohidratosIndex = 9;
			var calcioIndex = 5;
			var endulzantesIndex = 10;
			var hidratacionIndex = 11;
			var vegetalesIndex = 7;
			
			// proteínas
			if(index == proteinasIndex && slideIndex == 0 && nextSlideIndex == 1){
				$('.btn-izq-1').removeClass('active');
				$('.btn-mano-1').addClass('active');
				$('.btn-der-1').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == proteinasIndex && slideIndex == 1 && nextSlideIndex == 0){
				$('.btn-izq-1').addClass('active');
				$('.btn-mano-1').removeClass('active');
				$('.btn-der-1').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == proteinasIndex && slideIndex == 1 && nextSlideIndex == 2){
				$('.btn-izq-1').removeClass('active');
				$('.btn-mano-1').removeClass('active');
				$('.btn-der-1').addClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == proteinasIndex && slideIndex == 2 && nextSlideIndex == 1){
				$('.btn-izq-1').removeClass('active');
				$('.btn-mano-1').addClass('active');
				$('.btn-der-1').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			// frutas
			if (index == frutasIndex && slideIndex == 0 && nextSlideIndex == 1){
				$('.btn-izq-2').removeClass('active');
				$('.btn-mano-2').addClass('active');
				$('.btn-der-2').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == frutasIndex && slideIndex == 1 && nextSlideIndex == 0){
				$('.btn-izq-2').addClass('active');
				$('.btn-mano-2').removeClass('active');
				$('.btn-der-2').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == frutasIndex && slideIndex == 1 && nextSlideIndex == 2){
				$('.btn-izq-2').removeClass('active');
				$('.btn-mano-2').removeClass('active');
				$('.btn-der-2').addClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == frutasIndex && slideIndex == 2 && nextSlideIndex == 1){
				$('.btn-izq-2').removeClass('active');
				$('.btn-mano-2').addClass('active');
				$('.btn-der-2').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			// grasas
			if (index == grasasIndex && slideIndex == 0 && nextSlideIndex == 1){
				$('.btn-izq-3').removeClass('active');
				$('.btn-mano-3').addClass('active');
				$('.btn-der-3').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == grasasIndex && slideIndex == 1 && nextSlideIndex == 0){
				$('.btn-izq-3').addClass('active');
				$('.btn-mano-3').removeClass('active');
				$('.btn-der-3').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == grasasIndex && slideIndex == 1 && nextSlideIndex == 2){
				$('.btn-izq-3').removeClass('active');
				$('.btn-mano-3').removeClass('active');
				$('.btn-der-3').addClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == grasasIndex && slideIndex == 2 && nextSlideIndex == 1){
				$('.btn-izq-3').removeClass('active');
				$('.btn-mano-3').addClass('active');
				$('.btn-der-3').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			// carbohidratos
			if (index == carbohidratosIndex && slideIndex == 0 && nextSlideIndex == 1){
				$('.btn-izq-4').removeClass('active');
				$('.btn-mano-4').addClass('active');
				$('.btn-der-4').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == carbohidratosIndex && slideIndex == 1 && nextSlideIndex == 0){
				$('.btn-izq-4').addClass('active');
				$('.btn-mano-4').removeClass('active');
				$('.btn-der-4').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == carbohidratosIndex && slideIndex == 1 && nextSlideIndex == 2){
				$('.btn-izq-4').removeClass('active');
				$('.btn-mano-4').removeClass('active');
				$('.btn-der-4').addClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == carbohidratosIndex && slideIndex == 2 && nextSlideIndex == 1){
				$('.btn-izq-4').removeClass('active');
				$('.btn-mano-4').addClass('active');
				$('.btn-der-4').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			// calcio
			if (index == calcioIndex && slideIndex == 0 && nextSlideIndex == 1){
				$('.btn-izq-5').removeClass('active');
				$('.btn-mano-5').addClass('active');
				$('.btn-der-5').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == calcioIndex && slideIndex == 1 && nextSlideIndex == 0){
				$('.btn-izq-5').addClass('active');
				$('.btn-mano-5').removeClass('active');
				$('.btn-der-5').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == calcioIndex && slideIndex == 1 && nextSlideIndex == 2){
				$('.btn-izq-5').removeClass('active');
				$('.btn-mano-5').removeClass('active');
				$('.btn-der-5').addClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == calcioIndex && slideIndex == 2 && nextSlideIndex == 1){
				$('.btn-izq-5').removeClass('active');
				$('.btn-mano-5').addClass('active');
				$('.btn-der-5').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			// endulzantes
			if (index == endulzantesIndex && slideIndex == 0 && nextSlideIndex == 1){
				$('.btn-izq-6').removeClass('active');
				$('.btn-mano-6').addClass('active');
				$('.btn-der-6').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == endulzantesIndex && slideIndex == 1 && nextSlideIndex == 0){
				$('.btn-izq-6').addClass('active');
				$('.btn-mano-6').removeClass('active');
				$('.btn-der-6').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == endulzantesIndex && slideIndex == 1 && nextSlideIndex == 2){
				$('.btn-izq-6').removeClass('active');
				$('.btn-mano-6').removeClass('active');
				$('.btn-der-6').addClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == endulzantesIndex && slideIndex == 2 && nextSlideIndex == 1){
				$('.btn-izq-6').removeClass('active');
				$('.btn-mano-6').addClass('active');
				$('.btn-der-6').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			// hidratación
			if (index == hidratacionIndex && slideIndex == 0 && nextSlideIndex == 1){
				$('.btn-izq-7').removeClass('active');
				$('.btn-mano-7').addClass('active');
				$('.btn-der-7').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == hidratacionIndex && slideIndex == 1 && nextSlideIndex == 0){
				$('.btn-izq-7').addClass('active');
				$('.btn-mano-7').removeClass('active');
				$('.btn-der-7').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == hidratacionIndex && slideIndex == 1 && nextSlideIndex == 2){
				$('.btn-izq-7').removeClass('active');
				$('.btn-mano-7').removeClass('active');
				$('.btn-der-7').addClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == hidratacionIndex && slideIndex == 2 && nextSlideIndex == 1){
				$('.btn-izq-7').removeClass('active');
				$('.btn-mano-7').addClass('active');
				$('.btn-der-7').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			// vegetales
			if (index == vegetalesIndex && slideIndex == 0 && nextSlideIndex == 1){
				$('.btn-izq-8').removeClass('active');
				$('.btn-mano-8').addClass('active');
				$('.btn-der-8').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == vegetalesIndex && slideIndex == 1 && nextSlideIndex == 0){
				$('.btn-izq-8').addClass('active');
				$('.btn-mano-8').removeClass('active');
				$('.btn-der-8').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == vegetalesIndex && slideIndex == 1 && nextSlideIndex == 2){
				$('.btn-izq-8').removeClass('active');
				$('.btn-mano-8').removeClass('active');
				$('.btn-der-8').addClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}

			if (index == vegetalesIndex && slideIndex == 2 && nextSlideIndex == 1){
				$('.btn-izq-8').removeClass('active');
				$('.btn-mano-8').addClass('active');
				$('.btn-der-8').removeClass('active');

				// reanimación de elementos
				$('.titulo-que-son-mobile').removeClass('animated fadeInDown');
				$('.img-que-son').removeClass('animated fadeInDown');
				$('.info-que-son').removeClass('animated fadeInUp');
				$('.mensaje-teclado-contenedor').removeClass('animated fadeInUp');
				$('.titulo-porciones-mobile').removeClass('animated fadeInDown');
				$('.img-porciones').removeClass('animated fadeInDown');
				$('.info-porciones').removeClass('animated fadeInUp');
				$('.titulo-recomendaciones').removeClass('animated fadeInDown');
				$('.elemento-recomendaciones-1').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-2').removeClass('animated fadeInRight');
				$('.elemento-recomendaciones-3').removeClass('animated fadeInLeft');
				$('.elemento-recomendaciones-4').removeClass('animated fadeInRight');
			}
		}
	});

	// deshabilitado de scroll con mousewheel y con touch gestures
	$.fn.fullpage.setMouseWheelScrolling(false);
	$.fn.fullpage.setAllowScrolling(false);

	// animaciones de la portada
	setTimeout(function () {
		$('#mano').show().addClass('animated fadeIn');
	}, 800);

	setTimeout(function () {
		$('#circulo').show().addClass('animated rollIn');
		$('#btn-comenzar').show().addClass('animated fadeInDown');
		$('#btn-saltar').show().addClass('animated fadeInUp');
	}, 1000);
});

// reseteamos estado de los botones de navegación entre slides al usar menú de navegación principal
// desktop
$('.prot').on('click', function() {
	$('.btn-izq-1').addClass('active');
	$('.btn-mano-1').removeClass('active');
	$('.btn-der-1').removeClass('active');
});

$('.frut').on('click', function() {
	$('.btn-izq-2').addClass('active');
	$('.btn-mano-2').removeClass('active');
	$('.btn-der-2').removeClass('active');
});

$('.gras').on('click', function() {
	$('.btn-izq-3').addClass('active');
	$('.btn-mano-3').removeClass('active');
	$('.btn-der-3').removeClass('active');
});

$('.carb').on('click', function() {
	$('.btn-izq-4').addClass('active');
	$('.btn-mano-4').removeClass('active');
	$('.btn-der-4').removeClass('active');
});

$('.cal').on('click', function() {
	$('.btn-izq-5').addClass('active');
	$('.btn-mano-5').removeClass('active');
	$('.btn-der-5').removeClass('active');
});

$('.dul').on('click', function() {
	$('.btn-izq-6').addClass('active');
	$('.btn-mano-6').removeClass('active');
	$('.btn-der-6').removeClass('active');
});

$('.hid').on('click', function() {
	$('.btn-izq-7').addClass('active');
	$('.btn-mano-7').removeClass('active');
	$('.btn-der-7').removeClass('active');
});

$('.veg').on('click', function() {
	$('.btn-izq-8').addClass('active');
	$('.btn-mano-8').removeClass('active');
	$('.btn-der-8').removeClass('active');
});

// mobile
$('.prot-dd').on('click', function() {
	$('.btn-izq-1').addClass('active');
	$('.btn-mano-1').removeClass('active');
	$('.btn-der-1').removeClass('active');
});

$('.frut-dd').on('click', function() {
	$('.btn-izq-2').addClass('active');
	$('.btn-mano-2').removeClass('active');
	$('.btn-der-2').removeClass('active');
});

$('.gras-dd').on('click', function() {
	$('.btn-izq-3').addClass('active');
	$('.btn-mano-3').removeClass('active');
	$('.btn-der-3').removeClass('active');
});

$('.carb-dd').on('click', function() {
	$('.btn-izq-4').addClass('active');
	$('.btn-mano-4').removeClass('active');
	$('.btn-der-4').removeClass('active');
});

$('.cal-dd').on('click', function() {
	$('.btn-izq-5').addClass('active');
	$('.btn-mano-5').removeClass('active');
	$('.btn-der-5').removeClass('active');
});

$('.dul-dd').on('click', function() {
	$('.btn-izq-6').addClass('active');
	$('.btn-mano-6').removeClass('active');
	$('.btn-der-6').removeClass('active');
});

$('.hid-dd').on('click', function() {
	$('.btn-izq-7').addClass('active');
	$('.btn-mano-7').removeClass('active');
	$('.btn-der-7').removeClass('active');
});

$('.veg-dd').on('click', function() {
	$('.btn-izq-8').addClass('active');
	$('.btn-mano-8').removeClass('active');
	$('.btn-der-8').removeClass('active');
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

// endulzantes
$(document).on('click', '.btn-izq-6', function(){
	$.fn.fullpage.moveTo('endulzantes', 0);
});

$(document).on('click', '.btn-mano-6', function(){
	$.fn.fullpage.moveTo('endulzantes', 1);
});

$(document).on('click', '.btn-der-6', function(){
	$.fn.fullpage.moveTo('endulzantes', 2);
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
	} else if ( $(this).hasClass('btn-endulzantes') ) {
		$(this).click(function () {
			$('.btn-endulzantes').removeClass('active');
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

// navbar cerrado al hacer click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// cerrar mensaje de actualización de navegadores obsoletos
$("#btnCloseUpdateBrowser").click(function(){
    $('#outdated').hide();
});

// inicialización de tooltips
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});