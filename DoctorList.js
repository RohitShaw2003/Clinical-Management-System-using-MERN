import React from "react";
import { useNavigate } from "react-router-dom";

function DoctorList({ doctor }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card p-2 m-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <div className="card-header">
          Dr. {doctor.firstName} {doctor.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Specialization: </b> {doctor.specialization}
          </p>
          <p>
            <b> Experience: </b> {doctor.experience} years
          </p>
        </div>
      </div>
    </>
  );
}

export default DoctorList;
