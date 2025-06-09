import { useState } from "react";
import JobForm from "../components/JobForm";

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs((prev) => [...prev, { ...job, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Job Dashboard</h2>
      <JobForm onSubmit={addJob} />
      <ul className="mt-6 space-y-2">
        {jobs.map((job) => (
          <li key={job.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{job.title}</h3>
            <p>{job.company} — {job.location}</p>
            <p>Status: {job.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
