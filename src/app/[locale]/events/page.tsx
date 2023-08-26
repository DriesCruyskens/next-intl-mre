
import Navigation from "@/src/components/navbar/Navigation";
import Link from "next-intl/link";

export default async function Events() {
  return (
    <main className="flex flex-col gap-16 p-2 md:p-10">
      <div className="text-3xl md:text-5xl">
        rich text
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
