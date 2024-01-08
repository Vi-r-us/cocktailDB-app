import { imageClassNames } from "./data";

export const getRandomImageStyleType = () => {
  return imageClassNames[Math.floor(Math.random() * imageClassNames.length)];
};
