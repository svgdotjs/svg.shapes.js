// svg.shapes.js 0.2 - Copyright (c) 2013 Wout Fierens - Licensed under the MIT license

SVG.extend(SVG.Polygon, {
  
  // dynamic star shape
  star: function (settings) {

    var i,
        build,
        points = '',
        p =  settings.points || 7,    // number of points for star
        r1 = settings.inner  || 50,   // inner radius
        r2 = settings.outer  || 100,  // outer radius
        d =  360 / p;                 // degrees per point

    for (i = 0; i < p; i++) {
      var a = i * d + 90,
          x = r1 * Math.cos(a * Math.PI / 180),
          y = r1 * Math.sin(a * Math.PI / 180);
    
      points += this._trim(x) + ',' + this._trim(y) + ' ';
    
      a += d / 2;
      x = r2 * Math.cos(a * Math.PI / 180),
      y = r2 * Math.sin(a * Math.PI / 180),
    
      points += this._trim(x) + ',' + this._trim(y) + ' ';
    };
    
    return this.plot(points);
  },
  
  ngon: function(settings) {
    var i,
        points = '',
        p =  settings.points || 7,    // number of points for star
        r = settings.radius || 50,    // radius of points on circle
        d = 360 / p;                 // degrees per point

    for (i = 0; i < p; i++) {
      var a = i * d + 90,
          x = r * Math.cos(a * Math.PI / 180),
          y = r * Math.sin(a * Math.PI / 180);

      points += this._trim(x) + ',' + this._trim(y) + ' ';
    };
    
    return this.plot(points);
  },
  
  // trim given float to 6 decimals
  _trim: function(n) {
    return Math.round(n * 1000000) / 1000000;
  }
  
});

SVG.extend(SVG.Wrap, {
  
  star: function(settings) {
    this.child.star(settings);
    
    return this;
  },
  
  ngon: function(settings) {
    this.child.ngon(settings);
    
    return this;
  }
  
});

