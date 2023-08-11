<!-- Javascript Menu Hover Effects | Html CSS -->
<!-- https://www.youtube.com/watch?v=8saYt5fc2Pc -->
<script>
  import { link } from "svelte-spa-router"

  const menus = [
    { name: 'About', href: '/about' },
    { name: 'Profile', href: '/profile' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Workout-Log', href: '/workoutlog' },
  ]

  function foo() {
    menus.map((menu) => {
      const menulist = []
      const letters = menu.name.split("")
      letters.map((char, i) => {
        i++
        menulist.push(char)
      })
      menu.nameSpanList = menulist
    })

    console.log(menus)
  }

  foo()
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<div class="body">
  <ul class="list">
    {#each menus as menu}
      <li>
        <a use:link href={menu.href}>
          {#each menu.nameSpanList as char}
            <span>
              <span class="out">
                {char}
              </span>
              <span class="in">
                {char}
              </span>
            </span>
          {/each}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .body {
    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: $color--black;
    .list {
      position: relative;
      display: flex;
      flex-direction: column;
      li {
        list-style: none;
        a {
          position: relative;
          display: flex;
          font-size: 4em;
          line-height: 1.1em;
          color: $color--white;
          text-decoration: none;
          text-transform: uppercase;
          span {
            position: relative;
            transition: 0.5s;
            overflow: hidden;
            .out {
              display: inline-flex;
            }
            .in {
              position: absolute;
              left: 0;
              transform: translateY(100%);
              color: $color--primary;
            }
          }
        }
        a:hover {
          span {
            .out {
              transform: translateY(-100%);
            }
            .in {
              transform: translateY(0);
            }
          }
          span:nth-child(1) .out{
            transition-delay: 0s;
          }
          span:nth-child(2) .out{
            transition-delay: 0.03s;
          }
          span:nth-child(3) .out{
            transition-delay: 0.06s;
          }
          span:nth-child(4) .out{
            transition-delay: 0.09s;
          }
          span:nth-child(5) .out{
            transition-delay: 0.12s;
          }
          span:nth-child(6) .out{
            transition-delay: 0.15s;
          }
          span:nth-child(7) .out{
            transition-delay: 0.18s;
          }
          span:nth-child(8) .out{
            transition-delay: 0.21s;
          }
          span:nth-child(9) .out{
            transition-delay: 0.24s;
          }
          span:nth-child(10) .out{
            transition-delay: 0.27s;
          }
          span:nth-child(11) .out{
            transition-delay: 0.30s;
          }
          span:nth-child(12) .out{
            transition-delay: 0.33s;
          }
          span:nth-child(1) .in{
            transition-delay: 0s;
          }
          span:nth-child(2) .in{
            transition-delay: 0.03s;
          }
          span:nth-child(3) .in{
            transition-delay: 0.06s;
          }
          span:nth-child(4) .in{
            transition-delay: 0.09s;
          }
          span:nth-child(5) .in{
            transition-delay: 0.12s;
          }
          span:nth-child(6) .in{
            transition-delay: 0.15s;
          }
          span:nth-child(7) .in{
            transition-delay: 0.18s;
          }
          span:nth-child(8) .in{
            transition-delay: 0.21s;
          }
          span:nth-child(9) .in{
            transition-delay: 0.24s;
          }
          span:nth-child(10) .in{
            transition-delay: 0.27s;
          }
          span:nth-child(11) .in{
            transition-delay: 0.30s;
          }
          span:nth-child(12) .in{
            transition-delay: 0.33s;
          }
        }
      }
    }
  }
</style>