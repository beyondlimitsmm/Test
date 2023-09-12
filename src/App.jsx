import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "swiper/css";
import { Footer } from "./components/Footer";
import { HomePageNavBar } from "./components/HomePageNavBar";
import { NavBar } from "./components/NavBar";
// import { Articles } from "./pages/HomePage/Articles";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFound } from "./pages/NotFound";
import { GalleryPage } from "./pages/OtherPages/GalleryPage";
import { PoolPage } from "./pages/OtherPages/PoolPage";
import { RoomTypePage } from "./pages/OtherPages/RoomTypePage";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBarBuilder></NavBarBuilder>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
        <Route path="/room-type" element={<RoomTypePage />}></Route>
        <Route path="/pool" element={<PoolPage />}></Route>
        {/* <Route path="/articles" element={<Articles />}></Route> */}
        <Route path="/meeting-room" element={<PoolPage />}></Route>
        <Route path="/restaurant" element={<PoolPage />}></Route>

        <Route path="*" element={<Navigate to="/404" replace />}></Route>
        <Route path="/404" element={<NotFound />}></Route>
      </Routes>
      {/* {location.pathname !== "/404" && <Footer></Footer>} */}
    </div>
  );
}

export default App;

export const NavBarBuilder = () => {
  const location = useLocation();

  // Specify which pages has white navbar or transparent navbar
  if (location.pathname === "/gallery") {
    return <NavBar></NavBar>;
  } else if (location.pathname === "/404") {
    return;
  } else {
    return <HomePageNavBar></HomePageNavBar>;
  }
};
