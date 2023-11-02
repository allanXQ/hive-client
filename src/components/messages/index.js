import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { clearError, selectError } from "redux/features/app/error";

const { Snackbar, Alert } = require("@mui/material");
const { useSelector, useDispatch } = require("react-redux");

const MessageModal = ({ type, message }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const errorParam = queryParams.get("error") || queryParams.get("message");

  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (error?.message || errorParam) {
      setIsOpen(true);
    }
  }, [error]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
    setTimeout(() => {
      errorParam &&
        queryParams.delete("error") &&
        queryParams.delete("message");
      dispatch(clearError());
    }, 1000);
  };
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={error?.type || "error"}
        sx={{ width: "100%" }}
      >
        {error?.message || errorParam}
      </Alert>
    </Snackbar>
  );
};

export default MessageModal;
