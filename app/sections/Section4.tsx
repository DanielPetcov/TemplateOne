interface Section4Props {
  dressCodeParagraph: string;
}

export default function Section4({ dressCodeParagraph }: Section4Props) {
  return (
    <div className="container mx-auto mt-30 px-4">
      <h3 className="text-5xl mb-8">
        Probabil te <br /> întrebi...
      </h3>
      <div className="space-y-4">
        <div className="space-y-4">
          <h4 className="text-2xl">Cum ajung la locație?</h4>
          <p>
            Locația este accesibilă cu autobuzul și mașina. Poți găsi adresa
            exactă căutând „Willowblane Villas” pe orice hartă online. Dacă ai
            nevoie de transport, te rugăm să menționezi acest lucru în
            confirmarea ta (RSVP). Notă: Locația este accesibilă pentru
            persoanele în scaun rulant.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-2xl">Care este codul vestimentar?</h4>
          <p>{dressCodeParagraph}</p>
        </div>
      </div>
    </div>
  );
}
