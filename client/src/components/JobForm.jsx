import { useState } from "react";

function JobForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    status: "pending",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", company: "", location: "", status: "pending" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" className="w-full border p-2 rounded" required />
      <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="w-full border p-2 rounded" required />
      <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="w-full border p-2 rounded" required />
      <select name="status" value={formData.status} onChange={handleChange} className="w-full border p-2 rounded">
        <option value="pending">Pending</option>
        <option value="interview">Interview</option>
        <option value="declined">Declined</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Job</button>
    </form>
  );
}

export default JobForm;
