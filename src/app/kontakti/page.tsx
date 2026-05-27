"use client";

import Link from "next/link";
import { useState } from "react";

const TOPICS = [
  { id: "puski", label: "Pušķis" },
  { id: "ligavu", label: "Līgavu pušķis" },
  { id: "kazas", label: "Kāzu dekors" },
  { id: "abons", label: "Abonements" },
  { id: "cits", label: "Cits" },
];

const HOURS = [
  { day: "Pirmdiena", h: "9:00 — 20:00", n: "Atvērts", open: true },
  { day: "Otrdiena", h: "9:00 — 20:00", n: "Atvērts", open: true },
  { day: "Trešdiena", h: "9:00 — 20:00", n: "Atvērts", open: true },
  { day: "Ceturtdiena", h: "9:00 — 20:00", n: "Atvērts", open: true },
  { day: "Piektdiena", h: "9:00 — 20:00", n: "Atvērts", open: true },
  { day: "Sestdiena", h: "9:00 — 18:00", n: "Saīsināts", open: false },
  { day: "Svētdiena", h: "11:00 — 16:00", n: "Saīsināts", open: false },
];

export default function ContactPage() {
  const [topic, setTopic] = useState("puski");
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="ct-hero">
        <p className="ct-hero__crumb"><Link href="/">Sākums</Link> — Kontakti</p>
        <h1 data-reveal>Sazinies <em>—</em><br />klausāmies.</h1>
      </section>

      <section className="ct-body">
        <form
          className={`ct-form ${sent ? "sent" : ""}`}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="ct-form__inputs">
            <div className="ct-form__heading">
              <span className="eyebrow" data-reveal>— Pasūtījums vai konsultācija —</span>
              <h2 data-reveal>
                Pastāsti, kas tev vajadzīgs<br />— mēs atsauksimies tajā pašā dienā.
              </h2>
            </div>

            <div className="ct-form__row" data-reveal>
              <div className="ct-field">
                <label>Vārds</label>
                <input type="text" name="name" placeholder="Tavs vārds" required />
              </div>
              <div className="ct-field">
                <label>Telefons</label>
                <input type="tel" name="phone" placeholder="+371 …" required />
              </div>
            </div>

            <div className="ct-field" data-reveal>
              <label>E-pasts</label>
              <input type="email" name="email" placeholder="tu@piemers.lv" />
            </div>

            <div className="ct-field" data-reveal>
              <label>Par ko ir runa?</label>
              <div className="ct-radios">
                {TOPICS.map((t) => (
                  <label key={t.id} className="ct-radio">
                    <input
                      type="radio"
                      name="topic"
                      value={t.id}
                      checked={topic === t.id}
                      onChange={() => setTopic(t.id)}
                    />
                    <span>{t.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="ct-form__row" data-reveal>
              <div className="ct-field">
                <label>Vēlamais budžets</label>
                <select name="budget" defaultValue="">
                  <option value="" disabled>Izvēlies</option>
                  <option>Līdz 50 EUR</option>
                  <option>50 – 100 EUR</option>
                  <option>100 – 250 EUR</option>
                  <option>250 – 500 EUR</option>
                  <option>500+ EUR</option>
                  <option>Vēl nezinu</option>
                </select>
              </div>
              <div className="ct-field">
                <label>Kad vajadzīgs?</label>
                <input type="text" name="when" placeholder="piem. piektdien 18:00" />
              </div>
            </div>

            <div className="ct-field" data-reveal>
              <label>Pastāsti vairāk</label>
              <textarea name="msg" placeholder="Krāsas, sajūta, kam tas ir, ko gribi pateikt..." rows={5} />
            </div>

            <button type="submit" className="btn ct-form__submit" data-reveal>
              Nosūtīt <span className="arr">→</span>
            </button>
          </div>

          <div className="ct-form__ok">
            Paldies — saņēmām tavu ziņu. Sazināsimies šodien.
          </div>
        </form>

        <aside className="ct-info">
          <div className="ct-info__block" data-reveal>
            <div className="ct-info__h">— Tūlītēji —</div>
            <a href="tel:+37127772200" className="ct-info__v">+371 27 772 200</a>
            <p className="ct-info__sub">WhatsApp un SMS, atbildam dažu minūšu laikā darba laikā.</p>
          </div>
          <div className="ct-info__block" data-reveal>
            <div className="ct-info__h">— E-pasts —</div>
            <a href="mailto:studija@thegoldenrose.lv" className="ct-info__v">studija@<br />thegoldenrose.lv</a>
            <p className="ct-info__sub">Lielāki pasākumi un kāzu konsultācijas.</p>
          </div>
          <div className="ct-info__block" data-reveal>
            <div className="ct-info__h">— Sociālie —</div>
            <a href="https://instagram.com/thegoldenroseee" target="_blank" rel="noopener" className="ct-info__v">@thegoldenroseee</a>
            <p className="ct-info__sub">Iekšskats studijā, jaunākie pušķi, kāzu galerijas.</p>
          </div>
          <div className="ct-info__block" data-reveal>
            <div className="ct-info__h">— Adrese —</div>
            <div className="ct-info__v">Rīgas iela 14,<br />Jelgava</div>
            <p className="ct-info__sub">Pirmais stāvs, ieeja no ielas.</p>
          </div>
        </aside>
      </section>

      <section className="ct-map">
        <div className="ct-map__inner">
          <iframe
            className="ct-map__img"
            title="Karte"
            src="https://www.openstreetmap.org/export/embed.html?bbox=23.715%2C56.648%2C23.745%2C56.660&layer=mapnik"
            loading="lazy"
            style={{ border: 0 }}
          />
          <div className="ct-map__overlay" />
          <div className="ct-map__card" data-reveal>
            <h3>Studija</h3>
            <p>Rīgas iela 14, Jelgava. Apciemot vari katru darba dienu — atvērti no 9:00 līdz 20:00.</p>
            <span className="meta" style={{ color: "var(--accent)" }}>Atvērts šobrīd</span>
            <span className="meta" style={{ color: "var(--fg-soft)" }}>P–PT · 9:00–20:00</span>
          </div>
        </div>
      </section>

      <section className="ct-hours">
        <h2 data-reveal>Darba<br /><em>laiki</em></h2>
        <div className="ct-hours__list">
          {HOURS.map((h) => (
            <div key={h.day} className="ct-hours__row" data-reveal>
              <span className="ct-hours__day">{h.day}</span>
              <span className="ct-hours__hours">{h.h}</span>
              <span className={`ct-hours__note ${h.open ? "ct-hours__open" : ""}`}>{h.n}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
