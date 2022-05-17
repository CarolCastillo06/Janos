window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	exportEnabled: true,
	animationEnabled: true,
	theme:"dark2",
	title:{
		text: "Janos"
	},
	subtitles: [{
		text: "Lo mejor a tu servicio"
	}], 
	axisX: {
		title: "Estado"
	},
	axisY: {
		title: "Insumos Nuevos",
		titleFontColor: "#0c8",
		lineColor: "#0c8",
		labelFontColor: "#0c8",
		tickColor: "#0c8",
		includeZero: true
	},
	axisY2: {
		title: "Ventas",
		titleFontColor: "#0c8",
		lineColor: "#0c8",
		labelFontColor: "#0c8",
		tickColor: "#0c8",
		includeZero: true
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "column",
		name: "insumos",
		showInLegend: true,      
		yValueFormatString: "#,##0.# unidades",
		dataPoints: [
			{ label: "Planta1",  y: 190.5 },
			{ label: "Planta2", y: 200 },
			{ label: "Planta3", y: 253 },
			{ label: "Planta4",  y: 200 },
			{ label: "Planta5",  y: 282 }
		]
	},
	{
		type: "column",
		name: "Ventas",
		axisYType: "secondary",
		showInLegend: true,
		yValueFormatString: "#,##0.# Unidades",
		dataPoints: [
			{ label: "Venta Enero", y: 21.5 },
			{ label: "Venta Febrero", y: 135 },
			{ label: "Venta Marzo", y: 425 },
			{ label: "Venta Abril", y: 130 },
			{ label: "Venta Mayo", y: 528 }
		]
	}]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

}