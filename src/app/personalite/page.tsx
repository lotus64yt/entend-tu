import { BgBlueRing } from "@/components/ui/background/BlueRing";
import { Article } from "@/components/ui/front/Article";
import { FadeIn } from "@/components/ui/animations/FadeIn";

export default function BeethovenPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 p-20 font-[family-name:var(--font-geist-sans)]">
      <BgBlueRing />
      <div className="" />
      <main className="flex flex-col gap-12 pt-12">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-12">
            <h1 className="text-4xl font-bold text-center">
              Beethoven : <span className="text-blue-500">génie</span> de la musique malgré la{" "}
              <span className="text-red-500">surdité</span>
            </h1>
            <p className="text-zinc-300 text-center">
              Plongée dans l’histoire de l’un des plus grands compositeurs, qui a défié l’impossible.
            </p>
            <hr className="border-t border-zinc-700 w-full" />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Article
            title="Qui était Beethoven ?"
            content={`Ludwig van Beethoven, né en 1770 à Bonn (Allemagne), est l'un des compositeurs les plus influents de l'histoire de la musique classique. 
Il est célèbre pour ses symphonies, ses sonates et ses concertos, qui ont marqué la transition entre la période classique et romantique.`}
          />
        </FadeIn>

        <FadeIn delay={0.5}>
          <Article
            title="Origines de sa surdité"
            content={`Beethoven a commencé à perdre l’audition vers l’âge de 26 ans. Les causes exactes restent inconnues, mais les hypothèses incluent une maladie auto-immune, une exposition prolongée au plomb, ou encore des infections chroniques.
La surdité est devenue progressivement totale vers la fin de sa trentaine.`}
          />
        </FadeIn>

        <FadeIn delay={0.7}>
          <Article
            title="Comment a-t-il surmonté son handicap ?"
            content={`Malgré la perte auditive, Beethoven a continué à composer grâce à sa mémoire musicale exceptionnelle.
Il utilisait des carnets de conversation pour communiquer, posait sa tête contre le piano pour ressentir les vibrations, et visualisait les sons dans son esprit.
Sa 9e symphonie, composée alors qu'il était totalement sourd, est un chef-d'œuvre universel.`}
          />
        </FadeIn>

        <FadeIn delay={0.9}>
          <Article
            title="Autres faits marquants"
            content={`• Beethoven a transformé la musique classique avec des œuvres puissantes, émotionnelles et innovantes.
• Il a lutté contre la dépression et l’isolement liés à sa surdité, comme en témoigne son Testament de Heiligenstadt.
• Son parcours est une source d’inspiration pour des millions de personnes en situation de handicap.`}
          />
        </FadeIn>
      </main>
      <div />
    </div>
  );
}