import { useState } from "react";

function NewSkillForm({ addSkill }) {
  const [formData, setFormData] = useState({ name: "", level: 1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    addSkill(formData);
    setFormData({ name: "", level: 1 });
  };

  return (
    <form onSubmit={handleSubmit} value="submit" className="NewSkillForm">
      <label>Skill</label>
      <input
        type="text"
        value={formData.name}
        placeholder="New Skill"
        required
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <label>Level</label>
      <select
        value={formData.level}
        onChange={(e) => setFormData({ ...formData, level: e.target.value })}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">ADD SKILL</button>
    </form>
  );
}
export default NewSkillForm;
