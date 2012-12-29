# Svg.shapes.js

This is a plugin for the [svg.js](http://svgjs.com) library to draw various shape types based on the built in polygon method.


## Usage

Include this plugin after including svg.js in your html document.

### Star
Three parameters are required to draw a star, `inner` radius, `outer` radius and `points`:

```javascript
var star = draw.polygon().star({
  inner:  50,
  outer:  100,
  points: 7
});
```

If the star needs to be drawn at a given x and y position the `x` en `y` can be defined as well:

```javascript
var star = draw.polygon().star({
  inner:  50,
  outer:  100,
  points: 7,
  x:      150,
  y:      120
});
```

### Ngon
The `ngon()` method only requires two parameters, `radius` and `points`:

```javascript
var star = draw.polygon().ngon({
  radius:  150,
  points: 5
});
```

Like the `star()` method `ngon()` also accepts `x` and `y`.



## To-do
- Cog wheel
- Wedge
- Arc

## License
This plugin is licensed under the terms of the MIT License.
