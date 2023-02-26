import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useCallback, useContext } from "react";
import { initialValues, validationSchema } from "./formControl";
import { DataContext } from "../../context/DataContext";
import { useAppContext } from "../../context/RerenderContext";
type FieldName =
  | "CustFirstName"
  | "CustLastName"
  | "CustAddress"
  | "CustCity"
  | "CustState"
  | "CustZip"
  | "CustPhone"
  | "CustEmail"
  | "OrderNumber"
  | "OrderDate"
  | "ShipDate"
  | "EmployeeID"
  | "EmpFirstName"
  | "EmpLastName"
  | "EmpStreet"
  | "EmpCity"
  | "EmpState"
  | "EmpZip"
  | "EmpPhone"
  | "Position"
  | "DateHired"
  | "HourlyRate";

function Form() {
  const { data, setData } = useContext(DataContext);
  const { reRender, setReRender } = useAppContext();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // get data from context and +1 to CustomerID to create new record
      const dataFromContext = data;
      const newCustomerID = dataFromContext.length + 1;
      const newData = { ...values, CustomerID: newCustomerID };

      // set data to context
      setData([...dataFromContext, newData]);
      // check if data is saved to context
      console.log(data);
      // set data to table
      alert("Data has been saved");
      // reset form
      setReRender(!reRender);
    },
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      formik.handleSubmit(e);
      //get data from local storage and +1 to CustomerID to create new record
      e.currentTarget.reset();
    },
    [formik]
  );

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
      component={"form"}
      onSubmit={handleSubmit}
    >
      {[
        ["CustFirstName", "Customer First Name"],
        ["CustLastName", "Customer Last Name"],
        ["CustAddress", "Customer Address"],
        ["CustCity", "Customer City"],
        ["CustState", "Customer State"],
        ["CustZip", "Customer Zip"],
        ["CustPhone", "Customer Phone"],
        ["CustEmail", "Customer Email", "email"],
        ["OrderNumber", "Order Number", "number"],
        ["OrderDate", "Order Date", "date"],
        ["ShipDate", "Ship Date", "date"],
        ["EmployeeID", "Employee ID", "number"],
        ["EmpFirstName", "Employee First Name"],
        ["EmpLastName", "Employee Last Name"],
        ["EmpStreet", "Employee Street"],
        ["EmpCity", "Employee City"],
        ["EmpState", "Employee State"],
        ["EmpZip", "Employee Zip"],
        ["EmpPhone", "Employee Phone"],
        ["Position", "Employee Position"],
        ["DateHired", "Employee Date Hired", "date"],
        ["HourlyRate", "Employee Hourly Rate", "number"],
      ].map(([name, label, type]) => (
        <TextField
          autoFocus
          margin="dense"
          name={name as FieldName} // cast `name` as `FieldName`
          label={label}
          variant="standard"
          type={type}
          onChange={formik.handleChange}
          InputLabelProps={{ shrink: true }}
          key={name}
          error={
            formik.touched[name as FieldName] &&
            Boolean(formik.errors[name as FieldName])
          }
          helperText={
            formik.touched[name as FieldName] &&
            formik.errors[name as FieldName]
          }
        />
      ))}
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}

export default Form;
