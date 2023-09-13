import config from "../config";

export const getArticles = async () => {
  try {
    const response = await fetch(`${config.BASE_API_URL}/articles?populate=*`, {
      headers: {
        Authorization: `Bearer ${config.BEARER_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    throw new Error(`API Error occurred: ${error.message}`);
  }
};
