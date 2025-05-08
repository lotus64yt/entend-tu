"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLocale } from "@/contexts/LocaleContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { locale, setLocale } = useLocale();

  const navLinks = [
    { href: "/#explications", label: t("navbar.explanations") },
    { href: "/origines", label: t("navbar.origins") },
    { href: "/personalite", label: t("navbar.personality") },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="w-full bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">{t("navbar.open.menu")}</span>
              <svg
                className={`block h-6 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link className="flex gap-4 items-center text-2xl font-bold text-white" href="/">
              <Image
                src="/favicon.ico"
                width={32}
                height={32}
                className="rounded-full"
                alt={t("navbar.logo.alt")}
              />
              {t("navbar.brand")}
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="relative">
              <select
                value={locale}
                onChange={(e) => handleLocaleChange(e.target.value)}
                className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                aria-label={t("locale.switcher.label")}
              >
                <option value="fr">{t("locale.fr")}</option>
                <option value="en">{t("locale.en")}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-gray-800 z-50 flex flex-col" id="mobile-menu">
          <div className="flex items-center justify-between h-16 px-2 sm:px-6 lg:px-8 border-b border-gray-700">
            <div className="flex gap-4 items-center text-2xl font-bold text-white">
              <Image
                src="/favicon.ico"
                width={32}
                height={32}
                className="rounded-full"
                alt={t("navbar.logo.alt")}
              />
              {t("navbar.brand")}
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">{t("navbar.close.menu")}</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center flex-grow justify-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => {
                  toggleMobileMenu();
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4">
              <label htmlFor="locale-select-mobile" className="sr-only">{t("locale.switcher.label")}</label>
              <select
                id="locale-select-mobile"
                value={locale}
                onChange={(e) => handleLocaleChange(e.target.value)}
                className="bg-gray-700 text-white px-3 py-2 rounded-md text-base font-medium focus:outline-none w-full text-center"
              >
                <option value="fr">{t("locale.fr")}</option>
                <option value="en">{t("locale.en")}</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
