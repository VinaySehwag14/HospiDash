import "./appointmentDetails.css";

const AppointmentDetails = () => {
  return (
    <div className="appointmentDetails">
      <div className="appointInfo">
        <p>Appointments</p>
        <h2>54</h2>
      </div>
      <div className="appointInfo">
        <p>EMR Finalised</p>
        <h2>47</h2>
      </div>
      <div className="appointInfo">
        <p>Patient Registrations</p>
        <h2>120</h2>
      </div>
      <div className="appointInfo">
        <p>KR4ALL Visits</p>
        <h2>30</h2>
      </div>
    </div>
  );
};

export default AppointmentDetails;
