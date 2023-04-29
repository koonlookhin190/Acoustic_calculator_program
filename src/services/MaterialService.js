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
  },
  getFrontWall() {
    return apiClient
      .get('/getFrontWall')
      .then((response) => {
        console.log(response.data)
        // var keep = JSON.stringify(response.data)
        GStore.frontWall = response.data
        console.log(GStore.frontWall)
      })
      .catch((error) => {
        return console.log(error)
      })
  },
  getLeftWall() {
    return apiClient
      .get('/getLeftWall')
      .then((response) => {
        console.log(response.data)
        // var keep = JSON.stringify(response.data)
        GStore.leftWall = response.data
        console.log(GStore.leftWall)
      })
      .catch((error) => {
        return console.log(error)
      })
  },
  getRightWall() {
    return apiClient
      .get('/getRightWall')
      .then((response) => {
        console.log(response.data)
        // var keep = JSON.stringify(response.data)
        GStore.rightWall = response.data
        console.log(GStore.rightWall)
      })
      .catch((error) => {
        return console.log(error)
      })
  },
  getBehindWall() {
    return apiClient
      .get('/getBehindWall')
      .then((response) => {
        console.log(response.data)
        // var keep = JSON.stringify(response.data)
        GStore.behindWall = response.data
        console.log(GStore.behindWall)
      })
      .catch((error) => {
        return console.log(error)
      })
  },
  getFloor() {
    return apiClient
      .get('/getFloor')
      .then((response) => {
        console.log(response.data)
        // var keep = JSON.stringify(response.data)
        GStore.floor = response.data
        console.log(GStore.floor)
      })
      .catch((error) => {
        return console.log(error)
      })
  },
  getCeiling() {
    return apiClient
      .get('/getCeiling')
      .then((response) => {
        console.log(response.data)
        // var keep = JSON.stringify(response.data)
        GStore.ceiling = response.data
        console.log(GStore.ceiling)
      })
      .catch((error) => {
        return console.log(error)
      })
  },
  deleteMaterial(deleteinfo) {
    return apiClient
      .post('/deleteMaterial', deleteinfo)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        return console.log(error)
      })
  }
}
