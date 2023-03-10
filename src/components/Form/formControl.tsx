import * as Yup from "yup";

//form control using formik and yup
export const validationSchema = Yup.object({
  CustFirstName: Yup.string().required("Required"),
  CustLastName: Yup.string().required("Required"),
  CustAddress: Yup.string().required("Required"),
  CustCity: Yup.string().required("Required"),
  CustState: Yup.string().required("Required"),
  CustZip: Yup.string().required("Required"),
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
  OrderNumber: 0,
  OrderDate: "",
  ShipDate: "",
  EmployeeID: 0,
  EmpFirstName: "",
  EmpLastName: "",
  EmpStreet: "",
  EmpCity: "",
  EmpState: "",
  EmpZip: "",
  EmpPhone: "",
  Position: "",
  DateHired: "",
  HourlyRate: 0,
};
