/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Col, Row, message } from "antd";
import Form from "../../../components/Form/Form";
import FormSelectField from "../../../components/Forms/FormSelectField";
import { useParams } from "react-router-dom";
import { companyStatus } from "../../../components/Constant/global";


const UpdateCompany = () => {
  const { id } = useParams();

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      fetch(
        `https://career-connect-hub-api.vercel.app/api/v1/company/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.statusCode === 200) {
            message.success(res.message);
          }
        });
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div>
      <Form submitHandler={onSubmit}>
        <h2
          style={{
            color: "#1F2B6C",
            textAlign: "center",
            margin: "30px 0",
          }}
        >
          Update Company
        </h2>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            margin: "10px 0",
          }}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              style={{
                margin: "5px 0",
              }}
            >
              <FormSelectField
                name="status"
                label="Update Status"
                size="small"
                options={companyStatus}
              />
            </Col>
          </Row>
        </div>
        <div style={{ margin: "10px 0" }}>
          <Button type="primary" htmlType="submit" size="large">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateCompany;