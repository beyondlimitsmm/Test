import { useState } from "react";
import Cookies from "js-cookie";

import { validateForm } from "../libs/functions";
import config from "../config";

export default (initialFormState) => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const token = Cookies.get("csrfToken");

  const onSubmit = async (data = formData) => {
    if (validateForm(data).length > 0) {
      setErrorStatus();
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(config?.BASE_API_URL + "/email/send", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-Csrf-Token": `${token}`,
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      if (response.data) {
        setIsLoading(false);
        setIsSuccess(true);
        setMessage(response.message);
        setFormData(initialFormState);

        setTimeout(() => {
          setIsSuccess(false);
          setMessage("");
        }, 3000);
      } else {
        setIsLoading(false);
        setErrorStatus();
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setErrorStatus("Server error");
    }
  };

  const setErrorStatus = (message = "required all data") => {
    setIsError(true);
    setMessage(message);

    setTimeout(() => {
      setIsError(false);
      setMessage("");
    }, 3000);
  };

  return {
    isSuccess,
    isError,
    isLoading,
    message,
    onSubmit,
    formData,
    setFormData,
  };
};
