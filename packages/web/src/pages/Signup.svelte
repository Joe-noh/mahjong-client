<script>
  import { Backend } from '@mahjong-client/core'

  import firebase from 'firebase/app'
  import 'firebase/auth'

  async function onClick(e) {
    firebase.initializeApp({
      apiKey: 'AIzaSyCL2aXJ4OcJcUniX4Uc66oM0uJoQDF9KAI',
      authDomain: 'mah-development.firebaseapp.com'
    })

    const provider = new firebase.auth.TwitterAuthProvider()
    const result = await firebase.auth().signInWithPopup(provider)
    const idToken = await firebase.auth().currentUser.getIdToken()

    console.log(result)
    console.log(idToken)
  }
</script>

<main>
  <h1>signup page</h1>
  <article>
    <button on:click="{onClick}">Signup</button>
  </article>
</main>
