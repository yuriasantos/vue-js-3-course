// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './components/FriendContact.vue'  // import the component

const app = createApp(App)

app.component('friend-contact', FriendContact)  // register the component

app.mount('#app')
