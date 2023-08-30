"use client";

import { locales } from "@/i18n";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <div className="flex flex-row gap-4">
      {/* {locales.map((locale) => {
        return (
          <Link
            href={`${pathname}`}
            locale={locale}
            key={locale}
            className={`${locale == currentLocale && "underline"}`}
          >
            {locale}
          </Link>
        );
      })} */}
    </div>
  );
}
