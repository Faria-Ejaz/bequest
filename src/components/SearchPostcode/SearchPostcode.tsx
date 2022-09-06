import Select from "react-select";
import { v4 as uuid } from "uuid";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { useState, useRef, useContext } from "react";
// Components
import { SecondaryButton } from "../Buttons/Buttons";
import { searchPostcode, getAddressByTerm } from "../../apis/getAddresses";
// Context
import { AddressBookContext } from "../../context/AddressBookContext";
// type
import {Option} from "../type";

function SearchPostcode() {
  const { addAddress } = useContext(AddressBookContext);

  const [inputValue, setInputValue] = useState("");
  const [postcode, setPostcode] = useState<string | null>("");
  const [selectValue, setSelectValue] = useState<Option | null>(null);
  const [options, setOptions] = useState<Option[]>([]);
  const ref = useRef<any>();

  const handleInputValue = (value: string, action: any) => {
    if (action.action === "input-change") {
      setSelectValue(null);
      setOptions([]);
      setInputValue(value);
    }
  };

  const getAddressByPostcode = (postcode: string | null) => {
      inputValue && searchPostcode(postcode)
      .then((data) => {
        setInputValue("");
        setPostcode(postcode);
        setOptions(
          data?.addresses.map((address: any) => {
            return {
              value: address?.line_1,
              label: address?.line_1,
            };
          })
        );
      })
      .catch((err) => {      
        ref.current.blur();
        setInputValue("");
      });
  };

  const addSelectedOption = (option: any) => {
    getAddressByTerm(postcode, option.value)
      .then((data) => {
        const addr = data?.addresses[0];
        addAddress({
          id: uuid(),
          line_1: addr.line_1,
          line_2: addr.line_2,
          line_3: addr.line_3,
          town: addr.town_or_city,
          country: addr.country,
          postcode: data?.postcode,
        });
      })
      .catch((err) => {
        ref.current.blur();
      });
  };

  return (
    <Box display={"flex"} justifyContent={"center"} padding={"20px"}>
      <Box width={"50%"}>
      <SearchBar
        openMenuOnFocus={true}
        classNamePrefix="filter"
        ref={ref}
        isClearable={true}
        placeholder={"Enter postcode"}
        value={selectValue}
        onChange={(option) => {
          setSelectValue(option as Option);
          option as Option;
          addSelectedOption(option as Option);
        }}
        onInputChange={handleInputValue}
        inputValue={inputValue}
        isSearchable={true}
        options={options}
      />      
      </Box>
      <SecondaryButton
        onClick={() => {
          ref.current.focus();
          getAddressByPostcode(inputValue);
        }}
        text="Search Postcode"
      ></SecondaryButton>
    </Box>
  );
}

export default SearchPostcode;

const SearchBar = styled(Select)({
  ".filter__control": {
    height: "42px",
    borderRadius: "21px",
    padding: "0px 12px ",
    border: "1px solid rgb(200, 200, 200) ",
    "& .filter__value-container": {
      fontFamily: "HCo Gotham SSm, sans-serif",
      color: "#343a40",
      fontWeight: 500,
      "& .filter__placeholder": {
        fontFamily: "HCo Gotham SSm, sans-serif",
        color: "#343a40",
        fontWeight: 400,
      },
    },
  },
  ".filter": {
    "&__menu": {
      zIndex: 5,
    },
    "&__option": {
      fontFamily: "HCo Gotham SSm, sans-serif",
      color: "#343a40",
      fontWeight: 400,
    },
  },
});
