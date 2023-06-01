// Vue 3
import { createApp } from 'vue'
import App from './App.vue'

// Style CSS
import './style/variables.scss'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faPhoneFlip, faWindowRestore, faInstagram, faFacebookF, faTwitter, faCircle)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
