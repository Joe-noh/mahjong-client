<script>
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-routing'
  import { session, isLoggedIn } from '@/stores/session'
  import firebase from '@/lib/firebase'
  import backend from '@/lib/backend'

  async function onClick() {
    const idToken = await firebase.openPopup('twitter').catch(() => {})
    const { token } = await backend().login({ idToken })

    session.login(token)
    navigate('/', { replace: true })
  }

  onMount(() => {
    if ($isLoggedIn) {
      navigate('/', { replace: true })
    }
  })
</script>

<main>
  <h1>signup page</h1>
  <article>
    <button on:click|preventDefault="{onClick}">Signup</button>
  </article>
</main>
