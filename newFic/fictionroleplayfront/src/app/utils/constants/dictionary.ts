import { log } from "console";

interface Dictionary<T> {
  [key: string]: T;
}

const dictionary: Dictionary<string> = {
  pageName: "Fiction Roleplay",
  pageNameShort: "FRP",
  pageNameFirstWord: "Fiction",
  pageNameSecondWord: "Roleplay",
  PageSubtitle: "A place to write your own story",
  PageDescription:
    "Prepare to embark on a journey of a lifetime, where you can create your own story and share it with the world.",
  registerButtonText: "Register",
  loginButtonText: "Login",
};

export default dictionary;
