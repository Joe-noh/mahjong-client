import { writable, derived } from 'svelte/store'
import { getAuthToken, persistAuthToken, deleteAuthToken } from '@/lib/backend'

function createSession() {
  const { set, subscribe } = writable(null)

  return {
    subscribe,

    login(token) {
      persistAuthToken(token)
      set(token)
    },

    logout() {
      deleteAuthToken()
      set(null)
    },

    restore() {
      const token = getAuthToken()
      this.login(token)
    }
  }
}

export const session = createSession()

export const isLoggedIn = derived(session, token => !!token)
