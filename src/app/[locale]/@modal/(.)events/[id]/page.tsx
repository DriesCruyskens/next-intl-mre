import ContentModal from "@/src/components/ContentModal";
import { EventPageContent } from "../../../events/[id]/page";

export default function EventModal() {
  return (
    <ContentModal>
      <EventPageContent />
    </ContentModal>
  );
}
