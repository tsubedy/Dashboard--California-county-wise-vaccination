// Reading json data file using 
console.log(data);


// gauge chart
function vacCounty(fullVaccination){
	return fullVaccination.total_full/fullVaccination.population * 100;
}
	// Bar graph
function highCounty(vaccination){
	percent = vaccination.total_full/vaccination.population * 100 > 65;	
	return (percent)
}

// County name drop down menu
function init() {
	// list of counties
	d3.select("#selDataset").selectAll('county')
		.data(data.map(county => county.county))
		.enter().append('option')
		.text(function (d) { return d; }).attr("value", function (d) 
		{return d; })
	

	// County Data Display
	Object.entries(data[0]).forEach(
		([key, value]) => d3.select("#county-data")
			.append("p").text(`${key}:  ${value}`));

	d3.selectAll("#selDataset").on("change", updatePlotly);


	// bar Chart
	var saferCounty = data.filter(highCounty);
	var trace1 = {
	y: saferCounty.map(row=>row.county),
	x: saferCounty.map(row=>(row.total_full/row.population*100)),
	type: "bar",
	orientation: "h"
	};

	var traceData = [trace1];

	var layout ={
	title: "Counties with more than 65% complete vaccination", 
	width: 650, 
	height: 350, 
	margin: { t: 50, b: 20}
};
	Plotly.newPlot("plot", traceData, layout);

	// Gauge Chart
	var gaugePoint = vacCounty(data[0])
	var gaugeData = [{
		domain: { x: [0, 1], y: [0, 1] },
		value: gaugePoint,
		title: {text: "<br>Fully Vaccinated Percentage </br> <br> of county Population"},
		type: "indicator",
		mode: "gauge+number",
		gauge: {
			axis: { range: [0, 100] },
			steps: [
				{ range: [90, 100], color: 'rgb(161, 251, 156)' },
				{ range: [80, 90], color: 'rgb(161, 241, 156)' },
				{ range: [70, 80], color: 'rgb(161, 231, 156)' },
				{ range: [60, 70], color: 'rgb(161, 211, 156)' },
				{ range: [50, 66], color: 'rgb(161, 181, 156)' },
				{ range: [40, 50], color: 'rgb(161, 161, 156)' },
				{ range: [30, 40], color: 'rgb(161, 141, 156)' },
				{ range: [20, 30], color: 'rgb(161, 121, 156)' },
				{ range: [10, 20], color: 'rgb(161, 101, 156))' },
				{ range: [0, 10], color: 'rgb(161, 81, 156)' }],
			threshold: {
				line: { color: "green", width: 8 },
				thickness: 0.5,
				value: 99.99}
		}
		}];
	var gaugeLayout = { width: 500, height: 450, margin: { t: 0, b: 0 } };
	Plotly.newPlot('gauge', gaugeData, gaugeLayout);
	} 

// Update the county data and gauge chart with new input
function updatePlotly() {
	var inputElement = d3.select("#selDataset");
	var inputValue = inputElement.property("value");
	var dataset = data.filter(county => county.county === inputValue);
	d3.select("#county-data").selectAll("p").remove();
	Object.entries(dataset[0]).forEach(
		([key, value]) => d3.select("#county-data")
			.append("p").text(`${key}:  ${value}`));

	// gauge chart update
	var gaugePoint =vacCounty(dataset[0]);
	Plotly.restyle('gauge', "value", gaugePoint);
}

init();

