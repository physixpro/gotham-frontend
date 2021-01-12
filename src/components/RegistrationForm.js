import React, { useState } from "react";
import axios from "axios";
import logo from "../images/logo.png";
import "./RegistrationForm.css";

// ** CTRL + p opens the filefinder
const RegistrationForm = () => {
  const [level, setLevel] = useState("IGC");

  const [message, setMessage] = useState("");
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

  /**** removed the (e) from the register user because the event now goes to the registerAndMessage function onSubmit */

  /********************************** RADIO button State code **************************/
  const [skillOneYes, setSkillOneYes] = useState("");
  // const [skillOneNo, setSkillOneNo] = useState("");
  const [skillTwoYes, setSkillTwoYes] = useState("");
  // const [skillTwoNo, setSkillTwoNo] = useState("");
  const [skillThreeYes, setSkillThreeYes] = useState("");
  // const [skillThreeNo, setSkillThreeNo] = useState("");
  const [skillFourYes, setSkillFourYes] = useState("");
  // const [skillFourNo, setSkillFourNo] = useState("");
  const[skillFiveYes,setSkillFiveYes] = useState("");
  // const [skillFiveNo,setSkillFiveNo] = useState("");
  const [skillSixYes,setSkillSixYes] = useState("");
  // const [skillSixNo, setSkillSixNo] = useState("");

  /***** recording first skill yes or no ********/

  const recordSkillOneYes = (e) => {
    setSkillOneYes(e.target.value);
    console.log(e.target.value);
  };

  // const recordSkillOneNo = (e) => {
  //   setSkillOneNo(e.target.value);
  //   console.log(e.target.value);
  // };

  /****** recording second skill yes or no *******/

  const recordSkillTwoYes = (e) => {
    setSkillTwoYes(e.target.value);
    console.log(e.target.value);
  };

  // const recordSkillTwoNo = (e) => {
  //   setSkillTwoNo(e.target.value);
  //   console.log(e.target.value);
  // };

  /********** recording third skill yes or no **********/

  const recordSkillThreeYes = (e) => {
    setSkillThreeYes(e.target.value);
    console.log(e.target.value);
  };

  // const recordSkillThreeNo = (e) => {
  //   setSkillThreeNo(e.target.value);
  //   console.log(e.target.value);
  // };

  /*********** recording fourth skill yes or no *********/

  const recordSkillFourYes = (e) => {
    setSkillFourYes(e.target.value);
    console.log(e.target.value);
  };

  // const recordSkillFourNo = (e) => {
  //   setSkillFourNo(e.target.value);
  //   console.log(e.target.value);
  // };

  const recordSkillFiveYes = (e) => {
    setSkillFiveYes(e.target.value)
  }

  // const recordSkillFiveNo = (e) => {
  //   setSkillFiveNo(e.target.value)
  // }

  const recordSkillSixYes = (e) => {
    setSkillSixYes(e.target.value)
  }

  // const recordSkillSixNo = (e) => {
  //   setSkillSixNo(e.target.value)
  // }

  /************* function that evaluates athletes and sends body data to the database via a post route ***********/
  // const evaluateAthleteIntermediate = async (e) => {
  //   e.preventDefault();

  //   const athleteResult = {
  //     skillOneYes: skillOneYes,
  //     skillOneNo: skillOneNo,
  //     skillTwoYes: skillTwoYes,
  //     skillTwoNo: skillTwoNo,
  //     skillThreeYes: skillThreeYes,
  //     skillThreeNo: skillThreeNo,
  //     skillFourYes: skillFourYes,
  //     skillFourNo: skillFourNo,
  //     skillFiveYes: skillFiveYes,
  //     skillFiveNo: skillFiveNo,
  //     skillSixYes: skillSixYes,
  //     skillSixNo: skillSixNo
  //   };

  //   if (
  //     skillOneYes === "Yes" &&
  //     skillTwoYes === "Yes" &&
  //     skillThreeYes === "Yes" &&
  //     skillFourYes === "Yes"
  //   ) {
  //     setMessage(
  //       "Congratulations, athlete qualifies for Intermediate level classes!"
  //     );
  //   } else {
  //     setMessage(
  //       "Congratulations, athlete qualifies for Beginner level classes!"
  //     );
  //   }

  //   const res = await axios.post(
  //     "http://localhost:3001/evaluations",
  //     athleteResult
  //   );
  //   console.log(res);
  // };

  // const evaluateAthleteAdvanced = async (e) => {
  //   e.preventDefault();

  //   const athleteResult = {
  //     skillOneYes: skillOneYes,
  //     skillOneNo: skillOneNo,
  //     skillTwoYes: skillTwoYes,
  //     skillTwoNo: skillTwoNo,
  //     skillThreeYes: skillThreeYes,
  //     skillThreeNo: skillThreeNo,
  //     skillFourYes: skillFourYes,
  //     skillFourNo: skillFourNo,
  //   };
  //   if (
  //     skillOneYes === "Yes" &&
  //     skillTwoYes === "Yes" &&
  //     skillThreeYes === "Yes" &&
  //     skillFourYes === "Yes" 
  //   ) {
  //     setAdvMessage(
  //       " Congratulations, athlete qualifies for Advanced level classes!"
  //     );
  //   } else {
  //     setAdvMessage(
  //       "Congratulations, athlete qualifies for Intermediate level classes!"
  //     );
  //   }

  //   const res = await axios.post(
  //     "http://localhost:3001/evaluations",
  //     athleteResult
  //   );
  //   console.log(res);
  // };

  // const evaluateAthleteIgc = async (e) => {
  //   e.preventDefault();

  //   const athleteResult = {
  //     skillOneYes: skillOneYes,
  //     skillOneNo: skillOneNo,
  //     skillTwoYes: skillTwoYes,
  //     skillTwoNo: skillTwoNo,
  //     skillThreeYes: skillThreeYes,
  //     skillThreeNo: skillThreeNo,
  //     skillFourYes: skillFourYes,
  //     skillFourNo: skillFourNo,
  //   };
  //   if (
  //     skillOneYes === "Yes" &&
  //     skillTwoYes === "Yes" &&
  //     skillThreeYes === "Yes" &&
  //     skillFourYes === "Yes"
  //   ) {
  //   }
  //   const res = await axios.post(
  //     "http://localhost:3001/evaluations",
  //     athleteResult
  //   );
  //   console.log(res);
  // };

  /*********** Made a new state in order to show the message on submit of the form, the setSubmitted(true) is within the showFormMessage function **********/

  /********** This function sets the display of the message to true on submit of the form , i also removed the (e) from this function as the event now falls on the registrationAndMessage function */

  /****** When the form submits this function is called, i combined the showFormMessage and registerUser function in order to carry out two actions at once. The (e) is placed on this function as this is the one we call onSubmit of the form */
  const registrationAndMessage = async (e) => {
    e.preventDefault();
    // setSubmitted(true);

    if (
      skillOneYes === "Yes" &&
      skillTwoYes === "Yes" &&
      skillThreeYes === "Yes" &&
      skillFourYes === "Yes" &&
      skillFiveYes === "Yes" &&
      skillSixYes === "Yes"
    ) {
      setMessage(`User is registered and their level is ${level}`);
      // If they are IGC, save this information in the database
      const newUser = {
        coachName: coachName,
        athleteName: athleteName,
        date: date,
        parentName: parentName,
        level: level,
      };
      const res = await axios.post(
        "http://localhost:3001/evaluations",
        newUser
      );
      console.log(res);
      setCoachName("");
      setAthleteName("");
      setDate("");
      setParentName("");
    } else if (level === "IGC") {
      setLevel("Advanced");
    } else if (level === "Advanced") {
      setLevel("Intermediate");
    } else {
      setLevel("Beginner");
      setMessage(`User is registered and their level is ${level}`);
      const newUser = {
        coachName: coachName,
        athleteName: athleteName,
        date: date,
        parentName: parentName,
        level: "Beginner",
      };
      const res = await axios.post(
        "http://localhost:3001/evaluations",
        newUser
      );
      console.log(res)
    }
  };

  return (
    <div>
      <section className="logo-section">
        <img src={logo} alt="logo" width="200px" />
      </section>
      <section className="title-section">
        <h1> Gotham Gymnastics</h1>
        <h2>Skill Assesment</h2>
      </section>

      {message.length > 0 ? (
        <div className="success-message">{message}</div>
      ) : null}
      <form className="registration-form" onSubmit={registrationAndMessage}>
        <section className="input-container">
          <label className="form-label">
            Coach's Name:
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
        </section>

        <section className="input-container">
          <label className="form-label">
            Athlete Name:
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
              placeholder="Parent Name"
              onChange={recordParentName}
              value={parentName}
            />
          </label>
        </section>

        {/* short circuit evaluation; is submitted true? if so run the code to the right of the && */}

        <h2>{level} Assesment</h2>
        {level === "IGC" ? (
          <div>
            <h3>Bridge kick-over</h3>
            <input
              required
              type="radio"
              name="skill-one"
              id="skill-one-yes"
              value="Yes"
              onChange={recordSkillOneYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-one"
              id="skill-one-no"
              value="No"
              // onChange={recordSkillOneNo}
            />
            <label>No</label>
            <h3>Handstand forward-roll</h3>
            <input
              required
              type="radio"
              name="skill-two"
              id="skill-two-yes"
              value="Yes"
              onChange={recordSkillTwoYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-two"
              id="skill-two-no"
              value="No"
              // onChange={recordSkillTwoNo}
            />
            <label>No</label>
            <h3>Round off/ backhand-spring</h3>
            <input
              required
              type="radio"
              name="skill-three"
              id="skill-three-yes"
              value="Yes"
              onChange={recordSkillThreeYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-three"
              id="skill-three-no"
              value="No"
              // onChange={recordSkillThreeNo}
            />
            <label>No</label>
            <h3>Pull-over</h3>
            <input
              required
              type="radio"
              name="skill-four"
              id="skill-four-yes"
              value="Yes"
              onChange={recordSkillFourYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-four"
              id="skill-four-no"
              value="No"
              // onChange={recordSkillFourNo}
            />
            <label>No</label>
            <h3>Handstand flat back</h3>
            <input
              required
              type="radio"
              name="skill-five"
              id="skill-five-yes"
              value="Yes"
              onChange={recordSkillFiveYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-five"
              id="skill-five-no"
              value="No"
              // onChange={recordSkillFiveNo}
            />
            <label>No</label>
            <h3>Full handstand on beam</h3>
            <input
              required
              type="radio"
              name="skill-six"
              id="skill-six-yes"
              value="Yes"
              onChange={recordSkillSixYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-six"
              id="skill-six-no"
              value="No"
              // onChange={recordSkillSixNo}
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
              onChange={recordSkillOneYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-one"
              id="skill-one-no"
              value="No"
              // onChange={recordSkillOneNo}
            />
            <label>No</label>
            <h3>Round off backhandspring</h3>
            <input
              required
              type="radio"
              name="skill-two"
              id="skill-two-yes"
              value="Yes"
              onChange={recordSkillTwoYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-two"
              id="skill-two-no"
              value="No"
              // onChange={recordSkillTwoNo}
            />
            <label>No</label>
            <h3>Front handspring</h3>
            <input
              required
              type="radio"
              name="skill-three"
              id="skill-three-yes"
              value="Yes"
              onChange={recordSkillThreeYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-three"
              id="skill-three-no"
              value="No"
              // onChange={recordSkillThreeNo}
            />
            <label>No</label>
            <h3>Front Tuck</h3>
            <input
              required
              type="radio"
              name="skill-four"
              id="skill-four-yes"
              value="Yes"
              onChange={recordSkillFourYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-four"
              id="skill-four-no"
              value="No"
              // onChange={recordSkillFourNo}
            />
            <label>No</label>
            <h3>Cast back-hipcircle</h3>
            <input
              required
              type="radio"
              name="skill-five"
              id="skill-five-yes"
              value="Yes"
              onChange={recordSkillFiveYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-five"
              id="skill-five-no"
              value="No"
              // onChange={recordSkillFiveNo}
            />
            <label>No</label>
            <h3>HandStand & SideHandstand on beam</h3>
            <input
              required
              type="radio"
              name="skill-six"
              id="skill-six-yes"
              value="Yes"
              onChange={recordSkillSixYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-six"
              id="skill-six-no"
              value="No"
              // onChange={recordSkillSixNo}
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
              onChange={recordSkillOneYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-one"
              id="skill-one-no"
              value="No"
              // onChange={recordSkillOneNo}
            />
            <label>No</label>
            <h3>Dive Rolls</h3>
            <input
              required
              type="radio"
              name="skill-two"
              id="skill-two-yes"
              value="Yes"
              onChange={recordSkillTwoYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-two"
              id="skill-two-no"
              value="No"
              // onChange={recordSkillTwoNo}
            />
            <label>No</label>
            <h3>Floor bar squat-on into a safety stop</h3>
            <input
              required
              type="radio"
              name="skill-three"
              id="skill-three-yes"
              value="Yes"
              onChange={recordSkillThreeYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-three"
              id="skill-three-no"
              value="No"
              // onChange={recordSkillThreeNo}
            />
            <label>No</label>
            <h3>Handstand bridge kick-over</h3>
            <input
              required
              type="radio"
              name="skill-four"
              id="skill-four-yes"
              value="Yes"
              onChange={recordSkillFourYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-four"
              id="skill-four-no"
              value="No"
              // onChange={recordSkillFourNo}
            />
            <label>No</label>
            <h3>Tuck jump onto a vault</h3>
            <input
              required
              type="radio"
              name="skill-five"
              id="skill-five-yes"
              value="Yes"
              onChange={recordSkillFiveYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-five"
              id="skill-five-no"
              value="No"
              // onChange={recordSkillFiveNo}
            />
            <label>No</label>
            <h3>Straight/Tuck/Straddle Jump on trampoline</h3>
            <input
              required
              type="radio"
              name="skill-six"
              id="skill-six-yes"
              value="Yes"
              onChange={recordSkillSixYes}
            />
            <label>Yes</label>
            <input
              required
              type="radio"
              name="skill-six"
              id="skill-six-no"
              value="No"
              // onChange={recordSkillSixNo}
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
    </div>
  );
};

export default RegistrationForm;
