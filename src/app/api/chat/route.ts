import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { PRODUCTS, CATEGORY_LABELS } from "@/lib/products";

export const runtime = "nodejs";

const FAQ_CONTEXT = `
BUJ (biežāk uzdotie jautājumi):

Pasūtīšana:
- Standarta pušķiem pietiek ar 24 stundām iepriekš. Lielāki projekti, kāzas un retas šķirnes — 1–2 nedēļas iepriekš.
- Var pasūtīt īpašu krāsu paleti — sarunā vienojamies par alternatīvām.
- Pušķus var izgatavot ar konkrētu ziedu skaitu (9, 15, 24 vai cits).

Piegāde:
- Piegādājam Iecavā, Bauskā, Baldonē, Ķekavā un Rīgā, citur Latvijā pēc vienošanās. Kāzām — visā Latvijā un blakus reģionos.
- Pasūtījumu var paņemt pats Iecavā, mūsu studijā (Rīgas iela 14A), darba laikā.

Ziedi un kopšana:
- Pareizi koptam pušķim — 5–9 dienas. Nogriež kātus zem 45° leņķa, maina ūdeni ik pēc 2 dienām, tur prom no saules un caurvēja.

Kāzas:
- Sākam ar sarunu, tad veidojam skici un tāmi. Avanss 30%, atlikušais — 7 dienas pirms pasākuma.
- Var veidot kāzu mēģinājumu (mock-up) pēc vienošanās.

Maksājumi:
- Bankas pārskaitījums, karte studijā vai online. Uzņēmumiem — rēķins ar PVN.
- Atcelšana līdz 24 h pirms standarta pušķiem. Kāzu projektiem — saskaņā ar individuālo līgumu.

Kontakti:
- E-pasts: studija@thegoldenrose.lv
- Studija: Rīgas iela 14A, Iecava LV-3913
- Darba laiks: P–Pk 9:00–20:00, Se 9:00–18:00, Sv 11:00–16:00
`;

function buildCatalogContext() {
  return PRODUCTS.map((p) => {
    const price = (p.price / 100).toFixed(2).replace(".", ",");
    return `- ${p.title} (${CATEGORY_LABELS[p.category]}) — €${price}. ${p.subtitle ?? ""} [/produkts/${p.handle}]`;
  }).join("\n");
}

const SYSTEM_PROMPT = `Tu esi The Golden Rose studijas asistents — neliela, neatkarīga floristikas un dekoru studija Iecavā, Latvijā.

TONIS:
- Latviešu valoda. Vienmēr.
- Editoriāls, smalks, mierīgs. Kā florists, ne kā robots.
- Īsi un konkrēti. Bez liekiem ievadiem, bez "protams!", bez emoji.
- Atbildi 1–3 teikumos, ja vien jautājums nav komplicēts.
- Ja iesaki konkrētu produktu, pievieno saiti formātā [Nosaukums](/produkts/handle).

ZINĀŠANAS:
- Studija atvērta visu nedēļu. P–Pk 9:00–20:00, Se 9:00–18:00, Sv 11:00–16:00.
- Studijas adrese: Rīgas iela 14A, Iecava.
- E-pasts sazināšanai: studija@thegoldenrose.lv
- Pasūtījumus pieņem 24h iepriekš (standarta pušķiem), kāzām 1–2 nedēļas.

KATALOGS (cenas EUR):
${buildCatalogContext()}

${FAQ_CONTEXT}

ROBEŽAS:
- Ja jautā par tēmu, kas nav saistīta ar floristiku, ziediem, dekoriem, studiju vai pasūtījumiem — pieklājīgi atgriez sarunu pie studijas.
- Ja nezini precīzu atbildi (piem., konkrētu datumu pieejamību), iesaki rakstīt uz studija@thegoldenrose.lv vai apmeklēt /kontakti.
- Nekad neizgudro cenas, kas nav katalogā.`;

type ChatMsg = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Asistents pagaidām nav konfigurēts." }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }

  let body: { messages?: ChatMsg[] };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Nederīgs pieprasījums." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const messages = (body.messages ?? [])
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-20)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

  if (messages.length === 0 || messages[0].role !== "user") {
    return new Response(JSON.stringify({ error: "Tukša ziņa." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const client = new Anthropic();

  try {
    const response = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    });
    const text = response.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    return new Response(JSON.stringify({ reply: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      return new Response(
        JSON.stringify({ error: "Pārāk daudz pieprasījumu. Pamēģini pēc brīža." }),
        { status: 429, headers: { "Content-Type": "application/json" } },
      );
    }
    const message = err instanceof Anthropic.APIError ? err.message : "Kļūda.";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
