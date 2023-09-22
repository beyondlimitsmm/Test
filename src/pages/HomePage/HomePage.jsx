import { useQuery } from "@tanstack/react-query";
import { hero } from "../../api/home";
import { AboutUsSection } from "./AboutUsSection";
import { Articles } from "./Articles";
import { BarAndRestaurantSection } from "./BarAndRestaurantSection";
import { ContactUs } from "./ContactUs";
import { FeaturesSection } from "./FeaturesSection";
import { GallerySection } from "./GallerySection";
import { HeroSection } from "./HeroSection";
import { RoomSection } from "./RoomSection";
import { ServiceSection } from "./ServiceSection";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export const HomePage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["hero"],
    queryFn: hero,
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;
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
