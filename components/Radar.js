import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  mounted() {
    this.renderChart({
      labels: ['JS framework(React/Vue)', 'Elixir', 'Ruby', 'Golang', 'Kotlin', 'Scala'],
      datasets: [
        {
          label: 'Programming language skills',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [85, 80, 70, 70, 50, 75]
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        display: false,
        xAxes: [{
          scaleLabel: {
            display: false
          },
          ticks: {
            beginAtZero: true,
            stepSize: 10,
            display: false
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: false
          },
          ticks: {
            beginAtZero: true,
            stepSize: 10,
            display: false
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }]
      }
    })
  }
}
