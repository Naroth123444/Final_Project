import React from "react";
import HeroSection from "../components/aboutpage/herosection/HeroSection";
import WhoWeAre from "../components/aboutpage/aboutwesection/WhoWeAre";
import KeyBenefit from "../components/aboutpage/keybenefit/KeyBenefit";
import OurTeam from "../components/aboutpage/ourteam/OurTeam";
import ContactSection from "../components/aboutpage/contactsection/ContactSection";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full items-center space-y-24 overflow-x-hidden dark:bg-dark-bg">
      <HeroSection />
      <WhoWeAre />
      <KeyBenefit />
      <OurTeam />
      <ContactSection />
    </main>
  );
}
