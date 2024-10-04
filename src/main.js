// import necessary function from vue
import { createApp } from 'vue'
// import necessary component App
import App from './App.vue'
// import application's router configuration
import router from './route'
// import customized css
import './assets/css/css-customized.css'
// import i18n
import i18n from './i18n/main.js'

// import store
import pinia from './stores'

// Function to change the theme
function changeTheme(themePath) {
    const themeStyleLink = document.getElementById('theme-style');
    if (themeStyleLink) {
        themeStyleLink.href = themePath;
    } else {
        console.error('Theme style link element not found!');
    }
}
// Load the theme from the environment variable
const defaultTheme = process.env.VUE_APP_DEFAULT_THEME || 'assets/css/theme-1.css';
console.log('Loading theme:', defaultTheme); // Debugging line
console.log('Process Environment:', process.env); // Log all environment variables
changeTheme(defaultTheme);

// create a new vue application
const app = createApp(App)
// integrate the vue router with the vue application
app.use(router)
// use i18n
app.use(i18n)
// use store
app.use(pinia)

// mounts the Vue application to an element with the id app (need to put at the last)
app.mount('#app')