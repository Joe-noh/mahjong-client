<script>
  import { onMount } from 'svelte'
  import { replace } from 'svelte-spa-router'
  import backend from '@/lib/backend'

  export let params

  const api = backend()

  onMount(() => {
    api.joinGame(params.gameId).then(() => {
      api.on('game:start', (e) => {
        console.log(e)
      })

      api.playerReady(params.gameId)
    }).catch(() => {
      api.leaveGame().then(() => {
        replace('/lobby')
      })
    })
  })
</script>

<span>game {params.gameId}</span>
