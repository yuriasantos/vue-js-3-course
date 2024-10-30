// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './components/FriendContact.vue' // import the component
import NewFriend from './components/NewFriend.vue'

const app = createApp(App)

app.component('friend-contact', FriendContact) // register the component
app.component('new-friend', NewFriend)

app.mount('#app')
