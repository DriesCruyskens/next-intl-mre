import { createClient } from "@/prismicio";
import { useLocale } from "next-intl";
import ContentGrid from "./ContentGrid";
import { ResidentCard } from "./ResidentCard";

export async function ResidentContentGrid() {
  const currentLocale = useLocale();
  const client = createClient();

  const residentDocuments = await client.getAllByType("resident", {
    lang: currentLocale,
  });

  // Sort by creation datetime
  // https://stackoverflow.com/a/12192544
  const sortedStoryDocs = residentDocuments.sort((a, b) => {
    return a.first_publication_date > b.first_publication_date
      ? -1
      : a.first_publication_date < b.first_publication_date
      ? 1
      : 0;
  });

  return (
    <ContentGrid>
      {sortedStoryDocs.map((doc) => {
        return <ResidentCard doc={doc} key={doc.id} />;
      })}
    </ContentGrid>
  );
}
