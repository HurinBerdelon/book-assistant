import { Footer } from "@/components/Footer";
import { HomePageHeader } from "@/components/HomePageHeader";
import { HomePageMain } from "@/components/HomePageMain";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen items-center px-4">
      <HomePageHeader />
      <HomePageMain />
      <Footer />
    </div>
  );
}
