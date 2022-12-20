import React, { useState } from "react";
import NewSkillForm from "./NewSkillForm";
import SkillListItem from "./SkillListItem";

function SkillList({ skills, addSkill }) {
  return (
    <div>
      <SkillListItem skills={skills} />
      <hr />
      <h2>Add New Skill</h2>
      <NewSkillForm addSkill={addSkill} />
    </div>
  );
}
export default SkillList;
