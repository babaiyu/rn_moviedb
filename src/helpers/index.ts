export const maxParagraph = (text: string, max = 80) => {
  let result = text.length > max ? `${text.substring(0, max)} ....` : text;
  return result;
};
