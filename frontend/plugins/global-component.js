import Vue from 'vue'
import TopNavbar from '../layouts/TopNavbar'
import ContentFooter from '../layouts/ContentFooter'
import ChartCard from '../components/Card/ChartCard'
import StatsCard from '../components/Card/StatsCard'
import NavTabsCard from '../components/Card/NavTabsCard'
import NavTabsTable from '../components/Tables/NavTabsTable'
import OrderedTable from '../components/Tables/OrderedTable'
import SimpleTable from '../components/Tables/OrderedTable'

Vue.component('top-navbar', TopNavbar)
Vue.component('content-footer', ContentFooter)
Vue.component('chart-card', ChartCard)
Vue.component('stats-card', StatsCard)
Vue.component('nav-tabs-card', NavTabsCard)
Vue.component('nav-tabs-table', NavTabsTable)
Vue.component('ordered-table', OrderedTable)
Vue.component('simple-table', SimpleTable)
