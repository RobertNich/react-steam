import { useWindowWidth } from "../../hooks/useWindowWidth";
import { MobileCarousel } from "../common/MobileCarousel";

type PanelConfiguration = {
  [key: number]: ("Full" | "Small")[];
};

const panelConfig: PanelConfiguration = {
  3: ["Full", "Full", "Full"],
  4: ["Full", "Full", "Small", "Small"],
  5: ["Full", "Small", "Small", "Small", "Small"],
  6: ["Small", "Small", "Small", "Small", "Small", "Small"],
};

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
  title?: string;
  game_title: string;
  offer_date?: string;
  discount_percent: string;
  original_price?: string;
  discount_price?: string;
}

interface DiscountTagProps {
  discountPercent: string;
}

const DiscountTag = ({ discountPercent }: DiscountTagProps) => {
  return (
    <div className="discount-percent-only">
      <h5>Up to -{discountPercent}</h5>
    </div>
  );
};

interface DiscountTagLongProps {
  discountPercent: string;
  originalPrice: string;
  discountPrice: string;
}

const DiscountTagLong = ({
  discountPercent,
  originalPrice,
  discountPrice,
}: DiscountTagLongProps) => {
  return (
    <div className="discount-tag-long">
      <div className="discount-tag-percent">
        <h4>{discountPercent}</h4>
      </div>
      <div className="discount-tag-reduced">
        <p>{originalPrice}</p>
        <h5>{discountPrice}</h5>
      </div>
    </div>
  );
};

const FullPanel = ({
  image,
  key,
  title,
  offer_date,
  discount_percent,
  original_price,
  discount_price,
}: OfferPanel) => {
  const showLongDiscountTag =
    discount_percent !== undefined &&
    original_price !== undefined &&
    discount_percent !== undefined
      ? true
      : false;

  return (
    <div className="panel-container">
      <img
        src={image}
        alt="image"
        key={`${key}-index`}
        className="special-offers-cover"
      />
      <div className="full-panel-info-container">
        {title ? <h4>{title}</h4> : <></>}
        {offer_date ? (
          <p className="panel-date">Offer ends {offer_date}</p>
        ) : (
          <></>
        )}
        <div className="full-discount">
          {showLongDiscountTag ? (
            <DiscountTagLong
              discountPercent={discount_percent}
              originalPrice={original_price!}
              discountPrice={discount_price!}
            />
          ) : (
            <DiscountTag discountPercent={discount_percent} />
          )}
        </div>
      </div>
    </div>
  );
};

const SmallPanel = ({
  image,
  key,
  title,
  discount_percent,
  original_price,
  discount_price,
}: OfferPanel) => {
  const showLongDiscountTag =
    discount_percent !== undefined &&
    original_price !== undefined &&
    discount_percent !== undefined
      ? true
      : false;
  return (
    <div className="panel-container">
      <img
        src={image}
        alt="image"
        key={`${key}-index`}
        className="special-offers-cover"
      />
      <div className={title ? "small-panel-title" : "small-panel-price"}>
        {title ? <h4>{title}</h4> : <></>}
        {showLongDiscountTag ? (
          <DiscountTagLong
            discountPercent={discount_percent}
            originalPrice={original_price!}
            discountPrice={discount_price!}
          />
        ) : (
          <DiscountTag discountPercent={discount_percent} />
        )}
      </div>
    </div>
  );
};

export const SpecialOffersCarousel = ({ title, slides }: Props) => {
  const windowWidth = useWindowWidth();
  const mobileSlides = slides.reduce((acc, slide) => {
    slide.panels.forEach((panel) =>
      acc.push({ title: panel.game_title, image: panel.image })
    );
    return acc;
  }, [] as Array<{ title: string; image: string }>);

  return (
    <>
      {windowWidth > 1024 ? (
        <div className="special-offers-container">
          {title ? <h4 className="uppercase">{title}</h4> : <></>}
          {slides.map((slide) => (
            <div
              className={`offer-carousel-container offer-carousel-grid-${slide.panels.length}`}
            >
              {slide.panels.map((panel, index) => {
                const currentConfig = panelConfig[slide.panels.length];

                if (currentConfig[index] === "Full") {
                  return <FullPanel {...panel} />;
                } else {
                  return <SmallPanel {...panel} />;
                }
              })}
            </div>
          ))}
        </div>
      ) : (
        <MobileCarousel slides={mobileSlides} />
      )}
    </>
  );
};
