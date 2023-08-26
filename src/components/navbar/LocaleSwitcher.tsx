"use client";

import { locales } from "@/i18n";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import Link from "next/link";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <div>
      {locales
          .filter((locale) => locale != currentLocale)
          .map((locale) => {
            return (
              <Link href={`/${locale}${pathname}`} key={locale}>
                {locale} 
              </Link>
            );
          })}
    </div>
  );
}
