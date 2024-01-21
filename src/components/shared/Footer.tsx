import {
  FacebookFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Col, Flex, Row } from "antd";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#21286a",
        color: "white",
        textAlign: "center",
        padding: "30px 10px",
      }}
    >
      <Row
        style={{
          borderBottom: "1px solid #6D747A",
          padding: "10px",
        }}
      >
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          style={{
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            Career Connect Hub
          </h3>
          <p
            style={{
              marginBottom: "20px",
            }}
          >
            Your dream job, simplified. Explore opportunities effortlessly on
            our Career Connect Hub.
          </p>
          <Flex
            justify="center"
            align="center"
            gap="large"
            wrap="wrap"
            style={{
              fontSize: "24px",
            }}
            data-aos-duration="2000"
          >
            <FacebookFilled
              style={{
                border: "2px solid",
                borderRadius: "50%",
                padding: "12px",
                cursor: "pointer",
              }}
              className="hover:bg-[#1967d2] transition-all"
            />

            <LinkedinFilled
              style={{
                border: "2px solid",
                borderRadius: "50%",
                padding: "12px",
                cursor: "pointer",
              }}
              className="hover:bg-[#1967d2] transition-all"
            />

            <TwitterSquareFilled
              style={{
                border: "2px solid",
                borderRadius: "50%",
                padding: "12px",
                cursor: "pointer",
              }}
              className="hover:bg-[#1967d2] transition-all"
            />

            <YoutubeFilled
              style={{
                border: "2px solid",
                borderRadius: "50%",
                padding: "12px",
                cursor: "pointer",
              }}
              className="hover:bg-[#1967d2] transition-all"
            />
          </Flex>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          style={{
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            Company
          </h3>
          <Col
            style={{
              marginBottom: "20px",
            }}
          >
            <Link
              to="/"
              style={{
                color: "white",
              }}
            >
              About Us
            </Link>
          </Col>
          <Col
            style={{
              marginBottom: "20px",
            }}
          >
            <Link
              to="/contact"
              style={{
                color: "white",
              }}
            >
              Contact With Us
            </Link>
          </Col>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          style={{
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            Resources
          </h3>
          <Col
            style={{
              marginBottom: "20px",
            }}
          >
            {" "}
            <Link
              to="/"
              style={{
                color: "white",
              }}
            >
              Post New Job
            </Link>
          </Col>
          <Col
            style={{
              marginBottom: "20px",
            }}
          >
            <Link
              to="/find-job"
              style={{
                color: "white",
              }}
            >
              Jobs Listing
            </Link>
          </Col>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          style={{
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            Legal
          </h3>
          <Col
            style={{
              marginBottom: "20px",
            }}
          >
            {" "}
            <Link
              to="/blog"
              style={{
                color: "white",
              }}
            >
              Blog
            </Link>
          </Col>
          <Col
            style={{
              marginBottom: "20px",
            }}
          >
            <Link
              to="/privacy"
              style={{
                color: "white",
              }}
            >
              Privacy
            </Link>
          </Col>
          <Col
            style={{
              marginBottom: "20px",
            }}
          >
            <Link
              to="/terms"
              style={{
                color: "white",
              }}
            >
              Terms
            </Link>
          </Col>
        </Col>
      </Row>
      <p
        style={{
          paddingTop: "20px",
        }}
      >
        @ 2023 Career Connect Hub
      </p>
    </div>
  );
};

export default Footer;
