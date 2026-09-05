import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT, PRICING } from "@/lib/site-data";

const TITLE = "Prețuri certificat și audit energetic Galați — tarife orientative";
const DESC =
  "Tarife orientative pentru certificat energetic apartament, audit bloc de locuințe, spațiu comercial, audit industrial și consultanță NZEB/SER în Galați.";

export const Route = createFileRoute("/preturi")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/preturi" },
    ],
    links: [{ rel: "canonical", href: "/preturi" }],
  }),
  component: PreturiPage,
});

function PreturiPage() {
  return (
    <>
      <PageHero
        eyebrow="Prețuri"
        title="Tarife orientative, comunicate din start"
        description="Prețul final depinde de suprafață, tipul clădirii și complexitatea instalațiilor. Îl aflați însă înainte de a începe lucrarea și nu se modifică pe parcurs."
      >
        <Button asChild variant="cta" size="lg">
          <a href={CONTACT.phoneHref}>
            <Phone /> Cere ofertă: {CONTACT.phoneDisplay}
          </a>
        </Button>
      </PageHero>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRICING.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div
                className={`surface-card flex h-full flex-col p-7 ${
                  p.featured ? "border-primary/40 ring-1 ring-primary/25" : ""
                }`}
              >
                {p.featured && (
                  <span className="mb-3 w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Cel mai solicitat
                  </span>
                )}
                <h2 className="text-lg font-semibold">{p.title}</h2>
                <p className="mt-2 text-2xl font-bold gradient-text">{p.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={p.featured ? "cta" : "outline"} className="mt-6">
                  <Link to="/contact">Solicită ofertă</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 rounded-2xl border border-primary/25 bg-accent p-8">
            <p className="flex items-center gap-2 font-semibold text-accent-foreground">
              <ShieldCheck className="size-5" /> Transparență și corectitudine
            </p>
            <p className="mt-3 text-sm text-accent-foreground/90">
              Prețurile de mai sus sunt orientative și pornesc de la lucrări standard. Oferta finală
              se stabilește după o scurtă discuție despre suprafață, tipul clădirii și instalații, iar
              suma comunicată include deplasarea, măsurătorile, emiterea documentului și recomandările
              de eficientizare. Un preț suspect de mic pe piață înseamnă, de regulă, un document emis
              fără vizită la fața locului — cu riscul de a fi contestat.
            </p>
          </div>
        </Reveal>
      </div>
    </>
  );
}
