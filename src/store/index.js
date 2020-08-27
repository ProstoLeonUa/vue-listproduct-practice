import Vue from 'vue'
import Vuex from 'vuex'
import { $http } from "@/helpers/index"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		items: []
	},
	mutations: {
		'SET_ITEM'(context, payload) {
			context.items = [
				...context.items,
				...payload
			];
		}
	},
	getters: {
		'GET_ITEMS'({ items }){
			return items
		}
	},
	actions: {
		'SET_ITEM'(context, payload) {
			$http(payload)
				.then(res => { context.commit('SET_ITEM', res.data) })
				.catch(e => { console.log(e) })
		}
	},
	modules: {
	}
})
