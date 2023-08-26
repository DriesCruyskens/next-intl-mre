
import Navigation from "@/src/components/navbar/Navigation";
import { useLocale } from "next-intl";
import Link from "next-intl/link";

export default async function Home() {
  const locale = useLocale();

  return (
    <main className="flex flex-col gap-10 p-2 md:gap-16 md:p-10">
      <div className="text-3xl md:text-5xl">
        <p>Rich Text</p>
      </div>
      <div className="sticky top-5 z-10">
        <Navigation></Navigation>
      </div>
      <Link href="/events/1">
      link
      </Link>
    </main>
  );
}
