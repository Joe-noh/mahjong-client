<script>
  import { Router, Link, Route } from 'svelte-routing'
  import Top from './pages/Top.svelte'
  import Signup from './pages/Signup.svelte'

  export let url = ''
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
