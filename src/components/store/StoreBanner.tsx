import { Link } from "react-router-dom";
import { Dropdown } from "../common/Dropdown";
import bannerImage from "../../assets/banner.png";
import searchIcon from "../../assets/icon-search.svg";

export const StoreBanner = () => {
  const yourStoreItems = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Community Recommendations",
      link: "",
    },
    {
      name: "Recently Viewed",
      link: "",
    },
    {
      name: "Steam Curators",
      link: "",
    },
  ];

  const newsItems = [
    {
      name: "Steam Replay 2022",
      link: "",
    },
    {
      name: "Top Sellers",
      link: "",
    },
    {
      name: "Most Played",
      link: "",
    },
    {
      name: "New & Trending",
      link: "",
    },
    {
      name: "Special Offers",
      link: "",
    },
    {
      name: "Recently Updated",
      link: "",
    },
    {
      name: "Popular Upcoming",
      link: "",
    },
  ];

  return (
    <>
      <div className="banner-container">
        <img src={bannerImage} alt="banner-image" className="banner-image" />
        <div className="banner-bar">
          <div className="banner-links">
            <div className="banner-dropdowns-full">
              <Dropdown label="Your Store" items={yourStoreItems} />
              <Dropdown label="News & Noteworthy" items={newsItems} />
            </div>
            <div className="banner-dropdowns-small">
              <Link to="">Your Store</Link>
              <Link to="">News & Noteworthy</Link>
            </div>
            <Link to="">Categories</Link>
            <Link to="">Points Shop</Link>
            <Link to="">News</Link>
            <Link to="">Labs</Link>
          </div>
          <div className="banner-search-bar">
            <input className="banner-input" placeholder="search" />
            <img
              src={searchIcon}
              width={20}
              alt="search"
              className="search-icon"
            />
          </div>
        </div>
        <Link className="banner-clickable" to="" />
      </div>
    </>
  );
};
