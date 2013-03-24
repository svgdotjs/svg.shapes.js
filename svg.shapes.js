// svg.shapes.js 0.9 - Copyright (c) 2013 Wout Fierens - Licensed under the MIT license

(function() {
  
  // trim given float to 6 decimals
  var _trim = function(n) {
    return Math.round(n * 1000000) / 1000000
  }
  
  // Add builders to polygon
  SVG.extend(SVG.Polyline, SVG.Polygon, SVG.Path, {

    // dynamic star shape
    star: function (settings) {
      var i, d, build, points = ''
      
      this.points = settings.points || this.points || 7   // number of points for star
      this.inner  = settings.inner  || this.inner  || 50  // inner radius
      this.outer  = settings.outer  || this.outer  || 100 // outer radius
      
      d = 360 / this.points // degrees per point

      for (i = 0; i < this.points; i++) {
        var a = i * d + 90
          , x = this.outer + this.inner * Math.cos(a * Math.PI / 180)
          , y = this.outer + this.inner * Math.sin(a * Math.PI / 180)

        points += _trim(x) + ',' + _trim(y) + ' '

        a += d / 2
        x = this.outer + this.outer * Math.cos(a * Math.PI / 180)
        y = this.outer + this.outer * Math.sin(a * Math.PI / 180)

        points += _trim(x) + ',' + _trim(y) + ' '
      }

      return this.plot(points)
    },

    ngon: function(settings) {
      var i, d, points = ''
          
      this.points = settings.points || this.points || 7  // number of points for star
      this.radius = settings.radius || this.radius || 50 // radius of points on circle
      
      d = 360 / this.points; // degrees per point

      for (i = 0; i < this.points; i++) {
        var a = i * d - 90
          , x = this.radius + this.radius * Math.cos(a * Math.PI / 180)
          , y = this.radius + this.radius * Math.sin(a * Math.PI / 180)

        points += _trim(x) + ',' + _trim(y) + ' '
      }

      return this.plot(points)
    }

  })
  
  
}).call(this)

