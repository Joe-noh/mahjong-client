<script>
  import { onMount } from 'svelte'
  import { Router, Link, Route, navigate } from 'svelte-routing'
  import Top from '@/pages/Top.svelte'
  import AuthenticatedRoute from '@/pages/AuthenticatedRoute.svelte'
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/lobby">Login</Link>
  </nav>
  <div>
    <Route path="/" component="{Top}" />
    <Route path="/*" component="{AuthenticatedRoute}" />
  </div>
</Router>
