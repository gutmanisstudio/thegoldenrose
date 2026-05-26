"use client";

import Link from "next/link";
import { useState } from "react";

const TOPICS = [
  { id: "puski", label: "Pušķis" },
  { id: "ligavu", label: "Līgavas pušķis" },
  { id: "kazas", label: "Kāzu projekts" },
  { id: "abons", label: "Abonements" },
  { id: "cits", label: "Cits" },
];

const HOURS = [
  { day: "Otrdiena", h: "10:00 – 19:00", n: "Atvērts" },
  { day: "Trešdiena", h: "10:00 – 19:00", n: "Atvērts" },
  { day: "Ceturtdiena", h: "10:00 – 19:00", n: "Atvērts" },
  { day: "Piektdiena", h: "10:00 – 19:00", n: "Atvērts" },
  { day: "Sestdiena", h: "10:00 – 16:00", n: "Atvērts" },
  { day: "Svētdiena", h: "Pēc vienošanās", n: "Pieejams" },
  { day: "Pirmdiena", h: "Slēgts", n: "—" },
];

export default function ContactPage() {
  const [topic, setTopic] = useState("puski");
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="ct-hero">
        <p className="ct-hero__crumb"><Link href="/">Sākums</Link> / Kontakti</p>
        <h1 data-reveal>Pasaki, ko tu <em>vēlies</em> — pārējo izrunāsim.</h1>
      </section>

      <section className="ct-body">
        <form
          className={`ct-form ${sent ? "sent" : ""}`}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="ct-form__heading" data-reveal>
            <h2>Pieteikt sarunu</h2>
          </div>

          <div className="ct-form__inputs">
            <div className="ct-field">
              <label>Tēma</label>
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

            <div className="ct-form__row">
              <div className="ct-field">
                <label>Vārds</label>
                <input type="text" name="name" placeholder="Jūsu vārds" required />
              </div>
              <div className="ct-field">
                <label>E-pasts</label>
                <input type="email" name="email" placeholder="vards@piemers.lv" required />
              </div>
            </div>

            <div className="ct-form__row">
              <div className="ct-field">
                <label>Telefons</label>
                <input type="tel" name="phone" placeholder="+371" />
              </div>
              <div className="ct-field">
                <label>Datums</label>
                <input type="date" name="date" />
              </div>
            </div>

            <div className="ct-field">
              <label>Pastāsti par savu ideju</label>
              <textarea name="message" placeholder="Krāsa, sajūta, vieta…" rows={6} required />
            </div>
          </div>

          <div className="ct-form__ok">Paldies — sazināsimies 1 darba dienas laikā.</div>

          <button type="submit" className="btn ct-form__submit">
            Nosūtīt <span className="arr">→</span>
          </button>
        </form>

        <aside className="ct-info">
          <div className="ct-info__block" data-reveal>
            <p className="ct-info__h">Studija</p>
            <span className="ct-info__v">Lielā iela 12</span>
            <p className="ct-info__sub">Jelgava, Latvija</p>
          </div>
          <div className="ct-info__block" data-reveal>
            <p className="ct-info__h">Sazināties</p>
            <a className="ct-info__v" href="mailto:studio@thegoldenrose.lv">studio@thegoldenrose.lv</a>
            <p className="ct-info__sub"><a href="tel:+37120000000">+371 2X XXX XXX</a></p>
          </div>
          <div className="ct-info__block" data-reveal>
            <p className="ct-info__h">Sociālie tīkli</p>
            <a className="ct-info__v" href="#">@thegoldenrose</a>
            <p className="ct-info__sub">Instagram · Pinterest · TikTok</p>
          </div>
        </aside>
      </section>

      <section className="ct-map">
        <div className="ct-map__inner">
          <Image alt="" />
          <div className="ct-map__overlay" />
          <div className="ct-map__card">
            <h3>Studija</h3>
            <p>Lielā iela 12, Jelgava LV-3001</p>
            <span className="meta">Brīvi ienākt darba laikā</span>
            <span className="meta">Auto novietošana — pagalmā</span>
          </div>
        </div>
      </section>

      <section className="ct-hours">
        <h2 data-reveal>Darba <em>laiks</em></h2>
        <div>
          {HOURS.map((h) => (
            <div key={h.day} className="ct-hours__row" data-reveal>
              <span className="ct-hours__day">{h.day}</span>
              <span className="ct-hours__hours">{h.h}</span>
              <span className={`ct-hours__note ${h.n === "Atvērts" ? "ct-hours__open" : ""}`}>{h.n}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Image({ alt }: { alt: string }) {
  // OpenStreetMap embed fallback inside the styled .ct-map__img frame
  return (
    <iframe
      className="ct-map__img"
      title={alt || "Karte"}
      src="https://www.openstreetmap.org/export/embed.html?bbox=23.715%2C56.648%2C23.745%2C56.660&layer=mapnik"
      loading="lazy"
      style={{ border: 0 }}
    />
  );
}
