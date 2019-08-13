import axios from 'axios'

export default {
 async getMessage(id) {
  const res = await axios({
        method: "GET",
        url: `http://localhost:3030/messages/${id}`,
        headers: {
          "Content-Type": "application/json"
        }
      })
  return res.data
  },
  async updateStatus(data) {
    const res = await axios({
      method: "PUT",
      url: `http://localhost:3030/messages`,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    })
    return res.data
  },
  async deleteMessage(data) {
    const res = await axios({
      method: "DELETE",
      url: `http://localhost:3030/messages?userId=${data.userId}&messageId=${data.messageId}`,
      headers: {
        "Content-Type": "application/json",
      }
    })
    return res.data
  }
}
