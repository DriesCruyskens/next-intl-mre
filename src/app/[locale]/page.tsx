import LocaleSwitcher from "@/src/components/LocaleSwitcher";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <h1>{t("Home")}</h1>
      <div>
        <LocaleSwitcher />
      </div>
      <Link href="/events/1">{t("Go to page")}</Link>
    </main>
  );
}
