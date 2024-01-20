import { Row } from "antd";
import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.jpg";

const HomePageBanner = () => {

  return (
    <>
      <Row
        // justify="center",
        align="middle"
        style={{
          padding: "0 ",
          color: "white",
          // backgroundColor: "#123770",
          backgroundImage: `url(${banner})`,
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        {/* <div className="absolute">
          <img
            className="w-[100%] h-[60vh] lg:h-[100vh] "
            src={banner}
            alt=""
          />
        </div> */}
        {/* <Col xs={24} sm={12} data-aos="zoom-in-right" data-aos-duration="1000" style={{
          padding: "0 20px"
        }}>
          <p>CareerConnect Hub FOR EMPLOYERS</p>
          <h1
            // style={{
            //   fontSize: "40px",
            //   padding: "30px 0",
            // }}
            className="text-4xl font-bold text-black"
          >
            Find Your Next Job with CareerConnect Hub
          </h1>
          <p
            style={{
              fontSize: "18px",
              paddingBottom: "30px",
            }}
          >
            No matter the skills, experience, or qualifications you’re looking
            for, you’ll find the right people on CareerConnect Hub’s matching
            and hiring platform.
          </p>
          <Button
            onClick={() => setOpen(true)}
            size="large"
            style={{
              padding: "0 30px",
              fontSize: "18px",
              background: "#4096FF",
              color: "white",
              border: "none",
            }}
          >
            Post a Job
          </Button>
          
          
        </Col>
        <Col xs={24} sm={12} data-aos="zoom-in-left" data-aos-duration="1000">
          <img
            style={{
              width: "100%",
            }}
            src="/assets/home2.png"
            alt="Banner Image"
          />
        </Col> */}
        <div
          className="relative px-5 lg:px-32 w-[55rem]"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          <div className="leading-6 mb-5">
            <h4 className="text-5xl text-[#21286a] font-semibold mb-4">
              Join us & Explore
            </h4>
            <h4 className="text-5xl text-[#21286a] font-semibold">
              Thousands of Jobs
            </h4>

            <p className="text-[#21286a] my-3">
              Find Jobs, Employment & Career Opportunities
            </p>
          </div>
          <div className="overflow-hidden z-0 rounded lg:rounded-full relative p-1">
            <form
              role="form"
              className="relative lg:flex block z-50 p-[0.35rem] bg-white rounded lg:rounded-full"
            >
              <input
                type="text"
                placeholder="job title..."
                className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
              />
              <Link to={"/find-job"}>
                <button className="bg-[#21286a] text-white hover:text-[#21286a] rounded-full font-semibold px-8 py-4 border-2 hover:bg-white hover:border-[#21286a] focus:bg-indigo-600 focus:outline-none transition-all w-full lg:w-40">
                  Search
                </button>
              </Link>
            </form>
            <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
            <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
            <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
            <div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default HomePageBanner;
