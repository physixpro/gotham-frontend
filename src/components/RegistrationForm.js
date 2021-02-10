import React, { useState } from "react";
import axios from "axios";
import newlogo from "../images/newlogo.webp";
import "./RegistrationForm.css";

// ** CTRL + p opens the filefinder
const RegistrationForm = () => {
  const [level, setLevel] = useState("IGC");

  const [message, setMessage] = useState("");

  const[email,setEmail] = useState("")

  const recordEmail = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }
  // sets state to advance message onSubmit

  // const [advMessage, setAdvMessage] = useState("");

  // // sets state to show IGC message onSubmit
  // const [igcLogic, setIgcLogic] = useState(false);

  // sets state to show advance message for igc form
  // const [igcLogicTwo, setIgcLogicTwo] = useState(false);

  // const igcSkillLogicOne = () => {
  //   if (skillOneYes && skillTwoYes && skillThreeYes && skillFourYes === "Yes") {
  //     setIgcLogic(true);
  //   }
  // };

  // const igcSkillLogicTwo = () => {
  //   if (skillOneYes || skillTwoYes || skillThreeYes || skillFourYes !== "Yes") {
  //     setIgcLogicTwo(true);
  //   }
  // };

  const [coachName, setCoachName] = useState("");
  const [date, setDate] = useState("");
  const [athleteName, setAthleteName] = useState("");
  const [parentName, setParentName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")

  /************* saving the current state of the fields as the user types in the input fields ***********/
  const recordCoachName = (e) => {
    setCoachName(e.target.value);

    console.log(e.target.value);
  };

  const recordDate = (e) => {
    setDate(e.target.value);
  };

  const recordAthleteName = (e) => {
    setAthleteName(e.target.value);
  };

  const recordParentName = (e) => {
    setParentName(e.target.value);
  };

  const recordPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    console.log(e.target.value)
  }

  /**** removed the (e) from the register user because the event now goes to the registerAndMessage function onSubmit */

  /********************************** RADIO button State code **************************/
  const [skillOne, setSkillOne] = useState("");
  // const [skillOneNo, setSkillOneNo] = useState("");
  const [skillTwo, setSkillTwo] = useState("");
  // const [skillTwoNo, setSkillTwoNo] = useState("");
  const [skillThree, setSkillThree] = useState("");
  // const [skillThreeNo, setSkillThreeNo] = useState("");
  const [skillFour, setSkillFour] = useState("");
  // const [skillFourNo, setSkillFourNo] = useState("");
  const [skillFive, setSkillFive] = useState("");
  // const [skillFiveNo,setSkillFiveNo] = useState("");
  const [skillSix, setSkillSix] = useState("");
  // const [skillSixNo, setSkillSixNo] = useState("");

  /***** recording first skill  or no ********/

  const recordSkillOne = (e) => {
    setSkillOne(e.target.value);
    console.log(e.target.value);
  };

  // const recordSkillOneNo = (e) => {
  //   setSkillOneNo(e.target.value);
  //   console.log(e.target.value);
  // };

  /****** recording second skill  or no *******/

  const recordSkillTwo = (e) => {
    setSkillTwo(e.target.value);
    console.log(e.target.value);
  };

  // const recordSkillTwoNo = (e) => {
  //   setSkillTwoNo(e.target.value);
  //   console.log(e.target.value);
  // };

  /********** recording third skill  or no **********/

  const recordSkillThree = (e) => {
    setSkillThree(e.target.value);
    console.log(e.target.value);
  };

  // const recordSkillThreeNo = (e) => {
  //   setSkillThreeNo(e.target.value);
  //   console.log(e.target.value);
  // };

  /*********** recording fourth skill  or no *********/

  const recordSkillFour = (e) => {
    setSkillFour(e.target.value);
    console.log(e.target.value);
  };

  const recordSkillFive = (e) => {
    setSkillFive(e.target.value);
  };

  const recordSkillSix = (e) => {
    setSkillSix(e.target.value);
  };

  const resetAnswers = () => {
    setSkillOne("");
    setSkillTwo("");
    setSkillThree("");
    setSkillFour("");
    setSkillFive("");
    setSkillSix("");
  };

  const registrationAndMessage = async (e) => {
    e.preventDefault();
    // setSubmitted(true);

    if (
      skillOne === "Yes" &&
      skillTwo === "Yes" &&
      skillThree === "Yes" &&
      skillFour === "Yes" &&
      skillFive === "Yes" &&
      skillSix === "Yes"
    ) {
      setMessage(`Athlete is registered and their level is ${level}`);
      // If they are IGC, save this information in the database
      const newUser = {
        coachName: coachName,
        athleteName: athleteName,
        date: date,
        parentName: parentName,
        level: level,
        email: email,
        phoneNumber: phoneNumber
      };
      const res = await axios.post(
        "https://gotham-backend.herokuapp.com/evaluations",
        newUser
      );
      console.log(res);
      setCoachName("");
      setAthleteName("");
      setDate("");
      setParentName("");
      setEmail("")
      setPhoneNumber("")
      resetAnswers()
    } else if (level === "IGC") {
      setLevel("Advanced");
      resetAnswers();
    } else if (level === "Advanced") {
      setLevel("Intermediate");
      resetAnswers();
    } else {
      setLevel("Beginner");
      setMessage(`Athlete is registered and their level is ${level}`);
      const newUser = {
        coachName: coachName,
        athleteName: athleteName,
        date: date,
        parentName: parentName,
        email: email,
        phoneNumber: phoneNumber,
        level: "Beginner",
        
      };
      const res = await axios.post(
        "https://gotham-backend.herokuapp.com/evaluations",
        newUser
      );
      console.log(res);
    }
  };

  return (
    <div>
      <section className="logo-section">
        <img src={newlogo} alt="logo" width="200px" />
      </section>
      <section className="title-section">
        <h1> GOTHAM GYMNASTICS</h1>
        <h2>Skill Assessment</h2>
      </section>

      {message.length > 0 ? (
        <div className="success-message">{message}</div>
      ) : null}

      <section className="form-background-image">
        <form className="registration-form" onSubmit={registrationAndMessage}>
          <section className="input-container">
            
            <label className="form-label">
              Coach Name:
              <input
                required
                className="form-input"
                type="text"
                name="coach name"
                placeholder="Enter Name"
                onChange={recordCoachName}
                value={coachName}
              />
            </label>
            <label className="form-label">
              Date:
              <input
                required
                className="form-input"
                type="date"
                name="date"
                onChange={recordDate}
                value={date}
              />
            </label>
            <label className="form-label">
              Parent Email:
              <input
                //email not required for purposes of not sending the parent an email in case classes are full
                className="form-input"
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={recordEmail}
                value={email}
              />
            </label>
          </section>

          <section className="input-container">
            <label className="form-label">
              Athlete Full Name:
              <input
                required
                className="form-input"
                type="text"
                name=" athlete name"
                placeholder="Athlete Name"
                onChange={recordAthleteName}
                value={athleteName}
              />
            </label>
            <label className="form-label">
              Parent/Guardian Name:
              <input
                required
                className="form-input"
                type="text"
                name=" parent name"
                placeholder="Parent Full Name"
                onChange={recordParentName}
                value={parentName}
              />
            </label>
            <label className="form-label">
              Phone-Number:
              <input
                required
                className="form-input"
                type="tel"
                name=" phone number"
                placeholder="555-555-5555"
                onChange={recordPhoneNumber}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={phoneNumber}
              />
            </label>
          </section>

          {/* short circuit evaluation; is submitted true? if so run the code to the right of the && */}

          <h2>{level} Assessment</h2>
          {level === "IGC" ? (
            <div>
              <h3 className="skill-style">Bridge kick-over</h3>
              <input
                required
                type="radio"
                name="skill-one"
                id="skill-one-yes"
                value="Yes"
                onChange={recordSkillOne}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-one"
                id="skill-one-no"
                value="No"
                onChange={recordSkillOne}
              />
              <label>No</label>
              <h3>Handstand forward-roll</h3>
              <input
                required
                type="radio"
                name="skill-two"
                id="skill-two-yes"
                value="Yes"
                onChange={recordSkillTwo}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-two"
                id="skill-two-no"
                value="No"
                onChange={recordSkillTwo}
              />
              <label>No</label>
              <h3>Round off/ backhand-spring</h3>
              <input
                required
                type="radio"
                name="skill-three"
                id="skill-three-yes"
                value="Yes"
                onChange={recordSkillThree}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-three"
                id="skill-three-no"
                value="No"
                onChange={recordSkillThree}
              />
              <label>No</label>
              <h3>Pull-over</h3>
              <input
                required
                type="radio"
                name="skill-four"
                id="skill-four-yes"
                value="Yes"
                onChange={recordSkillFour}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-four"
                id="skill-four-no"
                value="No"
                onChange={recordSkillFour}
              />
              <label>No</label>
              <h3>Handstand flat back</h3>
              <input
                required
                type="radio"
                name="skill-five"
                id="skill-five-yes"
                value="Yes"
                onChange={recordSkillFive}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-five"
                id="skill-five-no"
                value="No"
                onChange={recordSkillFive}
              />
              <label>No</label>
              <h3>Full handstand on beam</h3>
              <input
                required
                type="radio"
                name="skill-six"
                id="skill-six-yes"
                value="Yes"
                onChange={recordSkillSix}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-six"
                id="skill-six-no"
                value="No"
                onChange={recordSkillSix}
              />
              <label>No</label>
              <br />
              <br />
            </div>
          ) : null}
          {level === "Advanced" ? (
            <div>
              <h3>Back-handspring</h3>
              <input
                required
                type="radio"
                name="skill-one"
                id="skill-one-yes"
                value="Yes"
                onChange={recordSkillOne}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-one"
                id="skill-one-no"
                value="No"
                onChange={recordSkillOne}
              />
              <label>No</label>
              <h3>Round off backhandspring</h3>
              <input
                required
                type="radio"
                name="skill-two"
                id="skill-two-yes"
                value="Yes"
                onChange={recordSkillTwo}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-two"
                id="skill-two-no"
                value="No"
                onChange={recordSkillTwo}
              />
              <label>No</label>
              <h3>Front handspring</h3>
              <input
                required
                type="radio"
                name="skill-three"
                id="skill-three-yes"
                value="Yes"
                onChange={recordSkillThree}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-three"
                id="skill-three-no"
                value="No"
                onChange={recordSkillThree}
              />
              <label>No</label>
              <h3>Front Tuck</h3>
              <input
                required
                type="radio"
                name="skill-four"
                id="skill-four-yes"
                value="Yes"
                onChange={recordSkillFour}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-four"
                id="skill-four-no"
                value="No"
                onChange={recordSkillFour}
              />
              <label>No</label>
              <h3>Cast back-hipcircle</h3>
              <input
                required
                type="radio"
                name="skill-five"
                id="skill-five-yes"
                value="Yes"
                onChange={recordSkillFive}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-five"
                id="skill-five-no"
                value="No"
                onChange={recordSkillFive}
              />
              <label>No</label>
              <h3>HandStand & SideHandstand on beam</h3>
              <input
                required
                type="radio"
                name="skill-six"
                id="skill-six-yes"
                value="Yes"
                onChange={recordSkillSix}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-six"
                id="skill-six-no"
                value="No"
                onChange={recordSkillSix}
              />
              <label>No</label>
              <br />
              <br />
            </div>
          ) : null}
          {level === "Intermediate" ? (
            <div>
              <h3>Backward roll to pushup position</h3>
              <input
                required
                type="radio"
                name="skill-one"
                id="skill-one-yes"
                value="Yes"
                onChange={recordSkillOne}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-one"
                id="skill-one-no"
                value="No"
                onChange={recordSkillOne}
              />
              <label>No</label>
              <h3>Dive Rolls</h3>
              <input
                required
                type="radio"
                name="skill-two"
                id="skill-two-yes"
                value="Yes"
                onChange={recordSkillTwo}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-two"
                id="skill-two-no"
                value="No"
                onChange={recordSkillTwo}
              />
              <label>No</label>
              <h3>Floor bar squat-on into a safety stop</h3>
              <input
                required
                type="radio"
                name="skill-three"
                id="skill-three-yes"
                value="Yes"
                onChange={recordSkillThree}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-three"
                id="skill-three-no"
                value="No"
                onChange={recordSkillThree}
              />
              <label>No</label>
              <h3>Handstand bridge kick-over</h3>
              <input
                required
                type="radio"
                name="skill-four"
                id="skill-four-yes"
                value="Yes"
                onChange={recordSkillFour}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-four"
                id="skill-four-no"
                value="No"
                onChange={recordSkillFour}
              />
              <label>No</label>
              <h3>Tuck jump onto a vault</h3>
              <input
                required
                type="radio"
                name="skill-five"
                id="skill-five-yes"
                value="Yes"
                onChange={recordSkillFive}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-five"
                id="skill-five-no"
                value="No"
                onChange={recordSkillFive}
              />
              <label>No</label>
              <h3>Straight/Tuck/Straddle Jump on trampoline</h3>
              <input
                required
                type="radio"
                name="skill-six"
                id="skill-six-yes"
                value="Yes"
                onChange={recordSkillSix}
              />
              <label>Yes</label>
              <input
                required
                type="radio"
                name="skill-six"
                id="skill-six-no"
                value="No"
                onChange={recordSkillSix}
              />
              <label>No</label>
              <br />
              <br />
            </div>
          ) : null}
          <button className="form-button" type="submit">
            Evaluate
          </button>
        </form>
        <footer className="footer">
          <h5 id="gotham-footer">GOTHAM</h5>
          <h5 id="gymnastics-footer">GYMNASTICS</h5>
          <div id="trademark">&trade;</div>
          <h6 id="brooklyn-footer">BROOKLYN</h6>
        </footer>
      </section>
    </div>
  );
};

export default RegistrationForm;
