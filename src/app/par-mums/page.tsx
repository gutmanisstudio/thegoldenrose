import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Par mums — The Golden Rose" };

const TIMELINE = [
  { year: "2022", title: "Studijas dzimšana", body: "Pirmais darba galds, divas šķēres un viena ideja: ziedi kā stāsts." },
  { year: "2023", title: "Pirmā kāzu sezona", body: "11 kāzas, 4 atklāšanas, viens nakts pasūtījums Rīgā." },
  { year: "2024", title: "Jelgavas studija", body: "Pārcelšanās uz tagadējo telpu — vēsturisks korpuss ar augstiem griestiem." },
  { year: "2025", title: "Editorial sadarbības", body: "Sadarbības ar fotogrāfiem, modes redaktoriem, viesnīcu zīmoliem." },
  { year: "2026", title: "Jaunā kolekcija", body: "Sezona, kas dzimst tieši šobrīd — un kuru tu redzi šeit." },
];

const VALUES = [
  { n: "i.", h: "Sezonalitāte", b: "Tikai tas, kas dabīgi zied tieši šobrīd. Bez piespiestām šķirnēm un mākslīgi nogatavinātām puķēm." },
  { n: "ii.", h: "Roku darbs", b: "Katra detaļa — mērīta, sasaistīta, pārbaudīta gaismā. Pušķis top ne ātrāk kā tas prasa." },
  { n: "iii.", h: "Personiska saruna", b: "Pirms ziediem — vienmēr seko saruna. Bez šablona, bez veidlapas." },
];

export default function AboutPage() {
  return (
    <>
      <section className="ab-hero">
        <p className="ab-hero__crumb"><Link href="/">Sākums</Link> / Par mums</p>
        <h1 data-reveal>Studija, kas tic, ka pušķi var būt arī <em>kino.</em></h1>
        <div className="ab-hero__row">
          <p className="ab-hero__lead" data-reveal>
            Editoriāla floristika un dekoru māksla — radīta Jelgavā kopš 2022. gada.
          </p>
          <div className="ab-hero__body" data-reveal>
            <p>
              The Golden Rose ir maza, neatkarīga floristikas un dekoru studija. Mēs
              strādājam sezonāli, ar audzētājiem, kurus pazīstam pa vārdam.
            </p>
            <p>
              Mūsu mērķis — radīt to, kas paliek atmiņā un kadrā. Bez šablona, bez
              ātrās piegādes konveijera.
            </p>
          </div>
        </div>
      </section>

      <section className="ab-quote">
        <Image src="/img/noir-roses.jpg" alt="" fill priority sizes="100vw" />
        <div className="ab-quote__content">
          <blockquote data-reveal>“Mēs piegādājam mirkļus, kas paliks fotogrāfijās.”</blockquote>
          <p className="ab-quote__sig">— Studijas dibinātāji</p>
        </div>
      </section>

      <section className="ab-values">
        <h2 data-reveal>Trīs lietas, ko mēs <em>neatlaižam.</em></h2>
        <div className="ab-values__grid">
          {VALUES.map((v) => (
            <article key={v.n} className="ab-value" data-reveal>
              <span className="ab-value__n">{v.n}</span>
              <h3>{v.h}</h3>
              <p>{v.b}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ab-gallery">
        <h2 data-reveal>Studijā, <em>aiz aizkariem.</em></h2>
        <p className="ab-gallery__lead" data-reveal>
          Daži kadri no nedēļas — ziedi, kas vēl tikai gaida savu pušķi.
        </p>
        <div className="ab-gallery__grid">
          <div data-reveal><Image src="/img/venue-interior.jpg" alt="" fill sizes="60vw" /></div>
          <div data-reveal><Image src="/img/white-roses-closeup.jpg" alt="" fill sizes="30vw" /></div>
          <div data-reveal><Image src="/img/pink-bouquet-candle.jpg" alt="" fill sizes="30vw" /></div>
        </div>
      </section>

      <section className="ab-time">
        <header className="ab-time__head">
          <h2 data-reveal>Piecu gadu <em>pieraksts</em></h2>
        </header>
        {TIMELINE.map((t) => (
          <div key={t.year} className="ab-time__row" data-reveal>
            <span className="ab-time__yr">{t.year}</span>
            <span className="ab-time__name">{t.title}</span>
            <p className="ab-time__body">{t.body}</p>
          </div>
        ))}
      </section>

      <section className="ab-cta">
        <h2 data-reveal>Strādāsim kopā pie tavas <em>dienas?</em></h2>
        <div data-reveal>
          <div className="ab-cta__body">
            <p>
              Kāzas, jubilejas, korporatīvie pasākumi vai vienkārši — pušķis, kuru
              gribi uzdāvināt. Sāksim ar sarunu.
            </p>
          </div>
          <div className="ab-cta__btn">
            <Link href="/kontakti" className="btn">Pieteikt sarunu <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
