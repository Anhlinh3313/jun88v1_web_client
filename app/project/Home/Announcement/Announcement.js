import IconAnnouncement from "project/Icon/IconHome/IconAnnouncement";
import stylesCss from "../../../../styles/HomeCSS/Announcement.module.css";

const Announcement = ({}) => {
  return (
    <div className={stylesCss["announcementBarSection"]}>
      <div className={stylesCss["annoucement-bar-component"]}>
        <div className={stylesCss["left-block"]}>
            <IconAnnouncement />
        </div>
      </div>
    </div>
  );
};

export default Announcement;
