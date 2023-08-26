"use client";

import { locales } from "@/i18n";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";

export default function RoundLocaleSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <div>
      {locales
        .filter((locale) => locale != currentLocale)
        .map((locale) => {
          return (
            <Link href={pathname} locale={locale} key={locale}>
              {locale}
            </Link>
          );
        })}
    </div>
  );
}
