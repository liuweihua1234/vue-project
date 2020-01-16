import Vue from 'vue'
import VueRouter from 'vue-router'
import 'iview/dist/styles/iview.css';
import iView from 'iview';

Vue.use(VueRouter)
Vue.use(iView)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/view/Main'),
      children: [
        {
          path: '/',
          component: () => import('@/view/student/studentList')
        },
        {
          path: '/grade',
          component: () => import('@/view/grade/gradeList')
        }
      ]
    }
  ]
})

export default router