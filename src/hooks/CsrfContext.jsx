import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import config from "../config";

const CsrfContext = createContext();

const CsrfProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    getCsrfToken();
  }, []);

  const getCsrfToken = async () => {
    const respose = await fetch(config.BASE_API_URL + "/csrf");
    const data = await respose.json();

    // return data.token;
    Cookies.set("csrfToken", data.token);
    setToken(data.token);
  };

  if (!token) return <h1>Loading...</h1>;
  else
    return (
      <CsrfContext.Provider value={{ token }}>{children}</CsrfContext.Provider>
    );
};

const useToken = () => useContext(CsrfContext);

export { CsrfProvider, useToken };
