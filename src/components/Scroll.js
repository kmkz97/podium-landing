import React, { useRef } from 'react';

const MediaScroll = () => {
  const containerRef = useRef(null);

  const handleScroll = () => {
    const scrollAmount = containerRef.current.scrollTop;
    // Apply translation based on scroll amount
    document.querySelector('.row-1').style.transform = `translateX(-${scrollAmount}px)`;
    document.querySelector('.row-2').style.transform = `translateX(${scrollAmount}px)`;
    document.querySelector('.row-3').style.transform = `translateX(-${scrollAmount}px)`;
  };

  return (
    <div 
      className="h-screen overflow-y-scroll w-full" 
      ref={containerRef} 
      onScroll={handleScroll}
    >
      {/* Row 1 */}
      <div className="row-1 flex space-x-4 overflow-hidden w-full">
        {/* Media elements */}
        <img src="https://framerusercontent.com/images/Pvm54Xf4EEHEWJD13qDHtfpEhPk.png?scale-down-to=512" alt="Logo 1" className="w-32 h-32" />
        <img src="https://framerusercontent.com/images/MdtX7vBJttkhXL50z4FuyJhLM0.jpg?scale-down-to=512" alt="Logo 2" className="w-32 h-32" />
        {/* Repeat for other media */}
      </div>

      {/* Row 2 */}
      <div className="row-2 flex space-x-4 overflow-hidden w-full">
        {/* Media elements */}
        <img src="https://framerusercontent.com/images/eDvPacOas3N6lU78BLHfesJfPGw.jpg?scale-down-to=512" alt="Logo 3" className="w-32 h-32" />
        <img src="https://framerusercontent.com/images/KxCvPA1cpoosOJIgE9bI3lAjXk.jpg?scale-down-to=512" alt="Logo 4" className="w-32 h-32" />
        {/* Repeat for other media */}
      </div>

      {/* Row 3 */}
      <div className="row-3 flex space-x-4 overflow-hidden">
        {/* Media elements */}
        <img src="https://framerusercontent.com/images/et6Pmwwgk7bgtNAswPhMaXSV5WY.jpg?scale-down-to=512" alt="Logo 5" className="w-32 h-32" />
        <img src="https://framerusercontent.com/images/PNuNaZSc1DvDJYup2GK2VdZfw.png?scale-down-to=512" alt="Logo 6" className="w-32 h-32" />
        {/* Repeat for other media */}
      </div>
    </div>
  );
};

export default MediaScroll;
