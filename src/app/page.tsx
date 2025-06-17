import ActionButtons from "@/components/ActionButtons";
import Combain from "@/components/Combain";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HeadingText from "@/components/HeadingText";
import Hero from "@/components/Hero";
import ToggleMemu from "@/components/ToggleMemu";
import VideoComponent from "@/components/VideoComponent";
import React from "react";

const page = () => {
  return (
    <div>
      <ToggleMemu />
      <Hero />
      <HeadingText />
      <ActionButtons />
      <VideoComponent />
      <Faq />
      <ActionButtons />
      <Combain />
      <Footer />
    </div>
  );
};

export default page;
