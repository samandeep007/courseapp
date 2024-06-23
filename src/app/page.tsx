import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import FeaturedCourses from "@/components/FeaturedCourses";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.04]">
      <HeroSection/>
      <FeaturedCourses/>
      </main>
    </>
  );
}
