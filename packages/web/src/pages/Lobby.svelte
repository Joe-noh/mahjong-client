<script>
  import { navigate } from 'svelte-routing'
  import backend from '@/lib/backend'

  async function joinGame() {
    const api = backend()

    try {
      const { gameId } = await api.participateGame()
      navigate(`/g/${gameId}`)
    } catch (e) {
      console.log(e)
    }
  }
</script>

<main>
  <button on:click="{joinGame}">Join</button>
</main>
