import CounterPage from "./Counter";
import HelpCenter from "./HelpCenter";
import HomeBlog from "./HomeBlog";
import HomePageBanner from "./HomePageBanner";
import Services from "./Services";

const Homepage = () => {
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <Services />
      {/* <FeaturedProfile></FeaturedProfile> */}
      <HelpCenter />
      <CounterPage />
      <HomeBlog></HomeBlog>
    </div>
  );
};

export default Homepage;
