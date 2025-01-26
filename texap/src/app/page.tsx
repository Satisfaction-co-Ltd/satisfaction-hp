import React from "react";
import MainBanner from "@/components/HomeDemo7/MainBanner";
import KeyFeatures from "@/components/HomeDemo7/KeyFeatures";
import AboutUsContent2 from "@/components/AboutUs/AboutUsContent2";
import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import FeaturesCard from "@/components/Features/FeaturesCard";

export default function Home() {
  return (
    <>
      <MainBanner />

      <AboutUsContent2 />

      <KeyFeatures />

      <AboutUsContent />

      <FeaturesCard />
    </>
  );
}
