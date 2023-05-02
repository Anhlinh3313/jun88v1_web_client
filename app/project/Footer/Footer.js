import React from "react";
import Styles from "../../../styles/FooterCSS/Footer.module.css";
import IconRadium from "project/Icon/IconFooter/IconRadiumOne";
import IconRadiumThree from "project/Icon/IconFooter/IconRadiumThree";
import IconRadiumTow from "project/Icon/IconFooter/IconRadiumTow";

const Footer = () => {
  return (
    <div className={Styles["footer"]}>
      <div className={Styles["footer-container"]}>
        <div className={Styles["footer-row-1"]}>
          <div className={Styles["footer-column-container-left"]}>
            <img src="https://www.jun88v1.com/public/html/cms/logo20230412065642822.png"/>
          </div>
          <div className={Styles["footer-column-container-right"]}>
            <div className={Styles["footer-list-container"]}>
              <div className={Styles["list-item-icon"]}>
                <IconRadium/>
              </div>
              <div className={Styles["list-item-icon"]}>
                <div className={Styles["list-item-text-cursor"]}>
                  <span className={Styles[""]}>
                    Về Jun88
                  </span>
                </div>
              </div>
            </div>
            <div className={Styles["footer-list-container"]}>
              <div className={Styles["list-item-icon"]}>
                <IconRadiumTow/>
              </div>
              <div className={Styles["list-item-icon"]}>
                <div className={Styles["list-item-text-cursor"]}>
                  <span className={Styles[""]}>
                  Câu hỏi thường gặp
                  </span>
                </div>
              </div>
            </div>
            <div className={Styles["footer-list-container"]}>
              <div className={Styles["list-item-icon"]}>
                <IconRadiumThree/>
              </div>
              <div className={Styles["list-item-icon"]}>
                <div className={Styles["list-item-text-cursor"]}>
                  <span className={Styles[""]}>
                    Tải xuống
                  </span>
                </div>
              </div>
            </div>
            <div className={Styles["footer-list-container"]}>
              <div className={Styles["list-item-icon"]}>
                <div className={Styles["list-item-text"]}>
                  <span className={Styles[""]}>
                    Điều khoản và điều kiện
                  </span>
                </div>
              </div>
            </div>
            <div className={Styles["footer-list-container"]}>
              <div className={Styles["list-item-icon"]}>
                <div className={Styles["list-item-text"]}>
                  <span className={Styles[""]}>
                    Trò chuyện
                  </span>
                </div>
              </div>
            </div>
            <div className={Styles["footer-list-container"]}>
              <div className={Styles["list-item-icon"]}>
                <div className={Styles["list-item-text"]}>
                  <span className={Styles[""]}>
                    Liên hệ chúng tôi
                  </span>
                </div>
              </div>
            </div>
            <div className={Styles["footer-list-container"]}>
              <div className={Styles["list-item-icon"]}>
                <div className={Styles["list-item-text"]}>
                  <span className={Styles[""]}>
                    đại lý
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles["line"]}>
          <div className={Styles["footer-column-container"]}></div>
        </div>
        <div className={Styles["footer-row-1"]}>
          <div className={Styles["footer-custom"]}>
            <div className={Styles["footer-list-container-item"]}>
              <img className={Styles["custom"]} src="https://www.jun88v1.com/public/html/images/footer/footer-icon-1.png" alt="" />
              <div className={Styles["list-item-title"]}>
                Đại lý
              </div>
              <div className={Styles["list-item-dependenci"]}>
                Tham gia chương trình Cộng tác viên miễn phí và bắt đầu kiếm tiền hoa hồng.
              </div>
              <div className={Styles["list-item-add"]}>
                Thêm thông tin
              </div>
            </div>
            <div className={Styles["footer-list-container-item"]}>
              <img className={Styles["custom"]} src="https://www.jun88v1.com/public/html/images/footer/footer-icon-2.png" alt="" />
              <div className={Styles["list-item-title"]}>
                Giới thiệu bạn bè
              </div>
              <div className={Styles["list-item-dependenci"]}>
              Giới thiệu bạn bè và nhận phần thưởng ngay lập tức.
              </div>
              <div className={Styles["list-item-add"]}>
                Thêm thông tin
              </div>
            </div>
            <div className={Styles["footer-list-container-item"]}>
              <img className={Styles["custom"]} src="https://www.jun88v1.com/public/html/images/footer/footer-icon-3.png" alt="" />
              <div className={Styles["list-item-title"]}>
                VIP
              </div>
              <div className={Styles["list-item-dependenci"]}>
                Nâng cấp VIP để nhận các lợi ích và phần thưởng độc quyền.
              </div>
              <div className={Styles["list-item-add"]}>
                Thêm thông tin
              </div>
            </div>
            <div className={Styles["footer-list-container-item"]}>
              <img className={Styles["custom"]} src="https://www.jun88v1.com/public/html/images/footer/footer-icon-4.png" alt="" />
              <div className={Styles["list-item-title"]}>
                Liên hệ
              </div>
              <div className={Styles["list-item-dependenci"]}>
                Dịch vụ hỗ trợ khách hàng luôn sẵn sàng phục vụ bạn.
              </div>
              <div className={Styles["list-item-add"]}>
                Thêm thông tin
              </div>
            </div>
          </div>
        </div>
        <div className={Styles["line"]}>
          <div className={Styles["footer-column-container"]}></div>
        </div>
        <div className={Styles["footer-row-5"]}>
          <div className={Styles["follow-us-left"]}>
            <p className={Styles["fcol-title"]}>Theo dõi chúng tôi</p>
            <div className={Styles["footer-list-container-logo"]}>
              <div className={Styles["list-item-youtobe"]}>
                <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/follow-us/ftr-social-youtube-on.png"/>
              </div>
              <div className={Styles["list-item-youtobe"]}>
                <img className={Styles["list-item-fb"]} src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/follow-us/ftr-social-fb-on.png"/>
              </div>
            </div>
          </div>
          <div className={Styles["follow-us"]}>
            <p className={Styles["fcol-title"]}>Theo dõi chúng tôi</p>
              <div className={Styles["footer-list-container-logo"]}>
                <div className={Styles["list-item-icon-show"]}>
                  <img  src="https://www.jun88v1.com/public/html/images/footer/ftr-reco-pagcor-on.png"/>
                </div>
                <div className={Styles["list-item-icon-show"]}>
                  <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/license-by/s1/bmm.png"/>
                </div>
                <div className={Styles["list-item-icon-show"]}>
                  <img  src="https://www.jun88v1.com/public/html/images/footer/ftr_reco_veri_ov.png"/>
                </div>
                <div className={Styles["list-item-icon-show"]}>
                  <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/license-by/s1/itech.png"/>
                </div>
                <div className={Styles["list-item-icon-show"]}>
                  <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/license-by/s1/reco_cert.png"/>
                </div>
                <div className={Styles["list-item-icon-show"]}>
                  <img  src="https://www.jun88v1.com/public/html/images/footer/ftr-reco-tt-on.png"/>
                </div>
                <div className={Styles["list-item-icon-show"]}>
                  <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/license-by/s1/curacao.png"/>
                </div>
              </div>
            </div>
        </div>
        <div className={Styles["line"]}>
          <div className={Styles["footer-column-container"]}></div>
        </div>
        <div className={Styles["footer-provide"]}>
          <p className={Styles["fcol-title"]}>Nhà cung cấp</p>
          <div className={Styles["footer-list-icon-show"]}>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/CMD368.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/images/footer/ftr-brand-saba-on.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/M8.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/AsiaGaming2.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/PragmaticPlay.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/MicroGamingPlus.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/PT2.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/SpadeGaming.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/NextSpin.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/IME.png"/>
            </div>
          </div>
          <div className={Styles["footer-list-icon-show"]}>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/QQKeno%20Lottery.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/KingMaker.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/EBET.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/SAGaming.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/GamePlay.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/WMCasino.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/DreamGaming.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/Allbet.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/Evo.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/NETENT.png"/>
            </div>
            <div className={Styles["provider"]}>
              <img  src="https://www.jun88v1.com/public/html/default_whitelabel/template/images/footer-icon/provider/s4/PragmaticPlay.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
