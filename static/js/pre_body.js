$('.hover-block').hover(
    function() {
        explodeLetter($(this).parents('section').attr('id'), $(this).data('letter'), $(this).data('color'));
    },
    function() {
        implodeLetter($(this).parents('section').attr('id'), $(this).data('letter'), $(this).data('color'));
    }
);
//init logo
introStuff();



//for the logo
function explodeLetter(parentID, letter, fillColor) {
    $('#' + parentID + ' .word-unique .letter.' + letter).find('rect').each(function() {
        $(this).css({
            'fill': fillColor,
            '-webkit-transform': 'translate3d(' + randomIntFromInterval(-250, 250) + 'px, ' + randomIntFromInterval(-250, 250) + 'px, 0)',
            '-moz-transform': 'translate3d(' + randomIntFromInterval(-250, 250) + 'px, ' + randomIntFromInterval(-250, 250) + 'px, 0)',
            '-ms-transform': 'translate3d(' + randomIntFromInterval(-250, 250) + 'px, ' + randomIntFromInterval(-250, 250) + 'px, 0)',
            '-o-transform': 'translate3d(' + randomIntFromInterval(-250, 250) + 'px, ' + randomIntFromInterval(-250, 250) + 'px, 0)',
            'transform': 'translate3d(' + randomIntFromInterval(-250, 250) + 'px, ' + randomIntFromInterval(-250, 250) + 'px, 0)'
        });
    });
}

function implodeLetter(parentID, letter) {
    $('#' + parentID + ' .word-unique .letter.' + letter).find('rect').css({
        'fill': '#fff',
        '-webkit-transform': 'translate3d(0, 0, 0)',
        '-moz-transform': 'translate3d(0, 0, 0)',
        '-ms-transform': 'translate3d(0, 0, 0)',
        '-o-transform': 'translate3d(0, 0, 0)',
        'transform': 'translate3d(0, 0, 0)'
    });
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function introStuff() {

    setTimeout(function() {

        $('.hover-block.u-1').trigger("mouseover");
        setTimeout(function() {
            $('.hover-block.u-1').trigger("mouseout");
        }, 700);


        $('.hover-block.n').trigger("mouseover");
        setTimeout(function() {
            $('.hover-block.n').trigger("mouseout");
        }, 700);

        $('.hover-block.i').trigger("mouseover");
        setTimeout(function() {
            $('.hover-block.i').trigger("mouseout");
        }, 700);


        $('.hover-block.q').trigger("mouseover");
        setTimeout(function() {
            $('.hover-block.q').trigger("mouseout");
        }, 700);

        $('.hover-block.u-2').trigger("mouseover");
        setTimeout(function() {
            $('.hover-block.u-2').trigger("mouseout");
        }, 700);

        $('.hover-block.e').trigger("mouseover");
        setTimeout(function() {
            $('.hover-block.e').trigger("mouseout");
        }, 700);

        // $('.hover-block.l').trigger("mouseover");
        // setTimeout(function() {
        //     $('.hover-block.l').trigger("mouseout");
        // }, 700);

    }, 500);
};

//for the loader
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        //AMD
        define(factory);
    } else if (typeof exports === 'object') {
        //Node, CommonJS之类的
        module.exports = factory();
    } else {
        //浏览器全局变量(root 即 window)
        root.resLoader = factory(root);
    }
}(this, function() {
    var isFunc = function(f) {
        return typeof f === 'function';
    };
    //构造器函数
    function resLoader(config) {
        this.option = {
            resourceType: 'image', //资源类型，默认为图片
            baseUrl: './', //基准url
            resources: [], //资源路径数组
            onStart: null, //加载开始回调函数，传入参数total
            onProgress: null, //正在加载回调函数，传入参数currentIndex, total
            onComplete: null //加载完毕回调函数，传入参数total
        }
        if (config) {
            for (i in config) {
                this.option[i] = config[i];
            }
        } else {
            alert('参数错误！');
            return;
        }
        this.status = 0; //加载器的状态，0：未启动   1：正在加载   2：加载完毕
        this.total = this.option.resources.length || 0; //资源总数
        this.currentIndex = 0; //当前正在加载的资源索引
    };

    resLoader.prototype.start = function() {
        this.status = 1;
        var _this = this;
        var baseUrl = this.option.baseUrl;
        for (var i = 0, l = this.option.resources.length; i < l; i++) {
            var r = this.option.resources[i],
                url = '';
            if (r.indexOf('http://') === 0 || r.indexOf('https://') === 0) {
                url = r;
            } else {
                url = baseUrl + r;
            }

            var image = new Image();
            image.onload = function() {
                _this.loaded();
            };
            image.onerror = function() {
                _this.loaded();
            };
            image.src = url;
        }
        if (isFunc(this.option.onStart)) {
            this.option.onStart(this.total);
        }
    }

    resLoader.prototype.loaded = function() {
        if (isFunc(this.option.onProgress)) {
            this.option.onProgress(++this.currentIndex, this.total);
        }
        //加载完毕
        if (this.currentIndex === this.total) {
            if (isFunc(this.option.onComplete)) {
                this.option.onComplete(this.total);
            }
        }
    }

    //暴露公共方法
    return resLoader;
}));
// 'js/jquery.fullPage.js',
// 'js/main.js',
// 'js/navbar.js',
//init progress bar
//        // 'static/src/pic/homepage/android-Assistor.png',
// 'static/src/pic/homepage/come-Assistor.png',
// 'static/src/pic/homepage/Design-Assistor.png',
// 'static/src/pic/homepage/iOS-Assistor.png',
// 'static/src/pic/homepage/game-Assistor.png',
// 'static/src/pic/homepage/Lab-Assistor.png',
// 'static/src/pic/homepage/PM-Assistor.png',
// 'static/src/pic/homepage/Web-Assistor.png',
var loader = new resLoader({
    resources: [
        'static/css/main.min.css',
        'static/js/jquery-3.1.0.min.js',
        'static/js/main.min.js',
        'static/src/pic/BG.png',
        'static/src/pic/homepage/Design-Assistor.png',
        'static/src/pic/homepage/PM-Assistor.png',
        'static/src/pic/homepage/android-Assistor.png',
        'static/src/pic/homepage/iOS-Assistor.png',
        'static/src/pic/homepage/nomove.png',
        'static/src/pic/homepage/Web-Assistor.png',
        'static/src/pic/homepage/Lab-Assistor.png',
        'static/src/pic/homepage/game-Assistor.png',
        'static/src/pic/homepage/come-Assistor.png',
        'static/src/pic/homepage/uniquelogo.png',
    ],
    onStart: function(total) {
        // console.log('start:' + total);
    },
    onProgress: function(current, total) {
        // console.log(current + '/' + total);
        var percent = current / total * 100;
        var lp = 50 - percent / 2.0,
            rp = 50 + percent / 2.0;
        var bar_width = $("#progress").width() * percent / 100.0;
        // console.log(bar_width);
        $('#progressbar').css({
            'left': lp + '%',
            'width': bar_width + "px"
        });

        // $('.progresstext .current').text(current);
        // $('.progresstext .total').text(total);
    },
    onComplete: function() {
        $("#main_body").ready(function() {
            $('#fullpage').fullpage({
                resize: true,
                //Navigation
                menu: '#navbar_menu',
                anchors: ['home_page', 'intro_page', 'groups_page', 'events_page', 'works_page', 'contact_page', 'footer_page'],
                // navigation: false,
                // navigationPosition: 'right',
                // navigationTooltips: ['firstSlide', 'secondSlide'],
                // showActiveTooltip: false,
                slidesNavigation: true,
                slidesNavPosition: 'bottom',

                //Scrolling
                css3: true,
                scrollingSpeed: 700,
                autoScrolling: true,
                fitToSection: true,
                fitToSectionDelay: 500,
                scrollBar: false,
                easing: 'easeInOutCubic',
                easingcss3: 'ease',
                loopBottom: false,
                loopTop: false,
                loopHorizontal: true,
                continuousVertical: false,
                // normalScrollElements: '#element1, .element2',
                // scrollOverflow: false,
                // scrollOverflowOptions: null,
                touchSensitivity: 15,
                // normalScrollElementTouchThreshold: 5,
                // bigSectionsDestination: null,

                //Accessibility
                keyboardScrolling: true,
                animateAnchor: false,
                recordHistory: false,

                //Design
                controlArrows: true,
                slideControlArrows: true,
                verticalCentered: true,
                // sectionsColor: ['#ccc', '#fff'],
                // paddingTop: '3em',
                // paddingBottom: '10px',
                fixedElements: '#navbar',
                // responsiveWidth: 900,
                // responsiveHeight: 0,

                //Custom selectors
                sectionSelector: '.page',
                slideSelector: '.page .slide',

                //events
                // onLeave: function(index, nextIndex, direction) {},
                // afterLoad: function(anchorLink, index) {},
                afterRender: function() {
                    // $(".fp-controlArrow").css('opacity', '1');;
                    // console.log($("#works .fp-slidesNav"));
                    $("#works .fp-slidesNav").css('opacity', '0');
                    $("#events .fp-slidesNav").css('opacity', '0');
                    // $(".fp-slidesNav ul li a span").css('background-color', '#BFBFBF');
                    // $(".fp-slidesNav ul li a.active span").css('background-color', 'rgb(0, 255, 184)');
                    // $(".fp-slidesNav ul li a:hover span").css('background-color', '#fff');
                    $("#home #home_join").click(function() {
                        /* Act on the event */
                        $.fn.fullpage.moveTo('contact_page');
                    });


                    $("#home #home_web").click(function() {
                        /* Act on the event */
                        $.fn.fullpage.moveTo('groups_page', 0);
                    });
                    $("#home #home_lab").click(function() {
                        /* Act on the event */
                        $.fn.fullpage.moveTo('groups_page', 1);
                    });
                    $("#home #home_design").click(function() {
                        /* Act on the event */
                        $.fn.fullpage.moveTo('groups_page', 2);
                    });
                    $("#home #home_pm").click(function() {
                        /* Act on the event */
                        $.fn.fullpage.moveTo('groups_page', 3);
                    });
                    $("#home #home_android").click(function() {
                        /* Act on the event */
                        $.fn.fullpage.moveTo('groups_page', 4);
                    });
                    $("#home #home_apple").click(function() {
                        /* Act on the event */
                        $.fn.fullpage.moveTo('groups_page', 5);
                    });
                    $("#home #home_game").click(function() {
                        /* Act on the event */
                        $.fn.fullpage.moveTo('groups_page', 6);
                    });
                },
                afterResize: function() {
                    // console.log("here");
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
                    drawHomeDash();
                },
                // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
                // onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
                onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
                    // if (index == 3) {
                    //     var $imgs = $("#events #event-details .imgContent img");
                    //     // console.log
                    //     $imgs.addClass('loadImage');
                    // };
                    if (index == 4) {
                        // var leavingSlide = $(this);
                        // console.log(this);
                        // var $img = $(this).find('img');

                        // console.log("leaveside:"+slideIndex);
                        var $img = $("#events #event-details .imgContent >img:eq(" + slideIndex + ")");
                        $img.css({
                            "transform": 'scale3d(0.7,0.7,0.7)',
                            "opacity": "0",
                        });
                        // var timer = setTimeout(function() {
                        //     /* body... */
                        //     $img.css({
                        //         "opacity": "0",
                        //     });
                        // }, 200);

                    };

                },
                afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
                    if (index == 4) {
                        // var leavingSlide = $(this);
                        // console.log("loadslide:"+slideIndex);
                        var $img = $("#events #event-details .imgContent >img:eq(" + slideIndex + ")");
                        // console.log(slideIndex+1);
                        $img.css({
                            "opacity": "1",
                            "transform": 'scale3d(1,1,1)',

                        });

                    };
                },
            });

            $("#main_body").move_bg();
            $('#navbar_btn').click(function(event) {
                /* Act on the event */
                $("#navbar_menu li").css('display', 'inline-block');;
            });
        });
        $("#main_body").css('display', 'block');
        $(".pre_body_arrow").animate({
            "opacity": 1,
        }, 200).click(function() { /* Act on the event */
            // $.fn.fullpage.silentMoveTo('home_page');
            $("#pre_body").css({
                "transform": "scale3d(0.1,0.1,0.1)",
                // "transform": "",
                // "background-color": "red",
            });

            var timer = setTimeout(function() {
                $("#pre_body").remove();
            }, 250);
            // $(".page").height($(window).height());
        });
        $("img.lazy").each(function(index, el) {
            // console.log(this);
            $(this).attr('src', $(this).data('original'));
        });
        $("img.lazy2").each(function(index, el) {
            // console.log(this);
            $(this).attr('src', $(this).data('original'));
        });
    }
});

loader.start();