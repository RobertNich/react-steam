import { FeaturedCarousel } from "./FeaturedCarousel";
import { FeaturedSidebar } from "./FeaturedSidebar";

export const StoreFeatured = () => {
  return (
    <div className="featured-container">
      <FeaturedSidebar />
      <div className="featured-main-column">
        <FeaturedCarousel />
      </div>
    </div>
  );
};
