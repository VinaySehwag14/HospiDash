import "./Schedule.css";
import HelpIcon from "@mui/icons-material/Help";
import BoltIcon from "@mui/icons-material/Bolt";
import InfoIcon from "@mui/icons-material/Info";
import BlockIcon from "@mui/icons-material/Block";

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="scheduleUpper">
        <h3>Schedule</h3>
        <HelpIcon />
      </div>
      <div className="scheduleMid">
        <div className="scheduleMid_Upper_container">
          <section className="scheduleMid_section">
            <p>Recieve</p>
            <BoltIcon style={{ fontSize: 20 }} />
            <p className="scheduleMid_section_para"> Anytime Consult</p>
            <InfoIcon
              style={{ fontSize: 20, color: "grey", marginLeft: "5" }}
            />
            <span className="schedule_toggle">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </span>
          </section>
        </div>
        <div className="scheduleMid_Rest_container">
          <p>TODAY • MONDAY</p>
          <section className="scheduleTime">
            <p>9:00 AM- 9:40 AM • 40 minutes</p>
            <span className="schduleTime_span">
              <BoltIcon />
              Anytime
            </span>
          </section>
          <section className="scheduleTime">
            <p>4:00 AM- 9:40 AM • 4 hours</p>
            <span className="schduleTime_span">
              <BoltIcon />
              Anytime
            </span>
          </section>
        </div>
        <div className="scheduleMid_Rest_container">
          <p>TOMORROW • TUESDAY</p>
          <section className="scheduleTime">
            <p>9:00 AM- 9:40 AM • 40 minutes</p>
            <span className="schduleTime_span">
              <BoltIcon />
              Anytime
            </span>
          </section>
          <section className="scheduleTime">
            <p>4:00 AM- 9:40 AM • 4 hours</p>
            <span className="schduleTime_span">
              <BoltIcon />
              Anytime
            </span>
          </section>
          <section className="scheduleTime_last">
            <p>4:00 AM- 9:40 AM • 4 hours</p>
            <span className="schduleTime_span">
              <BlockIcon />
              Block
            </span>
          </section>
        </div>
        <p className="lastCall">WEDNESDAY</p>
      </div>
      <div className="scheduleLast">
        <p>View all schedule →</p>
      </div>
    </div>
  );
};

export default Schedule;
