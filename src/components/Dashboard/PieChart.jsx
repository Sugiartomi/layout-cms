import React from "react";
import Highcharts from "highcharts";

class PieChart extends React.Component {
	chartId = "arbitgo-pie-chart";

	constructor(props) {
		super(props);
		this.state = {
			series: [
				{
					name: "Assets (%)",
					data: [
						{ name: "BTC", y: 38.1, color: "#3498db" },
						{ name: "ETH", y: 28.4, color: "#9b59b6" },
						{ name: "USDT", y: 22.5, color: "#2ecc71" },
						{ name: "Others", y: 11.0, color: "#f1c40f" },
					],
				},
			],
		};
	}

	highChartsRender() {
		const el = document.getElementById(this.chartId);
		const height = el?.clientHeight || 320;

		Highcharts.chart({
			chart: {
				type: "pie",
				renderTo: this.chartId,
				height,
				spacing: [4, 4, 4, 4],
				backgroundColor: "transparent",
			},
			credits: { enabled: false },
			title: { text: undefined },
			tooltip: {
				pointFormat: "<b>{point.percentage:.1f}%</b>",
			},
			legend: {
				enabled: true,
				align: "center",
				verticalAlign: "bottom",
				layout: "horizontal",
				itemStyle: { fontSize: "12px", fontWeight: "500" },
				symbolHeight: 10,
				symbolWidth: 10,
				symbolRadius: 6,
				itemDistance: 16,
				margin: 8,
				padding: 0,
				y: 0,
			},
			plotOptions: {
				pie: {
					innerSize: "58%",
					size: "88%",
					center: ["50%", "48%"],
					dataLabels: { enabled: false },
					showInLegend: true,
					borderWidth: 0,
				},
			},
			series: this.state.series,
		});
	}

	componentDidMount() {
		this.highChartsRender();
		this._onResize = () => this.highChartsRender();
		window.addEventListener("resize", this._onResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this._onResize);
	}

	render() {
		return <div id={this.chartId} className="ag-pie-wrap" />;
	}
}

export default PieChart;
