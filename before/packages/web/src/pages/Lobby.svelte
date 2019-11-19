<script>
  import { push } from 'svelte-spa-router'
  import backend from '@/lib/backend'

  async function joinGame() {
    const api = backend()

    try {
      const { gameId } = await api.participateGame()
      push(`/g/${gameId}`)
    } catch (e) {
      console.log(e)
    }
  }
</script>

<main>
  <button on:click="{joinGame}">Join</button>
</main>
