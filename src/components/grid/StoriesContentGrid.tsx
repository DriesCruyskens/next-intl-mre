import { createClient } from "@/prismicio";
import { useLocale } from "next-intl";
import ContentGrid from "./ContentGrid";
import { StoryCard } from "./StoryCard";

export async function StoriesContentGrid() {
  const currentLocale = useLocale();
  const client = createClient();

  const storyDocuments = await client.getAllByType("story", {
    lang: currentLocale,
  });

  // Sort by creation datetime
  // https://stackoverflow.com/a/12192544
  const sortedStoryDocs = storyDocuments.sort((a, b) => {
    return a.first_publication_date > b.first_publication_date
      ? -1
      : a.first_publication_date < b.first_publication_date
      ? 1
      : 0;
  });

  return (
    <ContentGrid>
      {sortedStoryDocs.map((doc) => {
        return <StoryCard doc={doc} key={doc.id} />;
      })}
    </ContentGrid>
  );
}
