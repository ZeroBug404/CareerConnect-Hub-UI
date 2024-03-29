/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Col, Row, message } from "antd";
import { useParams } from "react-router-dom";
import { useBlogQuery, useUpdateBlogMutation } from "../../../redux/api/blogApi";
import BreadCrumb from "../../../components/ui/dashboard/common/BreadCrumb";
import Form from "../../../components/Forms/Form";
import FormInput from "../../../components/Forms/FormInput";
import FormTextArea from "../../../components/Forms/FormTextArea";

const EditBlog = () => {
  const { id } = useParams();
  const { data } = useBlogQuery(id);
  const [updateBlog] = useUpdateBlogMutation();

  console.log(id);

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      console.log(data);
      const res = await updateBlog({ body: data }).unwrap();

      if (res) {
        message.success("Jobs updated successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.data?.title || "",
    author: data?.data?.author || "",
    publishDate: data?.data?.publishDate || "",
    content: data?.data?.content || "",
  };

  return (
    <>
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          width: "100%",
        }}
      >
        <BreadCrumb
          items={[
            {
              label: "Publish Blog",
              link: "/dashboard/blog/create",
            },
            {
              label: "View Blogs",
              link: "/dashboard/blog",
            },
          ]}
        />
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <h2
            style={{
              color: "#1F2B6C",
              textAlign: "center",
              margin: "30px 0",
            }}
          >
            Update Blog
          </h2>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Blog Information
            </p>
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
                <FormInput
                  name="title"
                  type="text"
                  size="small"
                  label="Title"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="author"
                  type="text"
                  size="small"
                  label="Author"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="publishDate"
                  type="date"
                  size="small"
                  label="Publish Date"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormTextArea name="content" label="Content" rows={4} />
              </Col>
            </Row>
          </div>
          <div style={{ margin: "10px 0" }}>
            <Button type="primary" htmlType="submit" size="large">
              Update Blog
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default EditBlog;
