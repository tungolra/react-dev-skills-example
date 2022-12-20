import "./styles.css";
import React, { useState } from "react";
import SkillList from "./SkillList";

export default function App() {
  const [skills, setSkill] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 }
  ]);
  function addSkill(skill) {
    setSkill([...skills, skill]);
  }
  return (
    <div className="App">
      <h1 className="teal-text"> React Dev Skills </h1>
      <SkillList skills={skills} addSkill={addSkill} />
    </div>
  );
}
