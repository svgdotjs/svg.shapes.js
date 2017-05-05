/*!
* svg.shapes.js - svg.js plugin to draw stars and ngons
* @version 1.0.0
* https://github.com/wout/svg.shapes.js#readme
*
* @copyright Wout Fierens
* @license MIT
*/;
// Add builders to polygon
SVG.extend(SVG.Polyline, SVG.Polygon, SVG.FX, {
  // Dynamic star shape
  star: function (settings) {
    var box = (this.target ? this.target() : this).bbox()
    return this.plot(SVG.shapes.star(settings).move(box.x, box.y))
  }
  // Dynamic ngon shape
, ngon: function(settings) {
    var box = (this.target ? this.target() : this).bbox()
    return this.plot(SVG.shapes.ngon(settings).move(box.x, box.y))
  }
})

// Shape generator
SVG.shapes = {
  // default values
  defaults: {
    spikes: 7
  , inner:  50
  , outer:  100
  , edges:  7
  , radius: 100
  }
  // Star generator
, star: function(settings) {
    settings = settings || {}

    var i, a, x, y
      , points  = []
      , defaults = SVG.shapes.defaults
      , spikes  = typeof settings.spikes == 'number' ? settings.spikes : defaults.spikes
      , inner   = typeof settings.inner  == 'number' ? settings.inner  : defaults.inner
      , outer   = typeof settings.outer  == 'number' ? settings.outer  : defaults.outer
      , degrees = 360 / spikes

    for (i = 0; i < spikes; i++) {
      a = i * degrees + 90
      x = outer + inner * Math.cos(a * Math.PI / 180)
      y = outer + inner * Math.sin(a * Math.PI / 180)

      points.push([x, y])

      a += degrees / 2
      x = outer + outer * Math.cos(a * Math.PI / 180)
      y = outer + outer * Math.sin(a * Math.PI / 180)

      points.push([x, y])
    }

    return new SVG.PointArray(points)
  }
  // Ngon generator
, ngon: function(settings) {
    settings = settings || {}

    var i, a, x, y
      , points  = []
      , defaults = SVG.shapes.defaults
      , edges   = typeof settings.edges  == 'number' ? settings.edges  : defaults.edges
      , radius  = typeof settings.radius == 'number' ? settings.radius : defaults.radius
      , degrees = 360 / edges

    for (i = 0; i < edges; i++) {
      a = i * degrees - 90
      x = radius + radius * Math.cos(a * Math.PI / 180)
      y = radius + radius * Math.sin(a * Math.PI / 180)

      points.push([x, y])
    }

    return new SVG.PointArray(points)
  }
}
