import { createContext, useContext } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useQuery } from "@tanstack/react-query";
import { csrf } from "../api/home";

const CsrfContext = createContext();

const CsrfProvider = ({ children }) => {
  const { data, error } = useQuery({
    queryKey: ["csrf"],
    queryFn: csrf,
  });

  // useEffect(() => {
  //   getCsrfToken();
  // }, []);

  // const getCsrfToken = async () => {
  //   try {
  //     const respose = await fetch(config.BASE_API_URL + "/csrf");
  //     const data = await respose.json();

  //     // return data.token;
  //     Cookies.set("csrfToken", data.token);
  //     setToken(data.token);
  //   } catch (error) {
  //     setError(true);
  //   }
  // };

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
