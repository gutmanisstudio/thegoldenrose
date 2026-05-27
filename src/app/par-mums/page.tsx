import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Stāsts — The Golden Rose" };

const VALUES = [
  { n: "I.", h: "Sajūta pār perfekciju", b: "Mēs labāk veidojam pušķi, kas izsauc emocijas, nekā pušķi, kurš ir simetrisks. Ziedi nav ģeometrija." },
  { n: "II.", h: "Svaigi vienmēr", b: "Mēs strādājam ar pārbaudītiem audzētājiem un nepiegādājam ziedus, kas vairāk nekā divas dienas vecāki par šodienas rītu." },
  { n: "III.", h: "Stāsts katrā pušķī", b: "Pirms ziediem mēs uzdodam jautājumus. Kam tas ir, kāpēc tagad, ko gribi pateikt — pušķis ir saruna." },
];

const TIMELINE = [
  { year: "2022", name: "Sākums", body: "Pirmais pušķis pārdots otrai sievai svētdienas rītā. Tā gada ietvaros mēs piegādājām 200+ pušķus tikai Iecavā." },
  { year: "2023", name: "Studija", body: "Atvērta studija Rīgas ielā 14 — pirmā fiziska adrese, kur klienti var atnākt, smaržot un izvēlēties." },
  { year: "2024", name: "Kāzu dekorēšana", body: "Pirmā pilnā kāzu dekorēšana — no līgavas pušķa līdz arkai. Šobrīd dekorējam 40+ kāzas sezonā." },
  { year: "2025", name: "Abonementi", body: "Pirmais ziedu abonements — XS, S, M izmēri. Pušķi pie tevis katru nedēļu." },
  { year: "2026", name: "Internets", body: "Vietne, kas tev tagad ir priekšā. Visi pušķi vienuviet, piegāde visā Latvijā." },
];

export default function AboutPage() {
  return (
    <>
      <section className="ab-hero">
        <p className="ab-hero__crumb"><Link href="/">Sākums</Link> — Stāsts</p>
        <h1 data-reveal>
          Ziedi ar<br />
          <em>sajūtu,</em><br />
          ne tikai izskatu.
        </h1>
        <div className="ab-hero__row">
          <p className="ab-hero__lead" data-reveal>
            Mēs sākām, jo gribējām, lai pušķis būtu vairāk kā tikai dāvana.
          </p>
          <div className="ab-hero__body" data-reveal>
            <p>The Golden Rose ir ziedu studija, dzimusi Iecavā 2022. gadā. Sākumā tas bija mazs galds aiz veikala, dažas vāzes un ļoti daudz roses.</p>
            <p>Tagad mēs strādājam ar pilnu studiju, dekorējam kāzas visā Latvijā un piegādājam pušķus, kas paliek atmiņā ilgāk par to, cik ilgi ziedi paliek vāzē.</p>
          </div>
        </div>
      </section>

      <section className="ab-quote">
        <Image src="/img/noir-roses.jpg" alt="" fill priority sizes="100vw" />
        <div className="ab-quote__content">
          <blockquote data-reveal>
            “Mēs nepārdodam ziedus.<br />
            Mēs pārdodam<br />
            <em>sajūtu,</em><br />
            kas paliek pēc tam.”
          </blockquote>
          <p className="ab-quote__sig">— Studijas dibinātāja</p>
        </div>
      </section>

      <section className="ab-values">
        <h2 data-reveal>Trīs lietas, kurās ticam.</h2>
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
        <h2 data-reveal>Studija <em>—</em><br />kur ziedi tiek<br />radīti.</h2>
        <p className="ab-gallery__lead" data-reveal>
          Rīgas iela 14A, Iecava. Mūsu mājas ir maza, mierīga telpa, kur smaržo pēc eikalipta un Earl Grey tējas. Apciemot vari katru darba dienu.
        </p>
        <div className="ab-gallery__grid">
          <div data-reveal><Image src="/img/venue-interior.jpg" alt="" fill sizes="60vw" /></div>
          <div data-reveal><Image src="/img/table-eucalyptus.jpg" alt="" fill sizes="30vw" /></div>
          <div data-reveal><Image src="/img/drapery-lights.jpg" alt="" fill sizes="30vw" /></div>
        </div>
      </section>

      <section className="ab-time" id="process">
        <header className="ab-time__head">
          <span className="eyebrow" data-reveal>— Mūsu ceļš —</span>
          <h2 data-reveal style={{ marginTop: 14 }}>Kā mēs nokļuvām šeit.</h2>
        </header>
        <div className="ab-time__rows">
          {TIMELINE.map((t) => (
            <div key={t.year} className="ab-time__row" data-reveal>
              <span className="ab-time__yr">{t.year}</span>
              <span className="ab-time__name">{t.name}</span>
              <p className="ab-time__body">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ab-cta" id="kazas">
        <div>
          <span className="eyebrow" data-reveal>— Kāzas un pasākumi —</span>
          <h2 data-reveal style={{ marginTop: 14 }}>Tavs<br /><em>dekorātors</em><br />kāzām.</h2>
        </div>
        <div className="ab-cta__body" data-reveal>
          <p>Mēs dekorējam kāzas Latvijā kopš 2024. gada — no līgavas rokas pušķa līdz katrai svecei uz galda.</p>
          <p>Bezmaksas konsultācija, individuāla cenu paketē, viens kontakts no pirmā skicas līdz pēdējam pušķim svētdienas rītā.</p>
          <Link href="/kontakti" className="btn ab-cta__btn">Pierakstīties uz konsultāciju <span className="arr">→</span></Link>
        </div>
      </section>
    </>
  );
}
