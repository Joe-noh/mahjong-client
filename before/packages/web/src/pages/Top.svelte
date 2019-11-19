<script>
  import { onMount } from 'svelte'
  import { push } from 'svelte-spa-router'
  import { session } from '@/stores/session'
  import firebase from '@/lib/firebase'
  import backend from '@/lib/backend'

  async function twitterLogin() {
    const idToken = await firebase.openPopup('twitter').catch(() => {})
    const { token } = await backend().login({ idToken })

    session.login(token)
    push('/lobby')
  }

  async function guestLogin() {
    const { token } = await backend().loginAsGuest()

    session.login(token)
    push('/lobby')
  }
</script>

<main>
  <h1>top page</h1>
  <article>
    <button on:click="{twitterLogin}">Login with Twitter</button>
    <button on:click="{guestLogin}">Play as Guest</button>
  </article>
</main>
