import themeColors from '../constant/theme-constant'

class DashboardDefault {

    static init() {

        const revenueChartConfig = new Chart(document.getElementById("revenue-chart").getContext('2d'), {
            type: 'line',
            data: {
                labels: ["16th", "17th", "18th", "19th", "20th", "21th", "22th", "23th", "24th", "25th", "26th"],
                datasets: [{
                    label: 'Series A',
                    backgroundColor: themeColors.transparent,
                    borderColor: themeColors.blue,
                    pointBackgroundColor: themeColors.blue,
                    pointBorderColor: themeColors.white,
                    pointHoverBackgroundColor: themeColors.blueLight,
                    pointHoverBorderColor: themeColors.blueLight,
                    data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 50, 70]
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

        const customersChartConfig = new Chart(document.getElementById("customers-chart").getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['New', 'Returning', 'Others'],
                datasets: [{
                    label: 'Series A',
                    backgroundColor: [themeColors.cyan, themeColors.purple, themeColors.gold],
                    pointBackgroundColor : [themeColors.cyan, themeColors.purple, themeColors.gold],
                    data: [350, 450, 100]
                }]
            },
            options: {
                legend: {
                    display: false
                },
                cutoutPercentage: 75,
                maintainAspectRatio: false
            }
        });

        const avgProfitChartConfig = new Chart(document.getElementById("avg-profit-chart").getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                datasets: [
                    {
                        label: 'Series A',
                        backgroundColor: themeColors.blue,
                        borderWidth: 0,
                        data: [38, 38, 30, 19, 56, 55, 31]
                    },
                    {
                        label: 'Series B',
                        backgroundColor: themeColors.blueLight,
                        borderWidth: 0,
                        data: [55, 69, 90, 81, 86, 27, 77]
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                scaleShowVerticalLines: false,
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.3,
                        display: true,
                        stacked: true,
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
                        barPercentage: 0.3,
                        display: true,
                        stacked: true,
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
                            stepSize: 40,
                            display: true,
                            beginAtZero: true,
                            fontSize: 13,
                            padding: 10
                        }
                    }]
                }
            }
        });
    }
}

$(() => { DashboardDefault.init(); });

