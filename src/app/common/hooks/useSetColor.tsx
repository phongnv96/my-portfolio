import { ThemeColorSelected } from "../constants";

const useSetColor = () => {
  const setColor = (
    color: string,
    type: ThemeColorSelected
  ) => {
    document.documentElement.style.setProperty(`--${type}-color`, color);
  };
  return {setColor}
};

export default useSetColor;