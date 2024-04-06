<script lang="ts">
  import { page } from "$app/stores";
  import { Button } from "$components";
  import logo from "$lib/images/logo-planthor.svg";

  import avatar from "$lib/images/user.svg";

  export let user: string | null;
</script>

<header>
  <nav>
    <div class="corner">
      <a href="/">
        <img src={logo} alt="Planthor" />
      </a>
    </div>
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li
        aria-current={$page.url.pathname === "/products" ? "page" : undefined}
      >
        <a href="/products">Products</a>
      </li>
      <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
        <a href="/about">About</a>
      </li>
      {#if user}
        <div>
          <img class="avatar" src={avatar} alt="" />
        </div>
      {:else}
        <Button element="a" variant="basic" href="/api/auth/login">Login</Button
        >
      {/if}
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    display: flex;
    height: 3rem;
    background-color: rgb(225, 225, 225, 1);
    padding: 0 2rem;
  }

  .corner {
    display: flex;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
  }
  .corner img {
    height: 2em;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: $color-blue-500;
  }

  .avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
  }
</style>
