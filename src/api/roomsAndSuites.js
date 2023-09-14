import config from "../config";

export const getRooms = async () => {
  try {
    const response = await fetch(
      `${config.BASE_API_URL}/rooms/?populate[featuredImage][populate]&populate[backgroundImage][populate]=*&populate[galleryImages][populate]=*&populate[roomFeatures][populate]=*&populate[roomDetails][populate]`,
      {
        headers: {
          Authorization: `Bearer ${config.BEARER_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    throw new Error(`API Error occurred: ${error.message}`);
  }
};

export const getSuites = async () => {
  try {
    const response = await fetch(
      `${config.BASE_API_URL}/suites/?populate[featuredImage][populate]&populate[backgroundImage][populate]=*&populate[galleryImages][populate]=*&populate[suiteFeatures][populate]=*&populate[suiteDetails][populate]`,
      {
        headers: {
          Authorization: `Bearer ${config.BEARER_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    throw new Error(`API Error occurred: ${error.message}`);
  }
};

export const getRoomTypes = async () => {
  try {
    const response = await fetch(
      `${config.BASE_API_URL}/room-type?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${config.BEARER_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    throw new Error(`API Error occurred: ${error.message}`);
  }
};
