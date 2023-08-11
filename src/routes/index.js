import Home from './Home.svelte'
import Login from './Login.svelte'
import About from './About.svelte'
import Profile from './Profile.svelte'
import NotFound from './NotFound.svelte'

export default {
  '/': Home,
  '/login': Login,
  '/about': About,
  '/profile': Profile,
  '*': NotFound
}