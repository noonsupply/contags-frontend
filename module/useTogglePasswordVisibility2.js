import { useState } from "react";

export const useTogglePasswordVisibility2 = () => {
  const [passwordVisibility2, setPasswordVisibility2] = useState(true);
  const [rightIcon2, setRightIcon2] = useState("eye");

  const handlePasswordVisibility2 = () => {
    if (rightIcon2 === "eye") {
      setRightIcon2("eye-slash");
      setPasswordVisibility2(!passwordVisibility2);
    } else if (rightIcon2 === "eye-slash") {
      setRightIcon2("eye");
      setPasswordVisibility2(!passwordVisibility2);
    }
  };

  return {
    passwordVisibility2,
    rightIcon2,
    handlePasswordVisibility2,
  };
};
