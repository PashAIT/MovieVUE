import{ createRouter, createWebHistory} from 'vue-router'
import WelcomePage from './components/welcomePage'
import MapPage from './components/map'
import Country from './components/country'


export default createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/home' , component: WelcomePage, alias:'/' },
        { path:'/map' , component: MapPage },
        { path:'/country' , component: Country },

        
    ]   
})
