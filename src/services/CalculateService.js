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
  }
}
