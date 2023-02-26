import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const editableColumn = (
  field: string,
  headerName: string,
  width: number,
  type?: string
): GridColDef => ({
  field,
  headerName,
  width,
  type,
  editable: true,
});

const uneditableColumn = (
  field: string,
  headerName: string,
  width: number,
  type?: string
): GridColDef => ({
  field,
  headerName,
  width,
  type,
});

export const DataColumns: GridColDef[] = [
  uneditableColumn("CustomerID", "CustomerID", 90),
  editableColumn("CustFirstName", "First name", 110),
  editableColumn("CustLastName", "Last name", 110),
  {
    field: "fullName",
    headerName: "Customer Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.CustFirstName || ""} ${params.row.CustLastName || ""}`,
  },
  editableColumn("CustAddress", "Address", 110),
  editableColumn("CustCity", "City", 80),
  editableColumn("CustState", "Customer State", 120),
  editableColumn("CustZip", "Zip", 80),
  editableColumn("CustPhone", "Phone", 110),
  editableColumn("CustEmail", "Email", 110),
  editableColumn("OrderNumber", "Order Number", 90, "number"),
  editableColumn("OrderDate", "Order Date", 110, "date"),
  editableColumn("ShipDate", "Ship Date", 110, "date"),
  uneditableColumn("EmployeeID", "Employee ID", 110, "number"),
  editableColumn("EmpFirstName", "Employee First Name", 110),
  editableColumn("EmpLastName", "Employee Last Name", 110),
  editableColumn("EmpStreet", "Employee Street", 110),
  editableColumn("EmpCity", "Employee City", 110),
  editableColumn("EmpState", "Employee State", 110),
  editableColumn("EmpZip", "Employee Zip", 110),
  editableColumn("EmpPhone", "Employee Phone", 110),
  editableColumn("Position", "Employee Position", 110),
  editableColumn("HourlyRate", "Employee Hourly Rate", 110, "number"),
  editableColumn("DateHired", "Date Hired", 110, "date"),
];
