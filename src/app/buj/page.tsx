"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Tag = "all" | "pasut" | "piegade" | "zidi" | "kazas" | "maksaj";

const TAGS: { id: Tag; label: string }[] = [
  { id: "all", label: "Visi" },
  { id: "pasut", label: "Pasūtīšana" },
  { id: "piegade", label: "Piegāde" },
  { id: "zidi", label: "Ziedi un sastāvs" },
  { id: "kazas", label: "Kāzas un pasākumi" },
  { id: "maksaj", label: "Maksājumi" },
];

const FAQS: { q: string; a: string; tag: Exclude<Tag, "all"> }[] = [
  { tag: "pasut", q: "Kā varu <em>pasūtīt</em> pušķi?", a: "Pasūtījumu vari atstāt mūsu vietnē, sūtot ziņu uz +371 27 772 200 vai vienkārši piezvanot. Mēs sazināsimies dažu minūšu laikā, lai apstiprinātu detaļas." },
  { tag: "pasut", q: "Vai varu pasūtīt pušķi <em>šodien</em>?", a: "Jā — ja pasūti līdz 16:00, mēs piegādājam vēl tajā pašā dienā Iecavā, Bauskā, Baldonē, Ķekavā un Rīgā. Visā Latvijā piegāde ir nākamajā darba dienā." },
  { tag: "pasut", q: "Vai varu pasūtīt pēc <em>foto</em>?", a: "Jā, sūti foto WhatsApp uz +371 27 772 200 — pēc tā veidosim līdzīgu pušķi atbilstoši sezonas ziediem. Pilnīgi vienāds nebūs (jo katrs zieds ir unikāls), bet sajūta būs tā pati." },
  { tag: "piegade", q: "Kur jūs <em>piegādājat</em>?", a: "Iecavā, Bauskā, Baldonē, Ķekavā un Rīgā — tajā pašā dienā. Citur Latvijā — nākamajā darba dienā ar kurjeru." },
  { tag: "piegade", q: "Cik <em>maksā</em> piegāde?", a: "Iecavā — 4 EUR, Bauskā/Baldonē/Ķekavā — 6 EUR, Rīgā — 8 EUR, citur Latvijā — atkarīgs no adreses, vidēji 9–15 EUR. Pasūtījumiem virs 100 EUR piegāde Iecavā ir bez maksas." },
  { tag: "piegade", q: "Vai varat piegādāt <em>anonīmi</em>?", a: "Protams. Mēs neminām sūtītāja vārdu un pievienojam tikai to ziņu, ko tu mums atstāj." },
  { tag: "zidi", q: "Cik ilgi pušķis <em>noturas</em>?", a: "Pareizi kopjot — 7 līdz 12 dienas. Pirms ielikšanas vāzē nogriez stiebrus 45° leņķī, maini ūdeni katru dienu un turi prom no taisnās saules un caurvēja." },
  { tag: "zidi", q: "Vai varu izvēlēties <em>krāsu</em>?", a: "Jā. Pasūtījuma piezīmēs vari norādīt vēlamo krāsu paleti — mēs strādājam ar to, kas svaigi pieejams sezonā, un saskaņojam ar tevi pirms veidošanas." },
  { tag: "zidi", q: "Kādi ziedi ir <em>sezonā</em>?", a: "Šobrīd: rozes, hortenzijas, eikalipts, waxflower, tulpes. Sezonas izmaiņas notiek katras divas nedēļas — Instagram @thegoldenroseee mēs publicējam, kas tikko ienāca." },
  { tag: "kazas", q: "Cik <em>iepriekš</em> jārezervē kāzu dekorēšana?", a: "Sezonas mēnešus (jūnijs–septembris) ieteicams rezervēt 4–6 mēnešus iepriekš. Citos laikos pietiek ar 1–2 mēnešiem. Konsultācija ir bezmaksas." },
  { tag: "kazas", q: "Cik <em>maksā</em> kāzu dekorēšana?", a: "Atkarīgs no apjoma. Mazas kāzas (20–40 viesi) sākas no 600 EUR, pilnvērtīga dekorēšana lielām kāzām — 2000+ EUR. Konsultācijā mēs sagatavojam individuālu cenu paketē." },
  { tag: "kazas", q: "Vai veidojat <em>līgavas</em> rokas pušķi?", a: "Jā — tas ir mūsu mīļākais darbs. Līgavas pušķis tiek veidots dienā pirms kāzām un piegādāts uz vietas no rīta. Cena no 95 EUR." },
  { tag: "maksaj", q: "Kādi <em>maksājumu</em> veidi?", a: "Bankas pārskaitījums, karte (Visa, Mastercard, Maestro), Apple Pay, Google Pay un skaidra nauda studijā. Kāzu pasūtījumiem — 30% iemaksa rezervēšanai, atlikums nedēļu pirms." },
  { tag: "maksaj", q: "Vai izrakstāt <em>rēķinu</em>?", a: "Jā, gan PVN rēķinu uzņēmumiem, gan parastu apliecinājumu privātpersonām. Sūti rekvizītus uz studija@thegoldenrose.lv." },
  { tag: "pasut", q: "Ko darīt, ja saņēmējs nav <em>mājās</em>?", a: "Kurjers atstāj ziņu un sazinās ar saņēmēju. Ja neizdodas piegādāt — pušķis paliek mūsu studijā vēsumā un mēs vienojamies par jaunu laiku bez papildu maksas." },
];

export default function FAQPage() {
  const [tag, setTag] = useState<Tag>("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = useMemo(
    () => (tag === "all" ? FAQS : FAQS.filter((f) => f.tag === tag)),
    [tag],
  );

  return (
    <>
      <section className="faq-hero">
        <div>
          <p className="faq-hero__crumb"><Link href="/">Sākums</Link> — Bieži uzdotie jautājumi</p>
          <h1 data-reveal>Bieži<br /><em>uzdotie</em></h1>
        </div>
        <p className="faq-hero__lead" data-reveal>
          Ja atbildes nav šeit, raksti vai zvani — atbildam tajā pašā dienā.
        </p>
      </section>

      <div className="faq-tags">
        {TAGS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`faq-tag ${tag === t.id ? "on" : ""}`}
            onClick={() => {
              setTag(t.id);
              setOpenIdx(null);
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <section className="faq-list">
        {filtered.map((f, i) => {
          const open = openIdx === i;
          return (
            <div
              key={`${f.q}-${i}`}
              className={`faq-item ${open ? "open" : ""}`}
              onClick={() => setOpenIdx(open ? null : i)}
              data-reveal
            >
              <div className="faq-q">
                <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="faq-h" dangerouslySetInnerHTML={{ __html: f.q }} />
                <span className="faq-toggle" aria-hidden>↓</span>
              </div>
              <div className="faq-a">
                <div className="faq-a__inner">
                  <div className="faq-a__padding">
                    <div className="faq-a__body"><p>{f.a}</p></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="faq-cta">
        <span className="eyebrow">— Vēl jautājumi —</span>
        <h2 style={{ marginTop: 16 }}>Nav šeit? <em>Pajautā.</em></h2>
        <p>Mēs labāk piezvanām nekā rakstām desmit lapas BUJ. Zvani vai raksti — atbildam tajā pašā dienā.</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="tel:+37127772200" className="btn">+371 27 772 200 <span className="arr">→</span></a>
          <Link href="/kontakti" className="btn btn--ghost">Sūtīt ziņu</Link>
        </div>
      </section>
    </>
  );
}
