import { ResidentDocument } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next-intl/link";
import { PropsWithChildren } from "react";
import ResidentNumber from "../residents/ResidentNumber";

export function ResidentCard({
  doc,
  target_blank = false,
}: PropsWithChildren<{ doc: ResidentDocument; target_blank?: boolean }>) {
  return (
    <Link
      className="group relative  w-full"
      href={`/residents/${doc.uid}`}
      target={target_blank ? "_blank" : "_self"}
    >
      <PrismicNextImage
        field={doc.data.main_image}
        fallbackAlt=""
        // className="w-full object-cover object-center"
        // fill={true}
        // sizes="(max-width: 768px) 100vw, 30vw"
      />
      <div className="absolute bottom-5 right-0 flex -rotate-6 flex-col items-center bg-chineseWhite p-3 group-hover:underline">
        <ResidentNumber number={doc.data.resident_number?.valueOf()} />

        <h3 className="text-4xl hover:underline">{doc.data.name}</h3>
      </div>
    </Link>
  );
}
