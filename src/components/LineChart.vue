<template>
  <div>
    <Line
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      :key="chartKey"
    />
  </div>
  <button @click="refreshGraph">Refresh Graph</button>
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
