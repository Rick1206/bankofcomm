//Light-box version 1.02  by lewis
;(function($){

jQuery.lightBox = function(forId) {

    var bodyHeight;
    var browserHeight;
    var maskHeight;
    var addTop;
    var offsetY = 16;
    var top;
    var broVer = $.browser.version;
    function resize() {
        if ($('.eaMask').html() != null) {
            bodyHeight = document.body.clientHeight;
            browserHeight = $(window).height();
            if (browserHeight > bodyHeight) {
                maskHeight = browserHeight;
            } else {
                maskHeight = bodyHeight;
            };
            $('.eaMask').css({ height: maskHeight + 'px' });
            if (broVer != 6.0) {
                $(forId).css({ top: browserHeight / 2 - offsetY + addTop + 'px' });
            }
            else {
                top = jQuery(window).scrollTop() + browserHeight / 2 - offsetY;
                $(forId).css({ top: top });
            }
        }
    }


    if ($(forId).data("isOpen") || $(forId).data("isOpen") == null) {
		open();
    }


    function open(){
        addTop = 62;
        $(forId).data("isOpen", false);
        $('body').css({ position: 'relative', 'z-index': '888' });
        $('#steps').append("<div class='eaMask'></div>");
        //$('.eaMask').click(closes);
        bodyHeight = document.body.clientHeight;
        browserHeight = $(window).height();
      
        maskHeight = bodyHeight;

        $(forId).css({
            top:0 + 'px',
            left: '50%',
            'z-index': '99999',
            'margin-left': -$(forId).width() / 2 + 'px',
            'margin-top': -90 + 'px',
			position: 'absolute'
        });
        $('.eaMask').css({
            background: '#202020',
            position: 'absolute',
            cursor: 'wait',
            left: '0',
            top: 0,
            filter: 'alpha(opacity=45)',
            '-moz-opacity': '0.45',
            opacity: '0.45',
            width: '100%',
            'z-index': '9999',
            height: 660,
            display: 'none'
        });
        $('.eaMask').fadeIn(200);
        $(forId).fadeIn(200);
        if (broVer == 6.0) {
            $('select').css({ visibility: "hidden" });
            $('.lightbox select').css({ visibility: "visible" });
            $(window).bind("scroll", scrollHandle);
        };
    }


    $(".popClose").click(function(){ closes(); $('#sleft').click();});
    function closes() {
        $(window).unbind("resize");
        $('.eaMask').fadeOut(200);
        $(forId).fadeOut(200);
        setTimeout("$('.eaMask').remove();", 200);
        setTimeout("$('select').css({visibility:'visible'})", 200);
        $(forId).data("isOpen", true);
		$(".status").hide();
    }
	
	 $(".popCloseOwn").click(function(){ closes(); $('#sleft').click();});
    function closes() {
        $(window).unbind("resize");
        $('.eaMask').fadeOut(200);
        $(forId).fadeOut(200);
        setTimeout("$('.eaMask').remove();", 200);
        setTimeout("$('select').css({visibility:'visible'})", 200);
        $(forId).data("isOpen", true);
		$(".status").hide();
    }
	
	
    function scrollHandle() {
        top = jQuery(window).scrollTop() + browserHeight / 2 - offsetY;
        $(forId).css({ top: top });
    }

    function resizeHandle() {
        bodyHeight = document.body.clientHeight;
        browserHeight = $(window).height();
        if (browserHeight > bodyHeight) {
            maskHeight = browserHeight;
        } else {
            maskHeight = bodyHeight;
        }
        $('.eaMask').css({ height: maskHeight + 'px' });
    }
};


jQuery.lightClose = function(forId){
	$(".eaMask").fadeOut(200);
	$(forId).fadeOut(200);
	setTimeout("$('.eaMask').remove();",200);
	$(forId).data("isOpen", true);
};




















})(jQuery);




