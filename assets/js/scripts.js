$(document).ready(function() {
	// fullPage.js
	$('#fullpage').fullpage({
		navigation: true,
		showActiveTooltip: true,
		paddingTop: '50px',
		paddingBottom: '50px',
		recordHistory: false,
		anchors: ['pagina-1', 'pagina-2', 'pagina-3','pagina-4', 'pagina-5'],
		menu: '.main-nav ul',
		fixedElements: '.header, .footer',
		paddingTop: '30px',
		paddingBottom: '55px',
		scrollOverflow: true
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