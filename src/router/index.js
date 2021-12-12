import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import UserMainPage from "../views/UserMainPage.vue"
import Courses from "../views/Courses.vue"
// import CourseList from "../components/CourseList.vue"
import CreateShortCourse from "../views/CreateShortCourse.vue"
import ViewShortCourse from "../views/ViewShortCourse.vue"
import EditShortCourse from "../views/EditShortCourse.vue"
import Search from "../views/Search.vue"
import Participants from "../views/Participants.vue"
import EvaluateShortCourse from "../views/EvaluateShortCourse.vue"
import EvaluationReport from "../views/EvaluationReport.vue"
import CoursesJoined from "../views/CoursesJoined"
import Users from "../views/Users"
import AddUser from "../views/AddUser"
import UserProfile from "../views/UserProfile"
import ViewCertificate from "../views/ViewCertificate"

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
    path: "/users/:id/profile",
    component: UserProfile
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/users/new",
    component: AddUser,
  },
  {
    path: "/courses",
    component: Courses,
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
  },
  {
    path: "/courses/:courseID/certificate",
    component: ViewCertificate
  },
  {
    path: "/:user/courses/joined",
    component: CoursesJoined
  },
  {
    path: "/courses/:id/edit",
    component: EditShortCourse,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
