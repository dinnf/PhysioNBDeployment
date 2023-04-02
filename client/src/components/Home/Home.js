import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import axios from "axios";

import DeleteIcon from "@material-ui/icons/Delete";

const Home = () => {
    const [patientList, setPatientList] = useState([])

    const getPatients = () => {
        const token = localStorage.getItem("token");

        axios
            .get(`/patients`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log(res);
                setPatientList(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    useEffect(() => {
        getPatients();
    }, []);

    useEffect(() => {
        getPatients();
    }, [setPatientList]);


    return (
        <div className="Home">
            <div className="patientColumn">
             <h1 className="HomePatients">Patients List</h1>
            {!patientList ||
                (patientList.length === 0 && (
                    <h2 className="NoPatientsFound">No Patients Found</h2>
                ))}
            <div className="PatientList">
                {patientList && (
                    <div>
                        {" "}
                        <table className="patientsTable">
                            <thead class="theadd">
                        <tr>
                                    <th>NHI</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Create Note</th>
                                    <th>View Notes</th>
                                    <th>Delete Patient</th>
                                </tr>
                                </thead>
                                <tbody>
                        {patientList.map((patient) => (
                            <tr className="Patient">
                               <td class="tdd">
                               <Link className="routes" to={`/getpatient/${patient._id}`}>
                                {patient.patientId}
                                </Link>
                                </td>
                                <td class="tdd">
                                {patient.firstname} 
                                </td>
                                <td class="tdd">
                                {patient.lastname}
                                </td>
                                <td class="tdd">
                                    <Link to={`/createassessment/${patient._id}`}>
                                        <div>
                                        <button className="AddBtn">+</button>
                                        </div>
                                </Link>
                                </td>
                                <td class="tdd"><Link to={`/getnote/${patient._id}/${patient.firstname}/${patient.lastname}`}>
                                
                                        <button className="GetNoteButton">View Notes</button>    
                                </Link>
                                </td>
                                <td class="tdd"><Link to={`/deletepatient/${patient._id}`}>
                                    <span className="DelIcon">
                                        <DeleteIcon />
                                    </span>
                                
                                </Link>
                                </td>
                                </tr>
                    
                        ))}</tbody></table>{" "}
                    </div>
                )}
            </div>
            </div>
           
            
        </div>
    );
};

export default Home;
