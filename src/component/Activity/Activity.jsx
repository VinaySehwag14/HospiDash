import "./activity.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";

const Activity = () => {
  return (
    <div className="activity">
      <section>
        <div className="activity_logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="activity_header">
          <span>
            <NotificationsActiveIcon
              className="activity_noti"
              style={{ color: "#5F88D2" }}
            />
          </span>
          <span>ACTIVITY</span>
        </div>
        <div className="activity_lower">
          <section className="activity_lower_section">
            <span>
              <SettingsIcon
                className="activity_icon"
                style={{ color: "#BFD2F3" }}
              />
            </span>
            <div className="activity_lower_head">
              <div className="activity_lower_data">
                <span>User Activity</span> •{" "}
                <span className="activity_span">12:14</span>
                <p>Vivek Kumar accepted the invitation</p>
              </div>
            </div>
          </section>
          <section className="activity_lower_section">
            <span>
              <SettingsIcon
                className="activity_icon"
                style={{ color: "#BFD2F3" }}
              />
            </span>
            <div className="activity_lower_head">
              <div className="activity_lower_data">
                <span>User Activity</span> • <span>8:16</span>
                <p>Ritu M, blocked their calender for 15th</p> <p>September</p>
              </div>
            </div>
          </section>
          <section className="activity_lower_section">
            <span>
              <SettingsIcon
                className="activity_icon"
                style={{ color: "#BFD2F3" }}
              />
            </span>
            <div className="activity_lower_head">
              <div className="activity_lower_data">
                <span>Summary</span> • <span>8:00</span>
                <p>Lorem Ipsum dolor sit amet ,consectoreu</p>
                <p>adsfads fadsfdf asdf sdfsasfsda</p>
              </div>
            </div>
          </section>
          <section className="activity_lower_section">
            <span>
              <SettingsIcon
                className="activity_icon"
                style={{ color: "#BFD2F3" }}
              />
            </span>
            <div className="activity_lower_head">
              <div className="activity_lower_data">
                <span>Application Update</span> • <span>yesterday</span>
                <p>Lorem Ipsum dolor sit amet ,consectoreu</p>
                <p>adsfads fadsfdf asdf sdfsasfsda</p>
              </div>
            </div>
          </section>
          <section className="activity_lower_section">
            <span>
              <SettingsIcon
                className="activity_icon"
                style={{ color: "#BFD2F3" }}
              />
            </span>
            <div className="activity_lower_head">
              <div className="activity_lower_data">
                <span>User Activity</span> • <span>2 days ago</span>
                <p>Vivek Kumar accepted the invitation</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Activity;
