import React, { useState } from "react";
import axios from "axios";

const CreateJob = ({ onJobAdded }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [thankYouNote, setThankYouNote] = useState("");
  const [loading, setLoading] = useState(false);

  const generateNote = async () => {
    if (!company || !position) {
      alert("Please enter company and position first.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/generate-thankyou",
        {
          company,
          position,
        }
      );
      setThankYouNote(res.data.thankYouNote);
    } catch {
      alert("Failed to generate thank you note.");
    }
    setLoading(false);
  };

  const saveJob = async () => {
    if (!company || !position) {
      alert("Please enter company and position.");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/jobs", {
        company,
        position,
        status: "pending",
        thankYouNote,
      });
      setCompany("");
      setPosition("");
      setThankYouNote("");
      if (onJobAdded) onJobAdded();
      alert("Job saved!");
    } catch {
      alert("Failed to save job.");
    }
    setLoading(false);
  };

  return (
    <form
      className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Add New Job
      </h2>

      <label className="block mb-2 font-medium text-gray-700">Company:</label>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company name"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <label className="block mb-2 font-medium text-gray-700">Position:</label>
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Position"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <label className="block mb-2 font-medium text-gray-700">
        Thank You Note:
      </label>
      <textarea
        value={thankYouNote}
        onChange={(e) => setThankYouNote(e.target.value)}
        placeholder="Your thank you note will appear here..."
        rows="5"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <div className="flex gap-4">
        <button
          type="button"
          onClick={generateNote}
          disabled={loading}
          className="flex-1 bg-purple-600 text-white py-2 rounded hover:bg-purple-700 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Thank You Note"}
        </button>

        <button
          type="button"
          onClick={saveJob}
          disabled={loading}
          className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Job"}
        </button>
      </div>
    </form>
  );
};

export default CreateJob;
