<script>
  import { onMount } from 'svelte'
  import Router from 'svelte-spa-router'
  import { link } from 'svelte-spa-router'
  import Top from '@/pages/Top.svelte'
  import AuthenticatedRoute from '@/pages/AuthenticatedRoute.svelte'

  const routes = {
    '/': Top,
    '/*': AuthenticatedRoute
  }
</script>

<nav>
  <a href="/" use:link>Home</a>
  <a href="/lobby" use:link>Logiin</a>
</nav>
<Router {routes} />
