export interface IData {
    CustomerID: number;
    CustFirstName: string;
    CustLastName: string;
    CustAddress: string;
    CustCity: string;
    CustState: string;
    CustZip: string;
    CustPhone: string;
    CustEmail: string;
    OrderNumber: number;
    OrderDate: string;
    ShipDate?: string;
    EmployeeID: number;
    EmpFirstName: string;
    EmpLastName: string;
    EmpStreet: string;
    EmpCity: string;
    EmpState: string;
    EmpZip: string;
    EmpPhone: string;
    Position: string;
    HourlyRate: number;
    DateHired: string;
}
export interface DataArray{
    data: Data[];
}