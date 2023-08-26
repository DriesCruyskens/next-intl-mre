
import HomeButton from "@/src/components/HomeButton";
import RoundLocaleSwitcher from "@/src/components/navbar/RoundLocaleSwitcher";


export default function EventPage({ params }: { params: { id: string } }) {
  return (
    <main className="m-auto w-11/12 p-2 pt-3 md:p-10">
      <div className="right-5 top-10 mb-4 flex w-full justify-end md:absolute">
        <RoundLocaleSwitcher />
        <HomeButton />
      </div>
      <EventSwipe eventId={params.id} />
    </main>
  );
}

export async function EventSwipe({ eventId }: { eventId: string }) {
  return (
    <div className="h-full w-full overflow-scroll rounded-xl bg-jasmine ">
      Rich Text
    </div>
  );
}