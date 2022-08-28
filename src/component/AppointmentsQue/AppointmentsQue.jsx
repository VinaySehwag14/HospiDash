import "./appointmentsQue.css";
import HelpIcon from "@mui/icons-material/Help";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ManIcon from "@mui/icons-material/Man";
const AppointmentsQue = () => {
  return (
    <div className="appointmentsQue">
      <div className="appointUpper">
        <h3>APPOINTMENTS</h3>
        <HelpIcon />
      </div>
      <div className="appointMid">
        <section className="appointMid_head">
          <span>Waiting Queue (6)</span>
          <span>View Queue</span>
        </section>
        <div className="appointMid_users_Container">
          <section className="appointMid_users_Left">
            <span>
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="users"
                className="userImage"
              />
            </span>
            <span className="appointMid_users_data">
              <span>Prajeesh</span>
              <span>
                <span>
                  <ManIcon />
                </span>
                In person • 2:20pm
              </span>
            </span>
          </section>
          <span className="appointMid_users_Right">
            <span className="appointMid_users_Right_accessTime">
              <AccessTimeFilledIcon style={{ fontSize: 10 }} />
              <span>To be finalized</span>
            </span>
          </span>
        </div>
      </div>
      <div className="appointMid">
        <div className="appointMid_users_Container">
          <section className="appointMid_users_Left">
            <span>
              <img
                src="https://images.pexels.com/photos/4511649/pexels-photo-4511649.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="users"
                className="userImage"
              />
            </span>
            <span className="appointMid_users_data">
              <span>Risha Mahin</span>
              <span>
                <span>
                  <ManIcon />
                </span>
                Anytime Consultant • 2:30pm
              </span>
            </span>
          </section>
          <span className="appointMid_users_Right">
            <span className="appointMid_users_Right_accessTime_wait">
              <AccessTimeFilledIcon style={{ fontSize: 10 }} />
              <span>Waiting • 40 min</span>
            </span>
          </span>
        </div>
      </div>
      <div className="appointMid">
        <div className="appointMid_users_Container">
          <section className="appointMid_users_Left">
            <span>
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="users"
                className="userImage"
              />
            </span>
            <span className="appointMid_users_data">
              <span>Riju K</span>
              <span>
                <span>
                  <ManIcon />
                </span>
                Video Consultation • 2:20pm
              </span>
            </span>
          </section>
          <span className="appointMid_users_Right">
            <span className="appointMid_users_Right_accessTime_wait">
              <AccessTimeFilledIcon style={{ fontSize: 10 }} />
              <span>Waiting • 40 min</span>
            </span>
          </span>
        </div>
      </div>
      <div className="appointMid">
        <div className="appointMid_users_Container">
          <section className="appointMid_users_Left">
            <span>
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="users"
                className="userImage"
              />
            </span>
            <span className="appointMid_users_data">
              <span>Kanhaiya</span>
              <span>
                <span>
                  <ManIcon />
                </span>
                Video Consultation • 2:20pm
              </span>
            </span>
          </section>
          <span className="appointMid_users_Right">
            <span className="appointMid_users_Right_accessTime_wait">
              <AccessTimeFilledIcon style={{ fontSize: 10 }} />
              <span>Waiting • 40 min</span>
            </span>
          </span>
        </div>
      </div>

      <div className="appointLast">
        <p>View all Appointments →</p>
      </div>
    </div>
  );
};

export default AppointmentsQue;
