// svg.shapes.js 0.11 - Copyright (c) 2013 Wout Fierens - Licensed under the MIT license

;(function() {

  var defaults = {
      spikes: 7
    , inner:  50
    , outer:  100
    , edges:  7
    , radius: 100
    }
  
  // Add builders to polygon
  SVG.extend(SVG.Polyline, SVG.Polygon, {
    // Dynamic star shape
    star: function (settings) {
      var box = this.bbox()

      /* merge user input */
      this.settings = merge(this.settings, settings)
      
      return this.plot(SVG.shapes.star(this.settings).move(box.x, box.y))
    }
    // Dynamic ngon shape
  , ngon: function(settings) {
      var box = this.bbox()

      /* merge user input */
      this.settings = merge(this.settings, settings)

      return this.plot(SVG.shapes.ngon(this.settings).move(box.x, box.y))
    }

  })

  // Make shapes animatable
  SVG.extend(SVG.FX, {
    // Animatable star
    star: function(settings) {
      var box = this.bbox()

      /* merge user input */
      this.target.settings = merge(this.target.settings, settings)

      return this.plot(SVG.shapes.star(this.target.settings).move(box.x, box.y))
    }
  , // Animatable ngon
    ngon: function(settings) {
      var box = this.bbox()

      /* merge user input */
      this.target.settings = merge(this.target.settings, settings)

      return this.plot(SVG.shapes.ngon(this.target.settings).move(box.x, box.y))
    }

  })


  // Shape generator
  SVG.shapes = {
    // Star generator
    star: function(settings) {
      var i, a, x, y
        , points  = []
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
      var i, a, x, y
        , points  = []
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

  // Helpers
  function merge(target, object) {
    var key
      , settings = {}

    /* ensure objects */
    target = target || {}
    object = object || {}

    /* merge object */
    for (key in defaults)
      settings[key] = typeof object[key] === 'number' ?
        object[key] :
      typeof target[key] === 'number' ?
        target[key] :
        defaults[key]

    return settings
  }
  
}).call(this)