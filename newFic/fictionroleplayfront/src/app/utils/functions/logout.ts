import { redirect } from "next/navigation";
import Cookies from "js-cookie";

export const logout = () => {
  localStorage.removeItem("TOKEN");
  localStorage.removeItem("user");
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("id");
  localStorage.removeItem("role");
  localStorage.removeItem("avatar");
  Cookies.remove("userToken");
  Cookies.remove("userRoles");
  Cookies.remove("userInfo");
  Cookies.remove("Login");
  Cookies.remove("token");
  redirect("/login");
};
