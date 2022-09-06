export interface Address {
  id: string;
  line_1: string;
  line_2?: string;
  line_3?: string;
  postcode: string;
  town: string;
  country: string;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export type Option = { value: string; label: string };

export type AddressContextState = {
  address: Array<Address>;
  addAddress: (address: Address) => void;
  showModal: boolean;
  setShowModal: (toggle: boolean) => void;
};
