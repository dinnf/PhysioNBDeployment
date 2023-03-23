import React, { useState } from 'react'
import axios from "axios"

import { useNavigate } from "react-router";
import "./Signup.css";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [designation, setDesignation] = useState("");
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();

        const user = { username, password, firstname, lastname, email, designation};

        axios({
            method: "POST",
            url: `/users/`,
            headers: {
                "Content-Type": "application/json",
            },
            data: user,
        })
            .then((res) => {
                console.log("New User created");
                localStorage.setItem("token", res.data.token);
                navigate("/dashboard");
            })
            .catch((err) => {
                alert(err);
                setUsername("");
                setPassword("");
                setDesignation("")
            });
    };
  return (
    <div className="Signup">
            <h1 className="SignupHead">PhysioNB</h1>
            <div className="SignupForm">
                <form>
                    <div className="Form">
                    <div className="SignupFormUsername FormRow">
                        <span className="FormLabel" for="sufusername">Username</span>
                        <input
                            id="sufusername"
                            type="text"
                            className="FormInput"
                            required
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </div>
                    <div className="FormPassword FormRow">
                        <span className="FormLabel" for="sufpassword">Password</span>
                        <input
                            id="sufpassword"
                            type="password"
                            className="FormInput"
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="SignupFormFirstName FormRow">
                        <span className="FormLabel" for="suffirstname">First Name</span>
                        <input
                            id="suffirstname"
                            type="text"
                            className="FormInput"
                            required
                            value={firstname}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="SignupFormLastName FormRow">
                        <span className="FormLabel" for="suflastname">Last Name</span>
                        <input
                            id="suflastname"
                            type="text"
                            className="FormInput"
                            required
                            value={lastname}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="SignupFormEmail FormRow">
                        <span className="FormLabel" for="sufemail">Email</span>
                        <input
                            id="sufemail"
                            type="text"
                            className="FormInput"
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="SignupFormDesignation FormRow">
                        <span className="FormLabel" for="sufdesignation">Designation</span>
                        <input
                            for="sufdesignation"
                            type="text"
                            className="FormInput"
                            required
                            value={designation}
                            onChange={(e) => {
                                setDesignation(e.target.value);
                            }}
                        />
                    </div>
                    </div>
                    <div className="signupBtn">
                        <button
                            className="Btns signupBtn1"
                            type="button"
                            onClick={handleRegister}
                        >
                            {" "}
                            Sign up{" "}
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Signup