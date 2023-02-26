import * as Yup from "yup";

//form control using formik and yup
export const validationSchema = Yup.object({
  CustFirstName: Yup.string(),
  // .required("Required")
  // .min(2, "Must be at least 2 characters")
  // .max(15, "Must be 15 characters or less")
  // .matches(/^[A-Za-z]+$/, "Must be only letters")
  // .matches(/^[A-Z]/, "Must start with a capital letter"),
  CustLastName: Yup.string(),
  // .required("Required")
  // .min(2, "Must be at least 2 characters")
  // .max(15, "Must be 15 characters or less")
  // .matches(/^[A-Za-z]+$/, "Must be only letters")
  // .matches(/^[A-Z]/, "Must start with a capital letter"),
  CustAddress: Yup.string(),
  // .required("Required")
  // .min(2, "Must be at least 2 characters")
  // .max(15, "Must be 15 characters or less")
  // .matches(/^[A-Za-z]+$/, "Must be only letters")
  // .matches(/^[A-Z]/, "Must start with a capital letter"),
  CustCity: Yup.string(),
  // .required("Required")
  // .min(2, "Must be at least 2 characters")
  // .max(15, "Must be 15 characters or less")
  // .matches(/^[A-Za-z]+$/, "Must be only letters")
  // .matches(/^[A-Z]/, "Must start with a capital letter"),
  CustState: Yup.string(),
  // .required("Required")
  // .min(2, "Must be at least 2 characters")
  // .max(15, "Must be 15 characters or less")
  // .matches(/^[A-Za-z]+$/, "Must be only letters")
  // .matches(/^[A-Z]/, "Must start with a capital letter"),
  CustZip: Yup.string(),
  // .required("Required")
  // .min(2, "Must be at least 2 characters")
  // .max(15, "Must be 15 characters or less"),
  CustPhone: Yup.string().required("Required"),
  CustEmail: Yup.string().email("Invalid email address").required("Required"),
  OrderNumber: Yup.number().required("Required"),
  OrderDate: Yup.date().required("Required"),
  ShipDate: Yup.date().required("Required"),
  EmployeeID: Yup.number().required("Required"),
  EmpFirstName: Yup.string().required("Required"),
  EmpLastName: Yup.string().required("Required"),
  EmpStreet: Yup.string().required("Required"),
  EmpCity: Yup.string().required("Required"),
  EmpState: Yup.string().required("Required"),
  EmpZip: Yup.string().required("Required"),
  EmpPhone: Yup.string().required("Required"),
  Position: Yup.string().required("Required"),
  DateHired: Yup.date().required("Required"),
  HourlyRate: Yup.number().required("Required"),
});

export const initialValues = {
  CustFirstName: "",
  CustLastName: "",
  CustAddress: "",
  CustCity: "",
  CustState: "",
  CustZip: "",
  CustPhone: "",
  CustEmail: "",
  OrderNumber: "",
  OrderDate: "",
  ShipDate: "",
  EmployeeID: "",
  EmpFirstName: "",
  EmpLastName: "",
  EmpStreet: "",
  EmpCity: "",
  EmpState: "",
  EmpZip: "",
  EmpPhone: "",
  Position: "",
  DateHired: "",
  HourlyRate: "",
};
