import {
  Box,
  Grid,
  Dialog,
  Divider,
  InputBase,
  TextField,
  Typography,
  DialogTitle,
  NativeSelect,
  DialogActions,
  DialogContent,
} from "@mui/material";
import * as yup from "yup";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { styled } from "@mui/system";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import { yupResolver } from "@hookform/resolvers/yup";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
// Context
import { AddressBookContext } from "../../context/AddressBookContext";
// Components
import { PrimaryButton } from "../Buttons/Buttons";
// type
import { Address } from "../type";

const AddressFormSchema = yup
  .object({
    line_1: yup.string().required("This is a required field"),
    line_2: yup.string().notRequired(),
    line_3: yup.string().notRequired(),
    town: yup.string().required("This is a required field"),
    country: yup.string().required("This is a required field"),
    postcode: yup.string().required("This is a required field"),
  })
  .required();

export const DialogBox = () => {
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Address>({
    resolver: yupResolver(AddressFormSchema),
  });
  const submitForm = (data: Address) => {
    onSubmit(data);
    reset();
  };

  const { showModal, setShowModal, addAddress } =
    useContext(AddressBookContext);

  const onClose = () => {
    setShowModal(false);
  };

  const onSubmit = (address: Address) => {
    addAddress({ ...address, id: uuid() });
    onClose();
  };

  return (
    <>
      <Dialog
        PaperProps={{
          style: {
            backgroundColor: "#f6f5ea",
            borderRadius: "10px",
          },
        }}
        open={showModal}
        maxWidth="md"
      >
        <IconButton
          onClick={onClose}
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#292b2c",
          }}
        >
          <CancelOutlinedIcon />
        </IconButton>
        <DialogTitle
          sx={{
            fontFamily: [`"HCo Gotham SSm"`, "sans-serif"].join(","),
            fontWeight: "500",
            color: "#292b2c",
          }}
        >
          Add New Address
        </DialogTitle>
        <form onSubmit={handleSubmit(submitForm)}>
          <DialogContent>
            <Box>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Field
                    label="Address1"
                    {...register("line_1")}
                    error={!!errors.line_1}
                    helperText={errors.line_1?.message}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field label="Address2" fullWidth {...register("line_2")} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field label="Address3" fullWidth {...register("line_3")} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    label="Town"
                    fullWidth
                    error={!!errors.town}
                    helperText={errors.town?.message}
                    inputProps={{
                      "data-testid": "town",
                    }}
                    {...register("town")}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    label="Postcode"
                    fullWidth
                    error={!!errors.postcode}
                    helperText={errors.postcode?.message}
                    inputProps={{
                      "data-testid": "postcode",
                    }}
                    {...register("postcode", {
                      required: "Please enter Postcode.",
                    })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <NativeSelect
                    fullWidth
                    {...register("country")}
                    sx={{
                      "& svg": {
                        color: "black",
                        fontSize: "20px",
                        padding: "0 10px",
                      },
                    }}
                    IconComponent={ArrowDropDownCircleIcon}
                    input={
                      <SelectNative
                        error={!!errors.country}
                        {...register("country")}
                      />
                    }
                  >
                    <option aria-label="None" value="">
                      Select Country
                    </option>
                    <option value={"England"}>England</option>
                    <option value={"Scotland"}>Scotland</option>
                    <option value={"Northern Ireland"}>Northern Ireland</option>
                    <option value={"Wales "}>Wales </option>
                  </NativeSelect>
                  {errors?.country && (
                    <SelectHelperText>
                      {errors.country.message}
                    </SelectHelperText>
                  )}
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
          <Divider />
          <DialogActions sx={{ padding: 2, justifyContent: "space-between" }}>
            <PrimaryButton type="submit" text="Add" />
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

const Field = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: "15px 12px",
    fontFamily: "HCo Gotham SSm, sans-serif",
    color: "#343a40",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "25px",
      border: "1px solid rgb(200, 200, 200) ",
    },
  },
  "& .MuiFormLabel-root": {
    fontFamily: "HCo Gotham SSm, sans-serif",
    color: "#343a40",
  },
});

const SelectNative = styled(InputBase)({
  width: "100%",
  height: "53px",
  padding: "0px 12px",
  fontFamily: "HCo Gotham SSm, sans-serif",
  color: "#343a40",
  borderRadius: "25px",
  border: "1px solid rgb(200, 200, 200) ",
});

const SelectHelperText = styled(Typography)({
  fontSize: "0.75rem",
  fontFamily: "HCo Gotham SSm, sans-serif",
  textAlign: "left",
  marginTop: "3px",
  marginRight: "14px",
  marginBottom: "0",
  marginLeft: "14px",
  color: " #d32f2f",
});
