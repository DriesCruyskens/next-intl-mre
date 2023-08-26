import { useTranslations } from "next-intl";
import React from "react";
import { ActiveLink } from "./ActiveLinks";

// This is a separate fuunction component because useTranslation doesn't work in async function
export default function NavLinks() {
  const t = useTranslations();

  return (
    <div className="flex gap-5">
      {/* <ActiveLink href={"/"}>HOME</ActiveLink> */}
      <ActiveLink href={"/about"}>{t("about").toUpperCase()}</ActiveLink>
    </div>
  );
}
