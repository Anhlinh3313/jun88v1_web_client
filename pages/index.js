import { Row, Col } from "antd";
import { useState, useEffect } from "react";
import SlideHome from "../app/project/Home/SlideHome/SlideHome";
import Announcement from "../app/project/Home/Announcement/Announcement";
import Container from "../app/project/Home/Container/Container";
import HighlightVideoSection from "../app/project/Home/HighlightVideoSection/HighlightVideoSection";
import AppLanding from "../app/project/Home/AppLanding/AppLanding";

function Home({}) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  const listSlide1 = [
    {
      img:"https://www.jun88v1.com/public/html/cms/banner20230407100414543.jpg"
    },
    {
      img:"https://www.jun88v1.com/public/html/cms/banner20230414055443492.jpg"
    },
    {
      img:"https://www.jun88v1.com/public/html/cms/banner20230412044842483.jpg"
    },
    {
      img:"https://www.jun88v1.com/public/html/cms/banner20230407095244951.jpg"
    },

    {
      img:"https://www.jun88v1.com/public/html/cms/banner20230407095033636.jpg"
    },
  ]

  const listSlide2 = [
    {
      img:"https://www.jun88v1.com/public/html/images/home_img/hm-sports-banner-sbo.jpg"
    },
    {
      img:"https://www.jun88v1.com/public/html/images/home_img/hm-sports-banner-m8.jpg"
    },
    {
      img:"https://www.jun88v1.com/public/html/images/home_img/hm-sports-banner-cmd.jpg"
    },
  ]

  return (
    <>
      <div className="body">
        <div className="body-content-container">
          <div className="home-container">
            <SlideHome listSlide={listSlide1}/>
            <Announcement/>
            <Container listSlide={listSlide2}/>
            <HighlightVideoSection/>
            <AppLanding/>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
