import themeColors from '../constant/theme-constant'

class ChartChartJs {

    static init() {
        //Line Chart
		const lineChart = document.getElementById("line-chart");
		const lineCtx = lineChart.getContext('2d');
		lineChart.height = 120;
		const lineConfig = new Chart(lineCtx, {
			type: 'line',
			data: {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
                    label: 'Series A',
                    backgroundColor: themeColors.transparent,
                    borderColor: themeColors.blue,
                    pointBackgroundColor: themeColors.blue,
                    pointBorderColor: themeColors.white,
                    pointHoverBackgroundColor: themeColors.blueLight,
                    pointHoverBorderColor: themeColors.blueLight,
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Series B',
                    backgroundColor: themeColors.transparent,
                    borderColor: themeColors.cyan,
                    pointBackgroundColor: themeColors.cyan,
                    pointBorderColor: themeColors.white,
                    pointHoverBackgroundColor: themeColors.cyanLight,
                    pointHoverBorderColor: themeColors.cyanLight,
                    data: [28, 48, 40, 19, 86, 27, 90]
				}]
			},
			options: {
				legend: {
					display: false
                },
                scales: {
                    xAxes: [{ 
                        gridLines: [{
                            display: false,
                        }],
                        ticks: {
                            display: true,
                            fontColor: themeColors.grayLight,
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineBorderDash: [3, 4]  
                        },
                        ticks: {
                            display: true,
                            max: 100,                            
                            stepSize: 20,
                            fontColor: themeColors.grayLight,
                            fontSize: 13,
                            padding: 10
                        }  
                    }],
                },
			}
        });
        
        //Stacked Area Chart
		const stackedAreaChart = document.getElementById("stacked-area-chart");
		const stackedAreaCtx = stackedAreaChart.getContext('2d');
		stackedAreaChart.height = 120;
		const stackedAreaConfig = new Chart(stackedAreaCtx, {
			type: 'line',
			data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: 'Series A',
                    backgroundColor: themeColors.blueLight,
                    borderColor: themeColors.blue,
                    pointBackgroundColor: themeColors.blue,
                    pointBorderColor: themeColors.white,
                    pointHoverBackgroundColor: themeColors.blueLight,
                    pointHoverBorderColor: themeColors.blueLight,
                    data: [65, 59, 80, 81, 56, 55, 40]
                }]
			},
			options: {
				responsive: true,
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                elements: {
                    line: {
                        tension: 0.5
                    },
                    point: { 
                        radius: 0 
                    }
                },
                scales: {
                    xAxes: [{ 
                        gridLines: [{
                            display: false,
                        }],
                        ticks: {
                            fontColor: themeColors.grayLight,
                            display: true,
                            beginAtZero: true,
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineBorderDash: [3, 4],
                            scaleLabel: {
                                display: false,
                                labelString: 'Value'
                            }    
                        },
                        ticks: {
                            max: 100,                            
                            stepSize: 20,
                            display: true,
                            beginAtZero: true,
                            fontColor: themeColors.grayLight,
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                }
			}
        });
        
        //Bar Chart
		const barChart = document.getElementById("bar-chart");
		const barCtx = barChart.getContext('2d');
		barChart.height = 120;
		const barConfig = new Chart(barCtx, {
			type: 'bar',
			data: {
			labels: [ '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
			datasets: [{
				label: 'Series A',
				backgroundColor: themeColors.blue,
                borderWidth: 0,
				data: [ 56, 55, 40, 37, 54, 76, 63, 62]
			},
			{
				label: 'Series B',
				backgroundColor: themeColors.blueLight,
                borderWidth: 0,
				data: [ 86, 27, 90, 43, 65 ,76, 87, 85]
				}]
			},
			
			options: {
				scaleShowVerticalLines: false,
                responsive: true,
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.45,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {
                            max: 100,                            
                            stepSize: 20,
                            display: true,
                            beginAtZero: true,
                            fontSize: 13,
                            padding: 10
                        }
                    }]
                }
			}
        });
        
        //Radar Chart
		const radarChart = document.getElementById("radar-chart");
		const radarCtx = radarChart.getContext('2d');
		radarChart.height = 292;
		const radarConfig = new Chart(radarCtx, {
			type: 'radar',
			data: {
				labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
				datasets: [{
					label: 'label1',
					backgroundColor: themeColors.blueLight,
                    borderWidth: 2,
                    borderColor: themeColors.blue,
					data: [65, 59, 90, 81, 56, 55, 40]
				}, {
					label: 'label2',
					backgroundColor: themeColors.cyanLight,
                    borderWidth: 2,
                    borderColor: themeColors.cyan,
					data: [28, 48, 40, 19, 96, 27, 100]
				}]
			},
			options: {
				responsive: true,
                scale: {
                    ticks: {
                        max: 100,                            
                        stepSize: 25,
                    },
                    gridLines: {
                        color: themeColors.border
                    },  
                    angleLines: {
                        color: themeColors.border
                    }   
                } 
			}
        });
        
        //Donut Chart
		const donutChart = document.getElementById("donut-chart");
		const donutCtx = donutChart.getContext('2d');
		donutChart.height = 292;
		const donutData = {
			labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
			  datasets: [
				{
					fill: true,
					backgroundColor: [themeColors.blue, themeColors.gold, themeColors.cyan],
                    pointBackgroundColor : [themeColors.blue, themeColors.gold, themeColors.cyan],
					data: [350, 450, 100]
				}
			]
		};
		const donutConfig = new Chart(donutCtx, {
			type: 'doughnut',
			data: donutData,
			options: {
				maintainAspectRatio: false,
				hover: {mode: null},
				cutoutPercentage: 45
			}
        });
        
        //Polar Chart
		const polarChart = document.getElementById("polar-chart");
		const polarCtx = polarChart.getContext('2d');
		polarChart.height = 392;
		const polarData = {
			labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
			  datasets: [
				{
					fill: true,
					backgroundColor: [themeColors.blueLight, themeColors.cyanLight, themeColors.goldLight, themeColors.purpleLight, themeColors.redLight],
                    borderColor : [themeColors.blue, themeColors.cyan, themeColors.gold, themeColors.purple, themeColors.red],
					data: [300, 400, 100, 200, 100]
				}
			]
		};
		const polarConfig = new Chart(polarCtx, {
			type: 'polarArea',
			data: polarData,
			options: {
				maintainAspectRatio: false,
				hover: {mode: null},
				legend: {
					display: false
				}
			}
		});
    }
}

$(() => { ChartChartJs.init(); });

