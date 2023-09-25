import config from "../config";
import Cookies from "js-cookie";

export const getArticles = async () => {
  const token = Cookies.get("csrfToken");

  try {
    const response = await fetch(`${config.BASE_API_URL}/articles?populate=*`, {
      headers: {
        Authorization: `Bearer ${config.BEARER_TOKEN}`,
        "X-CSRF-TOKEN": `${token}`,
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
