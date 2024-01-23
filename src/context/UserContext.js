import React, { useContext, useState } from "react";
import { userObj } from "../components/utility/constants";
const UserDetContext = React.createContext();
const UserDetUpdateContext = React.createContext();

export function useLoginDet() {
  return useContext(UserDetContext);
}
export function useUpdateLoginDet() {
  return useContext(UserDetUpdateContext);
}
export function UserDetailsProvider({ children }) {
  const [userDetails, setUserDetails] = useState(userObj);
  const setUserData = (value) => {
    setUserDetails(value);
  };

  return (
    <UserDetContext.Provider value={userDetails}>
      <UserDetUpdateContext.Provider value={setUserData}>
        {children}
      </UserDetUpdateContext.Provider>
    </UserDetContext.Provider>
  );
}
