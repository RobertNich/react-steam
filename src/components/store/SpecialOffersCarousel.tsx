interface Props {
  title?: string;
  slides: OfferSlides[];
}

interface OfferSlides {
  panels: OfferPanel[];
}

interface OfferPanel {
  image: string;
  key: string;
  title: string;
  offer_date?: string;
  discount_percent: string;
  original_price?: string;
  discount_price?: string;
}

export const SpecialOffersCarousel = ({ title, slides }: Props) => {
  return (
    <div>
      {title ? <h4>{title}</h4> : <></>}
      {slides.map((slide) => (
        <div
          className={`offer-carousel-container offer-carousel-grid-${slide.panels.length}`}
        >
          {slide.panels.map((panel, index) => (
            <div>
              <h4>{panel.title}</h4>
              <img
                src={panel.image}
                alt={`image-${index}`}
                key={`${panel.key}-index`}
                width="10"
              />
              {panel.offer_date ? <p>{panel.offer_date}</p> : <></>}
              <h5>{panel.discount_percent}</h5>
              {panel.discount_price && panel.original_price ? (
                <p>
                  {panel.discount_price}
                  {panel.original_price}
                </p>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
