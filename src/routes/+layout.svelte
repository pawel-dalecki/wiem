<script>
  import "../app.css";
</script>

<header id="header" class="wrapper">
  <section class="container">
    <a><img src="/img/WiP-LOGO-POZIOM-1.png" /></a>
    <nav>
      <a>Oferta</a>
      <a>Cennik</a>
      <a>Blog</a>
      <a>Kontakt</a>
    </nav>
  </section>
</header>
<main>
  <slot />
</main>
<footer class="wrapper">
  <section class="container">
    <img />
    <span> Sąd Rejonowy Poznań – Nowe Miasto i Wilda w Poznaniu,</span>
    <span>kapitał zakładowy: 5.000 zł, KRS 0000000000, NIP 0000000000 </span>
    <button></button>
  </section>
  <section class="container"></section>
</footer>

<style>
  @tailwind base;
  @tailwind variants;
  @tailwind utilities;
  @tailwind components;
  header {
    @apply bg-white p-2;
  }
  header .container {
    @apply relative flex-row justify-between z-[99] items-center;
  }
  header .container nav a {
    @apply p-2 px-8 bg-theme-purple-lightest hover:bg-theme-purple hover:text-theme-cyan rounded-full text-xl text-white uppercase font-bold;
  }
  :global(.wrapper) {
    @apply relative py-12;
  }
  :global(.container) {
    @apply flex flex-col gap-2 mx-auto;
  }
  :global(h1) {
    @apply text-5xl font-black uppercase text-theme-yellow my-8;
  }
  :global(.bg-theme-purple h1) {
    @apply text-white;
  }
  :global(body) {
    font-family: Poppins, sans-serif;
  }
  :global(h2) {
    @apply text-3xl text-theme-yellow font-black my-6;
  }
  :global(h3) {
    @apply text-2xl text-theme-cyan font-bold my-4;
  }
  :global(p) {
    @apply my-4 text-[24px];
  }
  :global(form) {
    @apply flex flex-col gap-2;
  }
  :global(input) {
    @apply focus:outline-none border-8 border-transparent focus:border-theme-yellow outline-0 p-6 rounded-full;
  }
  :global(textarea) {
    @apply focus:outline-none border-8 border-white focus:border-theme-yellow bg-transparent p-6 rounded-full;
  }
</style>
