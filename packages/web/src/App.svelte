<script>
  import { onMount } from 'svelte'
  import { Router, Link, Route } from 'svelte-routing'
  import { session } from '@/stores/session'
  import Top from './pages/Top.svelte'
  import Signup from './pages/Signup.svelte'

  export let url = ''

  onMount(() => session.restore())
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="/signup">Signup</Link>
  </nav>
  <div>
    <Route path="/signup" component="{Signup}" />
    <Route path="/"><Top /></Route>
  </div>
</Router>
