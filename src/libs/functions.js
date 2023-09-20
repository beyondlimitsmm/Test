import config from "../config";

export const createAssetsUrl = (url) => {
  return config.BASE_IMAGE_URL + url?.data?.attributes?.url;
};

export const parseCmsData = (data) => {
  if (!data) return "";

  return data.data.attributes;
};

export const validateForm = (formData) => {
  return Object.keys(formData).filter((key) => formData[key] == "");
};
