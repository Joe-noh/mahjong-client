<script>
  import { Backend } from '@mahjong-client/core'
  import firebase from '@/lib/firebase'

  async function onClick(e) {
    const idToken = await firebase.openPopup('twitter').catch(error => {
      console.log(error)
    })

    console.log(idToken)
  }
</script>

<main>
  <h1>signup page</h1>
  <article>
    <button on:click|preventDefault="{onClick}">Signup</button>
  </article>
</main>
