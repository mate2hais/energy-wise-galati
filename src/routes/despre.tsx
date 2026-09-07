import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, BadgeCheck, ShieldCheck, Factory, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT } from "@/lib/site-data";
import portretAsset from "@/assets/portret-auditor.jpg.asset.json";
const portret = portretAsset.url;

const TITLE = "Despre Iulian Gabriel Panainte — Auditor Energetic Gradul I, Galați";
const DESC =
  "Auditor energetic atestat Gradul I, cu specializări în studii NZEB, studii SER și audit industrial. Autorizație emisă de Ministerul Dezvoltării.";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/despre" },
    ],
    links: [{ rel: "canonical", href: "/despre" }],
  }),
  component: DesprePage,
});

function DesprePage() {
  return (
    <>
      <PageHero
        eyebrow="Despre"
        title="Iulian Gabriel Panainte, Auditor Energetic Gradul I"
        description="Peste 12 ani de activitate în evaluarea performanței energetice a clădirilor din Galați și din județ, cu peste 1.800 de certificate și audituri emise."
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,380px)_1fr]">
        <Reveal>
          <img
            src={portret}
            alt="Iulian Gabriel Panainte, auditor energetic gradul I în Galați"
            width={1000}
            height={1200}
            loading="lazy"
            className="w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
          />
          <div className="surface-card mt-6 p-6">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <BadgeCheck className="size-4 text-primary" /> Autorizație Ministerul Dezvoltării
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Atestat ca auditor energetic pentru clădiri, gradul I, cu specialitățile construcții și
              instalații. Certificatul de atestare poate fi prezentat la cerere, înainte de
              contractarea lucrării.
            </p>
          </div>
        </Reveal>

        <div className="space-y-10">
          <Reveal>
            <h2 className="text-2xl font-bold">Cine sunt și ce fac</h2>
            <p className="mt-3 text-muted-foreground">
              Lucrez ca auditor energetic în Galați și mă ocup de tot ce înseamnă evaluarea
              consumului de energie al unei clădiri: de la certificatul cerut de notar la vânzarea
              unui apartament, până la auditul complet al unei hale de producție sau la documentația
              NZEB pentru o construcție nouă.
            </p>
            <p className="mt-3 text-muted-foreground">
              Fiecare lucrare este realizată personal, de la măsurători până la semnătura de pe
              document. Nu lucrez cu intermediari și nu subcontractez.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-2xl font-bold">Ce înseamnă Gradul I</h2>
            <p className="mt-3 text-muted-foreground">
              Atestarea de gradul I permite întocmirea certificatelor și auditurilor energetice
              pentru orice tip și mărime de clădire — locuințe individuale, blocuri, spații
              comerciale, clădiri publice și obiective industriale. Un auditor cu grad inferior nu
              poate semna toate aceste categorii de lucrări.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-2xl font-bold">Specializări</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Sun, t: "Studii NZEB", d: "Clădiri noi și renovări majore cu consum aproape zero." },
                { icon: Sun, t: "Studii SER", d: "Fotovoltaice, pompe de căldură, solar termic." },
                { icon: Factory, t: "Audit industrial", d: "Hale, fabrici și spații de producție." },
              ].map((s) => (
                <div key={s.t} className="surface-card p-5">
                  <s.icon className="size-5 text-primary" />
                  <p className="mt-3 font-semibold">{s.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-2xl border border-primary/25 bg-accent p-7">
              <p className="flex items-center gap-2 font-semibold text-accent-foreground">
                <ShieldCheck className="size-5" /> Angajamentul meu: vizita la fața locului
              </p>
              <p className="mt-3 text-sm text-accent-foreground/90">
                Pe piață există practica de a emite certificate „din birou”, doar pe baza unei
                suprafețe comunicate telefonic. Un astfel de document nu reflectă clădirea reală și
                poate fi contestat. Eu vin întotdeauna la fața locului, măsor și fotografiez, iar
                valorile din certificat corespund construcției dumneavoastră.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="cta" size="lg">
                <a href={CONTACT.phoneHref}>
                  <Phone /> {CONTACT.phoneDisplay}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/proces">Vezi cum decurge o lucrare</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
