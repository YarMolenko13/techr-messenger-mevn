import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import io from 'socket.io-client'
const socket = io('https://techr-messenger-express.herokuapp.com/')

export default socket

// if (process.env.NODE_ENV === "production") {
// 	Vue.prototype.$apiUrl = "http://localhost:3000/"
// }

const app = createApp(App)
app.config.globalProperties.$apiUrl = "https://techr-messenger-express.herokuapp.com/"
app.use(store).use(router).mount("#app");
