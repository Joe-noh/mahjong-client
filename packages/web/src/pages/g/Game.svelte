<script>
  import { onMount } from 'svelte'
  import backend from '@/lib/backend'

  export let gameId

  const api = backend()

  onMount(() => {
    api.joinGame(gameId)

    // set callbacks

    api.playerReady(gameId)
  })
</script>

<span>game {gameId}</span>
