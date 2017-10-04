$(document).ready(function(){

var currentPos = 0;
var currentPosEnd = 992;
var totalWidth = getTotalWidth();
var speedScroll = 400;
var scrollAmount = 992;
var firstSlice = $('.cakerousel-element')[0];
var lastSlice = $('.cakerousel-element')[($('.cakerousel-element').length-1)];
var tid = setInterval(function(){
				nextSlice();
			}, 1500);


$('#pos-value-l').text(currentPos);
$('#pos-value-r').text(currentPosEnd);
$('#width-value').text(totalWidth);
$('#img-qty').text(getQuantityCarouselElements());

$(document).ready(function(){


	$(window).focus(function() {

		if($('.cakerousel-slider').hasClass('auto')){
			tid = setInterval(function(){
				nextSlice();
			}, 1500);
		 }


	});

	$(window).blur(function() {
    	clearInterval(tid);
	});

});

$(".cakerousel-control-r").click(function(){
 nextSlice();
});

$(".cakerousel-control-l").click(function(){
	previousSlice();
}); 

function nextSlice(){
	if(currentPos<totalWidth && currentPosEnd+scrollAmount<totalWidth){
		 currentPosEnd+=scrollAmount;
		 currentPos+=scrollAmount;
    $(".cakerousel-elements").animate({scrollLeft:currentPos},speedScroll);
	 } else if($('.cakerousel-slider').hasClass('loop')) {
		 fromLastToFirst();
	 } else {
		 jumpToFirst()
	 }	
}

function previousSlice(){
	if(currentPos>0){
		currentPosEnd-=scrollAmount;
		currentPos-=scrollAmount;
    $(".cakerousel-elements").animate({scrollLeft:currentPos},speedScroll);
	} else if($('.cakerousel-slider').hasClass('loop')) {
					 fromFirstToLast()
 	} else {
			jumpToLast();
	}	
}

function jumpToLast(){
	currentPos=(scrollAmount*(getQuantityCarouselElements()-1));
	currentPosEnd=(scrollAmount*getQuantityCarouselElements())
	$(".cakerousel-elements").animate({scrollLeft:currentPos},speedScroll);
}

function jumpToFirst(){
	currentPos=0;
	currentPosEnd=scrollAmount;
	$(".cakerousel-elements").animate({scrollLeft:currentPos},speedScroll);
}

function getQuantityCarouselElements(){
	return $('.cakerousel-element').length;
}

function getTotalWidth(){
	totalWidth=0;
	for(var i = 0;  i < $('.cakerousel-element').length; i++){
		totalWidth+=$($('.cakerousel-element')[i]).width()
	}
	
	// console.log('total:',totalWidth );
	return totalWidth+80;
}

function fromLastToFirst(){
	$(firstSlice).insertAfter(lastSlice);
	currentPosEnd-=scrollAmount;
	currentPos-=scrollAmount;
  $(".cakerousel-elements").animate({scrollLeft:currentPos},0);
	firstSlice = $('.cakerousel-element')[0];
	lastSlice = $('.cakerousel-element')[($('.cakerousel-element').length-1)];
	currentPosEnd+=scrollAmount;
	currentPos+=scrollAmount;
  $(".cakerousel-elements").animate({scrollLeft:currentPos},speedScroll);
	console.log($('.cakerousel-element'));
}

function fromFirstToLast(){
	//move the last image to the first place
	$(lastSlice).insertBefore(firstSlice);
	//moves the slider to the old first image
	currentPosEnd+=scrollAmount;
	currentPos+=scrollAmount;
  $(".cakerousel-elements").animate({scrollLeft:currentPos},0);
	//reads who is the new first element and who is the new last
	firstSlice = $('.cakerousel-element')[0];
	lastSlice = $('.cakerousel-element')[($('.cakerousel-element').length-1)];
	//perform the scroll
	currentPosEnd-=scrollAmount;
	currentPos-=scrollAmount;
  $(".cakerousel-elements").animate({scrollLeft:currentPos},speedScroll);
	console.log($('.cakerousel-element'));
}

//testing stuff


$('button').on('click', function(){
	$('#pos-value-l').text(currentPos)
	$('#pos-value-r').text(currentPosEnd)
});



});
