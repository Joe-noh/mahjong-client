<script>
  import { onMount } from 'svelte'
  import { Router, Route, navigate } from 'svelte-routing'
  import { session, isLoggedIn } from '@/stores/session'
  import Lobby from '@/pages/Lobby.svelte'

  onMount(() => {
    session.restore()

    if (!$isLoggedIn) {
      navigate('/', { replace: true })
    }
  })
</script>

<Router>
  <Route path="/lobby" component="{Lobby}" />
</Router>
