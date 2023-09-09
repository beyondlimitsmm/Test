import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "swiper/css";
import { Footer } from "./components/Footer";
import { HomePageNavBar } from "./components/HomePageNavBar";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFound } from "./pages/NotFound";
import ArticleDetailPage from "./pages/OtherPages/ArticleDetailPage";
import Articles from "./pages/OtherPages/ArticlesPage";
import BarPage from "./pages/OtherPages/BarDetailPage";
import { GalleryPage } from "./pages/OtherPages/GalleryPage";
import MeetingRoom from "./pages/OtherPages/MeetingRoom";
import { PoolPage } from "./pages/OtherPages/PoolPage";
import { RestaurantPage } from "./pages/OtherPages/RestaurantPage";
import RoomDetailPage from "./pages/OtherPages/RoomDetailPage";
import { RoomTypePage } from "./pages/OtherPages/RoomTypePage";

function App() {
  const location = useLocation();
  const [prevUrl, setPrevUrl] = useState();

  useEffect(() => {
    if (prevUrl !== location.pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setPrevUrl(location.pathname);
    }
  }, [location.pathname, prevUrl]);

  return (
    <div className="App">
      <NavBarBuilder></NavBarBuilder>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
        <Route path="/rooms" element={<RoomTypePage />}></Route>
        <Route path="/rooms/:id" element={<RoomDetailPage />}></Route>
        <Route path="/pool" element={<PoolPage />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/articles/:id" element={<ArticleDetailPage />}></Route>

        <Route path="/meeting-room" element={<MeetingRoom />}></Route>
        <Route path="/restaurant" element={<RestaurantPage />}></Route>
        <Route path="/bar-details" element={<BarPage />}></Route>

        <Route path="*" element={<Navigate to="/404" replace />}></Route>
        <Route path="/404" element={<NotFound />}></Route>
      </Routes>
      {location.pathname !== "/404" && <Footer></Footer>}
    </div>
  );
}

export default App;

export const NavBarBuilder = () => {
  const location = useLocation();

  if (
    location.pathname === "/gallery" ||
    location.pathname === "/articles" ||
    location.pathname.startsWith("/articles/")
  ) {
    return <NavBar />;
  } else if (location.pathname === "/404") {
    return;
  } else {
    return <HomePageNavBar />;
  }
};
