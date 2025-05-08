import { BgBlueRing } from "@/components/ui/background/BlueRing";
import { Article } from "@/components/ui/front/Article";
import { FadeIn } from "@/components/ui/animations/FadeIn";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 px-4 sm:px-8 md:px-12 lg:px-20 font-[family-name:var(--font-geist-sans)]">
      <BgBlueRing />
      <div className="" />
      <main className="flex flex-col gap-12 pt-12">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-12">
            <h1 className="text-4xl font-bold text-center">
              M{"'"}entends-tu ? <span className="text-blue-500">Oui</span>,
              mais parfois <span className="text-red-500">non</span>.
            </h1>
            <div id={"explications"} />
            <p className="text-zinc-300 text-center">
              Dans ce site, nous verons les origines du trouble de la surditée
              et un exemple de personne connue etant atteint par ce trouble.
            </p>
            <hr className="border-t border-zinc-700 w-full" />
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <Article
            title="Qu'est-ce que la surdité ?"
            content={`La surdité est une altération de la capacité à percevoir les sons, allant
d'une légère difficulté à entendre jusqu'à une perte auditive complète.
Elle peut affecter une ou deux oreilles et toucher les personnes à tout âge.
Ce trouble auditif rend la compréhension de la parole plus difficile, en
particulier dans les environnements bruyants, et peut limiter les échanges
sociaux et professionnels. 

Vivre avec la surdité implique souvent de s'adapter à un mode de communication
différent. Certaines personnes utilisent la langue des signes, d'autres
bénéficient d'appareils auditifs ou d'implants (cochléaires). Il existe aussi
des aides visuelles et des technologies pour faciliter la vie quotidienne.`}
          />
        </FadeIn>
      </main>
      <div />
    </div>
  );
}
