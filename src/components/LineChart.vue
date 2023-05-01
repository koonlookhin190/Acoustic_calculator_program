<template>
  <div class="chart">
    <Line
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      :key="chartKey"
      :height="500"
    />
  </div>
  <button @click="refreshGraph" class="refreshbtn">Refresh Graph</button>
</template>
<script>
import { Line } from 'vue-chartjs'
import GStore from '@/store'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
import CalculateService from '@/services/CalculateService'
export default {
  inject: ['GStore'],
  name: 'LineChart',
  components: { Line },
  data() {
    return {
      chartKey: 0,
      chartData: {
        labels: ['250hz', '500hz', 'K1', 'K2', 'K4'],
        backgroundColor: '#fb8b24',
        datasets: [
          {
            label: 'Before improve',
            data: [
              GStore.graphBefore.at250,
              GStore.graphBefore.at500,
              GStore.graphBefore.atK1,
              GStore.graphBefore.atK2,
              GStore.graphBefore.atK4
            ],
            backgroundColor: '#fb8b24',
            borderColor: '#fb8b24',
            fill: false,
            tension: 0.1
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    refreshGraph() {
      this.chartKey += 1
      // Update the chart data
      let calR = {
        volume: GStore.resultCal.volume
      }

      CalculateService.getCalculateR(calR)
      this.chartData.datasets[0].data = [
        GStore.graphBefore.at250,
        GStore.graphBefore.at500,
        GStore.graphBefore.atK1,
        GStore.graphBefore.atK2,
        GStore.graphBefore.atK4
      ]
      console.log(this.chartData.datasets[0].data)
    }
  }
}
</script>

<style>
.refreshbtn {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 1rem 2.7rem;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  background: #fb8b24;
  border: 3px solid #121212;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 5px 5px 0px #000000;
}
.chart {
  padding: 20px;
  border: solid;
  background-color: white;
}
</style>
