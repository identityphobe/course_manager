import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import UserMainPage from "../views/UserMainPage.vue"
import CourseList from "../views/CourseList.vue"
import CreateShortCourse from "../views/CreateShortCourse.vue"
import ViewShortCourse from "../views/ViewShortCourse.vue"
import Search from "../views/Search.vue"
import Participants from "../views/Participants.vue"
import EvaluateShortCourse from "../views/EvaluateShortCourse.vue"
import EvaluationReport from "../views/EvaluationReport.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/users/:id",
    component: UserMainPage,
  },
  {
    path: "/courses",
    component: CourseList,
  },
  {
    path: "/courses/new",
    component: CreateShortCourse,
  },
  {
    // change 
    path: "/courses/:id",
    component: ViewShortCourse,
  },
  {
    path: "/courses/search", component: Search,
  },
  {

    path: "/courses/:id/participants",
    component: Participants,
  },
  {
    path: "/courses/:id/evaluate",
    component: EvaluateShortCourse,
  },
  {
    path: "/courses/:id/report",
    component: EvaluationReport,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
