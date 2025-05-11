"use client";
import { BgBlueRing } from "@/components/ui/background/BlueRing";
import { Article } from "@/components/ui/front/Article";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { useTranslation } from "@/hooks/useTranslation";

export default function OriginesPage() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 px-4 sm:px-8 md:px-12 lg:px-20 font-[family-name:var(--font-geist-sans)]">
      <BgBlueRing />
      <div className="" />
      <main className="flex flex-col gap-12 pt-12">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-12">
            <h1 className="text-4xl font-bold text-center" dangerouslySetInnerHTML={{ __html: t("origins.title") }} />
            <p className="text-zinc-300 text-center">
              {t("origins.description")}
            </p>
            <hr className="border-t border-zinc-700 w-full" />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Article
            title={t("origins.genetic.title")}
            content={t("origins.genetic.content")}
            imageUrl="/images/dna.webp"
            imageAlt={t("origins.genetic.image_alt")}
          />
        </FadeIn>

        <FadeIn delay={0.5}>
          <Article
            title={t("origins.congenital.title")}
            content={t("origins.congenital.content")}
          />
        </FadeIn>

        <FadeIn delay={0.7}>
          <Article
            title={t("origins.infectious.title")}
            content={t("origins.infectious.content")}
            imageUrl="/images/virus.webp"
            imageAlt={t("origins.infectious.image_alt")}
          />
        </FadeIn>

        <FadeIn delay={0.9}>
          <Article
            title={t("origins.traumatic.title")}
            content={t("origins.traumatic.content")}
          />
        </FadeIn>

        <FadeIn delay={1.1}>
          <Article
            title={t("origins.age_related.title")}
            content={t("origins.age_related.content")}
          />
        </FadeIn>

        <FadeIn delay={1.3}>
          <Article
            title={t("origins.drug_induced.title")}
            content={t("origins.drug_induced.content")}
            imageUrl="/images/dr_mario.webp"
            imageAlt={t("origins.drug_induced.image_alt")}
          />
        </FadeIn>
      </main>
      <div />
    </div>
  );
}
