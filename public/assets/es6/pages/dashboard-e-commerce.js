import themeColors from '../constant/theme-constant'

class DashboardECommerce {

    static init() {
        
        const salesChart = document.getElementById("sales-chart");
        const salesChartCtx = salesChart.getContext('2d');
        salesChart.height = 120;
        const salesChartConfig = new Chart(salesChartCtx, {
            type: 'bar',
            data: {
            labels: [ 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [{
                label: 'Online',
                backgroundColor: themeColors.blue,
                borderWidth: 0,
                data: [ 20, 30, 35, 45, 55, 45]
            },
            {
                label: 'Offline',
                backgroundColor: themeColors.blueLight,
                borderWidth: 0,
                data: [ 25, 35, 40, 50, 60, 50]
                }]
            },
            options: {
                scaleShowVerticalLines: false,
                responsive: true,
                legend: {
					display: false
				},
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

        const revenueChart = document.getElementById("revenue-chart");
        const revenueChartCtx = revenueChart.getContext('2d');
        revenueChart.height = 120;
        const revenueChartConfig = new Chart(revenueChartCtx, {
            type: 'line',
            data: {
                labels: ["16th", "17th", "18th", "19th", "20th", "21th", "22th", "23th", "24th", "25th", "26th"],
                datasets: [ 
                    {
                        backgroundColor: themeColors.transparent,
                        borderColor: themeColors.cyan,
                        pointBackgroundColor: themeColors.cyan,
                        pointBorderColor: themeColors.white,
                        pointHoverBackgroundColor: themeColors.cyanLight,
                        pointHoverBorderColor: themeColors.cyanLight,
                        data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 50, 70],
                        label: 'Series A' 
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                legend: {
					display: false
				},
                tooltips: {
                    mode: 'index'
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
                }
            }
        });

        const customerChart = document.getElementById("customer-chart");
        const customerChartCtx = customerChart.getContext('2d');
        customerChart.height = 292;
        const customerChartConfig = new Chart(customerChartCtx, {
            type: 'doughnut',
            data: {
                labels: ['Direct', 'Referral', 'Social Network'],
                datasets: [
                    {
                        fill: true,
                        backgroundColor: [themeColors.gold, themeColors.blue, themeColors.red],
                        pointBackgroundColor : [themeColors.gold, themeColors.blue, themeColors.red],
                        data: [350, 450, 100]
                    }
                ]
            },
            options: {
                legend: {
					display: false
				},
                cutoutPercentage: 80,
                maintainAspectRatio: false
            }
        });
    }
}

$(() => { DashboardECommerce.init(); });

