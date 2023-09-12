import config from "../config";

export default async (uri) => {
  try {
    const res = await fetch(config.BASE_API_URL + uri, {
      headers: {
        authorization: `Bearer ${config.TOKEN}`,
      },
    });

    if (res.ok) return await res.json();
  } catch (error) {
    return new Error(error.message);
  }
};
