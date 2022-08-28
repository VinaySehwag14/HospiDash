import "./docAppoint.css";
import AppointDash from "../../component/AppointDash/AppointDash";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import AppointSidebar from "../../component/AppointSide/Appoint_sidebar";

const DocAppoint = () => {
  return (
    <div className="docAppoint">
      <div className="docAppoint_header">
        <span className="docAppoint_header_span">
          <h1>Appointments</h1>
          <p>List of booked appointments</p>
        </span>
        <section className="docAppoint_header_button">
          <button className="docAppoint_header_button_icon">
            <span>Add</span>
            <span className="docAppoint_header_button_icon_add">
              <AddCircleIcon />
            </span>
          </button>
        </section>
      </div>
      <div className="docAppoint_searchbar">
        <form className="docAppoint_searchbar_login_form">
          <div className="docAppoint_form_field">
            <input maxLength="25" placeholder="Search by name number" />
            <span>
              <SearchIcon />
            </span>
          </div>

          <div className="docAppoint_earning_hospital docAppoint_form_field doc_appoint_special">
            <select
              className="docAppoint_form_input"
              id="hospital"
              name="units"
            >
              <option value="abc">abc</option>
              <option value="def">def</option>
              <option value="hospital" selected>
                This week
              </option>
            </select>
            <label className="docAppoint_earning_label doc_appoint_special_label">
              Date
            </label>
          </div>
          <div className="docAppoint_earning_hospital docAppoint_form_field doc_appoint_special">
            <select
              className="docAppoint_form_input"
              id="hospital"
              name="units"
            >
              <option value="abc">abc</option>
              <option value="def">def</option>
              <option value="hospital" selected>
                All
              </option>
            </select>
            <label className="docAppoint_earning_label doc_appoint_special_label">
              Consultation Type
            </label>
          </div>
          <div className="docAppoint_earning_hospital docAppoint_form_field doc_appoint_special">
            <select
              className="docAppoint_form_input"
              id="hospital"
              name="units"
            >
              <option value="abc">abc</option>
              <option value="def">def</option>
              <option value="hospital" selected>
                All
              </option>
            </select>
            <label className="docAppoint_earning_label doc_appoint_special_label">
              Status
            </label>
          </div>
          <div className="docAppoint_earning_hospital docAppoint_form_field doc_appoint_special">
            <select
              className="docAppoint_form_input"
              id="hospital"
              name="units"
            >
              <option value="abc">abc</option>
              <option value="def">def</option>
              <option value="hospital" selected>
                All
              </option>
            </select>
            <label className="docAppoint_earning_label doc_appoint_special_label">
              Invoice
            </label>
          </div>
        </form>
      </div>
      <div className="docAppoint_sidebar">
        <AppointSidebar />
      </div>
      <div className="docAppoint_appoint_dash">
        <AppointDash />
      </div>
    </div>
  );
};

export default DocAppoint;
