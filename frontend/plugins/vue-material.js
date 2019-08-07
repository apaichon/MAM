import Vue from 'vue'
import SideBar from "../components/SidebarPlugin"
import VueMaterial from 'vue-material'
import Chartist from "chartist"
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import '../assets/meterial-style.scss'

Vue.prototype.$Chartist = Chartist;
Vue.use(SideBar)
Vue.use(VueMaterial)
