export interface DrawerMenuProps {
  username: string;
  isLoggedIn: boolean;
  onPressProfile: () => void;
  onPressLogin: () => void;
  onPressLogout: () => void;
}
