$("#works .work_view").on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	var me = this;
	var slideNum = $(me).data("slide");
	var $works = $("#works .works-details");
	var $worksNav = $("#works .fp-slidesNav");
	var $worksCtn = $(".worksCtn");
	console.log(typeof(slideNum));
	// console.log("click");
	// 先滑到指定位置
	//在同时降低透明度和大小
	//接着消失 使用display none
	// 将z-index降低为-1
	//出现背景的展示页面
	$.fn.fullpage.silentMoveTo('works_page', slideNum);
	// var dfd = $.Deferred;
	// dfd.done(function() {
	// 	/* body... */
	//
	// });
	// $worksCtn.animate({
	//    opacity: 0.25,
	// }, 1000, function() {
	//    // Animation complete.
	//    $works.css('visibility', 'visible');
	//    $worksNav.css('visibility', 'visible');
	// });
	$worksCtn.css({
		"transform": 'scale3d(0.5,0.5,0.5)',
		"opacity": '0',
	});
	var timer = setTimeout(function(argument) {
		/* body... */
		$works.css('visibility', 'visible');
		$worksNav.css('visibility', 'visible');
	}, 300);


});

function changePage(e) {
	e.preventDefault();
	/* Act on the event */
	var me = this;
	var slideNum = $(me).data("slide");
	var $works = $("#works .works-details");
	var $worksNav = $("#works .fp-slidesNav");
	console.log(typeof(slideNum));
	// console.log("click");
	// 先滑到指定位置
	//在同时降低透明度和大小
	//接着消失 使用display none
	// 将z-index降低为-1
	//出现背景的展示页面
	$.fn.fullpage.silentMoveTo('works_page', slideNum);
	var dtd = $.Deferred;
	dtd.then(function() {
		/* body... */
		$works.css('visibility', 'visible');
		$worksNav.css('visibility', 'visible');
	})

}