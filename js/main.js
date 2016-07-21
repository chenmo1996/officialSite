requirejs.config({
	paths: {
		jquery: 'https://cdn.bootcss.com/jquery/3.1.0/jquery.min'
	}
});

requirejs(["jquery"], function($) {
	/* body... */
	$(".test").css('background-color', 'red');
})