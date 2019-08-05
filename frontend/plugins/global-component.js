import Vue from 'vue'
import ChartCard from '../components/Card/ChartCard'
import StatsCard from '../components/Card/StatsCard'
import NavTabsCard from '../components/Card/NavTabsCard'
import NavTabsTable from '../components/Tables/NavTabsTable.vue'
import OrderedTable from '../components/Tables/OrderedTable.vue'
import SimpleTable from '../components/Tables/OrderedTable.vue'

Vue.component('chart-card', ChartCard)
Vue.component('stats-card', StatsCard)
Vue.component('nav-tabs-card', NavTabsCard)
Vue.component('nav-tabs-table', NavTabsTable)
Vue.component('simple-table', SimpleTable)
