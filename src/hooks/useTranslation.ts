"use client";

import { useEffect, useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';

interface Translations {
  [key: string]: string;
}

export const useTranslation = () => {
  const { locale } = useLocale();
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/locales/${locale}.json`);
        if (!response.ok) {
          console.error(`Failed to load translations for locale: ${locale}, status: ${response.status}`);
          const fallbackResponse = await fetch(`/locales/fr.json`); 
          if (fallbackResponse.ok) {
            setTranslations(await fallbackResponse.json());
          } else {
            setTranslations({}); 
          }
          return;
        }
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Error loading translations:', error);
        try {
            const fallbackResponse = await fetch(`/locales/fr.json`);
             if (fallbackResponse.ok) {
                setTranslations(await fallbackResponse.json());
            } else {
                setTranslations({});
            }
        } catch (fallbackError) {
            console.error('Error loading fallback translations:', fallbackError);
            setTranslations({});
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (locale) {
      loadTranslations();
    }
  }, [locale]);

  const t = (key: string): string => {
    if (isLoading) return key; 
    return translations[key] || key; 
  };

  return { t, locale, isLoading };
};
