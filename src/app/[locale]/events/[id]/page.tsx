import HomeButton from "@/src/components/HomeButton";
import LocaleSwitcher from "@/src/components/LocaleSwitcher";
import { useTranslations } from "next-intl";

export default function EventPage() {
  return (
    <div className="">
      <EventPageContent />
      <HomeButton />
    </div>
  );
}

export function EventPageContent() {
  const t = useTranslations();
  return (
    <>
      <h1>{t("Page")}</h1>
      <div className="">
        <LocaleSwitcher />
      </div>
    </>
  );
}
