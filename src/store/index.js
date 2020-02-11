import calendar from './modules/calendar.js'
import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login.js'
import register from './modules/register.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        calendar,
        login,
        register
    }
})