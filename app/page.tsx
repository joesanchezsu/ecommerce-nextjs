import Newest from "@/app/components/Newest";
import Hero from "@/app/components/hero";

// Opt out of caching for all data requests in the route segment
// This will allow to update data on the production site in case Sanity has changed
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
    </div>
  );
}
