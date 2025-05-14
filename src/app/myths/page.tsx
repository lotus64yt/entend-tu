"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { BgBlueRing } from "@/components/ui/background/BlueRing";
import { FadeIn } from "@/components/ui/animations/FadeIn";

export default function MythsPage() {
  const { t } = useTranslation();

  const myths = [
    {
      id: "myth3",
      nameKey: "myths.myth3.name",
      descriptionKey: "myths.myth3.description",
    },
    {
      id: "myth4",
      nameKey: "myths.myth4.name",
      descriptionKey: "myths.myth4.description",
    },
    {
      id: "myth5",
      nameKey: "myths.myth5.name",
      descriptionKey: "myths.myth5.description",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <BgBlueRing />
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <FadeIn>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  {t("myths.title")}
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mt-6 text-xl leading-8">
                  {t("myths.description")}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          {/* You can add an illustrative image here if you want */}
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 dark:text-gray-300 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600 dark:text-gray-400">
                {myths.map((myth) => (
                  <FadeIn key={myth.id} delay={0.2 + myths.indexOf(myth) * 0.1}>
                    <li className="flex gap-x-3 p-4 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                      <svg
                        className="mt-1 h-5 w-5 flex-none text-blue-600 dark:text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="font-semibold">
                          {t(myth.nameKey)}:
                        </strong>{" "}
                        {t(myth.descriptionKey)}
                      </span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
