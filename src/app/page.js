import { AllPost } from "@/components/AllPost";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Trending } from "@/components/Trending";

export default async function Home() {
  const result = await fetch("https://dev.to/api/articles");
  const objResult = await result.json();

  return (
    <div >
      <div className="w-[1228px] mx-auto">
        <Hero />
        <Trending />
        <AllPost posts={objResult} />
      </div>
      <Footer />
    </div>
  );
}
