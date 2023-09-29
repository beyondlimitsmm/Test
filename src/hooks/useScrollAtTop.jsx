import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useScrollAtTop(threshold = 50) {
  const location = useLocation();
  const [atTop, setAtTop] = useState(window.scrollY < threshold);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  useEffect(() => {
    setAtTop(window.scrollY < threshold);
  }, [threshold]);

  return location.pathname == "/gallery" ||
    location.pathname.startsWith("/articles/")
    ? false
    : atTop;
}

export default useScrollAtTop;
