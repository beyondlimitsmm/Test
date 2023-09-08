import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "swiper/css";
import { Footer } from "./components/Footer";
import { HomePageNavBar } from "./components/HomePageNavBar";
// import { NavBar } from "./components/NavBar";
import Nav from "./components/Nav";
// import { Articles } from "./pages/HomePage/Articles";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFound } from "./pages/NotFound";
import { GalleryPage } from "./pages/OtherPages/GalleryPage";
import { PoolPage } from "./pages/OtherPages/PoolPage";
import { RoomTypePage } from "./pages/OtherPages/RoomTypePage";
import { RestaurantPage } from "./pages/OtherPages/RestaurantPage";
import BarPage from "./pages/OtherPages/BarDetailPage";
import MeetingRoom from "./pages/OtherPages/MeetingRoom";
import { NavBar } from "./components/NavBar";
import RoomDetailPage from "./pages/OtherPages/RoomDetailPage";
import Articles from "./pages/OtherPages/ArticlesPage";
import ArticleDetailPage from "./pages/OtherPages/ArticleDetailPage";

function App() {
  const location = useLocation();
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

  // Specify which pages has white navbar or transparent navbar
  if (location.pathname === "/") {
    return <HomePageNavBar />;
  } else if (
    location.pathname === "/bar-details" ||
    location.pathname === "/restaurant" ||
    location.pathname === "/meeting-room" ||
    location.pathname === "/pool"
  ) {
    return <Nav />;
  } else if (
    location.pathname === "/gallery" ||
    location.pathname === "/articles" ||
    location.pathname === "/articles/*"
  ) {
    return <NavBar />;
  } else if (location.pathname === "/404") {
    return;
  } else {
    return <NavBar></NavBar>;
  }
};
