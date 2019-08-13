import  * as firebase from 'firebase/app';
// import 'firebase/auth'; 
import 'firebase/firestore';
import { config } from './firebase.config'
const database = firebase.initializeApp(config).firestore()

export default {
  async getMessage(id) {
    return await database
      .collection('Message')
      .doc(id).collection('inbox')
      .orderBy("createdAt", "desc")
      .get()
  },
  async updateMessage(data) {
    return await database
      .collection('Message')
      .doc(data.userId)
      .collection('inbox')
      .doc(data.messageId)
      .update({
        isRead: true
      })
  }
};