import { BgBlueRing } from "@/components/ui/background/BlueRing";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 p-20 font-[family-name:var(--font-geist-sans)]">
      <BgBlueRing />
      <div 
        className=""
      />
      <main className="flex flex-col gap-12 pt-16">
        <h1 className="text-4xl font-bold text-center">
          M{"'"}entends-tu ? <span className="text-blue-500">Oui</span>, mais
          parfois <span className="text-red-500">non</span>.
        </h1>

        <p className="text-zinc-300 text-center">
          Dans ce site, nous verons les origines du trouble de la surditée et un
          exemple de personne connue etant atteint par ce trouble.
        </p>

        <hr className="border-t border-zinc-700 w-full" />

        <article className="flex flex-col gap-4 items-center justify-center bg-zinc-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center">
            Qu&apos;est-ce que la surditée ?
          </h2>
          <p className="text-zinc-300 text-center">
            La surdité est un trouble auditif qui affecte la capacité d&apos;une
            personne à entendre. Elle peut être causée par divers facteurs,
            notamment des facteurs génétiques, des infections, des traumatismes
            acoustiques ou des maladies. La surdité peut être partielle ou
            totale, et elle peut survenir à tout âge. Les personnes atteintes de
            surdité peuvent avoir des difficultés à comprendre la parole,
            surtout dans des environnements bruyants. La surdité peut également
            affecter la communication et les interactions sociales. Il existe
            différentes options de traitement et d&apos;adaptation, y compris
            les appareils auditifs, les implants cochléaires et la langue des
            signes.
          </p>
        </article>
      </main>
      <div />
    </div>
  );
}
