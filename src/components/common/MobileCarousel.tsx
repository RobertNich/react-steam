import { useState } from "react";

interface Props {
  slides: Slides[];
}

interface Slides {
  image: string;
  title?: string;
}

export const MobileCarousel = ({ slides }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mobile-carousel-container">
      <img
        src={slides[currentIndex].image}
        alt="mobile-image"
        className="mobile-carousel-image"
      />
      {slides[currentIndex].title ? (
        <h4 className="mobile-carousel-title">{slides[currentIndex].title}</h4>
      ) : (
        <></>
      )}
      <div className="mobile-carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`carousel-indicator ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};
