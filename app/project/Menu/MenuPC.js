
import { scrollView, SizeOfElement } from "@function";
import Link from "next/link";
import React, {
  Fragment,
  useEffect,
  useState,
} from "react";
import { API_URL } from "@function/wsCode";
import Styles from "./style/Menupc.module.css";
import { useRouter } from "next/router";
import IconTop from "./IconMenu/IconTop";
import Header from "./Header/Header";
import stylesCss from "../../../styles/MenuCSS/Menu.module.css";
import IconHome from "project/Icon/IconMenu/IconHome";
import IconDownload from "project/Icon/IconMenu/IconDownload";

const MenuPC = () => {
  const route = useRouter();
  const [menuScroll, setMenuScroll] = useState(false);
  const [menuBottom, setMenuBottom] = useState([]);
  const [width, setWidth] = useState(2700);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let { elementBottom } = SizeOfElement(document.body);
      if (elementBottom > 110) {
        setMenuScroll(true);
      } else {
        setMenuScroll(false);
      }
    });
    setWidth(window.innerWidth);
  }, [typeof window !== "undefined" && window]);

  useEffect(() => {
    fetch(`${API_URL}/api/menu/getAll`)
      .then((res) => res.json())
      .then((data) => {
        const menu = data?.map((item, i) => {
          return {
            element: (route) => {
              return (
                <li className={stylesCss["navbar-item"]}>
                <Link href={`/${item.menuSlug}`} key={item._id}>
                  <a className={stylesCss["headerLink"]}>
                    <div className={stylesCss["menu-item-title"]}>
                      <p className={stylesCss["m-0"]}>{item.menuName}</p>
                      <div className={stylesCss["hover_line"]}></div>
                      {item.children.length > 0 && (
                        <div className={stylesCss["submenu-outerbox"]} style={{width: width+"px"}}>
                            <div className={stylesCss["submenu-container"]}> 
                              <div className={stylesCss["weekly-rebate"]}> 
                                <div className={stylesCss["rebate-text"]}>1.20%</div>
                                <div className={stylesCss["weekly-text"]}>Hoàn trả</div>
                              </div>
                              <div className={stylesCss["provider-submenu"]}>
                                <div className={stylesCss["provider-submenu-container"]}>
                                  <Link href="">
                                      <a className={stylesCss["submenu-icon"]}>
                                        <p className={stylesCss["hot-provider-nav"]}>Hot</p>
                                        <img className={stylesCss["subIcon"]} src="https://www.jun88v1.com/public/html/images/drawer_img/cmd.png" alt=""/>
                                        <div className={stylesCss["submenu-text"]}>Cmd-Thể thao</div>
                                      </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                        </div>
                      )}
                    </div>
                  </a>
                </Link>
                </li>
              );
            },
            event: () => {},
            status: true,
            path: `/${item.menuSlug}`,
          };
        }); 

        const home = [
          {
            element: (route) => {
              return (
                <>
                  <li className={stylesCss["navbar-item"]}>
                    <Link href={"/"}>
                      <a className={stylesCss["headerLink-icon"]}>
                        <div>
                          <IconHome/>
                        </div>
                        <div className={stylesCss["hover_line"]}></div>
                      </a>
                    </Link>
                  </li>
                  <li className={stylesCss["navbar-item"]}>
                    <Link href={"/"}>
                      <a className={stylesCss["headerLink-icon"]}>
                        <div>
                          <IconDownload/>
                        </div>
                        <div className={stylesCss["hover_line"]}></div>
                      </a>
                    </Link>
                  </li>
                </>
              );
            },
            event: () => { },
            status: true,
            path: "/",
          },
        ];

        setMenuBottom(home.concat(menu));
      });
  }, []);

  return (
    <>
     <div>
        <Header/>
        <div className={stylesCss["menu-container"]}>
          <div className={stylesCss["navMenu-container"]}>
            <ul className={stylesCss["menu-warpper"]}>
              {menuBottom?.map((val, key) => {
                return (
                  <Fragment key={key}>
                    {val.element(route.asPath === val.path ? true : false)}
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {menuScroll && (
        <div
          className={Styles.arowTop}
          onClick={() => {
            scrollView.top();
          }}
        >
          <IconTop />
        </div>
      )}
    </>
  );
};

export default MenuPC;
