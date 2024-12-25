import React from "react";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";
import MainBanner from "@/components/HomeDemo7/MainBanner";
import Features from "@/components/HomeDemo7/Features";
// import AboutUsContent from "@/components/HomeDemo7/AboutUsContent";
import KeyFeatures from "@/components/HomeDemo7/KeyFeatures";
import AppProgress from "@/components/HomeDemo7/AppProgress";
import AppScreenshots from "@/components/HomeDemo7/AppScreenshots";
import BestAppEver from "@/components/HomeDemo7/BestAppEver";
import AppIntroVideo from "@/components/HomeDemo7/AppIntroVideo";
import PricingTable from "@/components/HomeDemo7/PricingTable";
import AppDownload from "@/components/HomeDemo7/AppDownload";
import SoftwareIntegrations from "@/components/HomeDemo7/SoftwareIntegrations";
import ClientFeedback from "@/components/HomeDemo7/ClientFeedback";
import Newsletter from "@/components/HomeDemo7/Newsletter";
import FooterStyleFour from "@/components/Layouts/FooterStyleFour";
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

      <FooterStyleFour />
    </>
  );
}
