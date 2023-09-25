import Cookies from "js-cookie";
import config from "../config";

export default async (uri) => {
  const token = Cookies.get("csrfToken");

  try {
    const res = await fetch(config.BASE_API_URL + uri, {
      headers: {
        authorization: `Bearer ${config.BEARER_TOKEN}`,
        "X-CSRF-TOKEN": `${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  } catch (error) {
    throw new Error(`API Error occurred: ${error.message}`);
  }
};
