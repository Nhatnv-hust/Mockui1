import { createApp } from 'vue'
import App from './App.vue'

// import {library} from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import { faHouse,faMagnifyingGlass,faCaretDown} from '@fortawesome/free-solid-svg-icons'
// import { faPaperPlane, faHeart,faBookmark,faBell} from '@fortawesome/free-regular-svg-icons';
import router from './router/index'

// library.add(faHouse,faPaperPlane,faHeart,faBookmark,faMagnifyingGlass,faBell,faCaretDown)

createApp(App).use(router).mount('#app')
    // .component(('font-awesome-icon', FontAwesomeIcon))
