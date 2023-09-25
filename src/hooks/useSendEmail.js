import { useState } from "react";
import { validateForm } from "../libs/functions";
import config from "../config";

export default (initialFormState) => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data = formData) => {
    if (validateForm(data).length > 0) {
      setErrorStatus();
      return;
    }

    setIsLoading(true);
    const response = await fetch(config?.EMAIL_API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
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
