"use client";

import { locales } from "@/i18n";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const router = useRouter();

  return (
    <div className="flex flex-row gap-4">
      {locales.map((locale) => {
        return (
          <button
            onClick={() => router.push(pathname, { locale })}
            key={locale}
            className={`${locale == currentLocale && "underline"}`}
          >
            {locale}
          </button>
        );
      })}
    </div>
  );
}
