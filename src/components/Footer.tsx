import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot__top">
        <div>
          <Image className="foot__mark" src="/img/logo-mark.png" alt="" width={80} height={80} />
          <p className="foot__brand">The Golden Rose</p>
        </div>

        <div>
          <h4>Navigācija</h4>
          <ul>
            <li><Link href="/veikals">Veikals</Link></li>
            <li><Link href="/par-mums">Par mums</Link></li>
            <li><Link href="/kontakti">Kontakti</Link></li>
            <li><Link href="/buj">BUJ</Link></li>
          </ul>
        </div>

        <div>
          <h4>Studija</h4>
          <ul>
            <li>Rīgas iela 14, Jelgava</li>
            <li>P–PT 9–20 · S 9–18 · Sv 11–16</li>
            <li><a href="tel:+37127772200">+371 27 772 200</a></li>
            <li><a href="mailto:studija@thegoldenrose.lv">studija@thegoldenrose.lv</a></li>
          </ul>
        </div>

        <div>
          <h4>Sekot</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>
      </div>

      <div className="foot__bot">
        <p>© {new Date().getFullYear()} The Golden Rose</p>
        <p>Veidots ar mīlestību Jelgavā</p>
      </div>
    </footer>
  );
}
