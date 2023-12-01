import { createApp } from 'vue'
import App from './App.vue'
import Contacts from '@/pages/v-contacts-page'
import Service from '@/pages/v-service-page'
import Main from '@/pages/v-main-page'
import Specialists from '@/pages/v-specialists-page'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter ({
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/service-page',
            component: Service
        },
        {
            path: '/contacts-page',
            component: Contacts
        },
        {
            path: '/specialists-page',
            component: Specialists
        }
    ],
    history: createWebHistory()
})

const app = createApp(App)

app
    .use(router)
    .mount('#app')