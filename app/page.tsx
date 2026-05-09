import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { CertificatesSection } from "@/components/sections/certificates-section";
import { ContactSection } from "@/components/sections/contact-section";
import { GitHubPulseSection } from "@/components/sections/github-pulse-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SocialSection } from "@/components/sections/social-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GitHubPulseSection />
      <TimelineSection />
      <CertificatesSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
