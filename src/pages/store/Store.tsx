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
          title: "First Image",
          offer_date: "march 2023",
          discount_percent: "20%",
          original_price: "$100",
          discount_price: "$80",
        },
        {
          image: "",
          key: secondImage,
          title: "Second Image",
          offer_date: "Jan 2023",
          discount_percent: "60%",
        },
        {
          image: "",
          key: thirdImage,
          title: "Third Image",
          offer_date: "December 2023",
          discount_percent: "40%",
          original_price: "$10",
          discount_price: "$6",
        },
        {
          image: "",
          key: fourthImage,
          title: "Fourth Image",
          offer_date: "November 2023",
          discount_percent: "15%",
          original_price: "$30",
          discount_price: "$25.50",
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
