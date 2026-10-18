import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import StackSection from "@/components/sections/StackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

const WorkSection = dynamic(
  () => import("@/components/sections/WorkSection")
);
const PlaygroundSection = dynamic(
  () => import("@/components/sections/PlaygroundSection")
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection")
);

export default function Home() {
  return (
    <main style={{ backgroundColor: "#fffaf6" }}>
      {/* === Hero === */}
      <HeroSection />

      {/* === Content Sections === */}
      <WorkSection />
      <ExperienceSection />
      <StackSection />
      <PlaygroundSection />
      <ContactSection />
    </main>
  );
}
