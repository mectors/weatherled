var blinkstick = require('../lib/node_modules/blinkstick');
var device = blinkstick.findFirst();
var weather = [];
var country = [];
var rain = [0,0,255];
var sunny = [255,255,0];
var snow = [255,255,255];

var red = [0,255,0];
var white = [255,255,255];
var blue = [0,0,255];
var yellow = [255,255,0];

var barcelona = 6356055;
var london = 2643741;
var quebec = 6325494;

var spain = country.concat(red,yellow, red);
var uk = country.concat(red, white, blue);
var canada = country.concat(red, white, red);

var london = weather.concat(rain, rain, sunny, sunny);
var barcelona = weather.concat(sunny, sunny, sunny, sunny);
var quebec = weather.concat(sunny, sunny, snow, snow)

var asyncLoop = function(o){
    var i=-1;

    var loop = function(){
        i++;
        if(i==o.length){o.callback(); return;}
        o.functionToLoop(loop);
    }
    loop();//init
}

asyncLoop({
    length : 5,
    functionToLoop : function(loop){
      setTimeout(function() {
        device.setColors(0, uk, function(err) {
        });
        setTimeout(function() {
          device.setColors(0, london, function(err) {
          });
          setTimeout(function() {
            device.setColors(0, spain, function(err) {
            });
            setTimeout(function() {
              device.setColors(0, barcelona, function(err) {
              });
              setTimeout(function() {
                device.setColors(0, canada, function(err) {
                });
                setTimeout(function() {
                  device.setColors(0, quebec, function(err) {
                  });
                  loop();
                },3000);
              },2000);
            },3000);
          },2000);
        },3000);
      },2000);
    },
    callback : function(){

    }
});
