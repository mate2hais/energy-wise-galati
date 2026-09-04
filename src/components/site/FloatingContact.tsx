import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/site-data";

export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrie pe WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-cta)] transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
      </a>
      <a
        href={CONTACT.phoneHref}
        aria-label={`Sună la ${CONTACT.phoneDisplay}`}
        className="flex size-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-[var(--shadow-cta)] transition-transform hover:scale-105"
      >
        <Phone className="size-6" />
      </a>
    </div>
  );
}
