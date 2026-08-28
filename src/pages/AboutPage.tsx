import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/sections/AboutSection";
import { TeamSection } from "@/sections/TeamSection";
import heroBg from "@/assets/team.jpeg";


export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Befra"
        subtitle="Est. 1998 · 25+ years of engineering excellence across Kenya"
        slides={[heroBg]}
      />
      <AboutSection />
      <TeamSection />
    </>
  );
}