<script>
  import '../app.css';
</script>

<header>
  <a href="/">
    <h1>Logo</h1>
  </a>
  <nav>
    <a href="/about">About</a>
    <a class="button primary" href="/get-started">Get Started</a>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <span>© {new Date().getFullYear()} <a href="/">Name.</a></span>
</footer>
