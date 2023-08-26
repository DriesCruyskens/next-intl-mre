import { PropsWithChildren } from "react";

export default async function ContentGrid({ children }: PropsWithChildren<{}>) {
  return (
    <section className="">
      <div className="grid grid-cols-1 items-start gap-8 md:gap-14 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}
