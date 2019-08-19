<script>
  import { onMount } from 'svelte'
  import backend from '@/lib/backend'

  export let params

  const api = backend()

  onMount(() => {
    api.joinGame(params.gameId)

    // set callbacks

    api.playerReady(params.gameId)
  })
</script>

<span>game {params.gameId}</span>
