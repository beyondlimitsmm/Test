import { useEffect, useState } from "react";

export default () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return offset;
};
