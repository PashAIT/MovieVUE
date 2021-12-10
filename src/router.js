import{ createRouter, createWebHistory} from 'vue-router'
import WelcomePage from './components/welcomePage'
import MapPage from './components/map'
import Country from './components/country'
import Movie from './components/movie'
import ContrastAndComprasion from './components/contrastAndComprasion'


export default createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/home' , component: WelcomePage, alias:'/' },
        { path:'/map' , component: MapPage },
        { path:'/country' , component: Country },
        { path:'/movie' , component: Movie },
        { path:'/contrast-and-comparsion' , component: ContrastAndComprasion}

        
    ]   
})
