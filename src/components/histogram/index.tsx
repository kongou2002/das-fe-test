import { useEffect, useState } from "react";
import Chart from "./chart";
import { useAppContext } from "../../context/RerenderContext";
import { Box } from "@mui/material";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";
type DataPoint = { label: string; value: number };

const label = [
  "CustFirstName",
  "CustLastName",
  "CustAddress",
  "CustCity",
  "CustState",
  "CustZip",
  "CustPhone",
  "CustEmail",
  "OrderNumber",
  "OrderDate",
  "ShipDate",
  "EmployeeID",
  "EmpFirstName",
  "EmpLastName",
  "EmpStreet",
  "EmpCity",
  "EmpState",
  "EmpZip",
  "EmpPhone",
  "Position",
  "DateHired",
  "HourlyRate",
];
const selectvalue = ["OrderNumber", "EmployeeID", "HourlyRate"];

function HistogramData() {
  const { data } = useContext(DataContext);
  const [selectedData, setSelectedData] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("OrderNumber");
  const [dataPoint, setDataPoint] = useState<DataPoint[]>([]);
  const { reRender } = useAppContext();

  useEffect(() => {
    //get data from context
    const dataFromContext = data;

    //get base on label and value
    const value = dataFromContext.map((d: any) => ({
      label: d[selectedData],
      value: d[selectedValue],
    }));
    setDataPoint(value);
  }, [reRender, selectedData, selectedValue]);

  const handleDataSetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDataSetId = event.target.value;
    setSelectedData(selectedDataSetId);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
  };
  return (
    <Box sx={{ textAlign: "center", mt: "50px" }}>
      <select value={selectedData || ""} onChange={handleDataSetChange}>
        <option disabled value="">
          Select data set
        </option>
        {label.map((dataSet, key) => (
          <option key={key} value={dataSet}>
            {dataSet}
          </option>
        ))}
      </select>
      {selectedData && (
        <select value={selectedValue || ""} onChange={handleValueChange}>
          <option disabled value={0}>
            Select value
          </option>
          {selectvalue.map((d, key) => (
            <option key={key} value={d}>
              {d}
            </option>
          ))}
        </select>
      )}
      {data.length > 0 && <Chart data={dataPoint} />}
    </Box>
  );
}
export default HistogramData;
