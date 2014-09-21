# svg.shapes.js

This is a plugin for the [svg.js](http://svgjs.com) library to draw various shape types based on the built-in polygon method.

Svg.shapes.js is licensed under the terms of the MIT License.


## Usage

### Browser

Include this plugin after including svg.js in your html document.

### Node

$ `npm install svg.js svg.shapes.js`

Augment an existing svg.js object:

```javascript
var svgjs = require('svg.js')
  , svg =   require('svg.shapes.js')(svgjs)
```


## Methods

### Star

Three parameters are required to draw a star, `inner` radius, `outer` radius and `spikes`:

```javascript
var star = draw.polygon().star({
  inner:  50
, outer:  100
, spikes: 7
})
```

This method is also animatable:

```javascript
star.animate().star({ spikes: 10 })
```

Finally, if you only want to get the point data, the star builder is directly available at:

```javascript
SVG.shapes.star({ spikes: 10 })
```

Note that this will return an instance of `SVG.PointArray`.


### Ngon

The `ngon()` method only requires two parameters, `radius` and `edges`:

```javascript
var ngon = draw.polygon().ngon({
  radius: 150
, edges: 	5
})
```

This method is also animatable:

```javascript
star.animate().ngon({ edges: 7, radius: 200 })
```

Finally, if you only want to get the point data, the ngon builder is directly available at:

```javascript
SVG.shapes.ngon({ edges: 10 })
```

Note that this will return an instance of `SVG.PointArray`.


## To-do

- Cog wheel
- Wedge
- Arc
- Cross

Head start: http://pastie.org/929979


## Dependencies

This module requires svg.js v0.31.

