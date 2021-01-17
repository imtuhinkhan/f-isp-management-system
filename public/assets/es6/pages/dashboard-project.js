import themeColors from '../constant/theme-constant'

class DashboardProject {

    static init() {
        
        $('.datepicker-calendar').datepicker();
        
        const completionChart = document.getElementById("completion-chart");
        let gradient = completionChart.getContext('2d').createLinearGradient(0, 30, 10, 320);
        gradient.addColorStop(0, themeColors.blueLight);
        gradient.addColorStop(1, themeColors.transparent);
        const lineCtx = completionChart.getContext('2d');
        completionChart.height = 120;
        const lineConfig = new Chart(lineCtx, {
            type: 'line',
            data: {
            labels: ["16th", "17th", "18th", "19th", "20th", "21th", "22th", "23th", "24th", "25th", "26th"],
            datasets: [{
                    label: 'Series A',
                    data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 50, 70],
                    backgroundColor: gradient,
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
                        tension: 0,
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
    }
}

$(() => { DashboardProject.init(); });

