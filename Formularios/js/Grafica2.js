window.onload = function () {

var chart = new CanvasJS.Chart("chartGrafica", {
	theme: "ligth1", // "light2", "dark1", "dark2"
	animationEnabled: false, // change to true		
	title:{
		text: "Plantas con tallo agregadas"
	},
	data: [
	{
		// Change type to "bar", "area", "spline", "pie",etc.
		type: "column",
		dataPoints: [
			{ label: "Enero",  y: 10  },
			{ label: "Febrero", y: 15  },
			{ label: "Marzo", y: 25  },
			{ label: "Abril",  y: 30  },
			{ label: "Junio",  y: 28  }
		]
	}
	]
});
chart.render();

}