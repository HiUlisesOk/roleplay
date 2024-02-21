import { logout } from "../functions/logout";
import {
  HomeIcon,
  InboxIcon,
  LogoutIcon,
  MarketIcon,
  SavedTopicsIcon,
  StatsIcon,
} from "../Icons";

export const navLinksOnHomePage = [
  { name: "Home", icon: HomeIcon, href: "/home", action: null },
  {
    name: "Private Messages",
    icon: InboxIcon,
    href: "/messages",
    action: null,
  },
  {
    name: "The Great Market",
    icon: MarketIcon,
    href: "/marketplace",
    action: null,
  },
  { name: "Statistics", icon: StatsIcon, href: "/statistics", action: null },
  {
    name: "Saved Topics",
    icon: SavedTopicsIcon,
    href: "/saved-topics",
    action: null,
  },
  { name: "Logout", icon: LogoutIcon, href: "/", action: logout },
];
