var sdegree = 0;
var mleft = 10;
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        // console.log('Scroll down');
	    sdegree -- ;
	    sdegree = sdegree - 3 ;
	    mleft = mleft - 3;
    }
    else {
        // console.log('Scroll up');
	    sdegree ++ ;
	    sdegree = sdegree + 3 ;
	    mleft = mleft + 3;
    }
	var srotate = "rotate(" + sdegree + "deg)";
	var mleftCSS = "" + mleft + "px"; 
    $(".wheel").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
    $(".wheel").css({"margin-left" : mleftCSS});
    return false;
});
$(window).keydown(function(event){
	console.log(event.which);
	if (event.which == 40 | event.which ==39) {
		// console.log('Scroll up');
	    sdegree ++ ;
	    sdegree = sdegree + 3 ;
	    mleft = mleft + 3;
	}
	else if(event.which == 38 | event.which == 37){
		// console.log('Scroll down');
	    sdegree -- ;
	    sdegree = sdegree - 3 ;
	    mleft = mleft - 3;
	}
	var srotate = "rotate(" + sdegree + "deg)";
	var mleftCSS = "" + mleft + "px"; 
    $(".wheel").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
    $(".wheel").css({"margin-left" : mleftCSS});
});