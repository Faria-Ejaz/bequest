import { PropsWithChildren, useState, createContext } from "react";

import { Address, AddressContextState } from "../components/type";

const contextDefaultValues: AddressContextState = {
  address: [],
  addAddress: () => [],
  showModal: false,
  setShowModal: () => [],
};

export const AddressBookContext =
  createContext<AddressContextState>(contextDefaultValues);

const AddressBookContextProvider = ({ children }: PropsWithChildren) => {
  const [address, setAddress] = useState<Address[]>(
    contextDefaultValues.address
  );

  const addAddress = (newAddress: Address) =>
    setAddress((address) => [...address, newAddress]);

  const [showModal, setToggle] = useState(false);

  const setShowModal = (toggle: boolean) => {
    setToggle(toggle);
  };

  return (
    <AddressBookContext.Provider
      value={{
        address,
        addAddress,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AddressBookContext.Provider>
  );
};

export default AddressBookContextProvider;
