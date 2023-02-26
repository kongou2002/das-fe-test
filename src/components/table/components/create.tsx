import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { useAppContext } from "../../../hooks/rerender";
import Form from "../../form/form";
function Create() {
  const { reRender, setReRender } = useAppContext();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setReRender(!reRender);
  };
  return (
    <div>
      <Button onClick={handleClickOpen}>
        <AddIcon />
        Create
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add more data, please input your data here.
          </DialogContentText>
          <Form />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Create;
