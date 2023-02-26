import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridCellEditCommitParams,
  GridCellParams,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { data } from "../../data/data";
import { useAppContext } from "../../hooks/rerender";
import { DataColumns } from "./components/colum";
import CustomToolbar from "./components/toolBar";
export default function Table() {
  //set data to local storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, []);
  //get data from local storage
  const { reRender, setReRender } = useAppContext();
  const [rows, setRows] = useState(data);
  const [open, setOpen] = useState(false);
  const [param, setParam] = useState<number>(0);
  const handleClickOpen = (param: number) => {
    setParam(param);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //add more to columns
  const columns = [
    ...DataColumns,
    {
      field: "Action",
      headerName: "Action",
      width: 130,
      editable: false,
      renderCell: (params: GridCellParams) => (
        <div>
          <IconButton
            onClick={() => handleClickOpen(params.row.CustomerID)}
            color="secondary"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Delete this record ?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Delete this row may cause loss of data forever !
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={() => handleDelete(param)}>Confirm</Button>
            </DialogActions>
          </Dialog>
        </div>
      ),
    },
  ];
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    setRows(data);
  }, [reRender]);
  const handleDelete = (id: number) => {
    //delete row from local storage
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    const newData = data.filter((item: any) => item.CustomerID !== id);
    localStorage.setItem("data", JSON.stringify(newData));
    setRows(newData);
    setReRender(!reRender);
    setOpen(false);
  };

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row.CustomerID}
        experimentalFeatures={{ newEditingApi: false }}
        components={{
          Toolbar: CustomToolbar,
        }}
        onCellEditCommit={(params: GridCellEditCommitParams) => {
          const data = JSON.parse(localStorage.getItem("data") || "[]");
          const newData = data.map((item: any) => {
            if (item.CustomerID === params.id) {
              return {
                ...item,
                [params.field]: params.value,
              };
            }
            return item;
          });
          localStorage.setItem("data", JSON.stringify(newData));
          setRows(newData);
          setReRender(!reRender);
        }}
      />
    </Box>
  );
}
