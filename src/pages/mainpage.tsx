import React from "react";
import TitleScreen from "../components/Titlescreen";
import Introduction from "../components/Introduction";
import texture from "../images/mdftexture.jpg";
import WhatIsWebDialog from "../components/WhatIsWebDialog";
import PreviousDialog from "../components/PreviousDialog";

const Mainpage = () => {
  return (
    <div style={{ backgroundImage: `url(${texture})` }}>
      <TitleScreen />
      <Introduction />
      <WhatIsWebDialog />
      <PreviousDialog />
    </div>
  );
};

//Styles--------------------------------------------------------------------------

export default Mainpage;
