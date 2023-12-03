import { useEffect, useState } from "react";
import { selectFeedback } from "redux/features/app";

const { Snackbar, Alert } = require("@mui/material");
const { useSelector } = require("react-redux");

const MessageModal = () => {
  const feedback = useSelector(selectFeedback);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (feedback?.message) {
      setIsOpen(true);
    }
  }, [feedback]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
  };
  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={feedback?.type || "error"}
        sx={{ width: "100%" }}
      >
        {feedback?.message}
      </Alert>
    </Snackbar>
  );
};

export default MessageModal;
