import React from "react";
import Highcharts from "highcharts";

class PieChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			series: [
				{
					name: "Assets( % )",
					data: [
						{
							name: "coin 1",
							y: 10.9,
							color: "#3498db",
						},
						{
							name: "coin 2",
							y: 58.1,
							color: "#9b59b6",
						},
						{
							name: "coin 3",
							y: 20.9,
							color: "#2ecc71",
						},
						{
							name: "coin 4",
							y: 10.1,
							color: "#f1c40f",
						},
					],
				},
			],
		};
	}

	highChartsRender() {
		Highcharts.chart({
			chart: {
				type: "pie",
				renderTo: "atmospheric-composition-1",
				style: {
					objectFit: "cover",
					height: "450px",
					marginTop: "-40px",
					padding: "0px",
					width: "100%",
				},
			},
			credits: {
				enabled: false,
			},
			title: {
				verticalAlign: "middle",
				floating: true,
				text: " ",
				style: {
					fontSize: "12px",
				},
			},
			plotOptions: {
				pie: {
					dataLabels: {
						// format: "{point.name}",
						enabled: false,
					},
					innerSize: "70%",
				},
			},
			series: this.state.series,
		});
	}

	componentDidMount() {
		this.highChartsRender();
	}

	render() {
		return (
			<div id="atmospheric-composition-1" className="p-0 m-0 " style={{ maxHeight: 300 }} />
		);
	}
}

export default PieChart;
