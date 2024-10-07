// import vue-router library (need: npm install vue-router@4)
import { createRouter, createWebHistory } from "vue-router";

// defines the components
// normal define route => import Home from '@/pages/Home.vue'
// defines the route (with lazy load)
const AboutMe = () => import("@/views/AboutMe.vue");
const Resume = () => import("@/views/Resume.vue");
const Contact = () => import("@/views/Contact.vue");
const BlogHome = () => import("@/views/BlogHome.vue");
const Blog = () => import("@/views/Blog.vue");
const BlogPost = () => import("@/views/BlogPost.vue");
const AboutProject = () => import("@/views/AboutProject.vue");
const NotFound = () => import('@/components/NotFound.vue')

// define the paths and their corresponding components
const routes = [
  { path: "/", component: AboutMe },
  { path: "/resume", component: Resume },
  { path: "/contact", component: Contact },
  { path: "/blog", component: BlogHome },
  {
    path: "/blog",
    component: Blog,
    children: [{ path: ":id", component: BlogPost}],
  },
  { path: "/about-project", component: AboutProject },
  { path : '/:pathMatch(.*)*', component: NotFound},
  { path : '/*', component: NotFound},
];

// create a router object, passing an object with history and routes properties
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// exported router to be used throughout the Vue.js
export default router;
