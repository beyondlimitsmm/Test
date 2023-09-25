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

    if (res.ok) return await res.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
