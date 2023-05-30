// Vue 3
import { createApp } from 'vue'
import App from './App.vue'

// Style CSS
import './style/variables.scss'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
// import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
library.add(faPhoneFlip)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
