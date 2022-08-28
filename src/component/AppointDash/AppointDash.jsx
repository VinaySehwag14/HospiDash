import "./appointDash.css";
import VideocamIcon from "@mui/icons-material/Videocam";

const AppointDash = () => {
  return (
    <div className="appointDash_">
      <table>
        <thead>
          <tr>
            <th data-type="numeric">
              ORDER ID <span class="resize-handle"></span>
            </th>
            <th data-type="text-short">
              PATIENT <span class="resize-handle"></span>
            </th>
            <th data-type="text-short">
              CONSULTATION <span class="resize-handle"></span>
            </th>
            <th data-type="text-short">
              TEAM <span class="resize-handle"></span>
            </th>
            <th data-type="text-short">
              DOCTOR<span class="resize-handle"></span>
            </th>
            <th data-type="text-short">
              SLOT <span class="resize-handle"></span>
            </th>
            <th data-type="text-short">
              STATUS <span class="resize-handle"></span>
            </th>
            <th data-type="text-short">
              INVOICE <span class="resize-handle"></span>
            </th>
            <th data-type="text-short">
              ACTION <span class="resize-handle"></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="appointDash_consult_tr">
            <td className="appointDash_consult_td">2422532</td>
            <td>
              <p className="appointDash_patient">Risha Mahin</p>
              <p>26,F</p>
            </td>
            <td>
              <span className="appointDash_td">
                <span className="appointDash_consult_span">
                  <VideocamIcon /> Video
                </span>
              </span>
              <p>First Consultation</p>
            </td>
            <td className="appointDash_consult_td">Medical Camp</td>
            <td className="appointDash_consult_td">Anil Kumar</td>
            <td>
              <p className="appointDash_consult_td">July 3,2021</p>
              <p className="appointDash_consult_td">8:53 AM</p>
            </td>
            <td className="appointDash_td_status">
              <span className="appointDash_td_status_stat">Cancelled</span>
            </td>
            <td className="appointDash_td_Invo">
              <span className="appointDash_td_status_Invo">Refunded</span>
            </td>
            <td className="appointDash_td_specialCa">⋮</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="appointDash_consult_tr">
            <td className="appointDash_consult_td">2422532</td>
            <td>
              <p className="appointDash_patient">Risha Mahin</p>
              <p>26,F</p>
            </td>
            <td>
              <span className="appointDash_td">
                <span className="appointDash_consult_span">
                  <VideocamIcon /> Video
                </span>
              </span>
              <p>First Consultation</p>
            </td>
            <td className="appointDash_consult_td">Medical Camp</td>
            <td className="appointDash_consult_td">Anil Kumar</td>
            <td>
              <p className="appointDash_consult_td">July 3,2021</p>
              <p className="appointDash_consult_td">8:53 AM</p>
            </td>
            <td className="appointDash_td_status">
              <span className="appointDash_td_status_stat">Booked</span>
            </td>
            <td className="appointDash_td_Invo">
              <span className="appointDash_td_status_Invo">Refunded</span>
            </td>
            <td className="appointDash_td_specialCa">⋮</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="appointDash_consult_tr">
            <td className="appointDash_consult_td">2422532</td>
            <td>
              <p className="appointDash_patient">Risha Mahin</p>
              <p>26,F</p>
            </td>
            <td>
              <span className="appointDash_td">
                <span className="appointDash_consult_span">
                  <VideocamIcon /> Video
                </span>
              </span>
              <p>First Consultation</p>
            </td>
            <td className="appointDash_consult_td">Medical Camp</td>
            <td className="appointDash_consult_td">Anil Kumar</td>
            <td>
              <p className="appointDash_consult_td">July 3,2021</p>
              <p className="appointDash_consult_td">8:53 AM</p>
            </td>
            <td className="appointDash_td_status">
              <span className="appointDash_td_status_stat">Booked</span>
            </td>
            <td className="appointDash_td_Invo">
              <span className="appointDash_td_status_Invo">Refunded</span>
            </td>
            <td className="appointDash_td_specialCa">⋮</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="appointDash_consult_tr">
            <td className="appointDash_consult_td">2422532</td>
            <td>
              <p className="appointDash_patient">Risha Mahin</p>
              <p>26,F</p>
            </td>
            <td>
              <span className="appointDash_td">
                <span className="appointDash_consult_span">
                  <VideocamIcon /> Video
                </span>
              </span>
              <p>First Consultation</p>
            </td>
            <td className="appointDash_consult_td">Medical Camp</td>
            <td className="appointDash_consult_td">Anil Kumar</td>
            <td>
              <p className="appointDash_consult_td">July 3,2021</p>
              <p className="appointDash_consult_td">8:53 AM</p>
            </td>
            <td className="appointDash_td_status">
              <span className="appointDash_td_status_stat">Cancelled</span>
            </td>
            <td className="appointDash_td_Invo">
              <span className="appointDash_td_status_Invo_p">Paid</span>
            </td>
            <td className="appointDash_td_specialCa">⋮</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="appointDash_consult_tr">
            <td className="appointDash_consult_td">2422532</td>
            <td>
              <p className="appointDash_patient">Risha Mahin</p>
              <p>26,F</p>
            </td>
            <td>
              <span className="appointDash_td">
                <span className="appointDash_consult_span">
                  <VideocamIcon /> Video
                </span>
              </span>
              <p>First Consultation</p>
            </td>
            <td className="appointDash_consult_td">Medical Camp</td>
            <td className="appointDash_consult_td">Anil Kumar</td>
            <td>
              <p className="appointDash_consult_td">July 3,2021</p>
              <p className="appointDash_consult_td">8:53 AM</p>
            </td>
            <td className="appointDash_td_status">
              <span className="appointDash_td_status_stat">No Show</span>
            </td>
            <td className="appointDash_td_Invo">
              <span className="appointDash_td_status_Invo_p">Paid</span>
            </td>
            <td className="appointDash_td_specialCa">⋮</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="appointDash_consult_tr">
            <td className="appointDash_consult_td">2422532</td>
            <td>
              <p className="appointDash_patient">Risha Mahin</p>
              <p>26,F</p>
            </td>
            <td>
              <span className="appointDash_td">
                <span className="appointDash_consult_span">
                  <VideocamIcon /> Video
                </span>
              </span>
              <p>First Consultation</p>
            </td>
            <td className="appointDash_consult_td">Medical Camp</td>
            <td className="appointDash_consult_td">Anil Kumar</td>
            <td>
              <p className="appointDash_consult_td">July 3,2021</p>
              <p className="appointDash_consult_td">8:53 AM</p>
            </td>
            <td className="appointDash_td_status">
              <span className="appointDash_td_status_stat">Cancelled</span>
            </td>
            <td className="appointDash_td_Invo">
              <span className="appointDash_td_status_Invo">Refunded</span>
            </td>
            <td className="appointDash_td_specialCa">⋮</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="appointDash_consult_tr">
            <td className="appointDash_consult_td">2422532</td>
            <td>
              <p className="appointDash_patient">Risha Mahin</p>
              <p>26,F</p>
            </td>
            <td>
              <span className="appointDash_td">
                <span className="appointDash_consult_span">
                  <VideocamIcon /> Video
                </span>
              </span>
              <p>First Consultation</p>
            </td>
            <td className="appointDash_consult_td">Medical Camp</td>
            <td className="appointDash_consult_td">Anil Kumar</td>
            <td>
              <p className="appointDash_consult_td">July 3,2021</p>
              <p className="appointDash_consult_td">8:53 AM</p>
            </td>
            <td className="appointDash_td_status">
              <span className="appointDash_td_status_stat">Cancelled</span>
            </td>
            <td className="appointDash_td_Invo">
              <span className="appointDash_td_status_Invo_p">Paid</span>
            </td>
            <td className="appointDash_td_specialCa">⋮</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppointDash;
