<script lang="ts">
  import { page } from "$app/stores";
  import { Button } from "$components";
  import logo from "$lib/images/logo-planthor.svg";
  import useravtar from "$lib/images/user.svg";
  import { X } from "lucide-svelte";

  export let user: string | null;

  let showMenu = false;

  const toggleMenu = () => {
    showMenu = !showMenu;
  };
</script>

<header>
  <div class="corner">
    <a href="/">
      <img src={logo} alt="Planthor" />
    </a>
  </div>
  {#if !user}
    <nav>
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
        <Button element="a" variant="basic" href="/api/auth/login">Login</Button
        >
      </ul>
    </nav>
  {:else}
    <div class="avatar-menu">
      <button type="button" class="avatar-btn" on:click={toggleMenu}>
        <img src={useravtar} alt="User Avatar" class="avatar" />
      </button>
      <div class="modal" class:show={showMenu}>
        <div class="modal-content">
          <div class="modal-header">
            <img src={useravtar} alt="User Avatar" class="avatar" />
            <span class="close" on:click={toggleMenu}>
              <X size="16" />
            </span>
          </div>
          <div class="modal-body">
            <ul>
              <li
                aria-current={$page.url.pathname === "/" ? "page" : undefined}
              >
                <a href="/">Home</a>
              </li>
              <li
                aria-current={$page.url.pathname === "/products"
                  ? "page"
                  : undefined}
              >
                <a href="/products">Products</a>
              </li>
              <li
                aria-current={$page.url.pathname === "/about"
                  ? "page"
                  : undefined}
              >
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    height: 3rem;
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
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
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

  .avatar-menu {
    display: flex;
    align-items: center;
    .avatar {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      cursor: pointer;
    }

    .avatar-btn {
      appearance: none;
      border: none;
      background-color: inherit;
    }

    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      max-height: unset;
      overflow: auto;

      background-color: rgba(0, 0, 0, 0.1);

      .modal-header {
        position: relative;
        display: flex;
        align-items: center;

        span {
          position: absolute;
          right: 0;
        }
      }
    }
    .close {
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }

    .modal-content {
      display: flex;
      flex-direction: column;
      background-color: #fefefe;
      padding: 20px;
      width: 10%;
      border-radius: 0.75rem;
      box-shadow:
        0px 0px 0px 1px #d0d7de80,
        0px 6px 12px -3px #424a530a,
        0px 6px 18px 0px #424a531f;
      position: fixed;
      inset: 0 0 0 auto;
    }

    .modal.show {
      display: block;
    }

    .dropdown-menu li {
      padding: 10px;
    }
  }
</style>
