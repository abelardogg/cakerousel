# cakerousel
simple and customizable carousel with jQuery and CSS

## Usage

```html
<div class="cakerousel-slider " >
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

```javascript
var tid = setInterval(nextSlice, 1500);
```
 change the '1500' for the desired time of the autoplay
 
 ## Demo
 
 [click here for the codpen demo!](https://codepen.io/abelardogg/pen/dVZbwz)
