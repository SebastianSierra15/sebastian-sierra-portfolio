import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import StackSection from "@/components/sections/StackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import { SHOW_PLAYGROUND_SECTION, SHOW_WORK_SECTION } from "@/lib/portfolio-features";

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
      {SHOW_WORK_SECTION && <WorkSection />}
      <ExperienceSection />
      <StackSection />
      {SHOW_PLAYGROUND_SECTION && <PlaygroundSection />}
      <ContactSection />
    </main>
  );
}
