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
	var index = 0;
	var total = $(".media").length;

	$(".animar").click(function () {
		$(".media").eq(index).addClass("current animated fadeInUp");
		index = (index + 1) % total;
	});
});