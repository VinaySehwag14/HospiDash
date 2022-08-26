import "./dashboard.css";
import Earnings from "../../component/Earnings/Earnings";
import Header from "../../component/Header/Header";
import Sidebar from "../../component/Sidebar/Sidebar";
import AppointmentDetails from "../../component/AppointmentDetails/AppointmentDetails";
import Activity from "../../component/Activity/Activity";
import AppointmentsQue from "../../component/AppointmentsQue/AppointmentsQue";
import Schedule from "../../component/Schedule/Schedule";
import Chart from "../../component/Chart/Chart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_header">
        <Header />
      </div>
      <div className="dashboard_sidebar">
        <Sidebar />
      </div>
      <div className="dashboard_earnings">
        <Earnings className="dashboard_earnings_Earnings" />
        <AppointmentDetails className="dashboard_earnings_appoint" />
      </div>
      <div className="dashboard_activity">
        <Activity />
      </div>
      <div className="dashboard_appointments">
        <AppointmentsQue />
        <Schedule />
      </div>
      <div className="dashboard_chart">
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
