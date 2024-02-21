export const LimitCharacters = (string: string, limit: number) => {
  try {
    if (!string) return "";
    if (limit <= 0) return "";
    return string.length > limit ? string.substring(0, limit) + "..." : string;
  } catch (error) {
    console.error("LimitCharacters error: ", error);
  }
};
