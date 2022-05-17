window.onload = function() {

var chart = new CanvasJS.Chart("chartContainer", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
		text: "Desktop Browser Market Share in 2016"
	},
	data: [{
		type: "pie",
		startAngle: 25,
		toolTipContent: "<b>{label}</b>: {y}%",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}%",
		dataPoints: [
			{ y: 51.08, label: "Planta1" },
			{ y: 27.34, label: "Planta2" },
			{ y: 10.62, label: "Planta3" },
			{ y: 5.02, label: "Planta4" },
			{ y: 4.07, label: "Planta5" },
			{ y: 1.22, label: "Planta6" },
			{ y: 0.44, label: "Planta7" }
		]
	}]
});
chart.render();

}