import "./docAppoint.css";
import AppointDash from "../../component/AppointDash/AppointDash";
import Sidebar from "../../component/Sidebar/Sidebar";

const DocAppoint = () => {
  return (
    <div className="docAppoint">
      <div className="docAppoint_sidebar">
        <Sidebar />
      </div>
      <AppointDash />
    </div>
  );
};

export default DocAppoint;
