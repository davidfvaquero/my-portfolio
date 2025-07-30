"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "./contexts/LanguageContext";
import { useTranslations } from "./hooks/useTranslations";

export default function Home() {
  const router = useRouter();
  const { language, isLoading } = useLanguage();
  const { t } = useTranslations();

  useEffect(() => {
    if (!isLoading) {
      router.replace(`/${language}`);
    }
  }, [language, isLoading, router]);

  return (
    <main className="max-w-2xl mx-auto px-4 pt-32 flex flex-col items-center text-center gap-8 pb-16">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      <p className="text-gray-600">{t('home.loading')}</p>
    </main>
  );
}
