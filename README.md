# cakerousel
simple and customizable carousel with jQuery and CSS

## Usage

### HTML
`id` attribute needed on the `cakerousel-container` div
```html
<div id="chococake" class="cakerousel-container">
```

The cakerousel jave diferent modes and combinations.
```html
<div id="chococake" class="cakerousel-slider " >
```
When you click next on the last image the carousel will go back to the first element and viceversa

```html
<div class="cakerousel-slider loop" >
```
When you click next on the last image the first one will be moved to the end of the carousel and viceversa

```html
<div class="cakerousel-slider loop auto" >
<!--OR-->
<div class="cakerousel-slider auto" >
```
The carousel will work automatically 

### JS
Set the configuration to the carousel is easy, you just need an `object` and an `id`

```javascript
var testValues = {
        currentPos:0,
        currentPosEnd:992,
        speedScroll:400,
        autoScrollTime:1500,
        scrollAmount:992,
        timer:''
    };
```

The key values are very descriptive by themselves, the only two important keys to mention are `currentPos` and `currentPosEnd` the second one are based on the carousel size, basically the `currentPos` always will be 0 and `currentPosEnd` is the size of the carousel (992px on my case)

and just call the following method and pass two parameters, our carousel `id` and the `configuration object`
```javascript
    startCarousel('#onea-home-carousel',testValues );
```
thats why we need an `id` attribute on out HTML, also, since we are using jQuery we need to add the '#' character to our string parameter, you can use a clase `instead` of `id` but id's are faster than classes
 
 ## Demo
 
 [click here for the codpen demo!](https://codepen.io/abelardogg/full/MErExd/)
