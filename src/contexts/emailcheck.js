import { createContext, useState } from "react";

export const EmailCheckContext = createContext();

export default function EmailCheckProvider({ children }) {
  const [codeConfig, setCodeConfig] = useState();
  return (
    <EmailCheckContext.Provider value={[codeConfig, setCodeConfig]}>
      {children}
    </EmailCheckContext.Provider>
  );
}
