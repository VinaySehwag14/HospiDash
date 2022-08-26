import "./chart.css";
import HelpIcon from "@mui/icons-material/Help";
import Graph from "../Graph/Graph";

const Chart = () => {
  return (
    <div className="chart">
      <div className="chartUpper">
        <section className="chartUpper_left_sec">
          <h3>CONSULTATION HISTORY</h3>
        </section>
        <section className="chartUpper_section">
          <div className="chartUpper_toggle_section">
            <p>KR4ALL Visits</p>
            <span className="schedule_toggle_chart">
              <label className="switch_chart">
                <input type="checkbox" />
                <span className="slider_chart round_chart"></span>
              </label>
            </span>
            <p>All</p>
            <span className="chartUpper_Icon">
              <HelpIcon />
            </span>
          </div>
        </section>
      </div>
      <div className="chart_graph">
        <Graph />
      </div>
    </div>
  );
};

export default Chart;
