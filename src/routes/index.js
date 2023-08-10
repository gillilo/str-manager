import Home from './Home.svelte'
import Search from './Search.svelte'
import About from './About.svelte'
import NotFound from './NotFound.svelte'
import Bookmark from './Bookmark.svelte'
import Admin from './Admin.svelte'

export default {
  '/': Home,
  '/search': Search,
  '/about': About,
  '/bookmark': Bookmark,
  '/admin': Admin,
  '*': NotFound
}