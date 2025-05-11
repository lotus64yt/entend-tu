"use client";
import { BgBlueRing } from "@/components/ui/background/BlueRing";
import { Article } from "@/components/ui/front/Article";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { useTranslation } from "@/hooks/useTranslation";

export default function BeethovenPage() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 px-4 sm:px-8 md:px-12 lg:px-20 font-[family-name:var(--font-geist-sans)]">
      <BgBlueRing />
      <div className="" />
      <main className="flex flex-col gap-12 pt-12">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-12">
            <h1 className="text-4xl font-bold text-center" dangerouslySetInnerHTML={{ __html: t("personality.title") }} />
            <p className="text-zinc-300 text-center">
              {t("personality.description")}
            </p>
            <hr className="border-t border-zinc-700 w-full" />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Article
            title={t("personality.who_was_beethoven.title")}
            content={t("personality.who_was_beethoven.content")}
            imageUrl="/images/beethoven_portrait.webp"
            imageAlt={t("personality.who_was_beethoven.image_alt")}
          />
        </FadeIn>

        <FadeIn delay={0.5}>
          <Article
            title={t("personality.origins_of_deafness.title")}
            content={t("personality.origins_of_deafness.content")}
            imageUrl="/images/ear_anatomy.webp"
            imageAlt={t("personality.origins_of_deafness.image_alt")}
          />
        </FadeIn>

        <FadeIn delay={0.7}>
          <Article
            title={t("personality.how_he_overcame.title")}
            content={t("personality.how_he_overcame.content")}
          />
        </FadeIn>

        <FadeIn delay={0.9}>
          <Article
            title={t("personality.other_facts.title")}
            content={t("personality.other_facts.content")}
          />
        </FadeIn>
      </main>
      <div />
    </div>
  );
}