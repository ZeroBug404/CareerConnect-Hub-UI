import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import "./helpCenter.css";

const HelpCenter = () => {
  return (
    <Row justify="center" align="middle" style={{ backgroundColor: "#eff4fc" }}>
      <Col sm={24} md={24} lg={24}>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="container"
        >
          <div className="textContent">
            <h1>Explore our Help Center</h1>
            <p>
              Learn everything you need to know about managing your account,
              navigating your dashboard, and more.
            </p>
            <Link to="/career-services">
              <button
                className="bg-[#21286a] text-white hover:text-[#21286a] rounded-full text-base px-8 py-4 border-2 hover:bg-white hover:border-[#21286a] focus:bg-indigo-600 focus:outline-none transition-all w-full lg:w-44"
              >
                Start Exploring
              </button>
            </Link>
          </div>
          <div className="">
            <img src="/assets/Help-Center.png" alt="Image" className="image" />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default HelpCenter;
