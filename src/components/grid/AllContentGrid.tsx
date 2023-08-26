import { createClient } from "@/prismicio";
import { useLocale } from "next-intl";
import ContentGrid from "./ContentGrid";
import { EventCard } from "./EventCard";
import { ResidentCard } from "./ResidentCard";
import { StoryCard } from "./StoryCard";

export async function AllContentGrid() {
  const currentLocale = useLocale();
  const client = createClient();

  const storyDocuments = await client.getAllByType("story", {
    lang: currentLocale,
  });
  const eventDocuments = await client.getAllByType("event", {
    lang: currentLocale,
  });
  const inhabitantDocuments = await client.getAllByType("resident", {
    lang: currentLocale,
  });

  // Sort by creation datetime
  // https://stackoverflow.com/a/12192544
  const allDocuments = [
    ...storyDocuments,
    ...eventDocuments,
    ...inhabitantDocuments,
  ].sort((a, b) => {
    return a.first_publication_date > b.first_publication_date
      ? -1
      : a.first_publication_date < b.first_publication_date
      ? 1
      : 0;
  });

  return (
    <ContentGrid>
      {allDocuments.map((doc) => {
        if (doc.type == "event") {
          return <EventCard doc={doc} key={doc.id} />;
        }

        if (doc.type == "resident") {
          return <ResidentCard doc={doc} key={doc.id} />;
        }

        if (doc.type == "story") {
          return <StoryCard doc={doc} key={doc.id} />;
        }
      })}
    </ContentGrid>
  );
}
