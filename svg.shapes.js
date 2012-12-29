/* svg.shapes.js 0.1 - svgjs.com/license */

SVG.extend(SVG.Polygon, {
  
  // dynamic star shape
  star: function (settings) {

    var i,
        points = '',
        p =  settings.points || 7,  // number of points for star
        r1 = settings.inner || 50,  // inner radius
        r2 = settings.outer || 100, // outer radius
        ox = settings.x || 0,       // x-offset
        oy = settings.y || 0,       // y-offset
        d =  360 / p;               // degrees per point

    for (i = 0; i < p; i++) {
      var a = i * d + 90,
          x = ox + r1 * Math.cos(a * Math.PI / 180),
          y = oy + r1 * Math.sin(a * Math.PI / 180);

      points += this._trim(x) + ',' + this._trim(y) + ' ';

      a += d / 2;
      x = ox + r2 * Math.cos(a * Math.PI / 180),
      y = oy + r2 * Math.sin(a * Math.PI / 180),
      
      points += this._trim(x) + ',' + this._trim(y) + ' ';
    };
    
    return this.plot(points);
  },
  
  ngon: function(settings) {
    var i,
        points = '',
        p =  settings.points || 7,  // number of points for star
        r  = settings.radius || 50, // radius of points on circle
        ox = settings.x || 0,       // x-offset
        oy = settings.y || 0,       // y-offset
        d =  360 / p;               // degrees per point

    for (i = 0; i < p; i++) {
      var a = i * d + 90,
          x = ox + r * Math.cos(a * Math.PI / 180),
          y = oy + r * Math.sin(a * Math.PI / 180);

      points += this._trim(x) + ',' + this._trim(y) + ' ';
    };
    
    return this.plot(points);
  },
  
  // trim given float to 6 decimals
  _trim: function(n) {
    return Math.round(n * 1000000) / 1000000;
  }
  
});