import { useTranslations } from "next-intl";
import { Filters } from "./Filters";

// useTranslations is not allowed in an async component
export function FiltersSync() {
  const t = useTranslations();

  return (
    <Filters
      showMeText={t("Show me")}
      menuItems={[
        { href: "/", name: t("All") },
        { href: "/stories", name: t("Stories") },
        { href: "/residents", name: t("Residents") },
        { href: "/events", name: t("Events") },
      ]}
    ></Filters>
  );
}
