import { Modal } from "@mui/material";
import React, { type ReactElement } from "react";

interface ModalProps {
  children: ReactElement;
  open: boolean;
}

const CustomModal = ({ children, open }: ModalProps): ReactElement => {
  return <Modal open={open}>{children}</Modal>;
};

export default CustomModal;
