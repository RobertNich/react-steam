import { useState } from "react";
import { PlatformIcon } from "./PlatformIcon";

interface Props {
  title?: string;
  slides: Slides[];
}

interface Slides {
  cover: string;
  title: string;
  thumbnails: string[];
  subtitle: string;
  price: string;
  platforms: string[];
}

export const InfoCarousel = ({ title, slides }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hoveredImage, setHoveredImage] = useState<string>(
    slides[currentIndex].cover
  );

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
    setHoveredImage(slides[newIndex].cover);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
    setHoveredImage(slides[newIndex].cover);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    setHoveredImage(slides[index].cover);
  };

  return (
    <div className="carousel-container">
      <button
        onClick={prevImage}
        className="carousel-side-buttons carousel-side-button-left"
      >
        &lt;
      </button>
      <div className="flex-column-start uppercase">
        {title ? <h4>{title}</h4> : <></>}
        <div className="carousel-slide">
          <img
            src={hoveredImage}
            alt={`${slides[currentIndex].title}-cover`}
            className="carousel-image"
          />

          <div className="slide-info">
            <h3>{slides[currentIndex].title}</h3>
            <div className="carousel-thumbnails-container">
              {slides[currentIndex].thumbnails.map((thumbnail) => (
                <img
                  src={thumbnail}
                  alt="thumbnail"
                  className="carousel-thumbnail"
                  onMouseEnter={() => setHoveredImage(thumbnail)}
                  onMouseLeave={() =>
                    setHoveredImage(slides[currentIndex].cover)
                  }
                />
              ))}
            </div>
            <h4>{slides[currentIndex].subtitle}</h4>
            <div className="carousel-price-platform">
              <p>{slides[currentIndex].price}</p>
              <div className="carousel-platforms">
                {slides[currentIndex].platforms.map((platform) => (
                  <PlatformIcon platform={platform} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-indicators">
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
      <button
        onClick={nextImage}
        className="carousel-side-buttons carousel-side-button-right"
      >
        &gt;
      </button>
    </div>
  );
};
