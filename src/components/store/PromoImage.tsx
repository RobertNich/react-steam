import promoImage from "../../assets/promo-image.png";

export const PromoImage = () => {
  return (
    <div className="promo-banner-continer">
      <img className="promo-image" src={promoImage} alt="promo-image" />
    </div>
  );
};
