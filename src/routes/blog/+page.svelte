<script>
  let photo = "magazynier";
  const data = [{}, {}, {}, {}];
</script>

<section id="first-section" class="wrapper bg-theme-purple text-white">
  <section class="container">
    <section>
      <img src="/img/WiP-LOGO-POZIOM-2.png" />
      <h2>
        Chcesz wiedzieć więcej?<br />
        Przeczytaj naszego bloga!
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
    <section>
      <img src={`/img/${photo}.webp`} />
    </section>
  </section>
</section>
<section id="second-section" class="wrapper">
  <section class="container">
    <section class="posts">
      {#each data as post}
        <article class="post">
          <section class="heading">
            <article class="date">
              <img src="/img/date.webp" />
            </article>
            <img src="/img/blog-dummy.webp" />
            <button></button>
          </section>
          <section class="content">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </section>
        </article>
      {/each}
    </section>
    <section class="tools">
      <article>
        <h3>Wyszukiwarka</h3>
        <input />
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </article>
      <article>
        <h3>Wpisy</h3>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </article>
    </section>
  </section>
</section>

<style>
  #first-section .container {
    @apply grid grid-cols-2 gap-4 py-16 min-h-[640px];
  }
  #first-section .container > :nth-child(2) img {
    @apply absolute w-3/4 max-w-[512px];
  }
  #first-section .container > :nth-child(2) {
    @apply flex items-center justify-center;
  }

  #second-section .container {
    @apply grid grid-cols-2 gap-8 items-start;
  }
  #second-section .posts {
    @apply flex flex-col gap-8;
  }
  #second-section .post {
    @apply grid grid-cols-2 gap-8;
  }
  #second-section .post .heading {
    @apply relative;
  }
  #second-section .post .date {
    @apply absolute top-0;
  }
  #second-section .post button {
    @apply absolute bottom-0 right-0 w-24 h-24 rounded-full;
  }

  #second-section .tools {
    @apply flex flex-col gap-16;
  }
  #second-section .tools article {
    @apply relative flex flex-col gap-4 bg-theme-purple p-12 rounded-3xl;
  }
  #second-section .tools article h3 {
    @apply absolute -top-12 bg-theme-cyan text-white p-4 px-12 rounded-3xl;
  }
  #second-section .tools article button {
    @apply w-full p-4 bg-transparent hover:bg-transparent border-4 border-white text-white hover:border-theme-yellow hover:text-theme-yellow;
  }
</style>
