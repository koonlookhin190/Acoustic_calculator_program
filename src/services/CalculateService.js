import apiClient from '@/services/AxiosClient.js'
import GStore from '@/store'
export default {
  getCalculate(schema) {
    return apiClient
      .post('/getCalculate', schema)
      .then((response) => {
        console.log(response.data)
        // var keep = JSON.stringify(response.data)
        GStore.resultCal = response.data
        console.log(GStore.resultCal)
      })
      .catch((error) => {
        return console.log(error)
      })
  },
  calculateMaterial(inputMaterial) {
    return apiClient
      .post('/calculateMaterial', inputMaterial)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        return console.log(error)
      })
  },
  getCalculateR(volume) {
    return apiClient
      .post('/calculateAll', volume)
      .then((response) => {
        console.log(response.data)
        GStore.graphBefore = response.data
      })
      .catch((error) => {
        return console.log(error)
      })
  }
}
