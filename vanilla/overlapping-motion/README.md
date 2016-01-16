# Overlapping Motion

Detailed information can be found [here](https://www.google.com/design/spec/animation/meaningful-transitions.html#meaningful-transitions-hierarchical-timing)

## Demo

See [om-example.html](om-example.html) file in this directory.

## Usage

HTML
```html
<div class="box-list">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
  <div class="item">10</div>
  <div class="item">11</div>
  <div class="item">12</div>
</div>
<script type="text/javascript" src="overlapping-motion.js"></script>
```

CSS
```css
item {
  /* required styles */
  transform: scale(0);
  transition-timing-function: ease-out;
  backface-visibility: hidden;
  perspective: 1000;

  /* other custom styles for presentation purposes */
  color: #fff;
  text-align: center;
  line-height: 75px;
  opacity: 1;
  display: inline-block;
  background-color: #4186F5;
  width: 75px;
  height: 75px;
  margin: 2px;
}
```

```js
MDA.overlappingMotion('.box-list', {
  delayFactor: 0.5,
  durationFactor: 1.3,
  inverted: false,
  elementSelector: '.item'
});
```
