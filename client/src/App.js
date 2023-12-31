import { BrowserRouter, Routes, Route } from "react-router-dom";
import React  from 'react';
import "./App.css";

import CreatePage from "./pages/CreatePage";
import DashboardPage from "./pages/DashboardPage";
import DeletePage from "./pages/DeletePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import CreatePatientPage from "./pages/CreatePatientPage";
import DeletePatientPage from "./pages/DeletePatientPage";
import CreateNotePage from "./pages/CreateNotePage"
import DeleteAccountPage from "./pages/DeleteAccountPage"
import GetNotePage from "./pages/GetNotePage"
import GetPatientPage from "./pages/GetPatientPage"
import GetUserDetailsPage from "./pages/GetUserDetails"

function App() {
   // const token = localStorage.getItem("token");

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SigninPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/create" element={<CreatePage />} />
                    <Route path="/deletetask/:id" element={<DeletePage />} />
                    <Route path="/newpatient" element={<CreatePatientPage />} />
                    <Route path="/deletepatient/:id" element={<DeletePatientPage />} />
                    <Route path="/createassessment/:id" element={<CreateNotePage />} />
                    <Route path="/deleteaccount" element={<DeleteAccountPage />} />
                    <Route path="/deletenote" element={<DeletePage />} />
                    <Route path="/getnote/:id/:firstname/:lastname" element={<GetNotePage />} />
                    <Route path="/getpatient/:id" element={<GetPatientPage />}/>
                    <Route path="/mydetails" element={<GetUserDetailsPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
