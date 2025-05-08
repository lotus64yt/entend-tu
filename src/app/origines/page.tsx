import { BgBlueRing } from "@/components/ui/background/BlueRing";
import { Article } from "@/components/ui/front/Article";
import { FadeIn } from "@/components/ui/animations/FadeIn";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 p-20 font-[family-name:var(--font-geist-sans)]">
      <BgBlueRing />
      <div className="" />
      <main className="flex flex-col gap-12 pt-12">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-12">
            <h1 className="text-4xl font-bold text-center">
              <span className="text-blue-500">Mais ?</span> Qu{"'"}elles sont
              les <span className="text-red-500">origines</span> de la{" "}
              <span className="text-blue-500">surdité</span> ?
            </h1>
            <p className="text-zinc-300 text-center">
              Dans ce site, nous verrons les origines du trouble de la surdité,
              à travers différentes causes médicales, génétiques ou
              environnementales.
            </p>
            <hr className="border-t border-zinc-700 w-full" />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Article
            title="Origine génétique"
            content={`La surdité d'origine génétique est transmise héréditairement. Elle peut être présente dès la naissance ou apparaître progressivement. 
Certains gènes spécifiques peuvent être responsables d'une perte auditive, qu'elle soit isolée ou associée à d'autres troubles. 
Ce type de surdité peut affecter un ou deux parents, même s’ils n’en souffrent pas eux-mêmes.`}
          />
        </FadeIn>

        <FadeIn delay={0.5}>
          <Article
            title="Origine congénitale"
            content={`La surdité congénitale est présente dès la naissance et peut résulter d'infections pendant la grossesse, comme la rubéole ou le cytomégalovirus, 
ou de complications à la naissance (manque d'oxygène, prématurité, jaunisse sévère). 
Elle nécessite un dépistage néonatal pour permettre une prise en charge rapide.`}
          />
        </FadeIn>

        <FadeIn delay={0.7}>
          <Article
            title="Origine infectieuse"
            content={`Certaines infections peuvent entraîner une perte auditive, notamment les otites chroniques, la méningite, ou encore la rougeole et les oreillons. 
Ces infections peuvent endommager l'oreille interne ou le nerf auditif, provoquant une surdité temporaire ou permanente.`}
          />
        </FadeIn>

        <FadeIn delay={0.9}>
          <Article
            title="Origine traumatique"
            content={`Des traumatismes crâniens, des barotraumatismes (liés à la pression), ou des expositions à des sons très forts peuvent entraîner une surdité. 
L'explosion d’un tympan ou l’atteinte de l’oreille interne est souvent en cause. 
Le port de protections auditives est essentiel dans les environnements bruyants.`}
          />
        </FadeIn>

        <FadeIn delay={1.1}>
          <Article
            title="Origine liée à l'âge (presbyacousie)"
            content={`Avec l'âge, les cellules ciliées de l'oreille interne se détériorent, entraînant une surdité progressive appelée presbyacousie. 
C'est un phénomène naturel qui touche principalement les sons aigus. Des appareils auditifs peuvent améliorer la compréhension et la qualité de vie.`}
          />
        </FadeIn>

        <FadeIn delay={1.3}>
          <Article
            title="Origine médicamenteuse (ototoxicité)"
            content={`Certains médicaments dits "ototoxiques" peuvent endommager l'oreille interne, comme certains antibiotiques puissants, traitements contre le cancer, ou anti-inflammatoires. 
Un suivi médical rigoureux est nécessaire lorsque ces traitements sont utilisés.`}
          />
        </FadeIn>
      </main>
      <div />
    </div>
  );
}
