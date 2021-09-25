import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

export interface State {}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
})

export const useStore = () => baseUseStore(key)
