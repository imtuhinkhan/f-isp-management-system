import themeColors from '../constant/theme-constant'

class DashboardCRM {

    static init() {
        const ratingChart = document.getElementById("rating-chart");
        const ratingChartCtx = ratingChart.getContext('2d');
        ratingChart.height = 120;
        const ratingChartConfig = new Chart(ratingChartCtx, {
            type: 'line',
            data: {
            labels: ["16th",  "18th",  "20th",  "22th",  "24th",  "26th"],
            datasets: [{
                    label: 'Series A',
                    data: [30, 60, 50, 85, 65, 75],
                    backgroundColor: themeColors.transparent,
                    borderColor: themeColors.blue,
                    pointBackgroundColor: themeColors.blue,
                    pointBorderColor: themeColors.white,
                    pointHoverBackgroundColor: themeColors.blueLight,
                    pointHoverBorderColor: themeColors.blueLight
                }]
            },
            options: {
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                responsive: true,
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                tooltips: {
                    mode: 'index'
                },
                elements: {
                    line: {
                        tension: 0.2,
                        borderWidth: 2
                    }
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
                        display: false
                    }],
                }
            }
        });

        const salesChart = document.getElementById("sales-chart");
        const salesChartCtx = salesChart.getContext('2d');
        const salesChartConfig = new Chart(salesChartCtx, {
            type: 'bar',
            data: {
            labels: [ 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [{
                label: 'Online',
                backgroundColor: themeColors.purple,
                borderWidth: 0,
                data: [ 20, 30, 35, 45, 55, 45]
            },
            {
                label: 'Offline',
                backgroundColor: themeColors.purpleLight,
                borderWidth: 0,
                data: [ 25, 35, 40, 50, 60, 50]
                }]
            },
            options: {
                legend: {
					display: false
				},
                scaleShowVerticalLines: false,
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.35,
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
                            max: 80,                            
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

        const porgressChart = new Chart(document.getElementById('porgress-chart').getContext("2d"), {
            type: 'doughnut',
            data: {
              datasets: [{
                data: [70, 30],
                backgroundColor: [themeColors.cyan, themeColors.grayLighter],
                hoverBackgroundColor: [themeColors.cyan, themeColors.grayLighter],
                borderWidth: 0
              }]
            },
        
            options: {
              scales: {
                xAxes: [{
                  display: false,
                }],
                yAxes: [{
                  display: false
                }]
              },
              legend: {
                display: false
              },
              tooltips: {
                enabled: false
              },
              cutoutPercentage: 92,
              responsive: false,
              maintainAspectRatio: false
            }
        });
    }
}

$(() => { DashboardCRM.init(); });

