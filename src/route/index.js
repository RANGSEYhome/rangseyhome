// Import Vue Router
import { createRouter, createWebHistory } from "vue-router";

// Define routes with lazy-loaded components
const AboutMe = () => import("@/views/AboutMe.vue");
const Resume = () => import("@/views/Resume.vue");
const Contact = () => import("@/views/Contact.vue");
const BlogHome = () => import("@/views/BlogHome.vue");
const Blog = () => import("@/views/Blog.vue");
const BlogPost = () => import("@/views/BlogPost.vue");
const AboutProject = () => import("@/views/AboutProject.vue");
const NotFound = () => import('@/components/NotFound.vue');

// Define the paths and their corresponding components
const routes = [
  { path: "/", component: AboutMe },
  { path: "/resume", component: Resume },
  { path: "/contact", component: Contact },
  { path: "/blog", component: BlogHome },
  {
    path: "/blog",
    component: Blog,
    children: [{ path: ":id", component: BlogPost }],
  },
  { path: "/about-project", component: AboutProject },
  { path: '/:pathMatch(.*)*', component: NotFound }, // Catch-all for 404
];

// Create a router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Export the router
export default router;
