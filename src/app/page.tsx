import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO — ken burns */}
      <section className="hero">
        <div className="hero-kb">
          <div className="hero-kb__bg kb">
            <Image
              className="kb__img"
              src="/img/noir-roses.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="hero-kb__inner">
            <h1 className="hero-kb__title in" data-reveal>
              <span className="ln"><span>The Golden</span></span>
              <span className="ln"><span>Rose</span></span>
            </h1>
            <p className="hero-kb__eye" data-reveal>Ziedu studija · Jelgava</p>
            <div className="hero-kb__cta" data-reveal>
              <Link href="/veikals" className="btn">Iepirkties <span className="arr">→</span></Link>
            </div>
            <p className="hero-kb__addr" data-reveal>
              <span>Ziedi ar sajūtu, ne tikai izskatu</span>
              <span>Rīgas iela 14 · Jelgava</span>
              <span>+371 27 772 200</span>
            </p>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="collections">
        <header className="collections__head">
          <h2 data-reveal>Kolekcijas <em>—</em><br />trīs ceļi vienai sajūtai.</h2>
          <p className="collections__sub" data-reveal>
            Katrai kompozīcijai savs raksturs un sava sezona.
          </p>
        </header>

        <div className="collections__grid">
          <Link href="/veikals?cat=puski" className="coll-card big" data-reveal>
            <Image src="/img/pink-purple-bouquet.jpg" alt="" fill sizes="(min-width:820px) 60vw, 100vw" />
            <div className="coll-card__inner">
              <div>
                <h3 className="coll-card__title">Pušķi pēc<br />noskaņojuma</h3>
                <div className="coll-card__meta">
                  <span>14 kompozīcijas · no €35</span>
                  <span className="arr">→</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/veikals?cat=ligavu" className="coll-card small1" data-reveal>
            <Image src="/img/bride-peony.jpg" alt="" fill sizes="(min-width:820px) 40vw, 100vw" />
            <div className="coll-card__inner">
              <div>
                <h3 className="coll-card__title">Līgavu pušķi</h3>
                <div className="coll-card__meta">
                  <span>Pēc pasūtījuma · no €95</span>
                  <span className="arr">→</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/veikals?cat=kastes" className="coll-card small2" data-reveal>
            <Image src="/img/blue-hydrangea-box.jpg" alt="" fill sizes="(min-width:820px) 40vw, 100vw" />
            <div className="coll-card__inner">
              <div>
                <h3 className="coll-card__title">Ziedu kastes</h3>
                <div className="coll-card__meta">
                  <span>8 kompozīcijas · no €55</span>
                  <span className="arr">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="intro__head">
          <span className="intro__marker" data-reveal>Studija · MMXXVI</span>
          <h2 className="intro__title" data-reveal>
            Mēs neveidojam <em>pušķus</em>.<br />
            Mēs veidojam brīžus.
          </h2>
        </div>
        <div className="intro__row">
          <article className="intro__col" data-reveal>
            <span className="intro__col__n">i. — Sajūta</span>
            <h3 className="intro__col__h">Katrs pušķis ir saruna.</h3>
            <p className="intro__col__b">Pirms ziediem mēs uzdodam jautājumus — kāda sajūta, kam, kāpēc tagad.</p>
          </article>
          <article className="intro__col" data-reveal>
            <span className="intro__col__n">ii. — Svaigi</span>
            <h3 className="intro__col__h">No šīs nedēļas.</h3>
            <p className="intro__col__b">Strādājam tikai ar tādiem ziediem, kas studijā ienākuši pēdējās 48 stundās.</p>
          </article>
          <article className="intro__col" data-reveal>
            <span className="intro__col__n">iii. — Šodien</span>
            <h3 className="intro__col__h">Piegāde tajā pašā dienā.</h3>
            <p className="intro__col__b">Jelgavā un Rīgā — līdz 16:00 pasūti, līdz 20:00 saņem.</p>
          </article>
        </div>
      </section>

      {/* BREAK */}
      <section className="break">
        <Image className="break__img" src="/img/bride-tulips-ring.jpg" alt="" fill sizes="100vw" />
        <div className="break__overlay" />
        <div className="break__band" />
        <div className="break__hairline" />
        <span className="break__index" aria-hidden="true">04</span>
        <div className="break__content">
          <span className="break__eye" data-reveal><span>Kāzu studijai</span></span>
          <h2 className="break__title" data-reveal>
            No zieda uz ziedu,<br />no <em>sirds</em> uz sirdi.
          </h2>
          <p className="break__sub" data-reveal>
            Mēs dekorējam tavu īpašāko dienu — no līgavas rokas pušķa līdz katrai svecei uz galda.
          </p>
          <Link href="/par-mums" className="break__cta" data-reveal>Lasīt vairāk</Link>
        </div>
        <div className="break__line">
          <span>Foto · MMXXV sezona</span>
          <span>The Golden Rose dekorēšana</span>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="signature">
        <header className="signature__head">
          <h2 className="signature__title" data-reveal>
            Mūsu <em>parakstu</em><br />pušķi
          </h2>
          <p className="signature__desc" data-reveal>
            Katru nedēļu mēs veidojam četrus īpašos pušķus — tie ir mūsu paraksti, kas dzimst no tā, kas tikko ienācis studijā.
          </p>
        </header>
        <div className="signature__rail">
          <Link href="/produkts/rosa-blush" className="pcard" data-reveal>
            <div className="pcard__media">
              <span className="pcard__tag">Jauns</span>
              <Image src="/img/pink-bouquet-candle.jpg" alt="" fill sizes="25vw" />
            </div>
            <div className="pcard__row">
              <span className="pcard__name">Rosa <em>blush</em></span>
              <span className="pcard__price">EUR 48,00</span>
            </div>
            <span className="pcard__meta">N°01 · Maigs</span>
          </Link>
          <Link href="/produkts/hydrangea-bleu" className="pcard" data-reveal>
            <div className="pcard__media">
              <Image src="/img/blue-hydrangea-box.jpg" alt="" fill sizes="25vw" />
            </div>
            <div className="pcard__row">
              <span className="pcard__name">Hydrangea <em>bleu</em></span>
              <span className="pcard__price">EUR 62,00</span>
            </div>
            <span className="pcard__meta">N°02 · Klusums</span>
          </Link>
          <Link href="/produkts/fuchsia-noir" className="pcard" data-reveal>
            <div className="pcard__media">
              <span className="pcard__tag">Limited</span>
              <Image src="/img/pink-purple-bouquet.jpg" alt="" fill sizes="25vw" />
            </div>
            <div className="pcard__row">
              <span className="pcard__name">Fuchsia <em>noir</em></span>
              <span className="pcard__price">EUR 75,00</span>
            </div>
            <span className="pcard__meta">N°03 · Drosmīgs</span>
          </Link>
          <Link href="/produkts/jaunmala" className="pcard" data-reveal>
            <div className="pcard__media">
              <Image src="/img/white-roses-closeup.jpg" alt="" fill sizes="25vw" />
            </div>
            <div className="pcard__row">
              <span className="pcard__name">Jaunmala <em>blanc</em></span>
              <span className="pcard__price">EUR 55,00</span>
            </div>
            <span className="pcard__meta">N°04 · Tīrs</span>
          </Link>
        </div>
      </section>

      {/* DECO */}
      <section className="deco">
        <div className="deco__top">
          <div>
            <span className="deco__h__tag"><span>Pasākumu studija</span></span>
            <h2 className="deco__h" data-reveal>
              <em>Dekorēšana</em><br />kāzām un<br />īpašiem brīžiem.
            </h2>
          </div>
          <p className="deco__lead" data-reveal>
            No vienkārša ziedu pušķa centrā līdz pilnai zāles dekorēšanai — strādājam ar tavu vīziju, telpu un sajūtu. Konsultācijas ir bezmaksas.
            <br /><br />
            <Link href="/kontakti" className="meta" style={{ borderBottom: "1px solid currentColor", paddingBottom: 4, color: "var(--accent)" }}>Pierakstīties uz konsultāciju →</Link>
          </p>
        </div>
        <div className="deco__grid">
          <div className="shot"><Image src="/img/drapery-lights.jpg" alt="" fill sizes="60vw" /></div>
          <div className="shot"><Image src="/img/table-eucalyptus.jpg" alt="" fill sizes="30vw" /></div>
          <div className="shot"><Image src="/img/white-arch.jpg" alt="" fill sizes="30vw" /></div>
          <div className="shot"><Image src="/img/venue-interior.jpg" alt="" fill sizes="30vw" /></div>
          <div className="shot"><Image src="/img/outdoor-arches.jpg" alt="" fill sizes="30vw" /></div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <header className="process__head">
          <h2 data-reveal>No idejas<br />līdz <em>ziedam</em></h2>
          <p className="process__head__r" data-reveal>Četri soļi, viena saruna, viens pušķis.</p>
        </header>

        <div className="process__rows">
          {[
            ["i.", "Saruna", "Pastāsti, kam pušķis. Mēs jautājam pareizos jautājumus — krāsa, sajūta, vārds, kuru gribi pateikt.", "5 min"],
            ["ii.", "Skice", "Pirms zieda mēs uzmetam paletes un kompozīcijas variantu, kas atbilst tavai vīzijai.", "Tajā dienā"],
            ["iii.", "Ziedi", "Strādājam tikai ar svaigiem ziediem no pārbaudītiem audzētājiem. Katrs pušķis dzimst rokās, ne pēc šablona.", "2 – 4 h"],
            ["iv.", "Piegāde", "Mēs piegādājam Jelgavā un Rīgā tajā pašā dienā, visā Latvijā — nākamajā darba dienā.", "Šodien"],
          ].map(([n, name, body, time]) => (
            <div key={n} className="process__row" data-reveal>
              <span className="process__step">{n}</span>
              <h3 className="process__name">{name}</h3>
              <p className="process__body">{body}</p>
              <span className="process__time">{time}</span>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNAL */}
      <section className="journal">
        <header className="journal__head">
          <h2 data-reveal>Iekšskats <em>—</em><br />no studijas.</h2>
          <a href="https://instagram.com/thegoldenroseee" target="_blank" rel="noopener" className="journal__handle" data-reveal>@thegoldenroseee →</a>
        </header>
        <div className="journal__grid">
          <div className="j-shot j-1" data-reveal>
            <Image src="/img/bride-peony.jpg" alt="" fill sizes="40vw" />
            <span className="j-shot__cap">Līgavu pušķis · Maijs</span>
          </div>
          <div className="j-shot j-2" data-reveal>
            <Image src="/img/xs-paka.jpg" alt="" fill sizes="25vw" />
            <span className="j-shot__cap">Abonements XS · Aprīlis</span>
          </div>
          <div className="j-shot j-3" data-reveal>
            <Image src="/img/venue-drape.jpg" alt="" fill sizes="30vw" />
            <span className="j-shot__cap">Kāzu dekors · Aprīlis</span>
          </div>
          <div className="j-shot j-4" data-reveal>
            <Image src="/img/chairs.jpg" alt="" fill sizes="15vw" />
            <span className="j-shot__cap">Krēsli · Marts</span>
          </div>
          <div className="j-shot j-5" data-reveal>
            <Image src="/img/s-paka.jpg" alt="" fill sizes="25vw" />
            <span className="j-shot__cap">Abonements S · Marts</span>
          </div>
          <div className="j-shot j-6" data-reveal>
            <Image src="/img/noir-roses.jpg" alt="" fill sizes="25vw" />
            <span className="j-shot__cap">Sēzonas redaktoram · Februāris</span>
          </div>
        </div>
      </section>
    </>
  );
}
