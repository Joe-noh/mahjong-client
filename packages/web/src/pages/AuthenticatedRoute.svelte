<script>
  import { onMount } from 'svelte'
  import { Router, Route, navigate } from 'svelte-routing'
  import { session, isLoggedIn } from '@/stores/session'
  import Lobby from '@/pages/Lobby.svelte'
  import Game from '@/pages/g/Game.svelte'

  onMount(() => {
    session.restore()

    if (!$isLoggedIn) {
      navigate('/', { replace: true })
    }
  })
</script>

<Router>
  <Route path="lobby" component="{Lobby}" />
  <Route path="g/:gameId" component="{Game}" />
</Router>
