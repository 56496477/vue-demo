import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerconfig from './router'
import App from './App.vue'
import {timeFormat, ISOTimeFormat, Strtitle} from './filters'
import VueLazyload from 'vue-lazyload'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueLazyload, {
preLoad: 1.3,
error: 'http:10.10.0.98:8080/success.gif',
loading: 'http:10.10.0.98:8080/success.gif',
try: 1
})

Vue.filter('timeFormat',timeFormat)
Vue.filter('ISOTimeFormat',ISOTimeFormat)
Vue.filter('Strtitle',Strtitle)
var router = new VueRouter()

routerconfig(router)

router.start(App,'#app')