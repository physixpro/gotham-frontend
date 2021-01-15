import axios from "axios";
import React, { useState, useEffect } from "react";

const Evaluation = () => {
  const [evaluations, setEvaluations] = useState([]);

  const [toggleForm,setToggleForm]=useState(false)

  useEffect(() => {
    const fetchEvaluations = async () => {
      const res = await axios.get("https://gotham-backend.herokuapp.com/evaluations");
      setEvaluations(res.data);
    };
    fetchEvaluations();
  }, []);

  const editEvaluation = (e) => {
      setToggleForm(true)
  };

  const deleteEvaluation = (e) => {};

  return (
    <div>
      {toggleForm ? (
          <form>
              {/* value is dynamic; how to identify which evaluation they clicked? 
              
              */}
              <input type="text" name="coach name" placeholder="coach name" /> 
              <input type="text" name=" " placeholder="coach name"/> 
              <input type="text" name="coach name" placeholder="coach name"/> 
          </form>
      ) : evaluations.map((evaluation) => (
        <div key={evaluation._id} className="evaluation-container">
          <p>{evaluation.coachName}</p>
          <p>{evaluation.parentName}</p>
          <p>{evaluation.date}</p>
          <p>{evaluation.athleteName}</p>

          <button onClick={editEvaluation}>Edit</button>
          <button onClick={deleteEvaluation}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Evaluation;
