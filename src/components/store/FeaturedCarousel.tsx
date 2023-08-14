import starfieldCover from "../../assets/carousel-images/starfield-cover.jpeg";
import starfield1 from "../../assets/carousel-images/starfield1.jpeg";
import starfield2 from "../../assets/carousel-images/starfield2.jpeg";
import starfield3 from "../../assets/carousel-images/starfield3.jpeg";
import starfield4 from "../../assets/carousel-images/starfield4.jpeg";
import paydayCover from "../../assets/carousel-images/payday-cover.jpeg";
import payday1 from "../../assets/carousel-images/payday1.jpeg";
import payday2 from "../../assets/carousel-images/payday2.jpg";
import payday3 from "../../assets/carousel-images/payday3.jpg";
import payday4 from "../../assets/carousel-images/payday4.jpg";
import remnantCover from "../../assets/carousel-images/remnant-cover.jpeg";
import remnant1 from "../../assets/carousel-images/remnant1.jpg";
import remnant2 from "../../assets/carousel-images/remnant2.jpg";
import remnant3 from "../../assets/carousel-images/remnant3.jpg";
import remnant4 from "../../assets/carousel-images/remnant4.jpg";

import { InfoCarousel } from "../common/InfoCarousel";

export const FeaturedCarousel = () => {
  const starfieldThumbnails = [starfield1, starfield2, starfield3, starfield4];
  const paydayThumbnails = [payday1, payday2, payday3, payday4];
  const remnantThumbnails = [remnant1, remnant2, remnant3, remnant4];
  const slides = [
    {
      cover: starfieldCover,
      title: "Starfield",
      thumbnails: starfieldThumbnails,
      subtitle: "Pre-Purcahse Now",
      price: "A$ 119.95",
      platforms: ["win", "mac", "lin"],
    },
    {
      cover: paydayCover,
      title: "Payday 3",
      thumbnails: paydayThumbnails,
      subtitle: "Pre-Purcahse Now",
      price: "A$ 59.95",
      platforms: ["win", "lin"],
    },
    {
      cover: remnantCover,
      title: "Remnant II",
      thumbnails: remnantThumbnails,
      subtitle: "Available Now",
      price: "A$ 74.50",
      platforms: ["win"],
    },
  ];
  return <InfoCarousel title="featured & recommended" slides={slides} />;
};
