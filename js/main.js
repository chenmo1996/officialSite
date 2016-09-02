;
//to make console more insteresting
console.log('%c联创团队Web组期待你的加入！', 'background: #fe921f; color: #ffffff; display: inline-block; font-size: 12px; font-weight: bold; line-height: 12px; letter-spacing: 1px; margin: 0 0 30px; padding: 10px 15px 8px; text-transform: uppercase;');
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
//to custom some settings

//to set the resize
$(window).resize(function() {
	console.log("here");
	drawCircle();
	$("#navbar_btn").mouseover(function() {
		navbar_draw();
	});
	$("#main_body").move_bg();
	// var $event_canvas = $("#event-can"),
	$screenW = $(window).width();
	$screenH = $(window).height();
	$("#events #event-years #yearLabels .yearLabel").remove();
	drawYears();
	// var $w = $(window).width();
	// if ($w <= 650) {
	// 	$("body").css({
	// 		"min-width": "650px",
	// 		"width": '650px',
	// 		"overflow": 'hidden',
	// 	});
	// } else {
	// 	$("body").css('width', '100%');
	// }
});
//创建和初始化地图函数：
function initMap() {
	createMap(); //创建地图
	setMapEvent(); //设置地图事件
	addMapControl(); //向地图添加控件
	addMarker(); //向地图中添加marker
}

//创建地图函数：
function createMap() {
	var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
	var point = new BMap.Point(114.437217, 30.515062); //定义一个中心点坐标
	map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
	window.map = map; //将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent() {
	map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
	map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
	map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
	map.enableKeyboard(); //启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl() {
	//向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({
		anchor: BMAP_ANCHOR_TOP_LEFT,
		type: BMAP_NAVIGATION_CONTROL_LARGE
	});
	map.addControl(ctrl_nav);
	//向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({
		anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
		isOpen: 0
	});
	map.addControl(ctrl_ove);
	//向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({
		anchor: BMAP_ANCHOR_BOTTOM_LEFT
	});
	map.addControl(ctrl_sca);
}

//标注点数组
var markerArr = [{
	title: "亮胜楼",
	content: "华中科技大学启明学院亮胜楼8楼",
	point: "114.437334|30.515186",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}];
//创建marker
function addMarker() {
	for (var i = 0; i < markerArr.length; i++) {
		var json = markerArr[i];
		var p0 = json.point.split("|")[0];
		var p1 = json.point.split("|")[1];
		var point = new BMap.Point(p0, p1);
		var iconImg = createIcon(json.icon);
		var marker = new BMap.Marker(point, {
			icon: iconImg
		});
		var iw = createInfoWindow(i);
		var label = new BMap.Label(json.title, {
			"offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
		});
		marker.setLabel(label);
		map.addOverlay(marker);
		label.setStyle({
			borderColor: "#808080",
			color: "#333",
			cursor: "pointer"
		});

		(function() {
			var index = i;
			var _iw = createInfoWindow(i);
			var _marker = marker;
			_marker.addEventListener("click", function() {
				this.openInfoWindow(_iw);
			});
			_iw.addEventListener("open", function() {
				_marker.getLabel().hide();
			})
			_iw.addEventListener("close", function() {
				_marker.getLabel().show();
			})
			label.addEventListener("click", function() {
				_marker.openInfoWindow(_iw);
			})
			if (!!json.isOpen) {
				label.hide();
				_marker.openInfoWindow(_iw);
			}
		})()
	}
}
//创建InfoWindow
function createInfoWindow(i) {
	var json = markerArr[i];
	var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
	return iw;
}
//创建一个Icon
function createIcon(json) {
	var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w, json.h), {
		imageOffset: new BMap.Size(-json.l, -json.t),
		infoWindowOffset: new BMap.Size(json.lb + 5, 1),
		offset: new BMap.Size(json.x, json.h)
	})
	return icon;
}

initMap(); //创建和初始化地图