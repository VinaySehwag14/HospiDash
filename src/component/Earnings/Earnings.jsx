import "./earnings.css";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

const Earnings = () => {
  return (
    <div className="earnings">
      <div className="earnings_left">
        <span>
          <TextSnippetIcon />
          <h1>₹4000</h1>
        </span>
      </div>
      <div className="earning_right">
        <div className="earning_hospital">
          <select className="right_form_input" id="hospital" name="units">
            <option value="abc">abc</option>
            <option value="def">def</option>
            <option value="hospital" selected>
              PRK Hospital
            </option>
          </select>
          <label className="earning_label">Unit</label>
        </div>
        <div className="earning_hospital">
          <select className="right_form_input" id="hospital" name="units">
            <option value="abc">abc</option>
            <option value="def">def</option>
            <option value="hospital" selected>
              Last 7 days
            </option>
          </select>
          <label className="earning_label">Time Duration</label>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
