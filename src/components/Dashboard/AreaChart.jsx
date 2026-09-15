import React from "react";
import Highcharts from "highcharts";

const ASSETS_SERIES = [
	{
		name: "BTC/Bitcoin",
		data: [
			2, 9, 13, 50, 170, 299, 438, 841, 1169, 1703, 2422, 3692, 5543, 7345, 12298,
			18638, 22229, 25540, 28133, 29463, 31139, 27552, 26008, 25830, 26516, 27835,
			25542, 24138, 23208, 22217, 19008, 13708, 10979, 10577, 10027, 8570, 5273,
			4897, 4018, 3750,
		],
	},
	{
		name: "ETH/Ethereum",
		data: [
			1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492, 3346, 4259,
			5242, 6144, 7091, 8400, 9490, 10671, 13279, 15878, 19235, 22165, 26169,
			30665, 35130, 40159, 35078, 26734, 18179, 13188, 10114, 8038, 6286, 5215,
			4650, 4330, 4477,
		],
	},
	{
		name: "USDT/Tether",
		data: [
			1, 5, 20, 50, 100, 126, 60, 248, 627, 492, 259, 144, 400, 671, 3279, 5878,
			9235, 8281, 5665, 5130, 7159, 5078, 9154, 6339, 4368, 2188, 1114, 1000,
			2929, 4215, 6750, 8600, 7350, 8330, 10495, 11477, 9800, 10200, 11050, 12100,
		],
	},
];

const MARKET_SERIES = [
	{
		name: "Buy Volume",
		color: "#20CB6F",
		data: [
			820, 940, 1100, 980, 1250, 1420, 1380, 1600, 1750, 1680, 1900, 2100, 1980,
			2200, 2450, 2300, 2600, 2750, 2550, 2900, 3100, 2950, 3200, 3400, 3250,
			3600, 3800, 3650, 3900, 4100, 4000, 4300, 4500, 4400, 4700, 4900, 4800,
			5100, 5300, 5200,
		],
	},
	{
		name: "Sell Volume",
		color: "#F4B946",
		data: [
			700, 810, 900, 880, 1050, 1180, 1220, 1400, 1520, 1480, 1650, 1800, 1720,
			1950, 2100, 2050, 2280, 2400, 2320, 2550, 2700, 2620, 2850, 3000, 2920,
			3150, 3300, 3200, 3450, 3600, 3520, 3750, 3900, 3820, 4050, 4200, 4120,
			4350, 4500, 4420,
		],
	},
	{
		name: "Open Interest",
		color: "#0052D9",
		data: [
			1200, 1350, 1500, 1480, 1620, 1780, 1850, 2000, 2150, 2100, 2300, 2500,
			2450, 2650, 2800, 2750, 2950, 3100, 3050, 3250, 3400, 3350, 3550, 3700,
			3650, 3850, 4000, 3950, 4150, 4300, 4250, 4450, 4600, 4550, 4750, 4900,
			4850, 5050, 5200, 5150,
		],
	},
];

class AreaChart extends React.Component {
	chartId = "arbitgo-area-chart";

	renderChart() {
		const mode = this.props.mode || "assets";
		const isMarket = mode === "market";

		Highcharts.chart({
			chart: {
				type: "area",
				renderTo: this.chartId,
				height: 360,
			},
			title: { text: " " },
			xAxis: {
				allowDecimals: false,
				labels: {
					formatter: function () {
						return this.value;
					},
				},
			},
			yAxis: {
				title: {
					text: isMarket ? "Market Volume" : "Your Assets",
				},
				labels: {
					formatter: function () {
						return this.value / 1000 + "k";
					},
				},
			},
			tooltip: {
				pointFormat: isMarket
					? "{series.name}: <b>{point.y:,.0f}</b>"
					: "{series.name} held <b>{point.y:,.0f}</b>",
			},
			credits: { enabled: false },
			plotOptions: {
				area: {
					pointStart: 1,
					marker: {
						enabled: false,
						symbol: "circle",
						radius: 2,
						states: { hover: { enabled: true } },
					},
				},
			},
			series: isMarket ? MARKET_SERIES : ASSETS_SERIES,
		});
	}

	componentDidMount() {
		this.renderChart();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.mode !== this.props.mode) {
			this.renderChart();
		}
	}

	render() {
		return (
			<div
				id={this.chartId}
				className="p-0 m-0"
				style={{ height: 360, width: "100%" }}
			/>
		);
	}
}

export default AreaChart;
