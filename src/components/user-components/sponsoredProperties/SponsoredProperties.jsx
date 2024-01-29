import "./sponsoredProperties.css";
import SponsoredProperty from "./SponsoredProperty";

const SponsoredProperties = () => {
  const getFeaturedPropertiesData = () => {
    const data = [
      {
        src: "https://imu.indiana.edu/images/hotel/accordion%20gallery/1810-28_10-4Kb.jpg",
        propertyName: "IMU Biddle",
        location: "Bloomington",
        price: 25,
        rating: 8.8,
        review: "Good",
      },
      {
        src: "https://lh3.googleusercontent.com/p/AF1QipM0WQnioW9x1zUBhp8m0doiydpAtAsadmV4NH7i=w296-h202-n-k-rw-no-v1",
        propertyName: "Hyatt Place",
        location: "Bloomington",
        price: 40,
        rating: 8.7,
        review: "Excellent",
      },
      {
        src: "https://cache.marriott.com/content/dam/marriott-renditions/BMGFI/bmgfi-queen-0027-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
        propertyName: "Fairfield Inn by Marriott",
        location: "Indianapolis",
        price: 19,
        rating: 4.8,
        review: "Bad",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/135177328.jpg?k=4babdcdcd40d264d6f6818d07e0444addcbcc409ae3c6a8c38f41d183a02bc93&o=&hp=1",
        propertyName: "Hilton Garden Inn",
        location: "Indianapolis",
        price: 27,
        rating: 10,
        review: "Best",
      },
    ];
    return data;
  };

  return (
    <div className="fp">
      {getFeaturedPropertiesData().map((object, i) => {
        return <SponsoredProperty object={object} key={i} />;
      })}
    </div>
  );
};

export default SponsoredProperties;
