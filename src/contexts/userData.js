import { Children, createContext, useState } from "react";

export const DataUserContext = createContext();

export default function DataUserProvider({ children }) {
  const [dataUser, setDataUser] = useState([
    {
      class: "",
      email: "",
      nickname: "",
      password: "",
      gender: "",
      age: "",
    },
  ]);
  return (
    <DataUserContext.Provider value={[dataUser, setDataUser]}>
      {children}
    </DataUserContext.Provider>
  );
}
