import "./appointDash.css";
import VideocamIcon from "@mui/icons-material/Videocam";

const AppointDash = () => {
  return (
    // <div className="appointDash_">
    //   <div className="appointDash_upper">
    //     <span>ORDER ID</span>
    //     <span>PATIENT</span>
    //     <span>CONSULTATION</span>
    //     <span>TEAM</span>
    //     <span>DOCTOR</span>
    //     <span>SLOT</span>
    //     <span>STATUS</span>
    //     <span>INVOICE</span>
    //     <span>ACTION</span>
    //   </div>
    //   <div className="appointDash_lower">
    //     <span>2422562</span>
    //     <section className="appointDash_lower_sect">
    //       <span className="appointDash_lower_sect_name_span">Risha Mahin</span>
    //       <span>26, F</span>
    //     </section>
    //     <section className="appointDash_lower_sect">
    //       <span className="appointDash_lower_sect_icon_span">
    //         <VideocamIcon />
    //         Video
    //       </span>
    //       <span>First Consultation</span>
    //     </section>
    //     <span>Medical Camp</span>
    //     <span>Anil Kumar</span>
    //     <section className="appointDash_lower_sect">
    //       <span>July 3, 2021</span>
    //       <span>8:53 AM</span>
    //     </section>
    //     <span className="appointDash_lower_sect_status">Cancelled</span>
    //     <span className="appointDash_lower_sect_invoice">Refunded</span>
    //     <span>⋮</span>
    //   </div>
    //   {/* <div className="appointDash_lower">
    //     <span>2422562</span>
    //     <section className="appointDash_lower_sect">
    //       <span>Risha Mahin</span>
    //       <span>26, F</span>
    //     </section>
    //     <section className="appointDash_lower_sect">
    //       <span>
    //         <VideocamIcon />
    //         Video
    //       </span>
    //       <span>First Consultation</span>
    //     </section>
    //     <span>Medical Camp</span>
    //     <span>Anil Kumar</span>
    //     <section className="appointDash_lower_sect">
    //       <span>July 3, 2021</span>
    //       <span>8:53 AM</span>
    //     </section>
    //     <span>Cancelled</span>
    //     <span>Refunded</span>
    //     <span>Refunded</span>
    //     <span>⋮</span>
    //   </div> */}
    // </div>
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
          <tr>
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
            <td className="appointDash_td_status">Cancelled</td>
            <td>Refunded</td>
            <td className="appointDash_td_specialCa">⋮</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
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
            <td className="appointDash_td_status">Cancelled</td>
            <td>Refunded</td>
            <td className="appointDash_td_specialCa">⋮</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
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
            <td className="appointDash_td_status">Cancelled</td>
            <td>Refunded</td>
            <td className="appointDash_td_specialCa">⋮</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
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
            <td className="appointDash_td_status">Cancelled</td>
            <td>Refunded</td>
            <td className="appointDash_td_specialCa">⋮</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
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
            <td className="appointDash_td_status">Cancelled</td>
            <td>Refunded</td>
            <td className="appointDash_td_specialCa">⋮</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
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
            <td className="appointDash_td_status">Cancelled</td>
            <td>Refunded</td>
            <td className="appointDash_td_specialCa">⋮</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
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
            <td className="appointDash_td_status">Cancelled</td>
            <td>Refunded</td>
            <td className="appointDash_td_specialCa">⋮</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppointDash;
