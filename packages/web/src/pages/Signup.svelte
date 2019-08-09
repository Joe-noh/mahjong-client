<script>
  import firebase from '@/lib/firebase'
  import backend from '@/lib/backend'

  async function onClick(e) {
    const idToken = await firebase.openPopup('twitter').catch(error => {
      console.log(error)
    })
    const session = await backend().login({ idToken })

    console.log(session)
  }
</script>

<main>
  <h1>signup page</h1>
  <article>
    <button on:click|preventDefault="{onClick}">Signup</button>
  </article>
</main>
