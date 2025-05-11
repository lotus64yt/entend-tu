"use client";
import { BgBlueRing } from "@/components/ui/background/BlueRing";
import { Article } from "@/components/ui/front/Article";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 px-4 sm:px-8 md:px-12 lg:px-20 font-[family-name:var(--font-geist-sans)]">
      <BgBlueRing />
      <div className="" />
      <main className="flex flex-col gap-12 pt-12">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-12">
            <h1 className="text-4xl font-bold text-center" dangerouslySetInnerHTML={{ __html: t("home.title") }} />
            <div id={"explications"} />
            <p className="text-zinc-300 text-center">
              {t("home.description")}
            </p>
            <hr className="border-t border-zinc-700 w-full" />
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <Article
            title={t("home.what_is_deafness.title")}
            content={t("home.what_is_deafness.content")}
            imageUrl="/images/placeholder-auditory-system.jpg" // Exemple d'URL d'image
            imageAlt={t("home.what_is_deafness.image_alt")}
          />
        </FadeIn>
      </main>
      <div />
    </div>
  );
}
