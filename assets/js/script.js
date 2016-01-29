"use strict";

if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // some code..
    window.location.replace("http://site.freezer.wip.camp/m");
}

$(document).ready(function (e) {
    $("body").wipLoader();
    detectIE();
    $('#scene').parallax({
        limitY: 1,
    });

    // Section
    var chkPop = 0;
    var name;
    $('.sec').click(function (e) {
        e.stopPropagation();
        var section = $(this).data('sec');
        // console.log(section);

        name = ".pop-" + section;

        if (chkPop == 0) {
            if ($(name).hasClass('left'))
            {
                TweenMax.to($(name), 1, {left: "0%", delay: 0.2, ease: SlowMo.easeOut});
                $(name).addClass('active');
            } else if ($(name).hasClass('right')) {
                TweenMax.to($(name), 1, {right: "0%", delay: 0.2, ease: SlowMo.easeIn});
            } else {
                TweenMax.to($(name), 1, {right: "0%", delay: 0.2, ease: SlowMo.easeIn});
                TweenMax.to(".pop-where .image-wippo", 1, {css: {left: 0, opacity: 1}});
            }
            TweenMax.to(".overlay", 1, {className: "+=active"});
            TweenMax.to(name, 1, {className: "+=active", delay: .2});
            TweenMax.to("#scene", 2, {transform: "scale(1.4)"});

            chkPop++;

        }
    });

    /**
     * detect IE
     * returns version of IE or false, if browser is not Internet Explorer
     */
    function detectIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            $('head').append('<link rel="stylesheet" href="assets/css/ie.css" type="text/css" />');

        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            $('head').append('<link rel="stylesheet" href="assets/css/ie.css" type="text/css" />');
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            $('head').append('<link rel="stylesheet" href="assets/css/ie.css" type="text/css" />');
        }

        // other browser
        return false;
    }

    function msieversion() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {   // If Internet Explorer, return version number
            console.log(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
            console.log('ie');
            $('head').append('<link rel="stylesheet" href="assets/css/ie.css" type="text/css" />');
        } else {                // If another browser, return 0
            console.log('otherbrowser');
        }
        return false;
    }

    function exit_modal() {
        if ($('.modal').hasClass('active')) {
            TweenMax.to('.modal', .8, {css: {transform: "scale(8)", opacity: 0, visibility: "visible"}, onComplete: function () {
                    $('.modal').remove();
                }});
            TweenMax.to(".overlay", 0.8, {className: "-=active"});


        }
    }

    function exit_pop() {
        console.log(name + " " + chkPop);
        if ($(name).hasClass('active') && chkPop == 1) {
            var item = name;
            console.log("item" + item);
            if ($(item).hasClass('left')) {
                TweenMax.to(item, 1, {left: "-100%", ease: SlowMo.easeIn});
            } else if ($(item).hasClass('right'))
            {
                TweenMax.to(item, 1, {right: "-100%", ease: SlowMo.easeIn});
            } else {
                TweenMax.to(item, 1, {right: "-100%", ease: SlowMo.easeIn});
                TweenMax.to(".pop-where .image-wippo", 1, {css: {left: "-200%", opacity: 0}});
            }
            TweenMax.to(item, 1, {className: "-=active", delay: 1});
            TweenMax.to(".overlay", 1, {className: "-=active"});
            TweenMax.to("#scene", 1, {transform: "scale(1)"})
            chkPop--;

            $('.loy-outer').removeClass('loyBig');
            $('.loy-outer').removeClass('delay');
            $('.inner-descript').removeClass('upText');
            $('#line').removeClass('when');
            name = "";
        }
    }

    $(' .overlay , .triangle , .exit').click(function () {
        exit_pop();
    });
    $(document).keydown(function (e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            exit_pop();
            exit_modal();
            TweenMax.to('.easter',1,{css:{opacity:0,visibility:"hidden"}});
        }
    });

    $('.exit_modal,.overlay').click(function () {
        exit_modal();
    });
    // FAQ
    $('.accordion').click(function () {
        if (!($(this).next().is(':visible'))) {
            $('.accContent').slideUp('600');
        } else {
            $('.accContent').not($(this).next()).slideUp('600');
        }

        if ($(this).next().is(':hidden') == true) {
            $(this).next().slideDown('600');
        }
    });
    $('.accContent').hide(); // Hide Content
    $('.accContent.first').show();


    // When
    $('.when').click(function () {
        // Chang Big circle //
        $('.loy1').find(".loy-outer,.inner-descript").addClass('loyBig');
        $('.loy-outer').addClass('delay');
        $('#line').addClass('when');
        $('.inner-descript').addClass('upText');
    });

    // Reg
    $('.reg').click(function () {
        TweenMax.to('.pre-redirect', 1, {css: {opacity: 1, visibility: "visible"}});
        TweenMax.to(".pre-redirect", 1, {className: "+=active", delay: 1});
        TweenMax.from(".pre-redirect h1", 1, {css: {transform: "scale(.8)", opacity: 0}, delay: .3})
    });
    $('.pre-redirect').click(function () {
        if ($(this).hasClass("active")) {
            TweenMax.to('.pre-redirect', 1, {css: {opacity: 0}});
            TweenMax.to('.pre-redirect', 1, {css: {visibility: "hidden"}, delay: 1});
            TweenMax.to(".pre-redirect", 1, {className: "-=active", delay: 1});
        }
    });


});



function loaded() {
    TweenMax.to('.pre-logo .img-logo.img-logo-bottom', 1, {css: {transform: "scale(.2) rotate(180deg)", opacity: 0}, delay: 2});
    TweenMax.to('.pre-logo .img-logo.img-logo-top', 1, {css: {transform: "scale(.2)", opacity: 0}, delay: 2});
    TweenMax.to('#preload', 3, {css: {opacity: 0}, delay: 2, onComplete: function () {
            $('#preload').remove();
        }});
    // StartUP Preload
    TweenMax.from('.section .what', 1, {css: {left: "44%", top: "39%", opacity: 0}, delay: 3});
    TweenMax.from('.section .who', 1, {css: {left: "44%", top: "39%", opacity: 0}, delay: 3.2});
    TweenMax.from('.section .when', 1, {css: {left: "44%", top: "39%", opacity: 0}, delay: 3.4});
    TweenMax.from('.section .where', 1, {css: {right: "44%", top: "39%", opacity: 0}, delay: 3.6});
    TweenMax.from('.section .faqs', 1, {css: {right: "44%", top: "39%", opacity: 0}, delay: 3.8});
    TweenMax.from('.section .contact', 1, {css: {right: "44%", top: "39%", opacity: 0}, delay: 4});
    TweenMax.from('.section .description', 1.5, {css: {opacity: 0}, delay: 4.8});

    TweenMax.from('.layout .town-front', 1.5, {css: {bottom: "-100%"}, delay: 5.2})
    TweenMax.from('.layout .town-mid', 1.5, {css: {bottom: "-100%"}, ease: Back.easeOut.config(.8), delay: 5.8})
    TweenMax.from('.layout .town-back', 1.5, {css: {bottom: "-100%"}, ease: Back.easeOut.config(.8), delay: 6});

    TweenMax.from('.layout .header', 2, {css: {top: "-100%"}, delay: 5.5});
    TweenMax.to('.reg', 2, {css: {opacity: 1, visibility: "visible"}, delay: 7});
    // TweenMax.to('.modal', 0.8, {css: {opacity:1,visibility:"visible",transform:"scale(1)"},delay:7,onComplete:function(){
    //   $('.modal').addClass('active');
    //   TweenMax.to(".overlay", 0.4, {className:"+=active"});
    // }});

    var star = new TimelineMax({delay: 7});
    star.to('.star-front', 2, {opacity: 1})
            .to('.star-mid', 2, {opacity: 1})
            .to('.star-back', 2, {opacity: 1});

    // Falling Star
    var randomPosX;
    var randomPosX2;
    var randomPosX3;
    var randomPosX4;
    var randomPosX5;
    var randomPosX6;
    var changePosX;

    // Change random to Position X for Falling Star
    if ($('body').width() <= 1500) {
        changePosX = 1000;
    } else if ($('body').width() > 1500 && $('body').width() <= 2000) {
        changePosX = 1100;
    } else if ($('body').width() > 2000 && $('body').width() <= 2560) {
        changePosX = 1600;
    }
    var setExplosion = function (bomb) {
        $(bomb).css({left: (randomPosX + changePosX)});
        $(bomb).addClass('active');
        setTimeout(function () {
            $(bomb).removeClass('active');
            fall('.ds1', '.exp1');
        }, 2500);
    }
    function fall(el, bomb) {
        if ($('body').width() <= 1500) {
            randomPosX = Math.random() * 1500 - 800;
        } else if ($('body').width() > 1500 && $('body').width() <= 2000) {
            randomPosX = Math.random() * 2000 - 1300;
        } else if ($('body').width() > 2000 && $('body').width() <= 2560) {
            randomPosX = Math.random() * 3700 - 1300;
        }
        var randomSpeed = Math.random() * 1.5 + 2;
        TweenMax.fromTo(el, randomSpeed,
                {css: {left: randomPosX, top: "-30%"}},
                {css: {left: (randomPosX + changePosX), top: "100%"}, delay: 2.5, onComplete: function () {
                        setExplosion(bomb, randomSpeed);
                    }
                });
    }
    var setExplosion2 = function (bomb) {

        $(bomb).css({left: (randomPosX2 + changePosX)});
        $(bomb).addClass('active');

        setTimeout(function () {
            $(bomb).removeClass('active');
            fall2('.ds2', '.exp2');
        }, 2500);
    }
    function fall2(el, bomb) {
        if ($('body').width() <= 1500) {
            randomPosX2 = Math.random() * 1500 - 800;
        } else if ($('body').width() > 1500 && $('body').width() <= 2000) {
            randomPosX2 = Math.random() * 2000 - 1300;
        } else if ($('body').width() > 2000 && $('body').width() <= 2560) {
            randomPosX2 = Math.random() * 3700 - 1300;
        }
        var randomSpeed = Math.random() * 1.5 + 1;
        TweenMax.fromTo(el, randomSpeed,
                {css: {left: randomPosX2, top: "-30%"}},
                {css: {left: (randomPosX2 + changePosX), top: "100%"}, delay: 2.5, onComplete: function () {
                        setExplosion2(bomb, randomSpeed);
                    }
                });
    }
    var setExplosion3 = function (bomb) {
        $(bomb).css({left: (randomPosX3 + changePosX)});
        $(bomb).addClass('active');
        setTimeout(function () {
            $(bomb).removeClass('active');
            fall3('.ds3', '.exp3');
        }, 2500);
    }
    function fall3(el, bomb) {
        if ($('body').width() <= 1500) {
            randomPosX3 = Math.random() * 1500 - 800;
        } else if ($('body').width() > 1500 && $('body').width() <= 2000) {
            randomPosX3 = Math.random() * 2000 - 1300;

        } else if ($('body').width() > 2000 && $('body').width() <= 2560) {
            randomPosX3 = Math.random() * 3700 - 1300;
        }
        var randomSpeed = Math.random() * 1.5 + 0.5;
        TweenMax.fromTo(el, randomSpeed,
                {css: {left: randomPosX3, top: "-30%"}},
                {css: {left: (randomPosX3 + changePosX), top: "100%"}, delay: 2.5, onComplete: function () {
                        setExplosion3(bomb, randomSpeed);
                    }
                });
    }
    var setExplosion4 = function (bomb) {
        $(bomb).css({left: (randomPosX4 + changePosX)});
        $(bomb).addClass('active');
        setTimeout(function () {
            $(bomb).removeClass('active');
            fall4('.ds-b1', '.exp-b1');
        }, 2500);
    }
    function fall4(el, bomb) {
        if ($('body').width() <= 1500) {
            randomPosX4 = Math.random() * 1500 - 800;
        } else if ($('body').width() > 1500 && $('body').width() <= 2000) {
            randomPosX4 = Math.random() * 2000 - 1300;

        } else if ($('body').width() > 2000 && $('body').width() <= 2560) {
            randomPosX4 = Math.random() * 3700 - 1300;
        }
        var randomSpeed = Math.random() * 1.5 + 2;
        TweenMax.fromTo(el, randomSpeed,
                {css: {left: randomPosX4, top: "-30%"}},
                {css: {left: (randomPosX4 + changePosX), top: "90%"}, delay: 2.5, onComplete: function () {
                        setExplosion4(bomb, randomSpeed);
                    }
                });
    }
    var setExplosion5 = function (bomb) {
        $(bomb).css({left: (randomPosX5 + changePosX)});
        $(bomb).addClass('active');
        setTimeout(function () {
            $(bomb).removeClass('active');
            fall5('.ds-b2', '.exp-b2');
        }, 2500);
    }
    function fall5(el, bomb) {
        if ($('body').width() <= 1500) {
            randomPosX5 = Math.random() * 1500 - 800;
        } else if ($('body').width() > 1500 && $('body').width() <= 2000) {
            randomPosX5 = Math.random() * 2000 - 1300;

        } else if ($('body').width() > 2000 && $('body').width() <= 2560) {
            randomPosX5 = Math.random() * 3700 - 1300;
        }
        var randomSpeed = Math.random() * 1.5 + 1;
        TweenMax.fromTo(el, randomSpeed,
                {css: {left: randomPosX5, top: "-30%"}},
                {css: {left: (randomPosX5 + changePosX), top: "90%"}, delay: 2.5, onComplete: function () {
                        setExplosion5(bomb, randomSpeed);
                    }
                });
    }
    var setExplosion6 = function (bomb) {
        $(bomb).css({left: (randomPosX6 + changePosX)});
        $(bomb).addClass('active');
        setTimeout(function () {
            $(bomb).removeClass('active');
            fall6('.ds-b3', '.exp-b3');
        }, 2500);
    }
    function fall6(el, bomb) {
        if ($('body').width() <= 1500) {
            randomPosX6 = Math.random() * 1500 - 800;
        } else if ($('body').width() > 1500 && $('body').width() <= 2000) {
            randomPosX6 = Math.random() * 2000 - 1300;

        } else if ($('body').width() > 2000 && $('body').width() <= 2560) {
            randomPosX6 = Math.random() * 3700 - 1300;
        }
        var randomSpeed = Math.random() * 1.5 + 0.5;
        TweenMax.fromTo(el, randomSpeed,
                {css: {left: randomPosX6, top: "-30%"}},
                {css: {left: (randomPosX6 + changePosX), top: "90%"}, delay: 2.5, onComplete: function () {
                        setExplosion6(bomb, randomSpeed);
                    }
                });
    }
    setTimeout(function () {
        fall('.ds1', '.exp1');
    }, 9007);

    setTimeout(function () {
        fall2('.ds2', '.exp2');
    }, 9264);

    setTimeout(function () {
        fall3('.ds3', '.exp3');
    }, 14305);

    setTimeout(function () {
        fall4('.ds-b1', '.exp-b1');
    }, 7291);

    setTimeout(function () {
        fall5('.ds-b2', '.exp-b2');
    }, 13238);

    setTimeout(function () {
        fall6('.ds-b3', '.exp-b3');
    }, 8599);
}














(function ($) {
    function OverlayLoader(parent) {
        this.parent = parent;
        this.container;
        this.loadbar;
        this.percentageContainer;
    }
    ;

    OverlayLoader.prototype.updatePercentage = function (percentage) {
        $(".img-logo-bottom").stop().animate({
            height: percentage / 100 * 318,
        }, 600);
        $(".pre-percent").html(Math.ceil(percentage) + "%");
    };

    function PreloadContainer(parent) {
        this.toPreload = [];
        this.parent = parent;
        this.container;
    }
    ;

    PreloadContainer.prototype.create = function () {
        //process the image queue
        this.processQueue();
    };

    PreloadContainer.prototype.processQueue = function () {
        //add background images for loading
        for (var i = 0; this.toPreload.length > i; i++) {
            if (!this.parent.destroyed) {
                this.preloadImage(this.toPreload[i]);
            }
        }
    };

    PreloadContainer.prototype.addImage = function (src) {
        this.toPreload.push(src);
    };

    PreloadContainer.prototype.preloadImage = function (url) {
        var image = new PreloadImage();
        image.addToPreloader(this, url);
        image.bindLoadEvent();
    };
    function PreloadImage(parent) {
        this.element;
        this.parent = parent;
    }
    ;

    PreloadImage.prototype.addToPreloader = function (preloader, url) {
        this.element = $("<img />").attr("src", url);
        this.element.appendTo(preloader.container);
        this.parent = preloader.parent;
    };

    PreloadImage.prototype.bindLoadEvent = function () {
        //remove the source
        var src = this.element.attr("src");
        if (src != "assets/img/emblem/wippppp_blank.png" & src != "assets/img/emblem/wippppp_loaded.png") {
        this.parent.imageCounter++;
            this.element.removeAttr("src");
            var that = this;
            //bind the load even
            setTimeout(function () {
                that.element.on("load error", that, function (e) {
                    e.data.completeLoading();
                });
                //put the source back
                that.element.attr("src", src);
            }, 1);
        }
    };

    PreloadImage.prototype.completeLoading = function () {
        this.parent.imageDone++;
        var percentage = (this.parent.imageDone / this.parent.imageCounter) * 100;
        //update the percentage of the loader
        this.parent.overlayLoader.updatePercentage(percentage);
        //all images done!
        if (this.parent.imageDone == this.parent.imageCounter) {
            this.parent.endLoader();
        }
    };

    function WipLoader(element, options) {
        this.element = element;
        this.$element = $(element);
        this.options = options;
        this.foundUrls = [];
        this.destroyed = false;
        this.imageCounter = 0;
        this.imageDone = 0;
        this.alreadyLoaded = false;

        //create objects
        this.preloadContainer = new PreloadContainer(this);
        this.overlayLoader = new OverlayLoader(this);

        //The default options
        this.defaultOptions = {
            onComplete: function () {
            },
            onLoadComplete: function () {
            },
            backgroundColor: "#000",
            barColor: "#fff",
            overlayId: 'qLoverlay',
            barHeight: 1,
            percentage: false,
            deepSearch: true,
            completeAnimation: "fade",
            minimumTime: 1000
        };
        //run the init
        this.init();
    }
    ;

    WipLoader.prototype.init = function () {
        this.options = $.extend({}, this.defaultOptions, this.options);
        var images = this.findImageInElement(this.element);
        if (this.options.deepSearch == true) {
            var elements = this.$element.find("*:not(script)");
            for (var i = 0; i < elements.length; i++) {
                this.findImageInElement(elements[i]);
            }
        }
        //create containers
        this.preloadContainer.create();
    };
    WipLoader.prototype.findImageInElement = function (element) {
        var url = "";
        var obj = $(element);
        var type = "normal";
        if (obj.css("background-image") != "none") {
            //if object has background image
            url = obj.css("background-image");
            type = "background";
        } else if (typeof (obj.attr("src")) != "undefined" && element.nodeName.toLowerCase() == "img") {
            //if is img and has src
            url = obj.attr("src");
        }
        //skip if gradient
        if (!this.hasGradient(url)) {
            //remove unwanted chars
            url = this.stripUrl(url);
            //split urls
            var urls = url.split(", ");
            for (var i = 0; i < urls.length; i++) {
                if (this.validUrl(urls[i]) && this.urlIsNew(urls[i])) {
                    var extra = "";
                    if (this.isIE() || this.isOpera()) {
                        extra = "?rand=" + Math.random();
                        this.preloadContainer.addImage(urls[i] + extra);
                    } else {
                        if (type == "background") {
                            //add to preloader
                            this.preloadContainer.addImage(urls[i] + extra);
                        } else {
                            var image = new PreloadImage(this);
                            image.element = obj;
                            image.bindLoadEvent();
                        }
                    }
                    this.foundUrls.push(urls[i]);
                }
            }
        }
    };

    WipLoader.prototype.hasGradient = function (url) {
        if (url.indexOf("gradient") == -1) {
            return false;
        } else {
            return true;
        }
    };

    WipLoader.prototype.stripUrl = function (url) {
        url = url.replace(/url\(\"/g, "");
        url = url.replace(/url\(/g, "");
        url = url.replace(/\"\)/g, "");
        url = url.replace(/\)/g, "");
        return url;
    };

    WipLoader.prototype.isIE = function () {
        return navigator.userAgent.match(/msie/i);
    };

    WipLoader.prototype.isOpera = function () {
        return navigator.userAgent.match(/Opera/i);
    };

    WipLoader.prototype.validUrl = function (url) {
        if (url.length > 0 && !url.match(/^(data:)/i)) {
            return true;
        } else {
            return false;
        }
    };

    WipLoader.prototype.urlIsNew = function (url) {
        if (this.foundUrls.indexOf(url) == -1) {
            return true;
        } else {
            return false;
        }
    };

    WipLoader.prototype.destroyContainers = function () {
        this.destroyed = true;
        this.preloadContainer.container.remove();
        this.overlayLoader.container.remove();
    };

    WipLoader.prototype.endLoader = function () {
        this.destroyed = true;
        this.onLoadComplete();
    };

    WipLoader.prototype.onLoadComplete = function () {
        //fire the event before end animation
        this.options.onLoadComplete();
        $(".pre-percent").fadeOut(1000);
        loaded();
    };
    //load calculation -3-
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt /*, from*/) {
            var len = this.length >>> 0;
            var from = Number(arguments[1]) || 0;
            from = (from < 0)
                    ? Math.ceil(from)
                    : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++) {
                if (from in this &&
                        this[from] === elt)
                    return from;
            }
            return -1;
        };
    }
    //function binder
    $.fn.wipLoader = function (options) {
        return this.each(function () {
            (new WipLoader(this, options));
        });
    };
})($);
