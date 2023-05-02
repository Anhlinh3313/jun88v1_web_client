import stylesCss from "../../../../styles/HomeCSS/Container.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Container = ({listSlide}) => {
  return (
    <div className={stylesCss["home-bg-container"]}>
      <div className={stylesCss["home-content-wrapper"]}>
        <div className={stylesCss["row-1-section"]}>
            <div className={stylesCss["sport-banner-container"]}>
                <header className={stylesCss["home-component-title"]}>Cược Ngay</header>
                <div className={stylesCss["home-sport-banner-slider-container"]}>
                    <Swiper 
                    modules={[ Pagination]}
                    className="mySwiper"
                    slidesPerView={"auto"}
                    loop={true}
                    pagination={true}
                    >
                        {
                            listSlide?.map((item, index)=>(
                                <SwiperSlide key={index}>
                                    <img className={stylesCss["img-slide"]} src={item.img} alt={item.img}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
            <div className={stylesCss["upcoming-match-container"]}>
                <header className={stylesCss["home-component-title"]}>Trận Đấu Sắp Tới​</header>
                <div className={stylesCss["hotmatch-container"]}>
                    <div className={stylesCss["bet-container-wrapper"]}>
                        <div className={stylesCss["bet-container"]}>
                            <div className={stylesCss["home-team"]}>
                                <img src="https://www.jun88v1.com/public/images/teams/Netherlands.png" alt="https://www.jun88v1.com/public/images/teams/Netherlands.png"/>
                                <span>Netherlands</span>
                                <div  className={stylesCss["odd"]}>1.82</div>
                            </div>
                            <div className={stylesCss["match-content"]}>
                                <div className={stylesCss["match-title"]}>*UEFA NATIONS LEAGUE (IN NETHERLANDS)</div>
                                <div className={stylesCss["match-date"]}><span className={stylesCss["date-time"]}>15/06/2023 01:44 </span><span className={stylesCss["time-zone"]}>(GMT +7)</span></div>
                                <button className={stylesCss["bet-btn"]}>CƯỢC NGAY</button>
                            </div>
                            <div className={stylesCss["away-team"]}>
                                <img src="https://www.jun88v1.com/public/images/teams/Croatia.png" alt="https://www.jun88v1.com/public/images/teams/Croatia.png"/>
                                <span>Netherlands</span>
                                <div  className={stylesCss["odd"]}>1.82</div>
                            </div>
                        </div>    

                        <div className={stylesCss["bet-container"]}>
                            <div className={stylesCss["home-team"]}>
                                <img src="https://www.jun88v1.com/public/images/teams/Netherlands.png" alt="https://www.jun88v1.com/public/images/teams/Netherlands.png"/>
                                <span>Netherlands</span>
                                <div  className={stylesCss["odd"]}>1.82</div>
                            </div>
                            <div className={stylesCss["match-content"]}>
                                <div className={stylesCss["match-title"]}>*UEFA NATIONS LEAGUE (IN NETHERLANDS)</div>
                                <div className={stylesCss["match-date"]}><span className={stylesCss["date-time"]}>15/06/2023 01:44 </span><span className={stylesCss["time-zone"]}>(GMT +7)</span></div>
                                <button className={stylesCss["bet-btn"]}>CƯỢC NGAY</button>
                            </div>
                            <div className={stylesCss["away-team"]}>
                                <img src="https://www.jun88v1.com/public/images/teams/Croatia.png" alt="https://www.jun88v1.com/public/images/teams/Croatia.png"/>
                                <span>Netherlands</span>
                                <div  className={stylesCss["odd"]}>1.82</div>
                            </div>
                        </div>  

                        <div className={stylesCss["bet-container"]}>
                            <div className={stylesCss["home-team"]}>
                                <img src="https://www.jun88v1.com/public/images/teams/Netherlands.png" alt="https://www.jun88v1.com/public/images/teams/Netherlands.png"/>
                                <span>Netherlands</span>
                                <div  className={stylesCss["odd"]}>1.82</div>
                            </div>
                            <div className={stylesCss["match-content"]}>
                                <div className={stylesCss["match-title"]}>*UEFA NATIONS LEAGUE (IN NETHERLANDS)</div>
                                <div className={stylesCss["match-date"]}><span className={stylesCss["date-time"]}>15/06/2023 01:44 </span><span className={stylesCss["time-zone"]}>(GMT +7)</span></div>
                                <button className={stylesCss["bet-btn"]}>CƯỢC NGAY</button>
                            </div>
                            <div className={stylesCss["away-team"]}>
                                <img src="https://www.jun88v1.com/public/images/teams/Croatia.png" alt="https://www.jun88v1.com/public/images/teams/Croatia.png"/>
                                <span>Netherlands</span>
                                <div  className={stylesCss["odd"]}>1.82</div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
        <div className={stylesCss["row-2-section"]}>
            <header className={stylesCss["home-component-title"]}>Trò Chơi Hấp Dẫn</header>
            <div className={stylesCss["hotgame-container"]}>
                <div className={stylesCss["hot-game"]}>
                    <div className={stylesCss["group"]}>
                        <div className={stylesCss["home-jackpot"]}>
                            <img src="https://www.jun88v1.com/public/html/images/home_img/jackpot-SG.jpg" alt="https://www.jun88v1.com/public/html/images/home_img/jackpot-SG.jpg"/>
                        </div>
                        <div className={stylesCss["games-list"]}>
                            <ul className={stylesCss["nav-tabs"]}>
                                <li className={stylesCss["on"]}><span> TRƠ CHƠI ĐỀ XUẤT </span></li>
                                <li className=""><span> Trò chơi hấp dẫn </span></li>
                                <div className={stylesCss["more-games"]}><span>Thêm trò chơi</span></div>
                            </ul>
                            <div className={stylesCss["game-content-container"]}>
                                <div className={stylesCss["game-content"]}>
                                    <li className={stylesCss["force-hover"]}>
                                        <div className={stylesCss["icon-game-common"]}>
                                            <div className={stylesCss["hover-box"]}>
                                                <span className={stylesCss["hover-box-span-on"]}>chơi ngay</span>
                                                <span className={stylesCss["hover-box-span-off"]}>chơi thử</span>
                                            </div>
                                        </div>
                                        <p>
                                            <span className={stylesCss["game-name"]}>Long Long Long</span>
                                            <div className={stylesCss["hotGameSubContent"]}>
                                                <span>SLOT</span>
                                                <span>-</span>
                                                <span>Nextspin</span>
                                            </div>
                                            <i className={stylesCss["icon-love-off"]}></i>
                                        </p>
                                    </li>

                                    <li className={stylesCss["force-hover"]}>
                                        <div className={stylesCss["icon-game-common"]}>
                                            <div className={stylesCss["hover-box"]}>
                                                <span className={stylesCss["hover-box-span-on"]}>chơi ngay</span>
                                                <span className={stylesCss["hover-box-span-off"]}>chơi thử</span>
                                            </div>
                                        </div>
                                        <p>
                                            <span className={stylesCss["game-name"]}>Long Long Long</span>
                                            <div className={stylesCss["hotGameSubContent"]}>
                                                <span>SLOT</span>
                                                <span>-</span>
                                                <span>Nextspin</span>
                                            </div>
                                            <i className={stylesCss["icon-love-off"]}></i>
                                        </p>
                                    </li>

                                    <li className={stylesCss["force-hover"]}>
                                        <div className={stylesCss["icon-game-common"]}>
                                            <div className={stylesCss["hover-box"]}>
                                                <span className={stylesCss["hover-box-span-on"]}>chơi ngay</span>
                                                <span className={stylesCss["hover-box-span-off"]}>chơi thử</span>
                                            </div>
                                        </div>
                                        <p>
                                            <span className={stylesCss["game-name"]}>Long Long Long</span>
                                            <div className={stylesCss["hotGameSubContent"]}>
                                                <span>SLOT</span>
                                                <span>-</span>
                                                <span>Nextspin</span>
                                            </div>
                                            <i className={stylesCss["icon-love-off"]}></i>
                                        </p>
                                    </li>

                                    <li className={stylesCss["force-hover"]}>
                                        <div className={stylesCss["icon-game-common"]}>
                                            <div className={stylesCss["hover-box"]}>
                                                <span className={stylesCss["hover-box-span-on"]}>chơi ngay</span>
                                                <span className={stylesCss["hover-box-span-off"]}>chơi thử</span>
                                            </div>
                                        </div>
                                        <p>
                                            <span className={stylesCss["game-name"]}>Long Long Long</span>
                                            <div className={stylesCss["hotGameSubContent"]}>
                                                <span>SLOT</span>
                                                <span>-</span>
                                                <span>Nextspin</span>
                                            </div>
                                            <i className={stylesCss["icon-love-off"]}></i>
                                        </p>
                                    </li>
                                    <li className={stylesCss["force-hover"]}>
                                        <div className={stylesCss["icon-game-common"]}>
                                            <div className={stylesCss["hover-box"]}>
                                                <span className={stylesCss["hover-box-span-on"]}>chơi ngay</span>
                                                <span className={stylesCss["hover-box-span-off"]}>chơi thử</span>
                                            </div>
                                        </div>
                                        <p>
                                            <span className={stylesCss["game-name"]}>Long Long Long</span>
                                            <div className={stylesCss["hotGameSubContent"]}>
                                                <span>SLOT</span>
                                                <span>-</span>
                                                <span>Nextspin</span>
                                            </div>
                                            <i className={stylesCss["icon-love-off"]}></i>
                                        </p>
                                    </li>


                                    <li className={stylesCss["force-hover"]}>
                                        <div className={stylesCss["icon-game-common"]}>
                                            <div className={stylesCss["hover-box"]}>
                                                <span className={stylesCss["hover-box-span-on"]}>chơi ngay</span>
                                                <span className={stylesCss["hover-box-span-off"]}>chơi thử</span>
                                            </div>
                                        </div>
                                        <p>
                                            <span className={stylesCss["game-name"]}>Long Long Long</span>
                                            <div className={stylesCss["hotGameSubContent"]}>
                                                <span>SLOT</span>
                                                <span>-</span>
                                                <span>Nextspin</span>
                                            </div>
                                            <i className={stylesCss["icon-love-off"]}></i>
                                        </p>
                                    </li>

                                    <li className={stylesCss["force-hover"]}>
                                        <div className={stylesCss["icon-game-common"]}>
                                            <div className={stylesCss["hover-box"]}>
                                                <span className={stylesCss["hover-box-span-on"]}>chơi ngay</span>
                                                <span className={stylesCss["hover-box-span-off"]}>chơi thử</span>
                                            </div>
                                        </div>
                                        <p>
                                            <span className={stylesCss["game-name"]}>Long Long Long</span>
                                            <div className={stylesCss["hotGameSubContent"]}>
                                                <span>SLOT</span>
                                                <span>-</span>
                                                <span>Nextspin</span>
                                            </div>
                                            <i className={stylesCss["icon-love-off"]}></i>
                                        </p>
                                    </li>

                                    <li className={stylesCss["force-hover"]}>
                                        <div className={stylesCss["icon-game-common"]}>
                                            <div className={stylesCss["hover-box"]}>
                                                <span className={stylesCss["hover-box-span-on"]}>chơi ngay</span>
                                                <span className={stylesCss["hover-box-span-off"]}>chơi thử</span>
                                            </div>
                                        </div>
                                        <p>
                                            <span className={stylesCss["game-name"]}>Long Long Long</span>
                                            <div className={stylesCss["hotGameSubContent"]}>
                                                <span>SLOT</span>
                                                <span>-</span>
                                                <span>Nextspin</span>
                                            </div>
                                            <i className={stylesCss["icon-love-off"]}></i>
                                        </p>
                                    </li>

                                    <li className={stylesCss["force-hover"]}>
                                        <div className={stylesCss["icon-game-common"]}>
                                            <div className={stylesCss["hover-box"]}>
                                                <span className={stylesCss["hover-box-span-on"]}>chơi ngay</span>
                                                <span className={stylesCss["hover-box-span-off"]}>chơi thử</span>
                                            </div>
                                        </div>
                                        <p>
                                            <span className={stylesCss["game-name"]}>Long Long Long</span>
                                            <div className={stylesCss["hotGameSubContent"]}>
                                                <span>SLOT</span>
                                                <span>-</span>
                                                <span>Nextspin</span>
                                            </div>
                                            <i className={stylesCss["icon-love-off"]}></i>
                                        </p>
                                    </li>

                                    <li className={stylesCss["force-hover"]}>
                                        <div className={stylesCss["icon-game-common"]}>
                                            <div className={stylesCss["hover-box"]}>
                                                <span className={stylesCss["hover-box-span-on"]}>chơi ngay</span>
                                                <span className={stylesCss["hover-box-span-off"]}>chơi thử</span>
                                            </div>
                                        </div>
                                        <p>
                                            <span className={stylesCss["game-name"]}>Long Long Long</span>
                                            <div className={stylesCss["hotGameSubContent"]}>
                                                <span>SLOT</span>
                                                <span>-</span>
                                                <span>Nextspin</span>
                                            </div>
                                            <i className={stylesCss["icon-love-off"]}></i>
                                        </p>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
