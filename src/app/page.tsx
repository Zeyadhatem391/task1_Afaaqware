import AboutSection from "@/components/organisms/AboutSection";
import ContactSection from "@/components/organisms/ContactSection";
import NavbarSecion from "@/components/organisms/NavbarSection";
import TeamSection from "@/components/organisms/TeamSection";

export default function Home() {
  return (
    <>
      <NavbarSecion />
      <AboutSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
