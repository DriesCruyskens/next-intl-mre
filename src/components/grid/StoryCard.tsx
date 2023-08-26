import { StoryDocument } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next-intl/link";

import { PropsWithChildren } from "react";
import StoryNumber from "../stories/StoryNumber";

export function StoryCard({
  doc,
  target_blank = false,
}: PropsWithChildren<{ doc: StoryDocument; target_blank?: boolean }>) {
  return (
    <Link
      className=" flex w-full flex-col gap-2 hover:underline"
      href={`/stories/${doc.uid}`}
      target={target_blank ? "_blank" : "_self"}
    >
      <PrismicNextImage field={doc.data.image} fallbackAlt="" />
      <StoryNumber number={doc.data.story_number?.valueOf()} />
      <h3>{doc.data.title}</h3>
      <PrismicRichText
        field={doc.data.author}
        // Not rendering an <a> element since we are already in a Link. Giving it underline style is sufficient.
        components={{
          hyperlink: ({ text }) => <span className="underline">{text}</span>,
        }}
      />
    </Link>
  );
}
