"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Tag = "all" | "pasut" | "piegade" | "zidi" | "kazas" | "maksaj";

const TAGS: { id: Tag; label: string }[] = [
  { id: "all", label: "Visi" },
  { id: "pasut", label: "Pasūtīšana" },
  { id: "piegade", label: "Piegāde" },
  { id: "zidi", label: "Ziedi & kopšana" },
  { id: "kazas", label: "Kāzas" },
  { id: "maksaj", label: "Maksājumi" },
];

const FAQS: { q: string; a: string; tag: Exclude<Tag, "all"> }[] = [
  { tag: "pasut", q: "Cik ilgi iepriekš jāpasūta pušķis?", a: "Standarta pušķiem pietiek ar 24 stundām. Lielāki projekti, kāzas un retas šķirnes — 1–2 nedēļas iepriekš." },
  { tag: "pasut", q: "Vai varu pasūtīt ar īpašu krāsu paleti?", a: "Jā, gandrīz vienmēr. Sarunā vienojamies par paleti un alternatīvām, ja kāds zieds nav pieejams." },
  { tag: "pasut", q: "Vai izgatavojat pušķus ar konkrēta ziedu skaitu?", a: "Jā — 9, 15, 24 vai cits skaits. Tikai ņem vērā, ka skaitam jābūt loģiskam zieda izmēram." },
  { tag: "piegade", q: "Vai piegādājat?", a: "Jelgavā un Rīgā — jā. Citur Latvijā pēc vienošanās. Sūtīšanas izmaksas aprēķinam kasē." },
  { tag: "piegade", q: "Cik tālu piegādājat kāzām?", a: "Visā Latvijā un blakus reģionos (Lietuva, Igaunija) ar uzstādīšanu uz vietas." },
  { tag: "piegade", q: "Vai varu paņemt pasūtījumu pats?", a: "Jā — Jelgavā, mūsu studijā, darba laikā vai pēc vienošanās." },
  { tag: "zidi", q: "Cik ilgi pušķis nezaudē izskatu?", a: "Pareizi koptam pušķim — 5–9 dienas. Atkarīgs no šķirnēm un istabas temperatūras." },
  { tag: "zidi", q: "Kā pareizi kopt pušķi?", a: "Nogriez kātus zem 45° leņķa, maini ūdeni ik pēc 2 dienām, tur prom no saules un caurvēja." },
  { tag: "zidi", q: "Vai izmantojat ekoloģiskus materiālus?", a: "Pārsvarā jā — papīrs, audumi, lentes. Putuplastu un mākslīgo masu izmantojam tikai kad konstrukcija to prasa." },
  { tag: "kazas", q: "Kā notiek kāzu sadarbība?", a: "Sākam ar sarunu, tad veidojam skici un tāmi. Pēc apstiprinājuma seko detalizēts plāns un izstrāde." },
  { tag: "kazas", q: "Vai jāmaksā avanss?", a: "Jā — 30% no kopējās summas. Atlikušais — 7 dienas pirms pasākuma." },
  { tag: "kazas", q: "Vai veidojat arī kāzu mēģinājumu (mock-up)?", a: "Jā, pēc vienošanās. Mēģinājums iekļauj galda kompozīciju vai mazo līgavas pušķi." },
  { tag: "maksaj", q: "Kā varu samaksāt?", a: "Bankas pārskaitījums, karte studijā vai online. Lielākiem projektiem — rēķins ar atliktu termiņu." },
  { tag: "maksaj", q: "Vai izrakstāt rēķinu uzņēmumam?", a: "Jā, ar visu PVN un detaļām. Atsūti rekvizītus, izrakstīsim." },
  { tag: "maksaj", q: "Atgriešanas un atcelšanas politika?", a: "Standarta pušķiem — atcelšana līdz 24 h pirms. Kāzu projektiem — saskaņā ar individuālo līgumu." },
];

export default function FAQPage() {
  const [tag, setTag] = useState<Tag>("all");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filtered = useMemo(
    () => (tag === "all" ? FAQS : FAQS.filter((f) => f.tag === tag)),
    [tag],
  );

  return (
    <>
      <section className="faq-hero">
        <div>
          <p className="faq-hero__crumb"><Link href="/">Sākums</Link> / BUJ</p>
          <h1 data-reveal>Atbildes, pirms tu pat <em>paspēj</em> jautāt.</h1>
        </div>
        <p className="faq-hero__lead" data-reveal>
          Ja atbildi nesameklēji — uzraksti{" "}
          <a href="mailto:studio@thegoldenrose.lv">studio@thegoldenrose.lv</a>.
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

      <ul className="faq-list">
        {filtered.map((f, i) => {
          const open = openIdx === i;
          return (
            <li
              key={`${f.q}-${i}`}
              className={`faq-item ${open ? "open" : ""}`}
              onClick={() => setOpenIdx(open ? null : i)}
            >
              <div className="faq-q">
                <span className="faq-num">0{i + 1}</span>
                <h3 className="faq-h">{f.q}</h3>
                <span className="faq-toggle" aria-hidden>+</span>
              </div>
              <div className="faq-a">
                <div className="faq-a__inner">
                  <div className="faq-a__padding">
                    <p className="faq-a__body">{f.a}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <section className="faq-cta">
        <h2>Jautājums, ko neuzdevām?</h2>
        <p>Uzraksti — atbildam vienas darba dienas laikā.</p>
        <Link href="/kontakti" className="btn">Sazināties <span className="arr">→</span></Link>
      </section>
    </>
  );
}
