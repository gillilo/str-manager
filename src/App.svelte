<script>
  import { fade } from 'svelte/transition'
  import Router, { location } from 'svelte-spa-router'
  import routes from '~/routes'
</script>

{#key $location}
  <div in:fade>
    <Router 
      {routes} 
      restoreScrollState={true} />
  </div>
{/key}