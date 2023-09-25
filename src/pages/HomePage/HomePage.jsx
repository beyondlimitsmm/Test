import { useEffect } from "react";
import { AboutUsSection } from "./AboutUsSection";
import { Articles } from "./Articles";
import { BarAndRestaurantSection } from "./BarAndRestaurantSection";
import { ContactUs } from "./ContactUs";
import { FeaturesSection } from "./FeaturesSection";
import { GallerySection } from "./GallerySection";
import { HeroSection } from "./HeroSection";
import { RoomSection } from "./RoomSection";
import { ServiceSection } from "./ServiceSection";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <HeroSection></HeroSection>
      <AboutUsSection></AboutUsSection>
      <RoomSection></RoomSection>
      <BarAndRestaurantSection></BarAndRestaurantSection>
      <FeaturesSection></FeaturesSection>
      <ServiceSection></ServiceSection>
      <GallerySection></GallerySection>
      <Articles></Articles>
      <ContactUs></ContactUs>
    </div>
  );
};
