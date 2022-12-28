import { TSelectedText } from "./hooks";

const authKey = "b08e5514-4108-5606-042b-a9b26cce7a4c:fx";

export const translate = async (text: TSelectedText) => {
  if (!text) return "";

  const params = new URLSearchParams({
    auth_key: authKey,
    target_lang: "en-GB",
    text: text,
  });

  try {
    const response = await fetch("https://api-free.deepl.com/v2/translate", {
      method: "POST",
      body: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const json: {
      translations: { detected_source_language: string; text: string }[];
    } = await response.json();

    return json.translations.map((translation) => translation.text).join(" ");
  } catch (error) {
    console.error(error);
  }
};
