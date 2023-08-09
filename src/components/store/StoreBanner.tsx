import { Link } from "react-router-dom";
import { Dropdown } from "../common/Dropdown";
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
      <div className="banner-image">
        <div className="banner-bar">
          <div className="banner-links">
            <Dropdown label="Your Store" items={yourStoreItems} />
            <Dropdown label="News & Noteworthy" items={newsItems} />
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
