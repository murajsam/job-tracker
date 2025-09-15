import React from "react";

const JobCard = ({ job, updateStatus, deleteJob }) => {
  const getStatusClass = (status) => {
    if (status === "pending")
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    if (status === "interview")
      return "bg-green-100 text-green-800 border-green-300";
    if (status === "declined") return "bg-red-100 text-red-800 border-red-300";
    return "bg-gray-100 text-gray-800 border-gray-300";
  };

  return (
    <div
      className={`rounded-lg shadow-lg border-2 p-6 ${getStatusClass(
        job.status
      )}`}
    >
      <h3 className="text-xl font-bold text-purple-700 mb-1">{job.company}</h3>
      <p className="text-gray-700 mb-4">{job.position}</p>

      <label className="block text-sm font-medium text-gray-600 mb-2">
        Status:
      </label>
      <select
        value={job.status}
        onChange={(e) => updateStatus(job._id, e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
      >
        <option value="pending">Pending</option>
        <option value="interview">Interview</option>
        <option value="declined">Declined</option>
      </select>

      <label className="block text-sm font-medium text-gray-600 mb-2">
        Thank You Note:
      </label>
      <div className="bg-white p-3 rounded-lg border border-gray-200 text-sm text-gray-800 min-h-[80px] whitespace-pre-line">
        {job.thankYouNote || "No thank you note"}
      </div>

      <button
        onClick={() => deleteJob(job._id)}
        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 mt-4"
      >
        Delete Job
      </button>
    </div>
  );
};

export default JobCard;
