import { useEffect, useState } from "react";

function useScrollAtTop(threshold = 50) {
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

  return atTop;
}

export default useScrollAtTop;
