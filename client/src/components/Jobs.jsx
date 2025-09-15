import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";

const Jobs = ({ filter, refresh }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/api/jobs");
        setJobs(res.data);
      } catch {
        alert("Failed to load jobs");
      }
      setLoading(false);
    };

    loadJobs();
  }, [refresh]);

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/jobs/${id}`, {
        status: newStatus,
      });
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job._id === id ? { ...job, status: newStatus } : job
        )
      );
    } catch {
      alert("Failed to update status");
    }
  };

  const deleteJob = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`);
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
    } catch {
      alert("Failed to delete job");
    }
  };

  const filteredJobs =
    filter === "all" ? jobs : jobs.filter((job) => job.status === filter);

  if (loading) {
    return <div className="text-center text-purple-700 mt-8">Loading...</div>;
  }

  if (filteredJobs.length === 0) {
    return <div className="text-center text-gray-500 mt-8">No jobs found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
            updateStatus={updateStatus}
            deleteJob={deleteJob}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
