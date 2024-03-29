/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, message } from "antd";
import { useAddWorkExperienceMutation } from "../../redux/api/workExperienceApi";
import { getUserInfo } from "../../services/auth.service";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import FormTextArea from "../Forms/FormTextArea";

const ExperienceModal = () => {
  const [addWorkExperience] = useAddWorkExperienceMutation();

  const { email } = getUserInfo() as any;

  const onSubmit = async (experienceData: any) => {
    message.loading("Adding...");
    try {
      const experienceDataWithEmail = {
        ...experienceData,
        userEmail: email,
      };
      await addWorkExperience(experienceDataWithEmail);
      message.success("Experience added successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div>
      <p
        style={{
          fontSize: "1.1rem",
          marginTop: "1rem",
          marginBottom: ".5rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Job details
      </p>
      <Form submitHandler={onSubmit}>
        <div style={{ width: "100%", marginTop: "-.5rem" }}>
          <FormInput name="profile" type="text" label="Profile" />
        </div>
        <div style={{ width: "100%", marginTop: "-.5rem" }}>
          <FormInput name="organization" type="text" label="Organization" />
        </div>
        <div style={{ width: "100%", marginTop: "-.5rem" }}>
          <FormInput name="location" type="text" label="Locations" />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: ".6rem",
          }}
        >
          <div style={{ width: "50%", marginTop: "-.5rem" }}>
            <FormInput name="startDate" type="date" label="Start Date" />
          </div>
          <div style={{ width: "50%", marginTop: "-.5rem" }}>
            <FormInput name="endDate" type="date" label="End Date" />
          </div>
        </div>
        <div style={{ width: "100%", marginTop: "-.5rem" }}>
          <FormInput name="responsibility" type="text" label="responsibility" />
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            minHeight: "10rem",
            resize: "none",
          }}
        >
          <FormTextArea name="description" label="Description (Optional)" />
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ExperienceModal;
