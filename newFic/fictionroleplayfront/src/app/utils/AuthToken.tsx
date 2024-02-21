import { redirect } from 'next/navigation';
import { logout } from './functions/logout';
import Cookies from "js-cookie";
import axios from 'axios';

export const AuthToken = async (token: string | null | undefined) => {
  try {

    const userToken = Cookies.get("userToken");

    const token = userToken ? JSON.parse(userToken) : null;

    !token && logout();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/AuthToken`,
      {},
      config
    );

    // console.log(data)
    // if (!isAuthorized?.ok) throw new Error()
  } catch (error) {
    console.error("⚠️ Error en la autenticación del token: ", error);
    logout()
    redirect("/login");
  }
};
