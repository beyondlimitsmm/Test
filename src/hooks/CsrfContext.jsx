import { createContext, useContext, useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useQuery } from "@tanstack/react-query";
import { csrf } from "../api/home";
import Cookies from "js-cookie";

const CsrfContext = createContext();

const CsrfProvider = ({ children }) => {
  const { data, error } = useQuery({
    queryKey: ["csrf"],
    queryFn: csrf,
  });

  useEffect(() => {
    if (data) {
      Cookies.set("csrfToken", data.token);
    }
  }, [data]);

  if (error) return <Error />;
  if (!data) return <Loading />;
  
  else
    return (
      <CsrfContext.Provider value={{ token: data?.token }}>
        {children}
      </CsrfContext.Provider>
    );
};

const useToken = () => useContext(CsrfContext);

export { CsrfProvider, useToken };
