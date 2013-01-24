// svg.shapes.js 0.6 - Copyright (c) 2013 Wout Fierens - Licensed under the MIT license

(function() {
  
  // trim given float to 6 decimals
  var _trim = function(n) {
    return Math.round(n * 1000000) / 1000000;
  };
  
  // Add builders to polygon
  SVG.extend(SVG.Wrap, {

    // dynamic star shape
    star: function (settings) {
      var i, d, build, points = '';
          
      this.points = settings.points || this.points || 7;   // number of points for star
      this.inner  = settings.inner  || this.inner  || 50;  // inner radius
      this.outer  = settings.outer  || this.outer  || 100; // outer radius
      
      d = 360 / this.points; // degrees per point

      for (i = 0; i < this.points; i++) {
        var a = i * d + 90,
            x = this.outer + this.inner * Math.cos(a * Math.PI / 180),
            y = this.outer + this.inner * Math.sin(a * Math.PI / 180);

        points += _trim(x) + ',' + _trim(y) + ' ';

        a += d / 2;
        x = this.outer + this.outer * Math.cos(a * Math.PI / 180);
        y = this.outer + this.outer * Math.sin(a * Math.PI / 180);

        points += _trim(x) + ',' + _trim(y) + ' ';
      };

      return this.plot(points);
    },

    ngon: function(settings) {
      var i, d, points = '';
          
      this.points = settings.points || this.points || 7;  // number of points for star
      this.radius = settings.radius || this.radius || 50; // radius of points on circle
      
      d = 360 / this.points; // degrees per point

      for (i = 0; i < this.points; i++) {
        var a = i * d - 90,
            x = this.radius + this.radius * Math.cos(a * Math.PI / 180),
            y = this.radius + this.radius * Math.sin(a * Math.PI / 180);

        points += _trim(x) + ',' + _trim(y) + ' ';
      };

      return this.plot(points);
    }

  });
  
  SVG.Line = function Line() {
    this.constructor.call(this, SVG.create('line'));
  };

  // Inherit from SVG.Shape
  SVG.Line.prototype = new SVG.Shape();
  
  // Extend all container modules
  ('Clip Defs Doc Gradient Group Mask Nested Pattern').split(' ').forEach(function(module) {
    
    if (SVG[module]) {
      SVG.extend(SVG[module], {

        line: function(x1, y1, x2, y2) {
          return this.put(new SVG.Line().attr({
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2
          }));
        }

      });
    }
    
  });
  
}).call(this);

