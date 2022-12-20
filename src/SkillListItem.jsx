function SkillListItem({ skills }) {
  return (
    <ul className="padding-0">
      {skills.map((skill, idx) => (
        <li key={idx} className="SkillListItem">
          {skill.name}
          <div className="level">Level {skill.level}</div>
        </li>
      ))}
    </ul>
  );
}

export default SkillListItem;
