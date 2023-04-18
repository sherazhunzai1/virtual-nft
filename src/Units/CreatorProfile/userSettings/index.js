import { makeStyles } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as yup from "yup";
import React from "react";

import MyBtn from "../../Buttons/SecondaryRoundedButton";
import InputField from "../../InputField";
// validation Schema for Formik
const validationSchema = yup.object({
  firstname: yup.string().required().max(18),
  lastname: yup.string().required().max(18),
  username: yup.string().required().max(20),
  email: yup.string().required(),
  bio: yup.string().required().max(255),
  dob: yup.date().required(),
});
const UserSettings = ({ userData, bio }) => {
  return (
    <Formik
      initialValues={{
        firstname: userData.first_name,
        lastname: userData.Last_name,
        username: userData.username,
        email: userData.email,
        gender: userData.email,
        dob: userData.dob,
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        setSubmitting(false);
      }}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form>
          <InputField
            placeholder="Username"
            type="text"
            width={true}
            disabled
            name="username"
          />
          <InputField
            placeholder="Firstname"
            type="text"
            width={true}
            name="firstname"
          />
          <InputField
            placeholder="Lastname"
            type="text"
            width={true}
            name="lastname"
          />
          <InputField
            placeholder="Date of birth"
            type="date"
            width={true}
            name="dob"
            onChange={(value) => setFieldValue("dob", value)}
          />

          <InputField
            placeholder="Bio"
            width={true}
            type="text"
            rows={4}
            isMultiLine
            name="bio"
          />
          <InputField
            placeholder="Email"
            width={true}
            type="email"
            name="email"
            disabled
          />
          <MyBtn isPrimary Stylings={useButtnStyles} type="submit">
            Update
          </MyBtn>
        </Form>
      )}
    </Formik>
  );
};

export default UserSettings;

const useButtnStyles = makeStyles((theme) => ({
  style: {
    width: "100%",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    paddingRight: 0,
  },
}));
