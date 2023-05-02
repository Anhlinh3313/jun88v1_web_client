import { useState } from "react";
import styles from "../../../../styles/HeaderCSS/Header.module.css";
import HeaderUnLogin from "./HeaderItem/HeaderUnLogin";
import HeaderLogin from "./HeaderItem/HeaderLogin";

const Header = () => {
    const[isDefault, setDefault] = useState(false);

    const handleChange = (event) =>{
      setDefault(event)
    }

    return (
        <div className={styles["header"]}>
          <div className={styles["header-container"]}>
            <div className={styles["header-container_img"]}>
              <img src="./logo.png"/>
            </div>
            <div className={styles["header-container_container"]}>
              {
                isDefault ? <HeaderUnLogin onChange={handleChange}/> : <HeaderLogin onChange={handleChange}/>
              }
            </div>
          </div>
        </div>
    );
  };
  
  export default Header;
  