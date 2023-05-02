import { reState } from "@useState/index";
import React, { useEffect, useState } from "react";
import MenuMobile from "./MenuMobile";
import MenuPC from "./MenuPC";

const Menu = () => {
  const { chromeWidth } = React.useContext(reState);
  const [widthWindow, setWidthWindow] = useState();
  useEffect(() => {
    setWidthWindow(chromeWidth);
  }, [chromeWidth]);
  // return <>{widthWindow > 1050 ? <MenuPC /> : <MenuMobile />} </>;
  return<><MenuPC /></>
};

export default Menu;
