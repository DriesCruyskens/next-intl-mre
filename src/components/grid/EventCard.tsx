import { EventDocument } from "@/prismicio-types";
import { PrismicRichText } from "@prismicio/react";
import Link from "next-intl/link";
import { PropsWithChildren } from "react";
import EventNumber from "../events/EventNumber";

const colors = ["#f8c5e6", "#b5f994", "#d8d803"];

export function EventCard({
  doc,
  target_blank = false,
}: PropsWithChildren<{ doc: EventDocument; target_blank?: boolean }>) {
  const bgColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <Link
      style={{ backgroundColor: bgColor }}
      className={`block w-full rounded-2xl text-center transition-shadow hover:shadow-lg`}
      href={`/events/${doc.uid}`}
      target={target_blank ? "_blank" : "_self"}
    >
      <div className="flex flex-col items-center justify-between gap-6 border-b-2 border-black p-5 pt-3 md:p-10">
        <EventNumber number={doc.data.event_number?.valueOf()} />
        <h3 className="text-3xl md:text-5xl">{doc.data.title}</h3>
      </div>

      <div className="aspect-[2/1] flex justify-end border-b-2 border-black">
        <div className="flex w-1/2 flex-col border-l-2 border-black">
          <div className="flex grow items-center  justify-center border-b-2 border-black px-4 py-5 ">
            <span>{doc.data.time}</span>
          </div>
          <div className="flex grow items-center  justify-center px-4 py-5">
            <span>{doc.data.time}</span>
          </div>
        </div>
      </div>

      <div className="px-5 py-5 text-xl md:text-3xl">
        <PrismicRichText field={doc.data.location} />
      </div>

      {doc.tags.length != 0 && (
        <div className="flex min-h-[50px] flex-row justify-center gap-3 border-t-2 border-black p-5">
          {doc.tags.map((tag) => {
            return <Tag key="tag">{tag}</Tag>;
          })}
        </div>
      )}
    </Link>
  );
}

function Tag({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center justify-center rounded-full border-2 border-black px-3 py-1 align-middle">
      {children}
    </div>
  );
}
