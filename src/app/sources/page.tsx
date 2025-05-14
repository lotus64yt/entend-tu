"use client";

import { BgBlueRing } from "@/components/ui/background/BlueRing";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { useTranslation } from "@/hooks/useTranslation";

export default function SourcesPage() {
  const { t } = useTranslation();

  const sources = [
    {
      name: t("sources.who.name"),
      description: t("sources.who.description"),
      link: "https://www.who.int/health-topics/hearing-loss",
    },
    {
      name: t("sources.nidcd.name"),
      description: t("sources.nidcd.description"),
      link: "https://www.nidcd.nih.gov/",
    },
    {
      name: t("sources.actiononhearingloss.name"),
      description: t("sources.actiononhearingloss.description"),
      link: "https://rnid.org.uk/",
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 px-4 sm:px-8 md:px-12 lg:px-20 font-[family-name:var(--font-geist-sans)]">
      <BgBlueRing />
      <div className="" />
      <main className="flex flex-col gap-12 pt-12">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-12">
            <h1 className="text-4xl font-bold text-center" dangerouslySetInnerHTML={{ __html: t("sources.title") }} />
            <p className="text-zinc-300 text-center">
              {t("sources.description")}
            </p>
            <hr className="border-t border-zinc-700 w-full" />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <ul className="flex flex-col gap-8">
            {sources.map((source, index) => (
              <li
                key={index}
                className="bg-zinc-800 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl dark:hover:shadow-blue-500/50 hover:bg-zinc-700"
              >
                <h2 className="text-2xl font-bold text-blue-500">
                  <a
                    href={source.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {source.name}
                  </a>
                </h2>
                <p className="text-zinc-300 mt-2">{source.description}</p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </main>
      <div />
    </div>
  );
}
