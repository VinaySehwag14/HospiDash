import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaidIcon from "@mui/icons-material/Paid";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="upper">
        <DashboardIcon
          className="sidebar_icons_special"
          style={{ color: "#fff", fontSize: 30 }}
        />
        <GroupIcon
          className="sidebar_icons"
          style={{ color: "#5F88D2", fontSize: 30 }}
        />
        <EventAvailableIcon
          className="sidebar_icons"
          style={{ color: "#5F88D2", fontSize: 30 }}
        />
        <PaidIcon
          className="sidebar_icons"
          style={{ color: "#5F88D2", fontSize: 30 }}
        />
        <EventNoteIcon
          className="sidebar_icons"
          style={{ color: "#5F88D2", fontSize: 30 }}
        />
        <SettingsIcon
          className="sidebar_icons"
          style={{ color: "#5F88D2", fontSize: 30 }}
        />
      </div>
      <div className="lower">
        <img
          className="userImage"
          src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="userIMage"
        />
      </div>
    </div>
  );
};

export default Sidebar;
