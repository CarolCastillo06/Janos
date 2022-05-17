window.onload = function() {

var chart = new CanvasJS.Chart("chartContainer", {
	theme: "dark1", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
		text: "Ventas Semanales"
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
			{ y: 25, label: "Lunes" },
			{ y: 15, label: "Martes" },
			{ y: 10, label: "Miercoles" },
			{ y: 15, label: "Jueves" },
			{ y: 12, label: "Viernes" },
			{ y: 20, label: "Sabado" },
			{ y: 5, label: "Domigo" }
		]
	}]
});
chart.render();

}