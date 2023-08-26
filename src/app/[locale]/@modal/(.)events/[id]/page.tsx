import ContentModal from "@/src/components/ContentModal";
import { EventSwipe } from "../../../events/[id]/page";

export default function EventModal({ params }: { params: { id: string } }) {
  return (
    <ContentModal>
      <EventSwipe eventId={params.id} />
    </ContentModal>
  );
}
