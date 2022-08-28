import "./Appoint_sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaidIcon from "@mui/icons-material/Paid";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const AppointSidebar = () => {
  return (
    <div className="appoint_sidebar">
      <div className="appoint_sidebar_upper">
        <Link to="/dashboard">
          <DashboardIcon
            className="appoint_sidebar_sidebar_icons"
            style={{ color: "#fff", fontSize: 30 }}
          />
        </Link>
        <GroupIcon
          className="appoint_sidebar_sidebar_icons"
          style={{ color: "#5F88D2", fontSize: 30 }}
        />
        <Link to="/appointments">
          <EventAvailableIcon
            className="appoint_sidebar_icons_special"
            style={{ color: "#5F88D2", fontSize: 30 }}
          />
        </Link>
        <PaidIcon
          className="appoint_sidebar_sidebar_icons"
          style={{ color: "#5F88D2", fontSize: 30 }}
        />
        <EventNoteIcon
          className="appoint_sidebar_sidebar_icons"
          style={{ color: "#5F88D2", fontSize: 30 }}
        />
        <SettingsIcon
          className="appoint_sidebar_sidebar_icons"
          style={{ color: "#5F88D2", fontSize: 30 }}
        />
      </div>
      <div className="appoint_sidebar_lower">
        <img
          className="userImage"
          src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="userIMage"
        />
      </div>
    </div>
  );
};

export default AppointSidebar;
