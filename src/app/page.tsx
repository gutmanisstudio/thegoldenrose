import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

export default function HomePage() {
  const signature = PRODUCTS.slice(0, 4);

  return (
    <>
      {/* HERO — ken burns */}
      <section className="hero">
        <div className="hero-kb">
          <div className="hero-kb__bg kb">
            <Image
              className="kb__img"
              src="/img/pink-bouquet-candle.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="hero-kb__inner">
            <p className="hero-kb__eye" data-reveal>The Golden Rose · Jelgava</p>
            <h1 className="hero-kb__title in" data-reveal>
              <span className="ln"><span>Pušķi un dekori,</span></span>
              <span className="ln"><span>stāstīti kā filma.</span></span>
            </h1>
            <div className="hero-kb__cta" data-reveal>
              <Link href="/veikals" className="btn">Apskatīt veikalu <span className="arr">→</span></Link>
              <Link href="/kontakti" className="btn btn--ghost">Pieteikt kāzu projektu</Link>
            </div>
            <p className="hero-kb__addr" data-reveal>
              <span>Lielā iela 12 · Jelgava</span>
              <span>Otrdiena – Sestdiena</span>
            </p>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="collections">
        <header className="collections__head">
          <h2 data-reveal>Trīs ceļi <em>caur</em> sezonu</h2>
          <p className="collections__sub" data-reveal>
            Pušķi, līgavu kompozīcijas un pilnos kāzu redzējumi — visi viena studija.
          </p>
        </header>

        <div className="collections__grid">
          <Link href="/veikals?cat=puski" className="coll-card big" data-reveal>
            <Image src="/img/pink-purple-bouquet.jpg" alt="" fill sizes="(min-width:820px) 60vw, 100vw" />
            <div className="coll-card__inner">
              <h3 className="coll-card__title">Pušķi</h3>
              <div className="coll-card__meta">
                <span>01 · Ikdienai un svinībām</span>
                <span className="arr">→</span>
              </div>
            </div>
          </Link>

          <Link href="/veikals?cat=ligavu" className="coll-card small1" data-reveal>
            <Image src="/img/bride-peony.jpg" alt="" fill sizes="(min-width:820px) 40vw, 100vw" />
            <div className="coll-card__inner">
              <h3 className="coll-card__title">Līgavu pušķi</h3>
              <div className="coll-card__meta">
                <span>02</span>
                <span className="arr">→</span>
              </div>
            </div>
          </Link>

          <Link href="/veikals?cat=kazas" className="coll-card small2" data-reveal>
            <Image src="/img/white-arch.jpg" alt="" fill sizes="(min-width:820px) 40vw, 100vw" />
            <div className="coll-card__inner">
              <h3 className="coll-card__title">Kāzu dekors</h3>
              <div className="coll-card__meta">
                <span>03</span>
                <span className="arr">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="intro__head">
          <span className="intro__marker" data-reveal>02 — Studija</span>
          <h2 className="intro__title" data-reveal>
            Mēs nestādām pušķus — <em>mēs tos uzrakstām.</em>
          </h2>
        </div>
        <div className="intro__row">
          <article className="intro__col" data-reveal>
            <span className="intro__col__n">i.</span>
            <h3 className="intro__col__h">Editorialitāte</h3>
            <p className="intro__col__b">Krāsas un kompozīcijas, kas darbojas arī kamerā.</p>
          </article>
          <article className="intro__col" data-reveal>
            <span className="intro__col__n">ii.</span>
            <h3 className="intro__col__h">Sezona</h3>
            <p className="intro__col__b">Ziedi, kas ir īstajā laikā — ne agrāk, ne vēlāk.</p>
          </article>
          <article className="intro__col" data-reveal>
            <span className="intro__col__n">iii.</span>
            <h3 className="intro__col__h">Rūpība</h3>
            <p className="intro__col__b">Roku darbs, mērīts ar minūtēm un loka līniju.</p>
          </article>
        </div>
      </section>

      {/* BREAK */}
      <section className="break">
        <Image className="break__img" src="/img/bw-bride-calla.jpg" alt="" fill sizes="100vw" />
        <div className="break__overlay" />
        <div className="break__band" />
        <div className="break__hairline" />
        <span className="break__index">03</span>
        <div className="break__content">
          <span className="break__eye" data-reveal>Aiz kadra</span>
          <h2 className="break__title" data-reveal>Florists ir režisors.</h2>
          <p className="break__sub" data-reveal>
            Viņš nezīmē kadru — viņš to ļauj notikt. Mūsu darbs ir radīt
            apstākļus, kur ziedi pasaka stāstu paši.
          </p>
          <Link href="/par-mums" className="break__cta">Par studiju</Link>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="signature">
        <header className="signature__head">
          <h2 className="signature__title" data-reveal>Parakstu <em>pušķi</em></h2>
          <p className="signature__desc" data-reveal>
            Mūsu pastāvīgā kolekcija — gatava aiziet šovakar. Visus pārējos
            radām pēc tavas sarunas.
          </p>
        </header>
        <div className="signature__rail">
          {signature.map((p) => <ProductCard key={p.handle} p={p} />)}
        </div>
      </section>

      {/* DECO */}
      <section className="deco">
        <div className="deco__top">
          <div>
            <span className="deco__h__tag" data-reveal>04 — Dekori</span>
            <h2 className="deco__h" data-reveal>No arkas līdz <em>pēdējam</em> galda lociņam.</h2>
          </div>
          <p className="deco__lead" data-reveal>
            Projektējam pilnus telpas un āra dekorus kāzām, korporatīvajiem pasākumiem un
            privātām vakariņām. Sarunā vienojamies par redzējumu; studijā uzbūvējam katru detaļu.
          </p>
        </div>
        <div className="deco__grid">
          <div data-reveal><Image src="/img/outdoor-arches.jpg" alt="" fill sizes="60vw" /></div>
          <div data-reveal><Image src="/img/table-eucalyptus.jpg" alt="" fill sizes="30vw" /></div>
          <div data-reveal><Image src="/img/drapery-lights.jpg" alt="" fill sizes="30vw" /></div>
          <div data-reveal><Image src="/img/venue-interior.jpg" alt="" fill sizes="30vw" /></div>
          <div data-reveal><Image src="/img/chairs.jpg" alt="" fill sizes="30vw" /></div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <header className="process__head">
          <h2 data-reveal>No idejas līdz <em>piegādei</em></h2>
          <p className="process__head__r" data-reveal>
            Sešu soļu ceļš katram projektam — no pirmā kontakta līdz pēdējai pārbaudei.
          </p>
        </header>

        {[
          ["01", "Saruna", "Pa telefonu vai studijā. Iepazīstam tavu dienu un sajūtu.", "20 min"],
          ["02", "Skice", "Krāsu paletes, kompozīcijas references, materiāli, tāme.", "2–4 dienas"],
          ["03", "Apstiprinājums", "Detalizēta vienošanās, datumi, loģistika.", "1 diena"],
          ["04", "Pasūtījums", "Ziedi tiek atlasīti pie audzētājiem 5–7 dienas pirms.", "1 ned."],
          ["05", "Veidošana", "Studijas dienā — viss top no rīta līdz pēcpusdienai.", "Diena X−1"],
          ["06", "Piegāde", "Atvedam, uzstādām, paliekam līdz pēdējam pārbaudījumam.", "Diena X"],
        ].map(([n, name, body, time]) => (
          <div key={n} className="process__row" data-reveal>
            <span className="process__step">{n}</span>
            <h3 className="process__name">{name}</h3>
            <p className="process__body">{body}</p>
            <span className="process__time">{time}</span>
          </div>
        ))}
      </section>

      {/* JOURNAL */}
      <section className="journal">
        <header className="journal__head">
          <h2 data-reveal>Aiz <em>kadra</em></h2>
          <Link href="#" className="journal__handle">@thegoldenrose</Link>
        </header>
        <div className="journal__grid">
          <Link href="#" className="j-shot j-1" data-reveal>
            <Image src="/img/bride-tulips-ring.jpg" alt="" fill sizes="40vw" />
            <span className="j-shot__cap">Tulpju aplis pavasarim</span>
          </Link>
          <Link href="#" className="j-shot j-2" data-reveal>
            <Image src="/img/noir-roses.jpg" alt="" fill sizes="25vw" />
            <span className="j-shot__cap">Noir rozes</span>
          </Link>
          <Link href="#" className="j-shot j-3" data-reveal>
            <Image src="/img/venue-drape.jpg" alt="" fill sizes="30vw" />
            <span className="j-shot__cap">Telpas drapējums</span>
          </Link>
          <Link href="#" className="j-shot j-4" data-reveal>
            <Image src="/img/white-roses-closeup.jpg" alt="" fill sizes="15vw" />
            <span className="j-shot__cap">Baltās rozes</span>
          </Link>
          <Link href="#" className="j-shot j-5" data-reveal>
            <Image src="/img/table-eucalyptus.jpg" alt="" fill sizes="25vw" />
            <span className="j-shot__cap">Eikalipta galds</span>
          </Link>
          <Link href="#" className="j-shot j-6" data-reveal>
            <Image src="/img/blue-hydrangea-box.jpg" alt="" fill sizes="25vw" />
            <span className="j-shot__cap">Hortenzijas kastē</span>
          </Link>
        </div>
      </section>
    </>
  );
}
