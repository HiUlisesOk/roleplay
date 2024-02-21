'use client'

import React from "react";
import dictionary from "./utils/constants/dictionary";
import PageInfo from "./components/LandingPage/PageInfo";
import PageActions from "./components/LandingPage/PageActions";
import { allUsers, hidenForUserLogged } from "./utils/constants/roles";
import WithAuth from "./utils/WithAuth";
const { pageNameFirstWord, pageNameSecondWord, PageSubtitle, PageDescription, registerButtonText, loginButtonText } = dictionary

function Home() {
  return (
    <main
      className="flex h-screen w-screen flex-col items-center justify-between"
      style={{ backgroundImage: "url('/landingPage/landingPageBackground.jpg')", backgroundSize: "cover" }}>

      <div className="shadow-lg bg-neutrals-background bg-opacity-70 h-screen w-screen p-24">

        <PageInfo
          pageNameFirstWord={pageNameFirstWord}
          pageNameSecondWord={pageNameSecondWord}
          PageSubtitle={PageSubtitle}
          PageDescription={PageDescription}
        />

        {<PageActions
          registerButtonText={registerButtonText}
          loginButtonText={loginButtonText}
        />}
      </div>

    </main >
  );
}

export default WithAuth(Home, [allUsers, hidenForUserLogged]);
