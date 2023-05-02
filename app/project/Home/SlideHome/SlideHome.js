import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const SlideHome = ({listSlide}) => {

    return (
        <div className="carouselSliderSection">
            <Swiper 
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                slidesPerView={"auto"}
                loop={true}
                pagination={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {
                    listSlide?.map((item, index)=>(
                        <SwiperSlide key={index}>
                            <img src={item.img} alt={item.img}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
  };
  
  export default SlideHome;
  