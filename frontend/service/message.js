import axios from 'axios'

export default {
  getMessage(uid) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: 'http://localhost:3030/messages/gJOCBRsRDOPWgj4ojEJGTdtyYZJ3',
        headers: {
          "Content-Type": "application/json"
        }
      }).then((data) => {
        resolve(data.data)
      }).catch(e => {
        reject(e)
      })
    })
  }
}
