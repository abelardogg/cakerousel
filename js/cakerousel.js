$(document).ready(function(){

	var testValues = {
	currentPos:0,
	currentPosEnd:992,
	speedScroll:400,
	autoScrollTime:1500,
	scrollAmount:992,
	timer:''
};

startCarousel('#chococake',testValues )

   function startCarousel(carouselID, valuesObject){
        if($(carouselID).length>0){
            var totalWidth = getTotalWidth(carouselID);
            var firstSlice = $(carouselID+' .cakerousel-element')[0];
            var lastSlice = $(carouselID+' .cakerousel-element')[($('.cakerousel-element').length-1)];
            var objSlices = {
                firstSlice:firstSlice,
                lastSlice:lastSlice
            };

            if($(carouselID+' .cakerousel-slider').hasClass('auto')){
                window.addEventListener('focus', function() {
                    console.log(carouselID+' active');
                    autoPlay(carouselID, valuesObject, objSlices, totalWidth);
                },false);

                window.addEventListener('blur', function() {
                    console.log(carouselID+' inactive');
                    stopAutoPlay(valuesObject);
                },false);
            }

            $(carouselID+' .cakerousel-control-r').on('click', function(){
                nextSlice(carouselID, valuesObject, objSlices, totalWidth);
            });

            $(carouselID+' .cakerousel-control-l').on('click', function(){
                previousSlice(carouselID, valuesObject, objSlices);
            });
        }
    }


function autoPlay(carouselID, obj, objSlices, totalWidth){
    obj.timer = setInterval(function(){
        nextSlice(carouselID, obj, objSlices, totalWidth);
            }, obj.autoScrollTime);
}

function stopAutoPlay(obj) {
    clearInterval(obj.timer);
}

function nextSlice(carouselID, obj, objSlices, totalWidth){
    if(obj.currentPos<totalWidth && obj.currentPosEnd+obj.scrollAmount<totalWidth){
        obj.currentPosEnd+=obj.scrollAmount;
        obj.currentPos+=obj.scrollAmount;
        $(carouselID+' .cakerousel-elements').animate({scrollLeft:obj.currentPos},obj.speedScroll);
    } else if($(carouselID+' .cakerousel-slider').hasClass('loop')) {
        fromLastToFirst(carouselID, obj, objSlices);
    } else {
        jumpToFirst(carouselID, obj)
    }
}

function previousSlice(carouselID, obj, objSlices){
    if(obj.currentPos>0){
        obj.currentPosEnd-=obj.scrollAmount;
        obj.currentPos-=obj.scrollAmount;
        $(".cakerousel-elements").animate({scrollLeft:obj.currentPos},obj.speedScroll);
    } else if($('.cakerousel-slider').hasClass('loop')) {
        fromFirstToLast(carouselID, obj, objSlices)
    } else {
        jumpToLast(carouselID, obj);
    }
}

function jumpToFirst(carouselID, obj){
    obj.currentPos=0;
    obj.currentPosEnd=obj.scrollAmount;
    $(carouselID+' .cakerousel-elements').animate({scrollLeft:obj.currentPos},obj.speedScroll);
}

function jumpToLast(carouselID, obj){
    obj.currentPos=(obj.scrollAmount*(getQuantityCarouselElements(carouselID)-1));
    obj.currentPosEnd=(obj.scrollAmount*getQuantityCarouselElements(carouselID))
    $(carouselID+' .cakerousel-elements').animate({scrollLeft:obj.currentPos},obj.speedScroll);
}

function getQuantityCarouselElements(carouselID){
    return $(carouselID+' .cakerousel-element').length;
}

function getTotalWidth(carouselID){
    var totalWidth=0;
    for(var i = 0;  i < $(carouselID+' .cakerousel-element').length; i++){
        totalWidth+=$($(carouselID+' .cakerousel-element')[i]).width()
    }

    return totalWidth+80;
}

function fromLastToFirst(carouselID, obj, objSlices){
    $(objSlices.firstSlice).insertAfter(objSlices.lastSlice);
    obj.currentPosEnd-=obj.scrollAmount;
    obj.currentPos-=obj.scrollAmount;
    $(carouselID+' .cakerousel-elements').animate({scrollLeft:obj.currentPos},0);
    objSlices.firstSlice = $(carouselID+' .cakerousel-element')[0];
    objSlices.lastSlice = $(carouselID+' .cakerousel-element')[($(carouselID+' .cakerousel-element').length-1)];
    obj.currentPosEnd+=obj.scrollAmount;
    obj.currentPos+=obj.scrollAmount;
    $(carouselID+' .cakerousel-elements').animate({scrollLeft:obj.currentPos},obj.speedScroll);
}

function fromFirstToLast(carouselID, obj, objSlices){
    $(objSlices.lastSlice).insertBefore(objSlices.firstSlice);
    obj.currentPosEnd+=obj.scrollAmount;
    obj.currentPos+=obj.scrollAmount;
    $(carouselID+' .cakerousel-elements').animate({scrollLeft:obj.currentPos},0);
    objSlices.firstSlice = $(carouselID+' .cakerousel-element')[0];
    objSlices.lastSlice = $(carouselID+' .cakerousel-element')[($(carouselID+' .cakerousel-element').length-1)];
    obj.currentPosEnd-=obj.scrollAmount;
    obj.currentPos-=obj.scrollAmount;
    $(carouselID+' .cakerousel-elements').animate({scrollLeft:obj.currentPos},obj.speedScroll);
}

});
