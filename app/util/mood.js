
/*!
 * Module dependencies.
 */


var lpd8806_lib = require('./lpd8806');

var num_leds = 100;
var device = '/dev/spidev0.0';
var lpd8806;

// Launch
exports.launch = function() {
	if(!lpd8806) {
		lpd8806 = new lpd8806_lib(num_leds, device);
		lpd8806.fillRGB(0,255,0);
		lpd8806.updateBrightness(1.0);
	}
}

exports.color = function(r,g,b) {
	if(lpd8806) {
		lpd8806.fillRGB(r,g,b);
	}
}



