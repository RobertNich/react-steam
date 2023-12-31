import { FeaturedCarousel } from "./FeaturedCarousel";
import { FeaturedSidebar } from "./FeaturedSidebar";
import firstImage from "../../assets/carousel-images/remnant4.jpg";
import secondImage from "../../assets/carousel-images/payday2.jpg";
import thirdImage from "../../assets/carousel-images/payday3.jpg";
import fourthImage from "../../assets/carousel-images/payday4.jpg";
import { SpecialOffersCarousel } from "./SpecialOffersCarousel";
import { PromoImage } from "./PromoImage";

const testOffers = {
  title: "special offers",
  slides: [
    {
      panels: [
        {
          image: firstImage,
          key: "first-image",
          title: "Midweek Deal",
          game_title: "Super Fire Bros",
          offer_date: "15 Aug @ 2:30am",
          discount_percent: "20%",
          original_price: "A$ 43.95",
          discount_price: "A$ 35.16",
        },
        {
          image: secondImage,
          key: "second-image",
          title: "Midweek Deal",
          game_title: "PayNay 2",
          offer_date: "15 Aug @ 2:30am",
          discount_percent: "80%",
        },
        {
          image: thirdImage,
          key: "third-image",
          title: "Today's deal!",
          game_title: "Pew Pew Clowns",
          offer_date: "December 2023",
          discount_percent: "67%",
          original_price: "A$ 44.95",
          discount_price: "A$ 14.83",
        },
        {
          image: fourthImage,
          key: "fourth-image",
          game_title: "Sombre Masks",
          offer_date: "November 2023",
          discount_percent: "75%",
          original_price: "A$ 99.95",
          discount_price: "A$ 24.98",
        },
      ],
    },
  ],
};

export const StoreFeatured = () => {
  return (
    <div className="featured-container">
      <FeaturedSidebar />
      <div className="featured-main-column">
        <FeaturedCarousel />
        <PromoImage />
        <SpecialOffersCarousel
          title={testOffers.title}
          slides={testOffers.slides}
        />
      </div>
    </div>
  );
};
