<script>
  let photo = "magazynier";
  const bubbles = [
    {
      content:
        " nie musisz angażowac swoich zasobów i pracowników do utrzymywaniakanałów zgłoszeń ",
    },
    {
      content:
        " nie musisz angażowac swoich zasobów i pracowników do utrzymywaniakanałów zgłoszeń ",
    },
    {
      content:
        " nie musisz angażowac swoich zasobów i pracowników do utrzymywaniakanałów zgłoszeń ",
    },
    {
      content:
        " nie musisz angażowac swoich zasobów i pracowników do utrzymywaniakanałów zgłoszeń ",
    },
    {
      content:
        " nie musisz angażowac swoich zasobów i pracowników do utrzymywaniakanałów zgłoszeń ",
    },
    {
      content:
        " nie musisz angażowac swoich zasobów i pracowników do utrzymywaniakanałów zgłoszeń ",
    },
    {
      content:
        " nie musisz angażowac swoich zasobów i pracowników do utrzymywaniakanałów zgłoszeń ",
    },
  ];
  setInterval(() => {
    photo =
      photo === "magazynier"
        ? "nauczyciel"
        : photo === "nauczyciel"
          ? "lekarz"
          : photo === "lekarz"
            ? "pracownik-biurowy"
            : "magazynier";
  }, 3000);
</script>

<section id="first-section" class="wrapper bg-theme-purple text-white">
  <section class="container">
    <section>
      <img src="/img/WiP-LOGO-POZIOM-2.png" />
      <h2>
        To coś więcej niż tylko narzędzie do obsługi zgłoszeń sygnalistów.
      </h2>
      <p>
        Musisz lub chcesz wdrożyć rozwiązanie umożliwiające sygnalistom
        zgłaszanie nieprawidłowości dotyczących Twojej organizacji?
      </p>
      <p>
        Wiem i Powiem to kompleksowa usługa zapewniająca obsługę zgłoszeń
        sygnalistów. Sprawdź, czy musisz wdrożyć!
      </p>
      <button>Sprawdź</button>
    </section>
    <section>
      <img src={`/img/${photo}.webp`} />
    </section>
  </section>
</section>
<section id="second-section" class="wrapper">
  <section class="container">
    <section class="content">
      <h1>Co oferujemy?</h1>
      <p>
        Wiem i Powiem to usługa, w ramach której dostarczamy wygodne i<br />
        bezpieczne kanały zgłoszeniowe dla sygnalistów oraz przejmujemy od<br />
        Ciebie obsługę takich zgłoszeń. Nie musisz martwić się o utrzymanie i<br
        />
        obsługę kanałów zgłoszeń – bierzemy to na siebie!
      </p>
    </section>
    <section class="cards">
      <article class="card">
        <img src="/img/zgloszenie.webp" />
        <h3>Zgloszenie</h3>
        <p>
          W zależności od potrzeb udostępniamy Twojej organizacji aż trzy kanały
          zgłoszeń, które sami utrzymujemy i obsługujemy.
        </p>
      </article>
      <article class="card">
        <img src="/img/wzory.webp" />
        <h3>Wzory</h3>
        <p>
          W ramach pakietu powitalnego otrzymasz od nas wzory dokumentów, które
          należy wdrożyć, oraz instrukcję postępowania.
        </p>
      </article>
      <article class="card">
        <img src="/img/weryfikacja.webp" />
        <h3>Weryfikacja</h3>
        <p>
          Dokonujemy bezstronnej weryfikacji wstępnej każdego zgłoszenia. Z
          każdego zgłoszenia otrzymasz od nas raport i rekomendacje co do
          działań następczych, które należy podjąć w związku ze zgłoszeniem.
        </p>
      </article>
      <article class="card">
        <img src="/img/informacja.webp" />
        <h3>Informacja</h3>
        <p>
          Wykonujemy wobec sygnalistów wszystkie obowiązki informacyjne, które
          prawo nakłada na Twoją organizację.
        </p>
      </article>
    </section>
  </section>
</section>
<section id="third-section" class="wrapper bg-theme-purple text-white">
  <section class="container">
    <h1>Jak to działa?</h1>
    <section class="cards">
      <article class="card">
        <h3>Wdrożenie</h3>
        <section class="content">
          <p>Otrzymujesz:</p>
          <ul>
            <li>wzór procedury ochrony sygnalistów.</li>
            <li>instrukcję wdrożenia procedury whistleblowing.</li>
            <li>
              materiały informacyjne dla sygnalistów, przeznaczone do
              rozpowszechniania w Twojej organizacji.
            </li>
          </ul>
        </section>
      </article>
      <article class="card">
        <h3>Zgłoszenie</h3>
        <section class="content">
          <p>Dostarczone przez nas materiały informacyjne zawierają:</p>
          <ul>
            <li>
              kod QR, którego zeskanowanie telefonem komórkowym przenosi
              sygnalistę do formularza zgłoszeniowego,
            </li>
            <li>adres strony internetowej z formularzem zgłoszeniowym,</li>
            <li>
              numer telefonu, pod którym sygnalista może dokonać zgłoszenia,
            </li>
            <li>
              adres pocztowy, na który sygnalista może przesłać zgłoszenie.
            </li>
          </ul>
          <p>Sygnalista w wygodny dla siebie sposób dokonuje zgłoszenia:</p>
          <ul>
            <li>przez Internet,</li>
            <li>telefonicznie,</li>
            <li>listownie.</li>
          </ul>
        </section>
      </article>
      <article class="card">
        <h3>Obsługa zgłoszenia</h3>
        <section class="content">
          <p>Zawiadamiamy sygnalistę o przyjęciu jego zgłoszenia.</p>
          <p>
            Rozpatrujemy indywidulanie każde zgłoszenie ustalając, czy prawo
            nakłada na Ciebie obowiązek rozpoznania danego zgłoszenia i czy
            zgłoszenie wymaga Twojej interwencji. Z każdego zgłoszenia
            otrzymujesz raport.
          </p>
          <p>
            Jeżeli zgłoszenie w naszej ocenie wymaga Twojej interwencji
            rekomendujemy stosowne działania.
          </p>
          <p>
            Bierzemy na siebie całą komunikację z sygnalistą, tak aby otrzymał
            on wszelkie informacje w wymaganych prawem terminach.
          </p>
        </section>
      </article>
    </section>
  </section>
</section>
<section id="fourth-section" class="wrapper">
  <section class="container">
    <h1>Twoje korzyści</h1>
    <section class="bubbles-desktop">
      <section class="first-row">
        {#each bubbles as bubble, i}
          {#if i < 4}
            <article class="bubble">
              <p>{bubble.content}</p>
              <h3>{i + 1}</h3>
            </article>
          {/if}
        {/each}
      </section>
      <section class="second-row">
        {#each bubbles as bubble, i}
          {#if i > 3}
            <article class="bubble">
              <p>{bubble.content}</p>
              <h3>{i + 1}</h3>
            </article>
          {/if}
        {/each}
      </section>
    </section>
    <section class="bubbles-mobile">
      {#each bubbles as bubble, i}
        <article class="bubble">
          <p>{bubble.content}</p>
          <h3>{i + 1}</h3>
        </article>
      {/each}
    </section>
  </section>
</section>
<section id="fifth-section" class="wrapper bg-theme-purple text-white">
  <section class="container">
    <section>
      <h1>Oferta</h1>
      <p>Umowa na korzystanie z Wiem i Powiem trwa</p>
      <span class="special">12 miesięcy</span>
      <p>Abonament obejmuje:</p>
      <ul>
        <li>wzory dokumentów</li>
        <li>utrzymanie kanałów zgłoszeń</li>
        <li>materiały informacyjne</li>
        <li>obsługę zgłoszeń</li>
      </ul>
      <span>
        *oferta dotyczy organizacji do 200 osób. jeżeli twoja organizacja
        zatrudnia więcej osób przygotujemy dla ciebie ofertę indywidualną
      </span>
      <p>zainteresowało cię wiem i powiem? skontaktuj się z nami!</p>
      <button>Skorzystaj z oferty</button>
    </section>
    <section></section>
  </section>
</section>
<section id="sixth-section" class="wrapper">
  <section class="container">
    <section class="content">
      <h1>Faq</h1>
      <p>Potrzebujesz więcej informacji?</p>
      <p>Zajrzyj na bloga!</p>
      <img src="/img/faq.webp" />
      <button>Zobacz bloga</button>
    </section>
    <section class="faq"></section>
  </section>
</section>
<section id="seventh-section" class="wrapper bg-theme-purple text-white">
  <section class="container">
    <section id="info">
      <h1>Kontakt</h1>
      <span>Wiem i Powiem sp. z o.o.</span>
      <span>ul. Żydowska 33/2,</span> <span>61-761 Poznań</span>
      <span>telefon: xxx xxx xxx</span>
      <span>email: kontakt@wiemipowiem.pl</span>
      <img src="/img/kontakt.webp" />
    </section>
    <section id="contact">
      <form>
        <input />
        <input />
        <input />
        <textarea></textarea>
        <button>Wyslij</button>
      </form>
      <span
        >Dane osobowe podane w formularzu przetwarzane są w celu obsługi
        korespondencji, a ich administratorem jest Wiem i Powiem sp. z o. o.
        Więcej szczegółów w Polityce Prywatności</span
      >
    </section>
  </section>
</section>

<style>
  #first-section .container {
    @apply relative grid grid-cols-2 py-16 min-h-[640px];
  }
  #first-section .container > :nth-child(2) img {
    @apply absolute w-3/4 max-w-[512px];
  }
  #first-section .container > :nth-child(2) {
    @apply flex items-center justify-center;
  }

  #second-section .cards {
    @apply grid grid-cols-4 gap-4;
  }
  #second-section .cards .card {
    @apply flex flex-col gap-2;
  }
  #second-section .cards .card h3 {
    @apply text-center uppercase;
  }

  #third-section .cards {
    @apply grid grid-cols-3 gap-4 items-start;
  }
  #third-section .cards .card {
    @apply flex flex-col rounded-3xl shadow-[2em_2em_0_0_rgba(0,0,0,0.25)];
  }
  #third-section .cards .card h3 {
    @apply p-8 text-center uppercase bg-theme-purple-lighter rounded-t-3xl mb-0;
  }
  #third-section .cards .card .content {
    @apply p-8 bg-white rounded-b-3xl text-black h-full;
  }
  #third-section .cards .card .content ul {
    @apply list-disc text-[24px] pl-6;
  }

  #fourth-section .bubbles-desktop {
    @apply hidden lg:flex flex-col gap-2;
  }
  #fourth-section .bubbles-desktop .first-row {
    @apply grid grid-cols-4 max-w-[164em] mx-auto gap-4 items-center justify-center;
  }
  #fourth-section .bubbles-desktop .second-row {
    @apply grid grid-cols-3 max-w-[96em] mx-auto gap-4 items-center justify-center;
  }

  #fourth-section .bubbles-mobile {
    @apply flex flex-col gap-2 lg:hidden;
  }
  #fourth-section .bubble {
    @apply relative rounded-full bg-theme-purple w-64 h-64 items-center justify-center flex text-white text-center p-12;
  }
  #fourth-section .bubble p {
    @apply text-[16px];
  }
  #fourth-section .bubble h3 {
    @apply absolute bg-theme-cyan text-white rounded-full -bottom-12  w-16 h-16 flex items-center justify-center;
  }

  #fifth-section .special {
    @apply bg-theme-purple-lightest p-4 rounded-full text-3xl font-black uppercase;
  }
  #fifth-section ul {
    @apply list-disc text-[24px] pl-6;
  }

  #sixth-section .container {
    @apply grid grid-cols-2 gap-4;
  }
  #sixth-section .container .content {
    @apply flex flex-col gap-2;
  }
  #sixth-section .container .content img {
    @apply w-1/3;
  }
  #sixth-section .container .faq {
    @apply mx-auto;
  }
  #sixth-section .container .faq img {
    @apply mx-auto;
  }

  #seventh-section .container {
    @apply grid grid-cols-2 gap-4;
  }
  #seventh-section .container #info {
    @apply flex flex-col gap-2;
  }
  #seventh-section .container img {
    @apply w-1/3;
  }
  form {
    @apply flex flex-col gap-2;
  }
  input {
    @apply outline-none border-8 border-transparent focus:border-theme-yellow outline-0 p-4 rounded-3xl;
  }
  textarea {
    @apply outline-none border-8 border-white focus:border-theme-yellow bg-transparent p-4 rounded-3xl;
  }
</style>
