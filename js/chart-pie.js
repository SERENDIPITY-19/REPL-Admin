var ctx2 = document.getElementById('myPieChart').getContext('2d');
        var myPieChart = new Chart(ctx2, {
            type: 'doughnut',
            data: {
                labels: ['Direct', 'Social', 'Referral'],
                datasets: [{
                    data: [55, 30, 15],
                    backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                    hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                    hoverBorderColor: 'rgba(234, 236, 244, 1)',
                }],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            return data.labels[tooltipItem.index] + ': ' + 
                                   data.datasets[0].data[tooltipItem.index] + '%';
                        }
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        });