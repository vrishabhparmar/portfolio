


// navbar animation


$(window).scroll(function(){
	$('nav').toggleClass('navbar-dark bg-dark', $(this).scrollTop() > 50);
});


/// skills

var fm = new FluidMeter();
fm.init({
	targetContainer: document.getElementById("fluid-meter"),
	fillPercentage: 75,
	options: {
	  fontSize: "30px",
	  fontFamily: "Arial",
	  fontFillStyle: "white",
	  drawShadow: false,
	  drawText: true,
	  drawPercentageSign: true,
	  drawBubbles: false,
	  size: 250,
	  borderWidth: 10,
	  backgroundColor: "grey",
	  foregroundColor: "",
	  foregroundFluidLayer: {
		fillStyle: "green",
		angularSpeed: 100,
		maxAmplitude: 12,
		frequency: 30,
		horizontalSpeed: -150
	  },
	  backgroundFluidLayer: {
		fillStyle: "yellow",
		angularSpeed: 100,
		maxAmplitude: 9,
		frequency: 30,
		horizontalSpeed: 150
	  }
	}
});



var fm1 = new FluidMeter();

fm1.init({
	targetContainer: document.getElementById("fluid-meter2"),
	fillPercentage: 50,
	options: {
	  fontSize: "30px",
	  fontFamily: "Arial",
	  fontFillStyle: "white",
	  drawShadow: false,
	  drawText: true,
	  drawPercentageSign: true,
	  drawBubbles: false,
	  size: 250,
	  borderWidth: 10,
	  backgroundColor: "grey",
	  foregroundColor: "",
	  foregroundFluidLayer: {
		fillStyle: "green",
		angularSpeed: 100,
		maxAmplitude: 12,
		frequency: 30,
		horizontalSpeed: -150
	  },
	  backgroundFluidLayer: {
		fillStyle: "yellow",
		angularSpeed: 100,
		maxAmplitude: 9,
		frequency: 30,
		horizontalSpeed: 150
	  }
	}
});



var fm3 = new FluidMeter();

fm3.init({
	targetContainer: document.getElementById("fluid-meter3"),
	fillPercentage: 59,
	options: {
	  fontSize: "30px",
	  fontFamily: "Arial",
	  fontFillStyle: "white",
	  drawShadow: false,
	  drawText: true,
	  drawPercentageSign: true,
	  drawBubbles: true,
	  size: 250,
	  borderWidth: 10,
	  backgroundColor: "grey",
	  foregroundColor: "",
	  foregroundFluidLayer: {
		fillStyle: "green",
		angularSpeed: 100,
		maxAmplitude: 12,
		frequency: 30,
		horizontalSpeed: -150
	  },
	  backgroundFluidLayer: {
		fillStyle: "yellow",
		angularSpeed: 100,
		maxAmplitude: 25,
		frequency: 30,
		horizontalSpeed: 150
	  }
	}
});


var fm4 = new FluidMeter();

fm4.init({
	targetContainer: document.getElementById("fluid-meter4"),
	fillPercentage: 75,
	options: {
	  fontSize: "30px",
	  fontFamily: "Arial",
	  fontFillStyle: "white",
	  drawShadow: false,
	  drawText: true,
	  drawPercentageSign: true,
	  drawBubbles: false,
	  size: 250,
	  borderWidth: 10,
	  backgroundColor: "grey",
	  foregroundColor: "",
	  foregroundFluidLayer: {
		fillStyle: "green",
		angularSpeed: 100,
		maxAmplitude: 12,
		frequency: 30,
		horizontalSpeed: -150
	  },
	  backgroundFluidLayer: {
		fillStyle: "yellow",
		angularSpeed: 100,
		maxAmplitude: 25,
		frequency: 30,
		horizontalSpeed: 150
	  }
	}
});




///





