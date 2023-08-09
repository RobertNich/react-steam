import featureCards from "../../assets/feature-cards.png";

export const FeaturedSidebar = () => {
  return (
    <div className="featured-sidebar">
      <div className="featured-sidebar-section">
        <img
          width={200}
          src={featureCards}
          alt="feature-cards"
          className="featured-sidebar-image"
        />
        <h4>Steam gift cards</h4>
        <p>Give the gift of game</p>
      </div>
      <div className="featured-sidebar-section">
        <h5>Recommended</h5>
        <p>By Friends</p>
        <p>By Curators</p>
        <p>Tags</p>
      </div>
      <div className="featured-sidebar-section">
        <h5>Browse Categories</h5>
        <p>Top Sellers</p>
        <p>New Releases</p>
        <p>Upcoming</p>
        <p>Specials</p>
        <p>VR Titles</p>
        <p>Controller-Friendly</p>
        <p>Great on Deck</p>
      </div>
      <div className="featured-sidebar-section">
        <h5>Browse by Genre</h5>
        <p>Free to Play</p>
        <p>Early Access</p>
        <p>Action</p>
        <p>Adventure</p>
        <p>Casual</p>
        <p>Indie</p>
        <p>Massively Multiplayer</p>
        <p>Racing</p>
        <p>RPG</p>
        <p>Simulation</p>
        <p>Sports</p>
        <p>Strategy</p>
      </div>
    </div>
  );
};
