import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import "./globals.css";

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
  modal: React.ReactNode;
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (props.params.locale !== locale) {
    notFound();
  }

  // let messages;
  // try {
  //   messages = (await import(`../../../messages/${locale}.json`)).default;
  // } catch (error) {
  //   notFound();
  // }

  return (
    <NextIntlClientProvider locale={locale}>
      {props.modal}
      {props.children}
    </NextIntlClientProvider>
  );
}
