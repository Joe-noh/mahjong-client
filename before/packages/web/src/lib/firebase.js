import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  async openPopup(providerName) {
    this.initializeFirebase()
    const auth = firebase.auth()

    const provider = this.firebaseProvider(providerName)
    await auth.signInWithPopup(provider).catch(() => {
      throw new Error(`${providerName} login canceled`)
    })

    return await auth.currentUser.getIdToken()
  },

  initializeFirebase() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN
      })
    }
  },

  firebaseProvider(providerName) {
    if (providerName === 'twitter') {
      return new firebase.auth.TwitterAuthProvider()
    }
  }
}
