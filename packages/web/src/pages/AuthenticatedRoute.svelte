<script>
  import { onMount } from 'svelte'
  import Router, { replace } from 'svelte-spa-router'
  import { session, isLoggedIn } from '@/stores/session'
  import Lobby from '@/pages/Lobby.svelte'
  import Game from '@/pages/g/Game.svelte'

  onMount(() => {
    session.restore()

    if (!$isLoggedIn) {
      replace('/')
    }
  })

  const routes = {
    '/lobby': Lobby,
    '/g/:gameId': Game
  }
</script>

<Router {routes} />
