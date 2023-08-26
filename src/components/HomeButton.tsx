import { useTranslations } from "next-intl";
import Link from "next-intl/link";

export default function HomeButton() {
  const t = useTranslations();
  return <Link href="/">{t("Go home")}</Link>;
}
