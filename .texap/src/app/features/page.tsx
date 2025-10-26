import React from "react";
import NavbarStyleThree from "@/components/Layouts/NavbarStyleThree";
import PageBannerStyle3 from "@/components/Common/PageBannerStyle3";
import AppDownloadStyle2 from "@/components/Common/AppDownloadStyle2";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import FeaturesCard from "@/components/Features/FeaturesCard";

export default function Page() {
  return (
    <>
      <NavbarStyleThree />

      <PageBannerStyle3
        pageTitle="Satisfaction co., Ltd."
        // pageTitle="Products Features"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Features"
      />

      <FeaturesCard />

      <div className="pt-100">
        <AppDownloadStyle2 />
      </div>

      <FooterStyleOne />
    </>
  );
}
