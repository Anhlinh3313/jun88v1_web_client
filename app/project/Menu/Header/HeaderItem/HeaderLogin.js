import IconVerify from "project/Icon/IconHeader/IconVerify";
import styles from "../../../../../styles/HeaderCSS/Header.module.css";
import { useState } from "react";
import IconRefresh from "project/Icon/IconHeader/IconRefresh";
import IconMoney from "project/Icon/IconHeader/IconMoney";
import IconMessage from "project/Icon/IconHeader/IconMessage";

const HeaderLogin = ({onChange}) => {
    const [isShowDropdownMoney ,setIsShowDropdownMoney] = useState(false);
    const [isShowLanguage ,setIsShowLanguage] = useState(false);

    return (
        <div className={styles["header-login"]}>
            <div className={styles["afterLoginBar"]}>
                <div className={styles["account-profile-container"]}>
                    <div className={styles["account-containerr"]}>
                        <img className={styles["member-profile-img"]} src="https://www.jun88v1.com/public/html/cms/mg20230219091651987.png" alt="profile img"/>
                        <div className={styles["verify-icon"]}>
                            <IconVerify/>
                        </div>
                    </div>
                    <div className={styles["profile-container"]}>
                        <a href="">
                            <p className={styles["profile-name"]}>jun123456789</p>
                        </a>
                    </div>
                </div>
                <div className={styles["account-wallet"]}>
                    <div className={styles["account-currency"]}>
                        <a href=""><p className={styles["wallet-currency"]}>(VND)</p></a>
                        <div className={styles["wallet-fund-container"]}>
                            <a href="" className={styles["wallet-fund-container-refresh"]}>
                                <span>0</span>
                                <IconRefresh/>
                            </a>
                            <div className={styles["fund-btn-container"]}>
                                <button className={styles["fund-btn"]}>
                                    <IconMoney/>
                                    <img onClick={()=>setIsShowDropdownMoney(!isShowDropdownMoney)} className={styles["fund-dropdown-btn"]} src="https://www.jun88v1.com/public/html/default_whitelabel/shared-image/icons/nav-lang-arrow.png" alt="dropdown-arrow"></img>
                                </button>
                                {isShowDropdownMoney?
                                    <div className={styles["fund-dropdown-menu"]}>
                                        <div className={styles["options-wrapper"]}>
                                            <label>Quỹ</label>
                                            <a className={styles["dropdown-item-is-active"]} href="">Gửi tiền</a>
                                            <a className={styles["dropdown-item"]} href="">Chuyển ví</a>
                                            <a className={styles["dropdown-item"]} href="">Rút tiền</a>
                                            <a className={styles["dropdown-item"]} href="">Lịch sử giao dịch</a>
                                        </div>
                                        <div className={styles["break-line"]}></div>
                                        <div className={styles["options-wrapper"]}>
                                            <label>Tài Khoản</label>
                                            <a className={styles["dropdown-item"]} href="">Hồ sơ thành viên</a>
                                            <a className={styles["dropdown-item"]} href="">Đổi mật khẩu</a>
                                            <a className={styles["dropdown-item"]} href="">Chi tiết ngân hàng</a>
                                            <a className={styles["dropdown-item"]} href="">Mã giới thiệu</a>
                                        </div>
                                    </div>
                                    :
                                    <></>
                                }
                           
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["navbar-control"]}>
                    <div className={styles["top-container"]}>
                        <div className={styles["time-container"]}>
                            <span>16/4/2023 1:13:18pm</span>
                        </div>
                    </div>
                    <div className={styles["bottom-container"]}>
                        <a className={styles["message-container"]}>
                            <span className={styles["unread-message"]}>4</span>
                            <IconMessage/>
                        </a>
                        <a className={styles["deposit-btn"]} href="">Nạp tiền</a>
                        <button onClick={()=>onChange(true)} className={styles["after-logout-btn"]}>Đăng xuất</button>
                        <div className={styles["language-box"]}>
                            <button aria-label="change-language" className={styles["change-language-btn"]}>
                                <img className={styles["language-icon-size"]} src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/international-icon/VN.png" alt="Tiếng Việt.png"/>
                                <img onClick={()=>setIsShowLanguage(!isShowLanguage)} className={styles["language-dropdown-icon"]} src="https://www.jun88v1.com/public/html/default_whitelabel/shared-image/icons/nav-lang-arrow.png" alt="dropdown-arrow"/>
                            </button>
                            {
                                isShowLanguage ? 
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
            </div>
        </div>
    );
  };
  
  export default HeaderLogin;
  