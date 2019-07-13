import Router from 'vue-router'
import Pages from '../pages'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Pages.HomePage
    },
    {
      path: '/News',
      name: 'News',
      component: Pages.NewsPage
    },
    {
      path: '/Test',
      name: 'TestPage',
      component: Pages.TestPage
    },
    {
      path: '/NewsCategoryEditor',
      name: 'NewsCategoryEditorPage',
      component: Pages.NewsCategoryEditorPage
    },
    {
      path: '/NewsCategory',
      name: 'NewsCategoryListPage',
      component: Pages.NewsCategoryListPage
    }
  ]
})
