const ctx3 = document.getElementById('myBarChart').getContext('2d');
const myBarChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Monthly Revenue',
            data: [4000, 5000, 6000, 8000, 9500, 15000],
            backgroundColor: 'rgba(78, 115, 223, 0.8)',
            borderColor: 'rgba(78, 115, 223, 1)',
            borderWidth: 2,
            pointRadius: 3,
            pointBackgroundColor: 'rgba(78, 115, 223, 1)',
            pointBorderColor: 'rgba(78, 115, 223, 1)',
            pointHoverRadius: 3,
            pointHoverBackgroundColor: 'rgba(78, 115, 223, 1)',
            pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
            pointHitRadius: 10,
            pointBorderWidth: 2,
        }],
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }],
            yAxes: [{
                ticks: {
                    maxTicksLimit: 5,
                    padding: 10,
                    callback: function(value) {
                        return '$' + value.toLocaleString();
                    }
                }
            }],
        }
    }
});