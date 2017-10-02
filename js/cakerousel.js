$(document).ready(function(){
var currentPos = 0;
var currentPosEnd = 992;
var totalWidth = getTotalWidth();
var speedScroll = 400;
var scrollAmount = 992;

$('#pos-value-l').text(currentPos);
$('#pos-value-r').text(currentPosEnd);
$('#width-value').text(totalWidth);
$('#img-qty').text(getQuantityCarouselElements());



$(".cakerousel-control-l").click(function(){
	if(currentPos>0){
		currentPosEnd-=scrollAmount;
		currentPos-=scrollAmount;
    $(".cakerousel-elements").animate({scrollLeft:currentPos},speedScroll);
	} else{
		jumpToLast();
	}
}); 

$(".cakerousel-control-r").click(function(){
	if(currentPos<totalWidth && currentPosEnd+scrollAmount<totalWidth){
		 currentPosEnd+=scrollAmount;
		 currentPos+=scrollAmount;
    $(".cakerousel-elements").animate({scrollLeft:currentPos},speedScroll);
		 } else{
			 jumpToFirst()
		 }
});




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
	
	console.log('total:',totalWidth );
	return totalWidth+80;
}

//testing stuff


$('button').on('click', function(){
	$('#pos-value-l').text(currentPos)
	$('#pos-value-r').text(currentPosEnd)
});
});
