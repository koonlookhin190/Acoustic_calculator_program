import apiClient from '@/services/AxiosClient.js'
import GStore from '@/store'
export default {
  getMaterial() {
    return apiClient
      .get('/getMaterial')
      .then((response) => {
        console.log(response.data)
        // var keep = JSON.stringify(response.data)
        GStore.material = response.data
        console.log(GStore.material)
      })
      .catch((error) => {
        return console.log(error)
      })
  }
}
