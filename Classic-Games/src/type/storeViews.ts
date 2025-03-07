import PlayStationLogo from "@/assets/navLogo/Playstation_logo.png";
import XboxLogo from "@/assets/navLogo/Xbox_logo.png";
import navMenu from "../data/navMenu.json";

const PLAYSTATION = "Playstation";
const XBOX = "Xbox";

export interface MenuRef {
  title: string;
  to?: string;
}

export interface NavMenu {
  navBarMenu: MenuRef[];
}

export const createView = (
  name: string,
  logo: string,
  borderColor: string,
  switchMenu: string,
  navMenu: NavMenu,
) => ({
  name,
  logo,
  borderColor,
  switchMenu,
  navMenu,
  isPlayStation() {
    return name === PLAYSTATION;
  },
  isXbox() {
    return name === XBOX;
  },
});

export const playstation = createView(
  PLAYSTATION,
  PlayStationLogo,
  "var(--blue)",
  "Switch to Xbox",
  navMenu[PLAYSTATION] as NavMenu,
);

export const xbox = createView(
  XBOX,
  XboxLogo,
  "var(--green)",
  "Switch to Playstation",
  navMenu[XBOX] as NavMenu,
);
