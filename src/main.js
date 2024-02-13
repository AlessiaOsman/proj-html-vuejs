import 'bootstrap/dist/css/bootstrap.min.css'
import '@fontsource/barlow';
import '@fontsource-variable/orbitron';
import { createApp } from 'vue'
import App from './App.vue'

//added generic library
import { library } from '@fortawesome/fontawesome-svg-core'

//myicons
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


//added font awesome's component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(solidStar, regularStar, faFacebookF, faInstagram, faTwitch, faYoutube);

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app')