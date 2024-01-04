import { useState } from "react";

export const useOnBoardingScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  return { states: { firstName, setFirstName, email, setEmail } };
};
