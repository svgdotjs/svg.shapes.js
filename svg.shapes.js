// svg.shapes.js 0.10 - Copyright (c) 2013 Wout Fierens - Licensed under the MIT license

;(function() {
  
  // Add builders to polygon
  SVG.extend(SVG.Polyline, SVG.Polygon, {
    // Defaults
    settings: {
      spikes: 7
    , inner:  50
    , outer:  100
    , edges:  7
    , radius: 50
    }
    // Dynamic star shape
  , star: function (settings) {
      /* merge user input */
      merge(this.settings, settings)
      
      return this.plot(SVG.shapes.star(this.settings))
    }
    // Dynamic ngon shape
  , ngon: function(settings) {
      /* merge user input */
      merge(this.settings, settings)
      
      return this.plot(SVG.shapes.ngon(this.settings))
    }

  })

  // Make shapes animatable
  SVG.extend(SVG.FX, {
    // Animatable star
    star: function(settings) {
      /* merge user input */
      merge(this.target.settings, settings)

      return this.plot(SVG.shapes.star(this.target.settings))
    }
  , // Animatable ngon
    ngon: function(settings) {
      /* merge user input */
      merge(this.target.settings, settings)

      return this.plot(SVG.shapes.ngon(this.target.settings))
    }

  })


  // Shape generator
  SVG.shapes = {
    // Star generator
    star: function(settings) {
      var i, a, x, y
        , points  = []
        , spikes  = typeof settings.spikes == 'number' ? settings.spikes : 7
        , inner   = typeof settings.inner  == 'number' ? settings.inner  : 50
        , outer   = typeof settings.outer  == 'number' ? settings.outer  : 100
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
      var i, a, x, y
        , points  = []
        , edges   = typeof settings.edges  == 'number' ? settings.edges  : 7
        , radius  = typeof settings.radius == 'number' ? settings.radius : 100
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

  // Helpers
  function merge(target, object) {
    /* ensure object */
    object = object || {}

    /* merge object */
    for (var key in object)
      if (typeof object[key] === 'number')
        target[key] = object[key]

    return target
  }
  
}).call(this)