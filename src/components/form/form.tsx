import { Box, Button, TextField } from "@mui/material";
import { useState, useCallback } from "react";

function Form() {
  const [data, setData] = useState<any>({});

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      //get data from local storage and +1 to CustomerID to create new record
      const dataFromLocalStorage = JSON.parse(
        localStorage.getItem("data") || "[]"
      );
      const newCustomerID = dataFromLocalStorage.length + 1;
      const newData = { ...data, CustomerID: newCustomerID };
      //set data to local storage
      localStorage.setItem(
        "data",
        JSON.stringify([...dataFromLocalStorage, newData])
      );
      //set data to table
      setData(newData);
      alert("Data has been saved");
      //reset form
      e.currentTarget.reset();
    },
    [data]
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
          name={name}
          label={label}
          variant="standard"
          type={type}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          key={name}
        />
      ))}
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}

export default Form;
