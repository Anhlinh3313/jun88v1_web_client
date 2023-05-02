import stylesCss from "../../../../styles/HomeCSS/HighlightVideoSection.module.css";

const HighlightVideoSection = ({}) => {
  return (
    <div className={stylesCss["highlightVideoSection"]}>
        <div className={stylesCss["hg-container"]}>
            <header className={stylesCss["hg-title"]}>Video hướng dẫn sử dụng</header>
            <div className={stylesCss["videoContent"]}>
                <iframe src="https://www.youtube.com/embed/playlist?list=PLpcSOCb2LEHvArgVb6fI0YgWmI_lCIQY9" title="home-video" height="100%" width="100%"  allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
            </div>
        </div>
    </div>
  );
};

export default HighlightVideoSection;
