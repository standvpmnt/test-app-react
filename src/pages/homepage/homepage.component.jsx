import React from "react";
// import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  // <div className="homepage">
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
  // </div>
);

export default HomePage;
