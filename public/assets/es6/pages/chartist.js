class ChartChartist {

    static init() {

        new Chartist.Line('#simple-line-chart', {
			labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			series: [
                [2, 11, 6, 8, 15],
                [2, 8, 3, 4, 9]
			]
		  }, {
			fullWidth: true,
			chartPadding: {
			    right: 40
			}
        });
        
		const times = (n)=> {
			return Array.apply(null, new Array(n));
		};
			
		const lineScatterdata = times(52).map(Math.random).reduce((data, rnd, index)=> {
			data.labels.push(index + 1);
			data.series.forEach((series)=> {
				series.push(Math.random() * 100)
			});
			
			return data;
		}, {
			labels: [],
			series: times(4).map(()=> { return new Array() })
		});
			
		const lineScatterOptions = {
			showLine: false,
			axisX: {
				labelInterpolationFnc: (value, index)=> {
				    return index % 13 === 0 ? 'W' + value : null;
				}
			}
		};
			
		const lineScatterResponsiveOptions = [
			['screen and (min-width: 640px)', {
				axisX: {
                    labelInterpolationFnc: (value, index) => {
                        return index % 4 === 0 ? 'W' + value : null;
                    }
				}
			}]
		];
			
		new Chartist.Line('#line-scatter-chart', lineScatterdata, lineScatterOptions, lineScatterResponsiveOptions);

        new Chartist.Line('#line-chart-area', {
			labels: [1, 2, 3, 4, 5, 6, 7, 8],
			series: [
			  [5, 9, 7, 8, 5, 3, 5, 4]
			]
		  }, {
				low: 0,
				showArea: true
		});

        const biPolarBarData = {
			labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
			series: [
				[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
			]
		};
		
		const biPolarBarOptions = {
			high: 10,
			low: -10,
			axisX: {
				labelInterpolationFnc: function(value, index) {
					return index % 2 === 0 ? value : null;
				}
			}
		};
		
        new Chartist.Bar('#bi-polar-bar', biPolarBarData, biPolarBarOptions);
        
        new Chartist.Bar('#stacked-bar', {
			labels: ['Q1', 'Q2', 'Q3', 'Q4'],
			series: [
				[800000, 1200000, 1400000, 1300000],
				[200000, 400000, 500000, 300000],
				[100000, 200000, 400000, 600000]
			]
		}, {
			stackBars: true,
			axisY: {
				labelInterpolationFnc: function(value) {
					return (value / 1000) + 'k';
				}
			}
		}).on('draw', function(data) {
			if(data.type === 'bar') {
				data.element.attr({
					style: 'stroke-width: 30px'
				});
			}
        });
        
        new Chartist.Bar('#horizontal-bar', {
			labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			series: [
				[5, 4, 3, 7, 5, 10, 3]
			]
		}, {
			seriesBarDistance: 10,
			reverseData: true,
			horizontalBars: true,
			axisY: {
				offset: 70
			}
		});

        new Chartist.Pie('#gauge-chart', {
			series: [20, 10, 30, 40]
		}, {
			donut: true,
			donutWidth: 60,
			startAngle: 270,
			total: 200,
			showLabel: false
        });
        
        new Chartist.Pie('#donut-chart', {
			series: [20, 10, 30, 40]
			}, {
			donut: true,
			donutWidth: 60,
			donutSolid: true,
			startAngle: 270,
			showLabel: true
		});
    }
}

$(() => { ChartChartist.init(); });

