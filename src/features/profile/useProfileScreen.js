import { useAppStore } from "../../states";

export const useProfileScreen = () => {
  const { onLoggedOut } = useAppStore();

  const handleLogout = () => {
    onLoggedOut();
  };

  return { funcs: { handleLogout } };
};
