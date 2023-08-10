import { SpecialOffersCarousel } from "../../components/store/SpecialOffersCarousel";
import { StoreBanner } from "../../components/store/StoreBanner";
import { StoreFeatured } from "../../components/store/StoreFeatured";
import firstImage from "../../assets/carousel-images/remnant4.jpg";
import secondImage from "../../assets/carousel-images/payday2.jpg";
import thirdImage from "../../assets/carousel-images/payday3.jpg";
import fourthImage from "../../assets/carousel-images/payday4.jpg";

const testOffers = {
  title: "special offers",
  slides: [
    {
      panels: [
        {
          image: firstImage,
          key: "first-image",
          title: "Midweek Deal",
          offer_date: "15 Aug @ 2:30am",
          discount_percent: "20%",
          original_price: "A$ 43.95",
          discount_price: "A$ 35.16",
        },
        {
          image: secondImage,
          key: "second-image",
          title: "Midweek Deal",
          offer_date: "15 Aug @ 2:30am",
          discount_percent: "80%",
        },
        {
          image: thirdImage,
          key: "third-image",
          title: "Today's deal!",
          offer_date: "December 2023",
          discount_percent: "67%",
          original_price: "A$ 44.95",
          discount_price: "A$ 14.83",
        },
        {
          image: fourthImage,
          key: "fourth-image",
          offer_date: "November 2023",
          discount_percent: "75%",
          original_price: "A$ 99.95",
          discount_price: "A$ 24.98",
        },
      ],
    },
  ],
};

const Store = () => {
  return (
    <>
      <StoreBanner />
      <StoreFeatured />
      <SpecialOffersCarousel
        title={testOffers.title}
        slides={testOffers.slides}
      />
      <h1>Store</h1>
      <p>I'm the store page</p>
    </>
  );
};

export default Store;
