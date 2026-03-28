import AboutSection from "@/components/organisms/AboutSection";
import ContactSection from "@/components/organisms/ContactSection";
import FooterSection from "@/components/organisms/FooterSection";
import NavbarSecion from "@/components/organisms/NavbarSection";
import TeamSection from "@/components/organisms/TeamSection";

export default function Home() {
  return (
    <>
      <NavbarSecion />
      <AboutSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
