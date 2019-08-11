<script>
  import { onMount } from 'svelte'
  import { Router, Link, Route } from 'svelte-routing'
  import { session } from '@/stores/session'
  import Top from './pages/Top.svelte'
  import Login from './pages/Login.svelte'

  export let url = ''

  onMount(() => session.restore())
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
  </nav>
  <div>
    <Route path="/"><Top /></Route>
    <Route path="/login" component="{Login}" />
  </div>
</Router>
