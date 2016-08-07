;
//to set the rem
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (clientWidth >= 640) {
				// docEl.style.fontSize = '100px';
				docEl.style.fontSize = clientWidth / 19 + 'px';
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
			}
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

//to make the bg move
(function($) {
	/* body... */
	$.fn.move_bg = function(options) {
		/* body... */
		var opts = $.extend({}, $.fn.move_bg.defaults, options);
		return this.each(function(index, el) {
			var $mbody = $(opts.target);
			$mbody.mousemove(function(e) {
				/* Act on the event */
				var $w = $(window).width(),
					$h = $(window).height(),
					rateX = (e.pageX / $w) * opts.bigger,
					rateY = (e.pageY / $h) * opts.bigger;
				// console.log(rateX);
				$mbody.css('background-position', rateX + '% ' + rateY + '%');

			});
		});
	}

	$.fn.move_bg.defaults = {
		bigger: 40,
		target: "#main_body",
	}


})(jQuery);

$(window).resize(function() {
	drawCircle();
	$("#navbar_btn").mouseover(function() {
		navbar_draw();
	});
	$("#main_body").move_bg();
});