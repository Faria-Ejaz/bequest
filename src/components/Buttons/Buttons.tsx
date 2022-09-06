import { styled } from "@mui/system";
import { Button } from "@mui/material";

import {ButtonProps} from "../type";

export const PrimaryButton = (props: ButtonProps) => {
  return (
    <PrimaryBtn
      data-testid="submit-button"
      type={props.type}
      onClick={props.onClick}
      variant="contained"
    >
      {props.text}
    </PrimaryBtn>
  );
};

export const SecondaryButton = (props: ButtonProps)=> {
  return (
    <SecondaryBtn variant="contained" type={props.type} onClick={props.onClick}>
      {props.text}
    </SecondaryBtn>
  );
};

const Btn = styled(Button)({
  lineHeight: "34px",
  textAlign: "center",
  padding: "0 35px",
  margin: "0 10px",
  transition: "all .15s ease-in-out",
  color: "white",
  "&:hover": {
    color: "white",
    transform: "scale(1.05)",
    opacity: 1,
  },
});

const PrimaryBtn = styled(Btn)({
  borderRadius: "17px",
  fontWeight: 300,
  fontSize: "0.75rem",
  height: "34px",
  backgroundColor: "#ff4c50",
  "&:hover": {
    backgroundColor: "#ff4c50",
  },
});

const SecondaryBtn = styled(Btn)({
  borderRadius: "20px",
  height: "42px",
  fontWeight: 500,
  fontSize: "0.79rem",
  maxWidth: "413px",
  backgroundColor: "#343a40",
  "&:hover": {
    backgroundColor: "#343a40",
  },
});
