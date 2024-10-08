import React, { useRef, useState, useEffect } from "react";

const VideoCarousel = () => {

  // Array of video data (video URL, name, and podcast title)
  const videos = [
    {
      url: "https://framerusercontent.com/assets/xwXQjCJ2PuvpoJ6VflMoeEFVMT8.mp4",
      name: "Anne Ganguzza",
      podcast: "VO BOSS Podcast",
    },
    {
      url: "https://framerusercontent.com/assets/tVm2kp6iiLhLWkeMSaMTlZX9s24.mp4",
      name: "Louis Zezeran",
      podcast: "Combat Ready",
    },
    {
      url: "https://framerusercontent.com/assets/wxt4BoeINd89oMP4Oz0aCwiFU8.mp4",
      name: "Neena Perez",
      podcast: "Straight Talk No Sugar Added",
    },
    {
      url: "https://framerusercontent.com/assets/QXwShHFHQp8lwHYULUvVgcsgOcM.mp4",
      name: "Justin Hange",
      podcast: "Siren Mastering",
    },
    {
      url: "https://framerusercontent.com/assets/zcAakVOAzzZMzsCRh0zRMHKIlvs.mp4",
      name: "Susan Anderson",
      podcast: "Entrepreneurs Gone Wild",
    },
    {
      url: "https://framerusercontent.com/assets/zqOyE9GilGjRI1HqkM2dWewczw.mp4",
      name: "Ray Doustdar",
      podcast: "Deep Shallow Dive Podcast",
    },
    {
      url: "https://framerusercontent.com/assets/wsWP1TyYlxUGvODyYiHJsM590.mp4",
      name: "Dr. mOe Anderson",
      podcast: "Perpertual mOetion",
    },
  ];

  const carouselRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  // Check if the carousel is at the start or end of scroll
  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScrollPosition(); // Initial check on mount
    window.addEventListener("resize", checkScrollPosition); // Re-check on resize

    return () => {
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  // Scroll to the right by the full carousel width
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Scroll to the left by the full carousel width
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Scrollable container */}
      <div
        ref={carouselRef}
        onScroll={checkScrollPosition}
        className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory"
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 snap-center rounded-lg bg-black"
          >
            <video
              src={video.url}
              controls
              className="w-full h-96 rounded-lg object-cover"
            />
            <div className="text-center p-2 text-white">
              <h3 className="font-bold">{video.name}</h3>
              <p>{video.podcast}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right-pointer button */}
      {showRightButton && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 hover:bg-opacity-75"
          onClick={scrollRight}
        >
          &#10095;
        </button>
      )}

      {/* Left-pointer button */}
      {showLeftButton && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 hover:bg-opacity-75"
          onClick={scrollLeft}
        >
          &#10094;
        </button>
      )}
    </div>
  );
};

export default VideoCarousel;
