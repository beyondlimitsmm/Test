import config from "../config";

export default async (uri) => {
  try {
    const res = await fetch(config.BASE_API_URL + uri, {
      headers: {
        authorization: `Bearer ${config.BEARER_TOKEN}`,
      },
    });

    if (res.ok) return await res.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
