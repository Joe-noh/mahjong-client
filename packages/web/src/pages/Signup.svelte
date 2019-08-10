<script>
  import { navigate } from 'svelte-routing'
  import firebase from '@/lib/firebase'
  import backend, { persistAuthToken } from '@/lib/backend'

  async function onClick(e) {
    const idToken = await firebase.openPopup('twitter').catch(() => {})
    const session = await backend().login({ idToken })
    persistAuthToken(session.token)

    navigate('/', { replace: true })
  }
</script>

<main>
  <h1>signup page</h1>
  <article>
    <button on:click|preventDefault="{onClick}">Signup</button>
  </article>
</main>
