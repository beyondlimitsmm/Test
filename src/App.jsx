import { useCallback, useContext, useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "swiper/css";
import { Footer } from "./components/Footer";
import { HomePageNavBar } from "./components/HomePageNavBar";

import { ModalPopUp } from "./components/ModalPopUp";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound";
import ArticleDetailPage from "./pages/ArticlesPage/ArticleDetailPage";
import Articles from "./pages/ArticlesPage/ArticlesPage";
import BarPage from "./pages/OtherPages/BarDetailPage";
import { GalleryPage } from "./pages/OtherPages/GalleryPage";
import MeetingRoom from "./pages/OtherPages/MeetingRoom";
import { PoolPage } from "./pages/OtherPages/PoolPage";
import { RestaurantPage } from "./pages/OtherPages/RestaurantPage";
import RoomDetailPage from "./pages/RoomTypePage/RoomDetailPage";
import { RoomTypePage } from "./pages/RoomTypePage/RoomTypePage";
import SuiteDetailPage from "./pages/RoomTypePage/SuiteDetailPage";
import { RoomsProvider } from "./hooks/RoomsContext";
import { SuitesProvider } from "./hooks/SuitesContext";
import { useQuery } from "@tanstack/react-query";
import { getRoomTypes } from "./api/roomsAndSuites";
import ChatBot from "./components/ChatBot";
import { hero } from "./api/home";
import { NavBarContext } from "./hooks/NavBarContext";
import AOS from "aos";
import "aos/dist/aos.css";
import usePrefetchHomePage from "./hooks/usePrefetchHomePage";
import Cookies from "js-cookie";

function App() {
  const location = useLocation();
  const { setShowDropdown, isNavOpen, isHidden } = useContext(NavBarContext);
  const token = Cookies.get("csrfToken");

  usePrefetchHomePage();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className={`App ${isHidden && "overflow-hidden h-screen"}`}
      // className="App hide-scrollbar"
      onClick={() => setShowDropdown(false)}
    >
      {token && <NavBarBuilder></NavBarBuilder>}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>

        <Route
          path="/room-types"
          element={
            <RoomsProvider>
              <SuitesProvider>
                <RoomTypePage />
              </SuitesProvider>
            </RoomsProvider>
          }
        ></Route>
        <Route
          path="/room-types/rooms/:id"
          element={
            <RoomsProvider>
              <RoomDetailPage />
            </RoomsProvider>
          }
        ></Route>
        <Route
          path="/room-types/suites/:id"
          element={
            <SuitesProvider>
              <SuiteDetailPage />
            </SuitesProvider>
          }
        />

        <Route path="/pool" element={<PoolPage />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/articles/:id" element={<ArticleDetailPage />}></Route>

        <Route path="/meeting-room" element={<MeetingRoom />}></Route>
        <Route path="/restaurant" element={<RestaurantPage />}></Route>
        <Route path="/bar-details" element={<BarPage />}></Route>

        <Route path="*" element={<Navigate to="/404" replace />}></Route>
        <Route path="/404" element={<NotFound />}></Route>
      </Routes>
      {location.pathname !== "/404" && token && <Footer></Footer>}
      <ModalPopUp />
      <ChatBot />
    </div>
  );
}

export default App;

export const NavBarBuilder = () => {
  const location = useLocation();

  if (location.pathname === "/404") {
    return;
  } else {
    return <HomePageNavBar />;
  }
};
