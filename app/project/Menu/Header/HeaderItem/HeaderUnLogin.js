import { useState } from "react";
import styles from "../../../../../styles/HeaderCSS/Header.module.css";

const HeaderUnLogin = ({onChange}) => {
    const [isShowDropdown ,setIsShowDropdown] = useState(false);

    return (
        <div className={styles["header-un-login"]}>
            <div className={styles["forgotPass"]}>
                <div className={styles["forgot-password-btn"]}>Quên mật khẩu?</div>
                <div className={styles["time-cantainer"]}>
                    <span>16/4/2023 1:13:18pm</span>
                </div>
            </div>
            <div className={styles["form-control"]}>
                <div className={styles["standard-form-field"]}>
                    <input type="text" className={styles["stanstandard-input"]} placeholder="Tên đăng nhập" value="jun123456789"/>
                </div>
                <div className={styles["standard-form-field"]}>
                    <input type="text" className={styles["stanstandard-input"]} placeholder="Tên đăng nhập" value="jun123456789"/>
                </div>
                <button onClick={()=>onChange(false)} className={styles["btnLogin"]}>Đăng nhập</button>
                <button className={styles["btnJoin"]}>Đăng ký</button>
                <div className={styles["language-box"]}>
                    <button aria-label="change-language" className={styles["change-language-btn"]}>
                        <img className={styles["language-icon-size"]} src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/international-icon/VN.png" alt="Tiếng Việt.png"/>
                        <img onClick={()=>setIsShowDropdown(!isShowDropdown)} className={styles["language-dropdown-icon"]} src="https://www.jun88v1.com/public/html/default_whitelabel/shared-image/icons/nav-lang-arrow.png" alt="dropdown-arrow"/>
                    </button>

                    {
                        isShowDropdown ? 

                        <div className={styles["language-dropdown-container"]}>
                        <div className={styles["country-name"]}>Vietnam</div>
                        <div className={styles["separator"]}>
                            <div className={styles["separator-icon"]}>
                                <img className={styles["language-icon"]} src="	https://www.jun88v1.com/public/html/default_whitelabel/template/images/international-icon/VN.png" alt="Vietnam.png"/>
                            </div>
                            <div className={styles["language-container"]}>
                                <span className={styles["language-select"]}>Tiếng Việt</span>
                            </div>
                        </div>
                    </div> : <></>
                    }
                </div>
            </div>
        </div>
    );
  };
  
  export default HeaderUnLogin;
  