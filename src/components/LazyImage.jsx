import { useRef, useEffect, useState } from "react";

const LazyImage = ({ src, alt }) => {
  const imgRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = src;
          img.onload = handleImageLoad;
          imgRef.current.src = src;
          observer.unobserve(imgRef.current);
        }
      });
    });

    observer.observe(imgRef.current);

    return () => {
      observer.unobserve(imgRef.current);
    };
  }, [src]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {imageLoaded ? null : (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            filter: "blur(10px)",
            zIndex: 1,
          }}
        ></div>
      )}
      <img
        ref={imgRef}
        src={imageLoaded ? src : ""}
        alt={alt}
        style={{
          display: imageLoaded ? "block" : "none",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default LazyImage;
