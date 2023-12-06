import config from "../config";

export const createAssetsUrl = (url, format) => {
  if (format) {
    return (
      config.BASE_IMAGE_URL + url?.data?.attributes?.formats?.[format]?.url
    );
  } else {
    return config.BASE_IMAGE_URL + url?.data?.attributes?.url;
  }
};

export const parseCmsData = (data) => {
  if (!data) return "";

  return data.data.attributes;
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

export const validateForm = (formData) => {
  const keys = Object.keys(formData);
  const isRequiredAllData = keys.filter(
    (key) => formData[key] === undefined || formData[key].trim() === ""
  );

  if (isRequiredAllData.length > 0) return "required all data";

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = formData[key].trim();

    if (key == "name" && value.length < 5)
      return "Name must contain at least 5 characters";

    if (key == "phone" && value != "-") {
      if (value.length <= 7 || isNaN(value))
        return "Phone number must be number and contain at least 7 characters";
    }

    if (key == "email" && value != "-" && !isValidEmail(value))
      return "Invalid email";

    if (key == "email" && value.trim() == "") return "Subject is required";
  }
};
