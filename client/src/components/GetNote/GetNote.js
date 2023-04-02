import React, {useState, useEffect} from "react";
import '../CreateNote/CreateNote.css'
import { useParams } from "react-router";
import axios from "axios";
import bodyChart from "../CreateNote/bodychart.png"
import DeleteIcon from "@material-ui/icons/Delete";
import {Link} from "react-router-dom";
import './GetNote.css'

function GetNote() {
    const [PatientsNotes, setPatientsNotes] = useState([])
    const { id, firstname, lastname } = useParams();
    const token = localStorage.getItem("token");
    const getPatientNotes = () => {
        const token = localStorage.getItem("token");

        axios
            .get(`/notes/patient/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log(res);
                setPatientsNotes(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        getPatientNotes();
    }, []);

    useEffect(() => {
        getPatientNotes();
    }, [setPatientsNotes]);
    
  return (
    <div className="FormContent GetNoteContent">
        {PatientsNotes.map((PatientsNotesList) => { 
            return (
                <>
            <div className="BigContainer">

            <div className="LeftColumn">
                <hr />
                <h1 className="getNoteHeader">{firstname} {lastname} {PatientsNotesList.createdAt.slice(8,10)}-{PatientsNotesList.createdAt.slice(5,7)}-{PatientsNotesList.createdAt.slice(0,4)}</h1>
            {PatientsNotesList.hpc && <div className="NoteForm">
        
        <h3 className="TextHead">History of Presenting Complaint</h3>
        <p className="noteParagraph">
            {PatientsNotesList.hpc}
            </p>
    </div>}
    {PatientsNotesList.symptoms && <div className="NoteForm">
        <h3 className="TextHead">Symptoms</h3>
        <p className="noteParagraph">
            {PatientsNotesList.symptoms}
            </p>
    </div>}
    {PatientsNotesList.pain && <div className="NoteForm">
        <h3 className="TextHead">Pain</h3>
        <p className="noteParagraph">
            {PatientsNotesList.pain}
            </p>
    </div>}
    {PatientsNotesList.nature && <div className="NoteForm">
        <h3 className="TextHead">Nature</h3>
        <p className="noteParagraph">
        {PatientsNotesList.nature}
        </p>
    </div>}
    {PatientsNotesList.severity && <div className="NoteForm">
        <h3 className="TextHead">Severity</h3>
        <p className="noteParagraph">
            {PatientsNotesList.severity}
            </p>
    </div>}
    {PatientsNotesList.irritability && <div className="NoteForm">
        <h3 className="TextHead">Irritability</h3>
        <p className="noteParagraph">
            value={PatientsNotesList.irritability}
            </p>    
    </div>}
    {PatientsNotesList.aggravatingfactors && <div className="NoteForm">
        <h3 className="TextHead">Aggravating Factors</h3>
        <p className="noteParagraph">
            {PatientsNotesList.aggravatingfactors}
            </p>
    </div>}
    {PatientsNotesList.easingfactors && <div className="NoteForm">
        <h3 className="TextHead">Easing Factors</h3>
        <p className="noteParagraph">
            {PatientsNotesList.easingfactors}
            </p>         
    </div>}
    {PatientsNotesList.dailypattern && <div className="NoteForm">
        <h3 className="TextHead">Daily Pattern</h3>
        <p className="noteParagraph">
        {PatientsNotesList.dailypattern}
            </p>
    </div>}
    {PatientsNotesList.pmh && <div className="NoteForm">
        <h3 className="TextHead">Past Medical History</h3>
        <p className="noteParagraph">
        {PatientsNotesList.pmh}
        </p>
    </div>}
    </div>
    <div className="RightColumn">
    <img src={bodyChart} alt='bodychart' className="bodychart" />
    {PatientsNotesList.sochx &&<div className="NoteForm">
        <h3 className="TextHead">Social History</h3>
        <p className="noteParagraph">
            {PatientsNotesList.sochx}
            </p>
    </div>}
    {PatientsNotesList.work && <div className="NoteForm">
        <h3 className="TextHead">Work</h3>
        <p className="noteParagraph">
            {PatientsNotesList.work}
            </p>
    </div>}
    {PatientsNotesList.stress && <div className="NoteForm">
        <h3 className="TextHead">Stress</h3>
        <p className="noteParagraph">
            {PatientsNotesList.stress}
            </p>
    </div>}
    {PatientsNotesList.hobbies && <div className="NoteForm">
        <h3 className="TextHead">Hobbies</h3>
        <p className="noteParagraph">
            {PatientsNotesList.hobbies}
            </p>
    </div>}
    {PatientsNotesList.exercise && <div className="NoteForm">
        <h3 className="TextHead">Exercise</h3>
        <p className="noteParagraph">
            {PatientsNotesList.exercise}
            </p>
    </div>}
    {PatientsNotesList.redflags && <div className="NoteForm">
        <h3 className="TextHead">Red Flags</h3>
        <p className="noteParagraph">
            {PatientsNotesList.redflags}
            </p>
    </div>}
    {PatientsNotesList.yellowflags && <div className="NoteForm">
        <h3 className="TextHead">Yellow Flags</h3>
        <p className="noteParagraph">
            {PatientsNotesList.yellowflags}  
            </p>
    </div>}
    {PatientsNotesList.investigations && <div className="NoteForm">
        <h3 className="TextHead">Investigations</h3>
        <p
            className="noteParagraph">
            {PatientsNotesList.investigations}   
            </p>
    </div>}
    {PatientsNotesList.treatment && <div className="NoteForm">
        <h3 className="TextHead">Treatment</h3>
        <p
            className="noteParagraph">
            {PatientsNotesList.treatment}
            </p>
    </div>}
    {PatientsNotesList.specialquestions && <div className="NoteForm">
        <h3 className="TextHead">Notes</h3>
        <p
            className="NoteText">
            {PatientsNotesList.specialquestions}
            </p>
    </div>}
    </div>
    
</div>
<Link to={`/deletetask/${PatientsNotesList._id}`}><span className="DelIcon"><DeleteIcon /></span></Link>
</>) 

        })}     
</div>

)

}

export default GetNote