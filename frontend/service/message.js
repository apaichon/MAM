import axios from 'axios'
import https from "https";

export default {
  getMessage(uid) {
    return new Promise((resolve, reject) => {
      var mock =  [
      {
      userId: 1,
      id: 1,
      name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      message: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
      userId: 1,
      id: 2,
      name: "qui est esse",
      message: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
      userId: 1,
      id: 3,
      name: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      message: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
      },
      {
      userId: 1,
      id: 4,
      name: "eum et est occaecati",
      message: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
      },
      {
      userId: 1,
      id: 5,
      name: "nesciunt quas odio",
      message: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
      },
      {
      userId: 1,
      id: 6,
      name: "dolorem eum magni eos aperiam quia",
      message: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
      },
     ]

     setTimeout(() => {
      resolve(mock)
     }, 3000)
      // axios({
      //   method: "GET",
      //   url: 'http://localhost:3001',
      //   headers: {
      //     "Content-Type": "application/json",
      //     application: "Thai Stringers",
      //     objectfile: "../../biz/MessageBiz",
      //     objectname: "MessageBiz",
      //     objectmethod: "GetMessage"
      //   },
      //   httpsAgent: new https.Agent({
      //     rejectUnauthorized: false
      //   }),
      //   data: {
      //     uid
      //   }
      // }).then(({ data }) => {
      //   resolve(data)
      // }).catch(e => {
      //   reject(e)
      // })
    })
  }
}
